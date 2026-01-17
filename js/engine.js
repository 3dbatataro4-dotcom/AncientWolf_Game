// js/engine.js
// --- 全局變數 ---
let playerName = "旅人";
let currentPartner = null;
let scriptQueue = [];
let currentScriptIndex = 0;
let dialogueHistory = []; 
let collectedClues = [];
let inventory = [];
let isTyping = false;
let typeSpeed = 30;
let settings = { bgmVol: 0.5, sfxVol: 0.6, fontSize: 20 };
let screenChars = { left: null, center: null, right: null };

// ★ 打字計時器
let typeTimer = null; 
// ★ 新增：點擊冷卻鎖 (防止連點跳過)
let isCooldown = false; 

// --- 初始化音效 ---
window.addEventListener('DOMContentLoaded', () => {
    const clickSfx = document.getElementById('sfx-click');
    if(clickSfx && typeof assets !== 'undefined') clickSfx.src = assets.sfx.click;
});

// --- 動態載入器 ---
function loadCharacterScript(charId, callback) {
    const script = document.createElement('script');
    script.src = `js/stories/routes/${charId}.js`;
    script.onload = () => { console.log(`✅ ${charId} 劇本載入成功`); if (callback) callback(); };
    script.onerror = () => { console.warn(`⚠️ 找不到 ${charId} 的劇本`); if (callback) callback(); };
    document.head.appendChild(script);
}

// --- 系統引擎 ---
function processScript() {
    if (currentScriptIndex >= scriptQueue.length) return;
    const action = scriptQueue[currentScriptIndex];
    const nameTag = document.getElementById('name-tag-box');
    const speakerName = document.getElementById('speaker-name');
    const textField = document.getElementById('dialogue-text');
    const boxOuter = document.getElementById('dialogue-box-inner');

    if (action.type === 'say' || action.type === 'narrate') addToLog(action.name || '', action.text);

    if (action.type === 'choice') { showChoices(action.options); return; }
    
    if (action.type === 'scene') {
        const bg = document.getElementById('scene-bg');
        bg.style.opacity = 0;
        setTimeout(() => {
            bg.style.backgroundImage = `url('${action.bg}')`;
            bg.style.opacity = 1;
            nextDialogue(true);
        }, 500);
    } 
    else if (action.type === 'sprite') {
        updateCharSlot('left', null); updateCharSlot('right', null); updateCharSlot('center', action.char);
        document.documentElement.style.setProperty('--char-theme-color', action.char.nameColor);
        setTimeout(() => nextDialogue(true), 300);
    }
    else if (action.type === 'join') { updateCharSlot(action.pos, action.char); setTimeout(() => nextDialogue(true), 300); }
    else if (action.type === 'leave') { updateCharSlot(action.pos, null); setTimeout(() => nextDialogue(true), 300); }
    else if (action.type === 'hideSprite') { 
        updateCharSlot('left', null); updateCharSlot('center', null); updateCharSlot('right', null); 
        setTimeout(() => nextDialogue(true), 300); 
    } 
    else if (action.type === 'call') { action.func(); }
    else if (action.type === 'say') {
        boxOuter.classList.add('visible');
        nameTag.style.display = 'block';
        nameTag.classList.remove('enter');
        void nameTag.offsetWidth; 
        nameTag.classList.add('enter');
        speakerName.innerText = action.name;
        document.documentElement.style.setProperty('--char-theme-color', action.color || '#c5a059'); 
        highlightSpeaker(action.name);
        textField.innerHTML = '';
        typeWriter(action.text);
    } 
    else if (action.type === 'narrate') {
        boxOuter.classList.add('visible');
        nameTag.style.display = 'none';
        highlightSpeaker(null);
        textField.innerHTML = '';
        typeWriter(action.text);
    } 
    else if (action.type === 'end') {
        showToast(action.text);
        nextDialogue(true);
    }
// ===============================================
    // BGM 播放邏輯 (修正版：修復變數名與ID)
    // ===============================================
    else if (action.type === 'playBgm') {  // ★ 修正1：這裡必須用 action，不能用 step
        const bgmKey = action.name; 
        const bgmUrl = assets.bgm[bgmKey]; 
        const audio = document.getElementById('bgm'); // ★ 修正2：改回對應 index.html 的 id="bgm"

        if (!audio) {
            console.error("找不到 <audio id='bgm'> 標籤，請檢查 index.html");
            nextDialogue();
            return;
        }

        // 如果指令是 'none' 或找不到音樂，則停止播放
        if (bgmKey === 'none' || !bgmUrl) {
            audio.pause();
            audio.currentTime = 0; // 重置進度
        } 
        else {
            // 解碼網址避免編碼差異導致的誤判
            const currentSrc = decodeURIComponent(audio.src);
            const newSrc = decodeURIComponent(bgmUrl);

            // 只有當「網址不同」或「目前是暫停狀態」時才切換
            // 這樣可以避免同一首音樂重新播放導致的卡頓
            if (!currentSrc.includes(newSrc) || audio.paused) {
                audio.src = bgmUrl;
                audio.volume = settings.bgmVol; // ★ 修正3：使用 settings.bgmVol 確保音量設定正確
                
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("自動播放被瀏覽器阻擋 (需玩家互動):", error);
                    });
                }
            }
        }
        
        // 繼續執行下一行腳本
        nextDialogue();
    }
}

// --- 功能函數 ---
function updateCharSlot(pos, char) {
    if (char) { ['left', 'center', 'right'].forEach(p => { if (screenChars[p] && screenChars[p].id === char.id && p !== pos) { updateCharSlot(p, null); } }); }
    const img = document.getElementById(`char-${pos}`);
    if (char) { img.src = char.sprite; img.classList.add('show'); screenChars[pos] = char; } 
    else { img.classList.remove('show'); img.classList.remove('talking'); screenChars[pos] = null; }
}

function highlightSpeaker(name) {
    ['left', 'center', 'right'].forEach(pos => {
        const img = document.getElementById(`char-${pos}`);
        const char = screenChars[pos];
        if (char && char.name === name) { img.classList.add('talking'); } else { img.classList.remove('talking'); }
    });
}

function showMap() {
    const screen = document.getElementById('map-screen');
    const grid = document.getElementById('map-grid-content');
    grid.innerHTML = locations.map(loc => `
        <div class="map-card ${loc.locked ? 'locked' : ''}" 
             onclick="${loc.locked ? `showToast('此區域暫時無法進入')` : `loadLocation('${loc.id}')`}">
            <img src="${loc.img}" loading="lazy">
            <div class="map-label">${loc.name}</div>
        </div>
    `).join('');
    screen.classList.add('active');
}

// --- 地圖跳轉邏輯 ---
window.loadLocation = function(locId) {
    document.getElementById('map-screen').classList.remove('active');
    scriptQueue = [];
    
    const loc = locations.find(l => l.id === locId);
    if (!loc) return;

    scriptQueue.push({ type: 'hideSprite' });
    scriptQueue.push({ type: 'scene', bg: loc.img });
    scriptQueue.push({ type: 'join', char: currentPartner, pos: 'right' }); 
    scriptQueue.push({ type: 'narrate', text: `你們來到了${loc.name}。` });

    const storyObj = window[`Story_${currentPartner.id}`];
    
    // 檢查是否有註冊劇本
    const scriptName = `getScript_${currentPartner.id}_${locId}`;
    
    if (storyObj && storyObj.locations && storyObj.locations[locId]) {
        scriptQueue.push(...storyObj.locations[locId]);
    } else if (typeof window[scriptName] === 'function') {
        window[scriptName]();
        return; 
    } else {
        const genericLines = [
            `「這裡似乎沒什麼特別的。」`,
            `「${loc.name}看起來很安靜，但總覺得有人在看著我們。」`,
            `「這裡的空氣讓人不太舒服。」`
        ];
        const r = Math.floor(Math.random() * genericLines.length);
        scriptQueue.push({ type: 'say', name: currentPartner.name, text: genericLines[r], color: currentPartner.nameColor });
        scriptQueue.push({ type: 'call', func: showMap });
    }
    
    currentScriptIndex = 0;
    processScript();
};

function addItem(id, name, desc, icon) {
    if(!inventory.some(i => i.id === id)) {
        inventory.push({id, name, desc, icon});
        playSound('sfx', assets.sfx.item, false);
        showToast(`獲得道具：${name}`);
        renderInventory();
    }
}
function toggleInventory() { document.getElementById('inventory-modal').classList.toggle('active'); }
function renderInventory() {
    const list = document.getElementById('item-list');
    if(inventory.length === 0) { list.innerHTML = '<p style="color:#aaa; text-align:center; grid-column:1/-1;">背包是空的</p>'; return; }
    list.innerHTML = inventory.map(i => `<div class="item-card" onclick="showToast('${i.desc}')"><span class="item-icon">${i.icon}</span><div class="item-name">${i.name}</div></div>`).join('');
}

function addClue(id, name, desc) {
    if(!collectedClues.some(c => c.id === id)) {
        collectedClues.push({id, name, desc});
        playSound('sfx', assets.sfx.item, false);
        showToast(`獲得線索：${name}`);
        renderNotebook();
    }
}
function toggleNotebook() { document.getElementById('notebook-modal').classList.toggle('active'); }
function renderNotebook() {
    const list = document.getElementById('clue-list');
    if(collectedClues.length === 0) { list.innerHTML = '<p style="color:#aaa; text-align:center; grid-column:1/-1;">暫無線索</p>'; return; }
    list.innerHTML = collectedClues.map(c => `<div class="clue-card"><div class="clue-title">${c.name}</div><div class="clue-desc">${c.desc}</div></div>`).join('');
}

function showToast(msg) {
    const layer = document.getElementById('toast-layer');
    if(!layer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg'; toast.innerText = msg;
    layer.appendChild(toast); setTimeout(() => toast.remove(), 3000);
}

function showChoices(options) {
    const container = document.getElementById('choice-container');
    container.innerHTML = ''; container.style.display = 'flex';
    options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'choice-btn'; btn.innerText = opt.text;
        btn.onclick = (e) => { e.stopPropagation(); makeChoice(opt); };
        container.appendChild(btn);
    });
}
function makeChoice(opt) {
    playSound('sfx', assets.sfx.choice, false);
    document.getElementById('choice-container').style.display = 'none';
    if (opt.consequence && opt.consequence.length > 0) { scriptQueue.splice(currentScriptIndex + 1, 0, ...opt.consequence); }
    nextDialogue(true);
}

function typeWriter(text) {
    if (typeTimer) clearTimeout(typeTimer); // 先清除舊的計時器
    
    // ★ 修正重點：在開始打字前，先將 {player} 替換成全域變數 playerName
    const processedText = text.replace(/{player}/g, playerName);

    let i = 0; 
    isTyping = true;
    const textField = document.getElementById('dialogue-text');
    textField.innerHTML = ''; 
    
    function type() {
        if (!isTyping) return; // 如果被標記為停止，就跳出
        
        // ★ 這裡使用處理過的 processedText 來跑迴圈
        if (i < processedText.length) { 
            textField.innerHTML += processedText.charAt(i); 
            i++; 
            typeTimer = setTimeout(type, typeSpeed); 
        } else { 
            isTyping = false; 
        }
    }
    type();
}

// ★★★ 點擊處理 (優化版：0.2秒冷卻) ★★★
// ★★★ 點擊處理 (優化版：名字替換 + 0.1秒防連點) ★★★
function handleInteraction(e) {
    // 檢查 e 是否存在 (防止程式內部呼叫時報錯)
    // 且忽略系統按鈕與選項按鈕的點擊
    if (e && (e.target.closest('.sys-btn') || e.target.closest('.choice-btn'))) return;

    // ★ 如果處於冷卻時間，完全無視點擊 (防止連點直接跳下一句)
    if (isCooldown) return;

    if (isTyping) { 
        // --- 情況 A：正在打字中 ---
        // 行為：立刻停止打字，並瞬間顯示完整句子
        isTyping = false;
        if (typeTimer) clearTimeout(typeTimer); 
        
        const currentAction = scriptQueue[currentScriptIndex];
        if (currentAction && currentAction.text) {
            // ★ 修正重點：瞬間顯示時，也要替換名字！
            const processedText = currentAction.text.replace(/{player}/g, playerName);
            document.getElementById('dialogue-text').innerHTML = processedText;
        }

        // ★ 觸發冷卻鎖：0.1秒 (100ms) 內禁止再次點擊
        // 這能確保玩家按第一下是「顯示全句」，不會因為手快按兩下而直接跳過
        isCooldown = true;
        setTimeout(() => {
            isCooldown = false;
        }, 100);

    } else { 
        // --- 情況 B：打字已完成 ---
        // 行為：進入下一句 (除非現在有選項視窗擋著)
        if(document.getElementById('choice-container').style.display !== 'flex') {
            nextDialogue(); 
        }
    }
}

function nextDialogue(auto = false) {
    // 傳入 null 防止 handleInteraction 報錯
    if (isTyping && !auto) { handleInteraction(null); return; }
    
    if (!auto) { 
        const clickSfx = document.getElementById('sfx-click'); 
        if (clickSfx) {
             clickSfx.volume = settings.sfxVol; 
             clickSfx.currentTime = 0; 
             clickSfx.play().catch(()=>{}); 
        }
    }
    
    // 清除計時器
    if (typeTimer) clearTimeout(typeTimer);
    
    currentScriptIndex++; 
    processScript();
}

// --- 存檔與讀檔 ---
function saveGame() { 
    const bgElem = document.getElementById('scene-bg');
    const currentBgStyle = bgElem ? bgElem.style.backgroundImage : '';
    const bgmElem = document.getElementById('bgm');
    const currentBgmSrc = bgmElem ? bgmElem.getAttribute('src') : '';

    const data = { 
        index: currentScriptIndex, 
        playerName: playerName, 
        partnerId: currentPartner ? currentPartner.id : null, 
        log: dialogueHistory, 
        screen: screenChars, 
        clues: collectedClues, 
        inv: inventory,
        savedBg: currentBgStyle, 
        savedBgm: currentBgmSrc
    }; 
    localStorage.setItem('wolfGameSave', JSON.stringify(data)); 
    showToast("遊戲與場景狀態已保存！"); 
}

function loadGame(fromMenu = false) {
    const saved = localStorage.getItem('wolfGameSave');
    if (!saved) { if(fromMenu) showToast("沒有存檔！"); return; }
    
    const data = JSON.parse(saved);
    playerName = data.playerName; 
    currentScriptIndex = data.index; 
    dialogueHistory = data.log || []; 
    screenChars = data.screen || { left: null, center: null, right: null }; 
    collectedClues = data.clues || []; 
    inventory = data.inv || []; 
    
    if (data.partnerId) {
        currentPartner = getCharById(data.partnerId);
    }

    renderNotebook(); 
    renderInventory();

    const restoreScene = () => {
        document.getElementById('start-screen').style.display = 'none'; 
        document.getElementById('game-stage').classList.remove('hidden');
        if(fromMenu) toggleMenu();

        if(currentPartner) document.documentElement.style.setProperty('--char-theme-color', currentPartner.nameColor);

        // ★ 補上監聽器 (讀檔用)
        if (!fromMenu) {
            const gameUI = document.getElementById('dialogue-ui');
            gameUI.removeEventListener('click', handleInteraction); 
            gameUI.addEventListener('click', handleInteraction); 
        }

        const bg = document.getElementById('scene-bg');
        if (data.savedBg && bg) {
            bg.style.backgroundImage = data.savedBg;
            bg.style.opacity = 1;
        }

        if (data.savedBgm) playSound('bgm', data.savedBgm, true);

        updateCharSlot('left', screenChars.left); 
        updateCharSlot('center', screenChars.center); 
        updateCharSlot('right', screenChars.right);

        if (dialogueHistory.length > 0) {
            const lastLog = dialogueHistory[dialogueHistory.length - 1];
            document.getElementById('dialogue-box-inner').classList.add('visible');
            document.getElementById('dialogue-text').innerHTML = lastLog.text;
            
            const nameTag = document.getElementById('name-tag-box');
            if (lastLog.name) {
                nameTag.style.display = 'block';
                document.getElementById('speaker-name').innerText = lastLog.name;
            } else {
                nameTag.style.display = 'none';
            }
        }

        if (scriptQueue.length === 0) {
            console.log("讀檔後劇本為空，自動開啟地圖模式");
            scriptQueue = [
                { type: 'narrate', text: '（讀取進度完成，請繼續探索。）' },
                { type: 'call', func: showMap }
            ];
            currentScriptIndex = 0;
            processScript();
        }

        showToast("讀取成功！");
    };

    if (!fromMenu && currentPartner) {
        loadCharacterScript(currentPartner.id, () => {
             restoreScene();
        });
    } else {
        restoreScene();
    }
}

// --- 其他 UI 功能 ---
function toggleMenu() { document.getElementById('menu-modal').classList.toggle('active'); }
function toggleLog() { const l = document.getElementById('log-modal'); l.classList.toggle('active'); if(l.classList.contains('active')) { const c = document.getElementById('log-content'); c.innerHTML = dialogueHistory.map(e => `<div class="log-entry">${e.name?`<div class="log-name">${e.name}</div>`:''}<div class="log-text">${e.text}</div></div>`).join(''); c.scrollTop = c.scrollHeight; } }
function addToLog(name, text) { dialogueHistory.push({ name, text }); }
function updateVolume(t, v) { if(t==='bgm') document.getElementById('bgm').volume = v; else { document.getElementById('sfx').volume = v; document.getElementById('sfx-click').volume = v; } }
function updateFontSize(v) { document.documentElement.style.setProperty('--font-size-base', v + 'px'); }
function getCharById(id) { return characters.find(c => c.id === id); }
function playSound(id, src, loop) { const audio = document.getElementById(id); if(audio.src !== src) audio.src = src; audio.loop = loop; audio.volume = id==='bgm'?settings.bgmVol:settings.sfxVol; audio.play().catch(()=>{}); }

// --- 核心入口函數 ---
function startGame(mode) {
    if (mode === 'new') {
        const inputName = document.getElementById('player-name-input').value.trim();
        if (inputName) playerName = inputName;
        pickPartner();
        
        loadCharacterScript(currentPartner.id, () => {
            document.getElementById('start-screen').classList.add('hidden');
            setTimeout(() => {
                document.getElementById('start-screen').style.display = 'none';
                showRevealScreen();
            }, 500);
        });
    }
}
function pickPartner() {
    const r = Math.floor(Math.random() * characters.length); 
    currentPartner = characters[r];
    document.getElementById('partner-sprite').src = currentPartner.sprite;
}
function showRevealScreen() {
    const s = document.getElementById('reveal-screen');
    s.classList.remove('hidden');
    document.getElementById('partner-name').innerText = currentPartner.name;
    document.getElementById('partner-title').innerText = currentPartner.title;
    document.getElementById('partner-desc').innerText = currentPartner.desc;
    
    document.getElementById('coffin-tint').style.background = currentPartner.color;
    document.getElementById('coffin-glow').style.background = currentPartner.color;
    // 使用 assets 裡的棺材圖
    document.querySelector('.coffin-img').src = assets.bg.coffin;
    
    document.documentElement.style.setProperty('--char-theme-color', currentPartner.nameColor);
    
    playSound('sfx', assets.sfx.reveal, false);
    playSound('bgm', assets.bgm.title, true);
    
    setTimeout(() => {
        document.getElementById('partner-sprite').classList.add('revealed');
        document.getElementById('partner-info').classList.add('show');
    }, 100);
}
function enterGame() {
    document.getElementById('reveal-screen').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('reveal-screen').style.display = 'none';
        document.getElementById('game-stage').classList.remove('hidden');
        const gameUI = document.getElementById('dialogue-ui');
        gameUI.addEventListener('click', handleInteraction); 
        initScript();
    }, 800);
}
function startInvestigation() {
    playSound('bgm', assets.bgm.day, true);
    scriptQueue = [
        { type: 'hideSprite' },
        { type: 'narrate', text: '莊園內部錯綜複雜，現在要去哪裡調查呢？' },
        { type: 'call', func: showMap }
    ];
    currentScriptIndex = 0;
    processScript();
}

let investigationCount = 0; // 調查次數計數器

window.loadLocation = function(locId) {
    document.getElementById('map-screen').classList.remove('active');
    scriptQueue = [];
    
    const loc = locations.find(l => l.id === locId);
    if (!loc) return;

    // 基礎場景切換
    scriptQueue.push({ type: 'hideSprite' });
    scriptQueue.push({ type: 'scene', bg: loc.img });
    scriptQueue.push({ type: 'join', char: currentPartner, pos: 'right' }); 
    scriptQueue.push({ type: 'narrate', text: `你們來到了${loc.name}。` });

    // 載入角色專屬的房間劇情
    const storyObj = window[`Story_${currentPartner.id}`];
    
    if (storyObj && storyObj.locations && storyObj.locations[locId]) {
        scriptQueue.push(...storyObj.locations[locId]);
    } else {
        // 泛用對話 (如果沒寫專屬劇情)
        scriptQueue.push({ type: 'say', name: currentPartner.name, text: `「這裡看起來很普通。」`, color: currentPartner.nameColor });
        scriptQueue.push({ type: 'call', func: showMap });
    }
    
    // ★ 新增邏輯：調查進度推進 ★
    // 每進入一個房間算一次調查 (也可以改成獲得線索才算，這裡先用簡單的房間計數)
    investigationCount++;
    
    // 假設探索 3 個地點後，強制觸發石碑劇情
    if (investigationCount >= 5) {
        // 移除最後一個 'call func: showMap'，改為呼叫石碑劇情
        // 我們從佇列後面找最後一個 call 指令並移除
        for (let i = scriptQueue.length - 1; i >= 0; i--) {
            if (scriptQueue[i].type === 'call') {
                scriptQueue.splice(i, 1);
                break;
            }
        }
        
        scriptQueue.push({ type: 'narrate', text: '突然，大廳方向傳來了一陣騷動……' });
        scriptQueue.push({ type: 'call', func: () => {
            // 載入石碑劇情
            const ruleScript = window.Story_Common.getRuleDiscovery();
            scriptQueue = ruleScript;
            currentScriptIndex = 0;
            processScript();
        }});
    }

    currentScriptIndex = 0;
    processScript();
};

// 檢查存檔狀態
if(localStorage.getItem('wolfGameSave')) { 
    const btn = document.getElementById('load-btn-start'); 
    if(btn) {
        btn.style.color = 'var(--primary-gold)'; 
        btn.style.borderColor = 'var(--primary-gold)'; 
    }
} else { 
    const btn = document.getElementById('load-btn-start');
    if(btn) {
        btn.onclick = () => showToast("沒有找到存檔！"); 
    }
}