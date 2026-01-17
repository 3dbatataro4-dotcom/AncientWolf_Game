// ==========================================
// 檔案：js/story.js
// 描述：劇本流程式控制制中心 (已更新支援動態劇本)
// ==========================================

function initScript() {
    console.log(`[Story] 初始化劇情，當前搭檔：${currentPartner.name} (${currentPartner.id})`);

    // 1. 初始化環境
    if (typeof playSound === 'function') {
        playSound('bgm', assets.bgm.title, true);
    }
    
    scriptQueue = [];
    currentScriptIndex = 0;

    // 2. 載入共通開場 (來自 common.js)
    // 檢查 Story_Common 是否存在，避免報錯
    if (window.Story_Common && typeof window.Story_Common.getIntro === 'function') {
        scriptQueue = scriptQueue.concat(window.Story_Common.getIntro());
    } else {
        console.error("❌ 錯誤：找不到 Story_Common。請確保 index.html 已引入 js/stories/common.js");
        scriptQueue.push({ type: 'narrate', text: '（系統提示：缺少共通劇情檔案 common.js，請檢查程式碼引用。）' });
    }

    // 3. 設置「動態載入角色劇本」的斷點
    // 當共通開場播放完畢後，引擎會執行這個 call 指令
    scriptQueue.push({
        type: 'call',
        func: () => {
            loadPartnerPrologue(currentPartner.id);
        }
    });

    // 4. 啟動引擎，開始播放共通開場
    processScript();
}

// 輔助函式：載入並執行角色序章
function loadPartnerPrologue(charId) {
    console.log(`[Story] 正在載入角色劇本：${charId}...`);
    
    // 使用 engine.js 的動態載入器
    loadCharacterScript(charId, () => {
        // 取得載入後的劇本物件 (例如 window.Story_narcissus)
        const charStory = window[`Story_${charId}`];
        
        if (charStory && charStory.prologue) {
            console.log(`[Story] ${charId} 劇本載入成功，開始播放。`);
            
            // 1. 取得角色專屬序章
            let newEvents = charStory.prologue;

            // 2. 自動接續 Day0 大廳集合劇情 (如果角色劇本沒寫的話)
            // 這樣寫劇本時不用每次都手動 call 大廳
            if (window.Story_Common && window.Story_Common.getDay0HallMeeting) {
                 newEvents = newEvents.concat(window.Story_Common.getDay0HallMeeting());
            }

            // 3. 將新劇情插入佇列
            // 因為我們現在停在 'call' 指令上，直接把新劇情接在後面
            scriptQueue = scriptQueue.concat(newEvents);
            
            // 4. 手動推進一行並繼續執行 (跳過當前的 call 指令)
            currentScriptIndex++;
            processScript();

        } else {
            console.warn(`⚠️ 警告：找不到 ${charId} 的 prologue 定義。`);
            // 如果沒寫劇情，直接跳轉調查模式，避免卡死
            scriptQueue.push({ type: 'narrate', text: `（${currentPartner.name} 的個人劇情尚未實裝，直接進入調查模式。）` });
            scriptQueue.push({ type: 'call', func: startInvestigation });
            currentScriptIndex++;
            processScript();
        }
    });
}

// 為了相容性保留的空函式
function addPartnerScript(id) {}