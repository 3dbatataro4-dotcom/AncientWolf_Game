// ==========================================
// 檔案：js/stories/common.js
// 描述：Day 0 共通劇情 (群像劇擴充 + 核心角色限定版)
// ==========================================

// ★ UI：全螢幕置中顯示卡牌
function showNightCard(roleTitle, roleColor, roleIcon, roleDesc) {
    const overlay = document.createElement('div');
    overlay.id = 'night-card-overlay';
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background-color: rgba(0,0,0,0.92); z-index: 10000;
        display: flex; flex-direction: column; justify-content: center; align-items: center;
        opacity: 0; transition: opacity 0.5s ease; backdrop-filter: blur(4px);
    `;

    overlay.innerHTML = `
        <div style="
            position: relative; border: 2px solid ${roleColor}; padding: 30px; 
            background: linear-gradient(160deg, #1a1a1a 0%, #2d2d2d 100%); 
            border-radius: 12px; text-align: center; width: 85%; max-width: 400px;
            box-shadow: 0 0 20px ${roleColor}, inset 0 0 50px rgba(0,0,0,0.5);
            animation: cardFloat 3s ease-in-out infinite alternate;
        ">
            <div style="font-size: 5rem; margin-bottom: 15px; text-shadow: 0 0 10px ${roleColor};">${roleIcon}</div>
            <div style="font-size: 2rem; color: ${roleColor}; font-family: 'IM Fell English SC', serif; font-weight: bold; text-transform: uppercase; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 10px; letter-spacing: 1px;">${roleTitle}</div>
            <div style="font-size: 1rem; color: #ccc; font-family: 'Zen Old Mincho', serif; line-height: 1.6; text-align: justify; margin-bottom: 20px;">${roleDesc}</div>
            <div style="font-size: 0.8rem; color: #666; border-top: 1px solid #333; padding-top: 10px; margin-top: 10px; cursor: pointer;">( 點擊任意處繼續 )</div>
        </div>
        <style>@keyframes cardFloat { 0% { transform: translateY(0px); } 100% { transform: translateY(-10px); } }</style>
    `;

    overlay.onclick = function() {
        overlay.style.opacity = '0';
        setTimeout(() => {
            if(overlay.parentNode) overlay.parentNode.removeChild(overlay);
            if(typeof nextDialogue === 'function') nextDialogue(true);
        }, 500);
    };
    document.body.appendChild(overlay);
    requestAnimationFrame(() => { overlay.style.opacity = '1'; });
}

// 確保 Story_Common 物件存在
window.Story_Common = window.Story_Common || {};

// ★ UI：殺人者視角濾鏡 (紅光 + 幻覺文字)
window.Story_Common.setKillerView = function(enable) {
    let overlay = document.getElementById('killer-overlay');
    if (enable) {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'killer-overlay';
            overlay.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(255, 0, 0, 0.3);
                pointer-events: none; z-index: 9000;
                mix-blend-mode: multiply;
                animation: pulseRed 2s infinite;
            `;
            // 幻覺文字容器
            const textContainer = document.createElement('div');
            textContainer.id = 'hallucination-text';
            textContainer.style.cssText = `
                position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                color: rgba(255,0,0,0.8); font-size: 2rem; font-weight: bold;
                text-shadow: 2px 2px 4px black; opacity: 0.5;
            `;
            overlay.appendChild(textContainer);
            
            const style = document.createElement('style');
            style.innerHTML = `@keyframes pulseRed { 0% { background: rgba(255, 0, 0, 0.2); } 50% { background: rgba(255, 0, 0, 0.4); } 100% { background: rgba(255, 0, 0, 0.2); } }`;
            overlay.appendChild(style);
            
            document.body.appendChild(overlay);
            
            // 隨機幻覺文字
            window.killerInterval = setInterval(() => {
                const texts = ["殺...", "血...", "餓...", "獻祭...", "不友善...", "撕碎他們...", "聽話...", "好香..."];
                textContainer.innerText = texts[Math.floor(Math.random() * texts.length)];
                textContainer.style.top = Math.random() * 80 + 10 + '%';
                textContainer.style.left = Math.random() * 80 + 10 + '%';
            }, 1500);
        }
    } else {
        if (overlay) overlay.remove();
        if (window.killerInterval) clearInterval(window.killerInterval);
    }
};

// ★ UI：小女孩偷看 (模糊濾鏡)
window.Story_Common.showBlurryKiller = function() {
    const overlay = document.createElement('div');
    overlay.id = 'blur-overlay';
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: black; z-index: 9999; display: flex; justify-content: center; align-items: center;
    `;
    
    // 模糊的殺人者剪影 (模擬)
    overlay.innerHTML = `
        <div id="blur-target" style="
            width: 300px; height: 500px; background: linear-gradient(to bottom, #333, #000);
            filter: blur(20px); transition: filter 2s ease; border-radius: 50%;
            display: flex; justify-content: center; align-items: center; color: white; font-size: 2rem;
        ">?</div>
        <div style="position: absolute; bottom: 50px; color: #fff; text-align: center;">
            <p>長按畫面聚焦 (鬆手閉眼)</p>
            <p style="font-size: 0.8rem; color: #f00;">警告：聚焦太久會被發現！</p>
        </div>
    `;
    
    const target = overlay.querySelector('#blur-target');
    let blurLevel = 20;
    let timer = null;
    
    // 模擬長按邏輯
    overlay.onmousedown = overlay.ontouchstart = function() {
        timer = setInterval(() => {
            blurLevel -= 1;
            if(blurLevel < 0) blurLevel = 0;
            target.style.filter = `blur(${blurLevel}px)`;
            if(blurLevel < 5) target.innerText = "🐺"; // 看到狼影
        }, 100);
    };
    
    overlay.onmouseup = overlay.ontouchend = function() {
        clearInterval(timer);
        blurLevel = 20;
        target.style.filter = `blur(${blurLevel}px)`;
        target.innerText = "?";
        // 模擬結束偷看
        setTimeout(() => {
            overlay.remove();
            if(typeof nextDialogue === 'function') nextDialogue(true);
        }, 1000);
    };
    
    document.body.appendChild(overlay);
};

// ★ UI：通用夜晚選擇目標 (3D Coverflow 視覺升級版)
window.Story_Common.showNightSelection = function(title, actionText, themeColor, callback, filterFunc) {

    // 1. 準備資料
    const p = currentPartner;
    const targets = characters.filter(char => {
        if (char.id === p.id) return false; // 排除自己
        if (filterFunc && !filterFunc(char)) return false; // 自定義過濾
        return true;
    });

    if (targets.length === 0) {
        if (callback) callback(null);
        return;
    }

    // 2. 建立遮罩與容器
    const overlay = document.createElement('div');
    overlay.id = 'night-selection-overlay';
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: radial-gradient(circle at center, #1a1a1a 0%, #000000 100%);
        z-index: 9500; display: flex; flex-direction: column; align-items: center; justify-content: center;
        font-family: 'Zen Old Mincho', serif; opacity: 0; transition: opacity 0.5s;
        overflow: hidden; user-select: none;
    `;
    
    // 背景氛圍光
    const ambientLight = document.createElement('div');
    ambientLight.style.cssText = `
        position: absolute; width: 100%; height: 100%; top: 0; left: 0;
        background: radial-gradient(circle at 50% 50%, ${themeColor}33 0%, transparent 70%);
        pointer-events: none; z-index: 0;
    `;
    overlay.appendChild(ambientLight);

    // 標題
    const titleEl = document.createElement('h2');
    titleEl.innerHTML = `<span style="border-bottom: 2px solid ${themeColor}; padding-bottom: 10px;">${title}</span>`;
    titleEl.style.cssText = `
        color: ${themeColor}; font-size: 2.5rem; margin-bottom: 20px; z-index: 10;
        text-shadow: 0 0 20px ${themeColor}; letter-spacing: 8px; text-transform: uppercase;
        margin-top: 40px; text-align: center;
    `;
    overlay.appendChild(titleEl);

    // 3. 輪播容器 (3D Stage)
    const carouselContainer = document.createElement('div');
    carouselContainer.style.cssText = `
        position: relative; width: 100%; height: 500px; z-index: 10;
        display: flex; align-items: center; justify-content: center;
        perspective: 1200px; overflow: visible;
    `;
    
    // Track (Center Point)
    const track = document.createElement('div');
    track.style.cssText = `
        position: absolute; top: 50%; left: 50%; width: 0; height: 0;
        transform-style: preserve-3d;
    `;
    carouselContainer.appendChild(track);

    // 4. 渲染卡片
    const cardWidth = 280;
    const cardHeight = 420;
    let currentIndex = Math.floor(targets.length / 2); // 預設選中中間

    targets.forEach((char, index) => {
        const card = document.createElement('div');
        card.className = 'night-card';
        
        // 基本樣式
        card.style.cssText = `
            width: ${cardWidth}px; height: ${cardHeight}px; position: absolute;
            border-radius: 15px; overflow: hidden;
            transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
            cursor: pointer; background: #1a1a1a;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            transform-origin: center center;
            left: 0; top: 0;
        `;

        card.innerHTML = `
            <img src="${char.sprite}" style="width: 100%; height: 100%; object-fit: cover; object-position: top; pointer-events: none;">
            <div class="card-info" style="
                position: absolute; bottom: 0; left: 0; width: 100%; padding: 20px;
                background: linear-gradient(to top, rgba(0,0,0,0.95), transparent);
                text-align: center; transition: opacity 0.3s; opacity: 0;
            ">
                <div style="color: #fff; font-size: 1.5rem; font-weight: bold; text-shadow: 0 2px 4px #000;">${char.name}</div>
                <div style="color: ${themeColor}; font-size: 0.9rem; margin-top: 5px; letter-spacing: 2px; text-transform: uppercase;">${actionText}</div>
            </div>
            <div class="card-overlay" style="
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: #000; opacity: 0.5; transition: opacity 0.5s; pointer-events: none;
            "></div>
        `;

        card.onclick = (e) => {
            e.stopPropagation();
            if (index === currentIndex) {
                // 確認選擇
                if (confirm(`確定要對【${char.name}】${actionText}嗎？`)) {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        cleanup();
                        if (callback) callback(char);
                    }, 500);
                }
            } else {
                // 切換到該卡片
                currentIndex = index;
                updateCarousel();
            }
        };

        track.appendChild(card);
    });

    // 5. 核心邏輯：更新輪播狀態 (Coverflow Effect)
    const updateCarousel = () => {
        const cards = Array.from(track.children);
        
        cards.forEach((card, index) => {
            const offset = index - currentIndex;
            const absOffset = Math.abs(offset);
            
            // 計算 3D 變換
            const x = offset * 200; // 卡片間距
            const scale = index === currentIndex ? 1.1 : Math.max(1 - absOffset * 0.15, 0.6);
            const zIndex = 100 - absOffset;
            const rotateY = index === currentIndex ? 0 : (offset > 0 ? -25 : 25); // 兩側向內旋轉
            const opacity = index === currentIndex ? 1 : Math.max(1 - absOffset * 0.2, 0.3);
            
            // 應用樣式
            card.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${-absOffset * 100}px) rotateY(${rotateY}deg) scale(${scale})`;
            card.style.zIndex = zIndex;
            card.style.opacity = opacity;
            
            const info = card.querySelector('.card-info');
            const overlayDiv = card.querySelector('.card-overlay');
            
            if (index === currentIndex) {
                card.style.filter = `drop-shadow(0 0 30px ${themeColor}66)`;
                card.style.border = `2px solid ${themeColor}`;
                if(info) info.style.opacity = '1';
                if(overlayDiv) overlayDiv.style.opacity = '0';
            } else {
                card.style.filter = `grayscale(100%) brightness(0.5)`;
                card.style.border = `1px solid #333`;
                if(info) info.style.opacity = '0';
                if(overlayDiv) overlayDiv.style.opacity = '0.6';
            }
        });

        // 更新箭頭狀態
        leftArrow.style.opacity = currentIndex === 0 ? '0.2' : '1';
        leftArrow.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        rightArrow.style.opacity = currentIndex === targets.length - 1 ? '0.2' : '1';
        rightArrow.style.pointerEvents = currentIndex === targets.length - 1 ? 'none' : 'auto';
    };

    // 左右箭頭
    const createArrow = (direction) => {
        const btn = document.createElement('div');
        btn.innerHTML = direction === 'left' ? '&#10094;' : '&#10095;';
        btn.style.cssText = `
            position: absolute; ${direction}: 5%; top: 50%; transform: translateY(-50%);
            font-size: 3rem; color: rgba(255,255,255,0.8); cursor: pointer;
            z-index: 200; padding: 20px; border-radius: 50%;
            background: rgba(0,0,0,0.3); transition: all 0.3s;
            display: flex; align-items: center; justify-content: center;
            width: 60px; height: 60px; user-select: none;
        `;
        btn.onmouseover = () => { btn.style.background = themeColor; btn.style.color = '#000'; };
        btn.onmouseout = () => { btn.style.background = 'rgba(0,0,0,0.3)'; btn.style.color = 'rgba(255,255,255,0.8)'; };
        
        btn.onclick = (e) => {
            e.stopPropagation();
            if (direction === 'left' && currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            } else if (direction === 'right' && currentIndex < targets.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        };
        return btn;
    };

    const leftArrow = createArrow('left');
    const rightArrow = createArrow('right');
    overlay.appendChild(leftArrow);
    overlay.appendChild(rightArrow);
    overlay.appendChild(carouselContainer);

    // 鍵盤支援
    const keyHandler = (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else if (e.key === 'ArrowRight' && currentIndex < targets.length - 1) {
            currentIndex++;
            updateCarousel();
        } else if (e.key === 'Enter' || e.key === ' ') {
            const cards = Array.from(track.children);
            if(cards[currentIndex]) cards[currentIndex].click();
        }
    };
    document.addEventListener('keydown', keyHandler);

    // 滑動支援 (Touch Swipe)
    let startX = 0;
    overlay.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive: true});
    overlay.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { // 滑動閾值
            if (diff > 0 && currentIndex < targets.length - 1) {
                currentIndex++; // 向左滑，下一張
            } else if (diff < 0 && currentIndex > 0) {
                currentIndex--; // 向右滑，上一張
            }
            updateCarousel();
        }
    }, {passive: true});

    // 清理函數
    const cleanup = () => {
        document.removeEventListener('keydown', keyHandler);
    };
    
    const originalRemove = overlay.remove.bind(overlay);
    overlay.remove = function() {
        cleanup();
        originalRemove();
    };

    // 操作提示
    const hint = document.createElement('div');
    hint.innerHTML = `
        <div style="margin-top: 20px; color: rgba(255,255,255,0.5); font-size: 0.9rem; letter-spacing: 1px; text-align: center;">
            ← 滑動或點擊箭頭切換 • 點擊中央卡片確認 →
        </div>
    `;
    overlay.appendChild(hint);

    document.body.appendChild(overlay);
    
    // 初始化
    requestAnimationFrame(() => { 
        overlay.style.opacity = '1'; 
        updateCarousel();
    });
};

// ★ 兼容舊代碼 (如果有的話)
window.Story_Common.showKillerSelection = function(callback) {
    window.Story_Common.showNightSelection("選擇獻祭目標", "殺害", "#ff0000", callback);
};

Object.assign(window.Story_Common, {
    // ----------------------------------------------------------------
    // 1. 開場 (Intro)
    // ----------------------------------------------------------------
    getIntro: function() {
        return [
            { type: 'playBgm', name: 'title' },
            { type: 'scene', bg: assets.bg.black },
            { type: 'narrate', text: '「致 {player}：若你渴望改寫命運，請於雷雨之夜，造訪懸崖邊的『賽勒涅』莊園。」' },
            { type: 'narrate', text: '雨越下越大……緊接著——刺耳的煞車聲、失重感……' },
            { type: 'scene', bg: assets.bg.room },
            { type: 'narrate', text: '……滴答。滴答。再睜開眼時，你躺在一張陌生的大床上。' }
        ];
    },

    // ----------------------------------------------------------------
    // 2. 大廳集合 (群像劇版本)
    // ----------------------------------------------------------------
    getDay0HallMeeting: function() {
        const novian = getCharById('novian');
        const lanlan = getCharById('lanlan');
        const jornona = getCharById('jornona');
        const peter = getCharById('peter');
        const lynn = getCharById('lynn');
        const manmu = getCharById('manmu');
        const nuolang = getCharById('nuolang');
        const venator = getCharById('venator');
        const narcissus = getCharById('narcissus');
        const carlota = getCharById('carlota');

        return [
            { type: 'hideSprite' },
            { type: 'scene', bg: assets.bg.hall }, 
            { type: 'playBgm', name: 'serious' },
            { type: 'narrate', text: '大廳裡已經聚集了不少人。窗外雷雨交加，華麗的水晶吊燈在風聲中微微晃動。' },

            // --- 諾維安宣佈噩耗 ---
            { type: 'join', char: novian, pos: 'center' },
            { type: 'say', name: novian.name, text: '「各位……請冷靜一下！我有個非常糟糕的消息……」', color: novian.nameColor },
            { type: 'narrate', text: '這位自稱是船長的紫髮青年，臉上掛著勉強的笑容，眼神裡透著慌亂。' },
            { type: 'say', name: novian.name, text: '「通往外界的唯一一座吊橋，剛剛被落雷擊中……斷了。我們……徹底變成孤島了。哈哈……」', color: novian.nameColor },
            { type: 'leave', pos: 'center' },

            // --- 蘭蘭 & 喬諾娜 (快樂組) ---
            { type: 'join', char: lanlan, pos: 'left' },
            { type: 'join', char: jornona, pos: 'right' },
            { type: 'say', name: lanlan.name, text: '「哇！真的嗎？橋炸了嗎？那火焰一定是青色的吧！超酷的呀！」', color: lanlan.nameColor },
            { type: 'say', name: jornona.name, text: '「蘭蘭！這不是重點！這樣我們就不能去鎮上買最新的櫻桃派了耶！好過分～」', color: jornona.nameColor },
            { type: 'leave', pos: 'left' }, { type: 'leave', pos: 'right' },

            // --- 彼得 & 林恩 (卡陰組) ---
            { type: 'join', char: peter, pos: 'left' },
            { type: 'join', char: lynn, pos: 'right' },
            { type: 'say', name: peter.name, text: '「Shit... 我就說這裡風水不對。這一定是某種邪惡的詛咒！潔廁靈呢？我需要驅邪！」', color: peter.nameColor },
            { type: 'say', name: lynn.name, text: '「哈啊……彼得，安靜點。出不去就出不去吧，正好可以睡個覺。涼拌。」', color: lynn.nameColor },
            { type: 'leave', pos: 'left' }, { type: 'leave', pos: 'right' },

            // --- 小目 & 諾郎 (感官組) ---
            { type: 'join', char: manmu, pos: 'left' },
            { type: 'join', char: nuolang, pos: 'right' },
            { type: 'say', name: manmu.name, text: '「嘖，效率低下的救援機制。諾維安船長，這就是你的待客之道？我每分鐘幾百萬上下的生意怎麼辦？」', color: manmu.nameColor },
            { type: 'say', name: nuolang.name, text: '「……不只是雷擊。空氣裡，有硫磺的味道。還有一種……苦杏仁的氣味？很危險。」', color: nuolang.nameColor },
            { type: 'leave', pos: 'left' }, { type: 'leave', pos: 'right' },

            // --- 維納托 & 納希瑟斯 (主僕/CP組) ---
            { type: 'join', char: venator, pos: 'left' },
            { type: 'join', char: narcissus, pos: 'right' },
            { type: 'say', name: venator.name, text: '「哼，這房間的裝潢真是毫無美感。這種粗魯的意外，根本配不上本天才的格調。」', color: venator.nameColor },
            { type: 'say', name: narcissus.name, text: '「維納托先生說得是。請別生氣，氣壞了身體我會心疼的。」', color: narcissus.nameColor },
            { type: 'leave', pos: 'left' }, { type: 'leave', pos: 'right' },

            // --- 卡洛特 (偽人直覺) ---
            { type: 'join', char: carlota, pos: 'center' },
            { type: 'say', name: carlota.name, text: '「這裡的味道……不友善。非常不友善。」', color: carlota.nameColor },
            { type: 'leave', pos: 'center' },

            // --- 總結 ---
            { type: 'join', char: novian, pos: 'center' },
            { type: 'say', name: novian.name, text: '「總、總之！請大家不要驚慌！我們先在莊園裡四處看看，說不定能找到修理通訊設備的零件！」', color: novian.nameColor },
            { type: 'hideSprite' },
            { type: 'narrate', text: '雖然諾維安這麼說，但每個人心中都蒙上了一層陰影。' },
            { type: 'narrate', text: '必須調查一下這座古堡的秘密。' },
            
            // 進入調查環節
            { type: 'call', func: startInvestigation } 
        ];
    },

    // ----------------------------------------------------------------
    // 3. 發現石碑 (群像劇版本)
    // ----------------------------------------------------------------
    getRuleDiscovery: function() {
        const ola = getCharById('ola');
        const melas = getCharById('melas');
        const costa = getCharById('costa');
        const kleion = getCharById('kleion');
        const philippos = getCharById('philippos');
        const mollie = getCharById('mollie');

        return [
            { type: 'hideSprite' },
            { type: 'scene', bg: assets.bg.hall },
            { type: 'playBgm', name: 'daily_investigation' }, // 切換懸疑音樂
            
            { type: 'narrate', text: '不知何時，大廳中央的地毯被掀開了，露出了一塊刻滿奇異文字的石碑。' },
            
            // --- 神明組 (奧拉 & 蜜拉思) ---
            { type: 'join', char: ola, pos: 'left' },
            { type: 'join', char: melas, pos: 'right' },
            { type: 'say', name: ola.name, text: '「……『蝕月教團』。看來命運的絲線已經糾纏在一起了。」', color: ola.nameColor },
            { type: 'say', name: melas.name, text: '「嘻嘻……有趣的文字。上面說，唯有惡意才是靈魂的本質？這觀點我喜歡。」', color: melas.nameColor },
            { type: 'leave', pos: 'left' }, { type: 'leave', pos: 'right' },
            
            // --- 閱讀規則 (特寫) ---
            { type: 'scene', bg: assets.bg.black },
            { type: 'narrate', text: '石碑上刻著令人毛骨悚然的規則：' },
            { type: 'narrate', text: '『規則一：古堡是活的。每晚，它將選中一人注入「殺意」。』' },
            { type: 'narrate', text: '『規則二：被附身者將在夜間行兇，且日間無記憶。』' },
            { type: 'narrate', text: '『規則三：每日清晨，需選出一名不潔者進行「受洗」。』' },
            { type: 'narrate', text: '『將其沈入充滿黑水的鐵棺之中……』' },
            
            // --- 害怕的科絲塔 & 直男克里昂 ---
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: costa, pos: 'left' },
            { type: 'join', char: kleion, pos: 'right' },
            { type: 'say', name: costa.name, text: '「BATA……受洗？聽起來一點都不好心……小瓜不想被關進棺材裡BATA！」', color: costa.nameColor },
            { type: 'say', name: kleion.name, text: '「從化學角度來看，黑水可能是某種高腐蝕性溶液。沈下去肯定會死，這不叫受洗，叫處刑。」', color: kleion.nameColor },
            { type: 'say', name: costa.name, text: '「嗚……克里昂你這時候可以不要這麼理性嗎？真是奇怪BATA……」', color: costa.nameColor },
            { type: 'leave', pos: 'left' }, { type: 'leave', pos: 'right' },

            // --- 腓力 & 茉莉 ---
            { type: 'join', char: philippos, pos: 'left' },
            { type: 'join', char: mollie, pos: 'right' },
            { type: 'say', name: philippos.name, text: '「少主說得對！這裡有妖氣！我感覺到了……一股很不舒服的氣息！」', color: philippos.nameColor },
            { type: 'say', name: mollie.name, text: '「呼——」茉莉吐出一口菸圈，神情疲憊，「看來又要加班了。希望這次的加班費能付得起我的精神損失。」', color: mollie.nameColor },
            { type: 'leave', pos: 'left' }, { type: 'leave', pos: 'right' },

            // --- 熄燈 ---
            { type: 'hideSprite' },
            { type: 'narrate', text: '就在眾人議論紛紛時——' },
            { type: 'playBgm', name: 'none' }, // 音樂驟停
            { type: 'narrate', text: '啪滋。' },
            { type: 'narrate', text: '大廳的水晶吊燈閃爍了兩下，徹底熄滅了。' },
            { type: 'scene', bg: assets.bg.black },
            { type: 'narrate', text: '黑暗降臨。' },
            
            // 進入入夜
            { type: 'call', func: () => window.Story_Common.triggerNightReveal() }
        ];
    },

    // ----------------------------------------------------------------
    // 4. 入夜與身分揭曉 (核心角色限定版)
    // ----------------------------------------------------------------
    triggerNightReveal: function() {
        const p = currentPartner;
        
        // --- 1. 決定本局兇手 (Day 0 隨機) ---
        const wolfPartners = ['manmu', 'carlota', 'peter'];
        
        if (wolfPartners.includes(p.id)) {
            // 如果搭檔是狼人三人組，玩家就是兇手
            window.nightKillerId = p.id;
            window.isPlayerKiller = true;
        } else {
            // 否則隨機選一個 NPC 被附身 (排除搭檔)
            window.isPlayerKiller = false;
            const potentialKillers = characters.filter(c => c.id !== p.id);
            const randomKiller = potentialKillers[Math.floor(Math.random() * potentialKillers.length)];
            window.nightKillerId = randomKiller.id;
            console.log("本局隨機兇手為:", randomKiller.name);
        }
        
        // --- 預設變數 (平民模板) ---
        let roleTitle = "平民 (Villager)";
        let roleColor = "#fff";
        let roleIcon = "♟️";
        let roleDesc = "【技能】：無特殊能力。你只能依靠推理與選票活下去。";
        let narrative = "搭檔在黑暗中握緊了你的手，掌心微微出汗。";
        let dialogue = "「……聽著，我們只是普通人。但普通人也有普通人的戰鬥方式。」";

        // --- 角色判斷 (只保留核心名單) ---

        // ★ 狼人/殺人者陣營 (被附身/中邪)
        if (p.id === 'manmu') {
            roleTitle = "隱狼 (Hidden Wolf)"; roleColor = "#ff1493"; roleIcon = "👔";
            roleDesc = "【技能】：被查驗顯示為好人。夜晚進入殺人者視角，可選擇目標殺害。";
            narrative = "小目痛苦地扶著額頭，眼中的數據流瘋狂閃爍，西裝被抓出了褶皺。";
            dialogue = "「我的邏輯處理器……出現了未知錯誤。為什麼……我會覺得你們看起來像『獵物』？」";
        } else if (p.id === 'carlota') {
            roleTitle = "狼人 (Werewolf)"; roleColor = "#4b0082"; roleIcon = "🐺";
            roleDesc = "【技能】：夜晚進入殺人者視角，每晚可襲擊一名玩家。";
            narrative = "卡洛特死死摀住嘴，瞳孔劇烈收縮，發出了像野獸般的喘息聲。";
            dialogue = "「好餓……為什麼突然變得這麼餓？這股味道……是血嗎？這不友善……」";
        } else if (p.id === 'peter') {
            roleTitle = "狼王 (Wolf King)"; roleColor = "#8b0000"; roleIcon = "👑";
            roleDesc = "【技能】：夜晚進入殺人者視角。出局時可帶走一人。";
            narrative = "彼得抱著頭蹲在地上，指甲在地板上抓出了痕跡，發出了詭異的笑聲。";
            dialogue = "「聽到了嗎？那個聲音……它在命令我！它說要『獻祭』……滾出我的腦袋！」";
        } else if (p.id === 'james') {
            roleTitle = "狼美人 (Wolf Beauty)"; roleColor = "#00ffff"; roleIcon = "⚡";
            roleDesc = "【技能】：每晚魅惑一人。若你白天被放逐，對方因心碎而殉情。";
            narrative = "小雅各身上的電流失控地劈啪作響，藍髮在靜電中漂浮，眼神迷離。";
            dialogue = "「我控制不住……能量在溢出。我想抱緊誰……如果不釋放出去，我會壞掉的……」";
        } else if (p.id === 'andreas') {
            roleTitle = "子狐 (Fox Child)"; roleColor = "#4169e1"; roleIcon = "🦊";
            roleDesc = "【技能】：需選定一名「榜樣」。若榜樣死亡，你將黑化加入狼人陣營。";
            narrative = "安德烈驚恐地看著自己的機械臂，指示燈閃爍著危險的紅光。";
            dialogue = "「報告！檢測到入侵病毒『Eclipse』。這有點像我哥……中邪的反應。」";

        // ★ 神職陣營
        } else if (p.id === 'philippos') {
            roleTitle = "預言家 (Seer)"; roleColor = "#dc143c"; roleIcon = "🔮";
            roleDesc = "【技能】：每晚查驗一名玩家是否為殺人者（好人/壞人）。";
            narrative = "腓力擺出了防禦架式，眼神變得異常銳利，彷彿穿透了黑暗。";
            dialogue = "「少主說過，這裡有妖氣。我看見了……黑色的霧氣正在吞噬大家。別怕！」";
        } else if (p.id === 'kleion') {
            roleTitle = "魔鏡 (Magic Mirror)"; roleColor = "#ff4500"; roleIcon = "🪞";
            roleDesc = "【技能】：每晚可查驗一名玩家的具體身分職業。";
            narrative = "克里昂拿出小鏡子，眉頭緊鎖。";
            dialogue = "「真相就像化學方程式。讓我看看鏡子裡……映照出了誰的真面目？」";
        } else if (p.id === 'lynn') {
            roleTitle = "守衛 (Guard)"; roleColor = "#9400d3"; roleIcon = "🛡️";
            roleDesc = "【技能】：每晚可守護一名玩家免受襲擊（可守自己）。";
            narrative = "林恩深深嘆了一口氣，看起來像是剛被叫醒加班，慵懶中透著精明。";
            dialogue = "「哈啊……好麻煩。不過為了保護資產，還是得動動手。今晚保險金壓誰身上呢？」";
        } else if (p.id === 'mollie') {
            roleTitle = "女巫 (Witch)"; roleColor = "#ff69b4"; roleIcon = "🧪";
            roleDesc = "【技能】：全程擁有一瓶解藥和一瓶毒藥。可得知今晚死者。";
            narrative = "茉莉優雅地吐出一口菸圈，指間夾著兩瓶顏色詭異的試管。";
            dialogue = "「生與死，都在一念之間。芒果……你想試試這瓶香香的，還是這瓶苦苦的？」";
        } else if (p.id === 'costa') {
            roleTitle = "小女孩 (Little Girl)"; roleColor = "#228b22"; roleIcon = "🫣";
            roleDesc = "【技能】：夜晚可偷看殺人者行動（模糊畫面）。";
            narrative = "科絲塔抱緊了玩偶，瑟瑟發抖地躲在你背後，只敢露出一隻眼睛。";
            dialogue = "「BATA……只要瞇著眼睛偷偷看……就不會被發現了吧？可是哥哥說這樣很危險……」";
        } else if (p.id === 'venator') {
            roleTitle = "獵人 (Hunter)"; roleColor = "#0000ff"; roleIcon = "🔫";
            roleDesc = "【技能】：死後可開槍帶走兩人。";
            narrative = "維納托優雅地掏出左輪手槍，輕輕轉動彈倉，發出清脆的聲響。";
            dialogue = "「哼，這場狩獵誰是獵物還不一定。如果本王倒下了，對面也別想好過。」";
        } else if (p.id === 'narcissus') {
            roleTitle = "天使 (Angel)"; roleColor = "#8a2be2"; roleIcon = "👼";
            roleDesc = "【技能】：若維納托死亡，進入狂暴狀態，每晚隨機殺死一名投票者。";
            narrative = "納希瑟斯眼中的星星閃爍著偏執的光芒，緊緊盯著維納托的方向。";
            dialogue = "「我會保護大家……但如果有人敢傷害維納托先生……我絕對不會原諒他。」";
        } else if (p.id === 'nuolang') {
            roleTitle = "炸彈狂 (Bomber)"; roleColor = "#2f4f4f"; roleIcon = "💣";
            roleDesc = "【技能】：被投票放逐時，可選擇引爆炸彈拉所有人陪葬。";
            narrative = "諾郎神經質地抱著背包，指甲嵌進了掌心，眼神透著同歸於盡的瘋狂。";
            dialogue = "「別、別逼我……如果你們都要逼我……那我乾脆在這裡，跟大家一起爆了算了！」";
        } else if (p.id === 'melas') {
            roleTitle = "魔術師 (Magician)"; roleColor = "#800080"; roleIcon = "🎩";
            roleDesc = "【技能】：每晚可交換兩人的命運（若其中一人死亡，視為另一人死亡）。";
            narrative = "蜜拉思發出令人背脊發涼的低笑，手中把玩著一張撲克牌。";
            dialogue = "「嘻嘻……你相信魔術嗎？今晚，讓我們來玩一個『移花接木』的小把戲吧。」";
        } else if (p.id === 'ola') {
            roleTitle = "吹笛人 (Piper)"; roleColor = "#00bfff"; roleIcon = "🪈";
            roleDesc = "【技能】：每晚吹奏笛子迷惑一名玩家。全員迷惑則獲勝。";
            narrative = "奧拉拿出笛子，神情淡漠，彷彿周圍的恐懼與他無關。";
            dialogue = "「命運的絲線太吵雜。只要讓他們都沉醉在我的樂曲中……世界就會安靜了。」";
        } else if (p.id === 'novian') {
            roleTitle = "村長 (Mayor)"; roleColor = "#00ced1"; roleIcon = "⚖️";
            roleDesc = "【技能】：白天投票權重+1 (前兩票)。";
            narrative = "諾維安深吸一口氣，強壓下慌亂，整理了一下那頂象徵船長的帽子。";
            dialogue = "「我是船長...也是負責人。我有責任維持秩序。請相信我，我們能找出兇手的！」";

        // ★ 中立/平民特色陣營 (核心)
        } else if (p.id === 'lanlan') {
            roleTitle = "縱火狂 (Arsonist)"; roleColor = "#00ced1"; roleIcon = "🔥";
            roleDesc = "【技能】：若夜晚被殺人者選中，將反燒兇手並得知其真面目。";
            narrative = "蘭蘭興奮地搓著手，指尖冒出一簇幽幽的青色火苗。";
            dialogue = "「哇！這古堡太陰暗了！我們是不是可以點個火？一定很酷呀！」";
        } else if (p.id === 'jornona') {
            roleTitle = "女僕 (Maid)"; roleColor = "#ff69b4"; roleIcon = "🎀";
            roleDesc = "【技能】：與蘭蘭綁定。若蘭蘭是兇手則為共犯，否則協助縱火。";
            narrative = "喬諾娜堅定地站在蘭蘭身邊，雖然有些害怕，但為了戀人義無反顧。";
            dialogue = "「既然蘭蘭想玩火，那我就負責潑油吧！只要是為了蘭蘭，做什麼都可以喔～」";
        }
        
        // ----------------------------------------------------
        // 5. 構建劇情演出
        // ----------------------------------------------------
        let nightScript = [
            { type: 'playBgm', name: 'wolf' }, // 播放緊張音樂
            { type: 'scene', bg: assets.bg.black },
            { type: 'narrate', text: '古堡的鐘聲敲響了十二下。空氣變得黏稠而冰冷。' },
            
            // 敘述與台詞
            { type: 'narrate', text: narrative }, 
            { type: 'sprite', char: p }, 
            { type: 'say', name: p.name, text: dialogue, color: p.nameColor },
            { type: 'hideSprite' },
            
            // 顯示卡牌
            { type: 'call', func: () => showNightCard(roleTitle, roleColor, roleIcon, roleDesc) },
            { type: 'call', func: () => window.Story_Common.startNightAction() }
        ];

        // 插入隊列執行
        scriptQueue = scriptQueue.concat(nightScript);
        nextDialogue(true);
    },

    // ----------------------------------------------------------------
    // 5. 夜晚行動 (根據角色分歧)
    // ----------------------------------------------------------------
    startNightAction: function() {
        const p = currentPartner;
        if (!p) return; // 安全檢查

        let script = [];
        
        // 共通夜晚場景
        script.push({ type: 'scene', bg: assets.bg.black });
        
        // 確保 isPlayerKiller 有值 (防止讀檔後變數遺失導致神職無法行動)
        if (typeof window.isPlayerKiller === 'undefined') {
            const wolfPartners = ['manmu', 'carlota', 'peter'];
            window.isPlayerKiller = wolfPartners.includes(p.id);
        }

        // --- 殺人者視角 (如果玩家是兇手) ---
        if (window.isPlayerKiller) {
            script.push({ type: 'call', func: () => { window.Story_Common.setKillerView(true); nextDialogue(true); } });
            script.push({ type: 'playBgm', name: 'wolf' });
            script.push({ type: 'narrate', text: '眼前的世界變成了一片猩紅……耳邊傳來了無法抗拒的低語。' });
            script.push({ type: 'say', name: '？？？', text: '「殺了他們……獻祭……」', color: '#ff0000' });
            
            // 呼叫殺人選擇 UI
            script.push({ type: 'call', func: () => {
                window.Story_Common.showNightSelection("選擇獻祭目標", "殺害", "#ff0000", (target) => {
                    // 選擇後的劇情
                    let postKillScript = [
                        { type: 'narrate', text: `你悄悄接近了 ${target.name} 的房間……手中的利刃閃著寒光。` },
                        { type: 'narrate', text: '鮮血……這就是今晚的祭品。' },
                        { type: 'call', func: () => { window.Story_Common.setKillerView(false); nextDialogue(true); } },
                        { type: 'narrate', text: '夜色漸深，古堡陷入了死寂……' },
                        { type: 'end', text: 'Night Phase Complete (Demo)' }
                    ];
                    scriptQueue.splice(currentScriptIndex + 1, 0, ...postKillScript);
                    nextDialogue(true);
                });
            }});
        } 
        // --- 好人視角 ---
        else {
            script.push({ type: 'playBgm', name: 'sneaky' });
            
            // 1. 預言家 (腓力)
            if (p.id === 'philippos') {
                script.push({ type: 'narrate', text: '腓力警惕地盯著黑暗，鼻子微微聳動。' });
                script.push({ type: 'say', name: '腓力', text: '「少主，我覺得那個人很可疑。要不要去查查？」', color: '#dc143c' });
                script.push({ type: 'choice', options: [
                    { text: "發動技能：查驗", consequence: [{ type: 'call', func: () => {
                        window.Story_Common.showNightSelection("查驗身分", "查驗", "#dc143c", (target) => {
                            if (!target) return; // 防止取消或無目標時報錯
                            // 查驗邏輯：只有當目標是本局兇手時，才顯示為惡意
                            // 特例：小目 (隱狼) 即使是兇手，查驗結果也是好人
                            let isBad = (target.id === window.nightKillerId);
                            
                            if (target.id === 'manmu') {
                                isBad = false; // 隱狼技能：被查驗顯示為好人
                            }

                            const resultText = isBad ? "這股氣息……是【惡意】！他是殺手！" : "這股氣息很乾淨，他是【好人】。";

                            let resultScript = [
                                { type: 'scene', bg: assets.bg.black },
                                { type: 'sprite', char: p },
                                { type: 'say', name: '腓力', text: `「我看清了！${target.name}……${resultText}」`, color: '#dc143c' },
                                { type: 'narrate', text: '夜色漸深，古堡陷入了死寂……' },
                                { type: 'end', text: 'Night Phase Complete (Demo)' }
                            ];
                            scriptQueue.splice(currentScriptIndex + 1, 0, ...resultScript);
                            nextDialogue(true);
                        });
                    }}]},
                    { text: "休息", consequence: [{ type: 'narrate', text: '今晚還是保存體力吧……' }, { type: 'end', text: 'Night Phase Complete (Demo)' }] }
                ]});
            }
            // 2. 魔鏡 (克里昂)
            else if (p.id === 'kleion') {
                script.push({ type: 'narrate', text: '克里昂拿出了隨身攜帶的小鏡子，擦拭著鏡面。' });
                script.push({ type: 'say', name: '克里昂', text: '「只要分析光譜折射，就能還原真相。你想看誰的本質？」', color: '#ff4500' });
                script.push({ type: 'choice', options: [
                    { text: "發動技能：照骨", consequence: [{ type: 'call', func: () => {
                        window.Story_Common.showNightSelection("魔鏡查驗", "分析", "#ff4500", (target) => {
                            if (!target) return;
                            // 魔鏡邏輯：顯示具體身分
                            // 如果是狼人三人組，若非兇手則顯示為村民
                            // 如果是普通人被附身，顯示原職業 + (被附身)
                            
                            let identity = target.title;
                            const isKiller = (target.id === window.nightKillerId);

                            if (['manmu', 'carlota', 'peter'].includes(target.id)) {
                                if (!isKiller) {
                                    identity = "Villager (Ordinary)"; // 沒被附身就是普通村民
                                } else {
                                    // 保持原有的狼人稱號 (Hidden Wolf / Werewolf / Wolf King)
                                }
                            } else {
                                if (isKiller) {
                                    identity += " (Possessed)"; // 普通人被附身
                                }
                            }

                            let resultScript = [
                                { type: 'scene', bg: assets.bg.black },
                                { type: 'sprite', char: p },
                                { type: 'say', name: '克里昂', text: `「分析完畢。${target.name} 的真實身分是……【${identity}】。」`, color: '#ff4500' },
                                { type: 'narrate', text: '夜色漸深，古堡陷入了死寂……' },
                                { type: 'end', text: 'Night Phase Complete (Demo)' }
                            ];
                            scriptQueue.splice(currentScriptIndex + 1, 0, ...resultScript);
                            nextDialogue(true);
                        });
                    }}]},
                    { text: "休息", consequence: [{ type: 'narrate', text: '今晚鏡子也累了……' }, { type: 'end', text: 'Night Phase Complete (Demo)' }] }
                ]});
            }
            // 3. 守衛 (林恩)
            else if (p.id === 'lynn') {
                script.push({ type: 'narrate', text: '林恩打了個哈欠，手裡拿著算盤。' });
                script.push({ type: 'say', name: '林恩', text: '「今晚要保誰？這可是要收費的……算了，記帳上。」', color: '#9400d3' });
                script.push({ type: 'choice', options: [
                    { text: "發動技能：守護", consequence: [{ type: 'call', func: () => {
                        window.Story_Common.showNightSelection("選擇守護對象", "守護", "#9400d3", (target) => {
                            if (!target) return;
                            let resultScript = [
                                { type: 'narrate', text: `林恩嘆了口氣，決定今晚守在 ${target.name} 的門口。` },
                                { type: 'say', name: '林恩', text: '「這筆加班費我一定會討回來的。涼拌。」', color: '#9400d3' },
                                { type: 'end', text: 'Night Phase Complete (Demo)' }
                            ];
                            scriptQueue.splice(currentScriptIndex + 1, 0, ...resultScript);
                            nextDialogue(true);
                        }); // 守衛可以守自己，所以不傳 filter
                    }}]},
                    { text: "睡覺", consequence: [{ type: 'narrate', text: '林恩決定還是睡覺比較重要。' }, { type: 'end', text: 'Night Phase Complete (Demo)' }] }
                ]});
            }
            // 4. 女巫 (茉莉)
            else if (p.id === 'mollie') {
                // 初始化藥水狀態 (如果尚未初始化)
                if (!window.witchPotions) {
                    window.witchPotions = { white: true, black: true };
                }

                // 模擬 NPC 殺人者的選擇 (如果尚未決定受害者)
                if (!window.nightVictimId) {
                    // 排除殺人者自己和女巫(假設女巫不能自救)
                    const potentialVictims = characters.filter(c => c.id !== window.nightKillerId && c.id !== 'mollie');
                    if (potentialVictims.length > 0) {
                        const victim = potentialVictims[Math.floor(Math.random() * potentialVictims.length)];
                        window.nightVictimId = victim.id;
                        console.log("Tonight's victim (Simulated):", victim.name);
                    }
                }
                
                script.push({ type: 'narrate', text: '茉莉拿出了兩瓶藥水，眼神慵懶地掃視著水晶球。' });
                script.push({ type: 'say', name: '茉莉', text: '「今晚是誰倒楣呢？還是說……我想讓誰倒楣？」', color: '#ff69b4' });
                
                script.push({ type: 'call', func: () => {
                    window.Story_Common.showNightSelection("選擇查看對象", "查看", "#ff69b4", (target) => {
                        if (!target) return;
                        let isDying = (target.id === window.nightVictimId);
                        let subScript = [];
                        
                        subScript.push({ type: 'scene', bg: assets.bg.black });
                        subScript.push({ type: 'sprite', char: p });

                        if (isDying) {
                            subScript.push({ type: 'say', name: '茉莉', text: `「哎呀……水晶球顯示【${target.name}】今晚會死喔。真可憐。」`, color: '#ff69b4' });
                            
                            let options = [];
                            // 白藥選項
                            if (window.witchPotions.white) {
                                options.push({ 
                                    text: "使用白藥 (救活)", 
                                    consequence: [
                                        { type: 'call', func: () => { 
                                            window.witchPotions.white = false; 
                                            window.nightVictimId = null; // 救活了
                                            console.log("Witch used White Potion.");
                                        }},
                                        { type: 'say', name: '茉莉', text: '「算了，救他一次吧。記得讓他付醫藥費。」', color: '#ff69b4' },
                                        { type: 'narrate', text: '茉莉將白色的藥水灑向了虛空，水晶球中的血色淡去了。' },
                                        { type: 'end', text: 'Night Phase Complete (Demo)' }
                                    ]
                                });
                            } else {
                                subScript.push({ type: 'narrate', text: '（你的白藥已經用完了）' });
                            }
                            
                            options.push({ 
                                text: "什麼都不做", 
                                consequence: [
                                    { type: 'say', name: '茉莉', text: '「生死有命。我也很累，不想加班。」', color: '#ff69b4' }, 
                                    { type: 'end', text: 'Night Phase Complete (Demo)' }
                                ]
                            });
                            
                            subScript.push({ type: 'choice', options: options });

                        } else {
                            subScript.push({ type: 'say', name: '茉莉', text: `「【${target.name}】今晚很安全。真無聊。」`, color: '#ff69b4' });
                            
                            let options = [];
                            // 黑藥選項
                            if (window.witchPotions.black) {
                                options.push({ 
                                    text: "使用黑藥 (毒殺)", 
                                    consequence: [
                                        { type: 'call', func: () => { 
                                            window.witchPotions.black = false; 
                                            window.witchPoisonTargetId = target.id; // 記錄毒殺對象
                                            console.log("Witch used Black Potion on:", target.name);
                                        }},
                                        { type: 'say', name: '茉莉', text: '「既然這麼無聊，不如讓他睡得更沉一點吧？嘻嘻。」', color: '#ff69b4' },
                                        { type: 'narrate', text: '茉莉將黑色的藥水滴入了水晶球的倒影中。' },
                                        { type: 'end', text: 'Night Phase Complete (Demo)' }
                                    ]
                                });
                            } else {
                                subScript.push({ type: 'narrate', text: '（你的毒藥已經用完了）' });
                            }

                            options.push({ 
                                text: "什麼都不做", 
                                consequence: [
                                    { type: 'say', name: '茉莉', text: '「算了，睡覺比較重要。」', color: '#ff69b4' }, 
                                    { type: 'end', text: 'Night Phase Complete (Demo)' }
                                ]
                            });

                            subScript.push({ type: 'choice', options: options });
                        }

                        scriptQueue.splice(currentScriptIndex + 1, 0, ...subScript);
                        nextDialogue(true);
                    });
                }});
            }
            // 5. 小女孩 (科絲塔)
            else if (p.id === 'costa') {
                script.push({ type: 'narrate', text: '科絲塔躲在門縫後，心臟怦怦直跳。' });
                script.push({ type: 'say', name: '科絲塔', text: '「BATA……外面有聲音。要偷看嗎？」', color: '#228b22' });
                script.push({ type: 'choice', options: [
                    { text: "偷看 (高風險)", consequence: [
                        { type: 'call', func: () => window.Story_Common.showBlurryKiller() },
                        { type: 'narrate', text: '你趕緊縮回了頭，心跳快得像要蹦出來。' },
                        { type: 'end', text: 'Night Phase Complete (Demo)' }
                    ]},
                    { text: "睡覺", consequence: [{ type: 'narrate', text: '還是躲在被子裡比較安全……' }, { type: 'end', text: 'Night Phase Complete (Demo)' }] }
                ]});
            }
            // 6. 縱火狂 (蘭蘭) & 女僕 (喬諾娜)
            else if (p.id === 'lanlan' || p.id === 'jornona') {
                script.push({ type: 'narrate', text: '蘭蘭手裡把玩著打火機，喬諾娜提著一桶油站在旁邊。' });
                script.push({ type: 'say', name: '蘭蘭', text: '「如果有人敢來殺我們，就燒死他呀！」', color: '#00ced1' });
                script.push({ type: 'say', name: '喬諾娜', text: '「沒錯～來一個燒一個，來兩個燒一雙！」', color: '#ff69b4' });
                script.push({ type: 'narrate', text: '今晚似乎沒有人來襲擊你們。' });
                script.push({ type: 'end', text: 'Night Phase Complete (Demo)' });
            }
            // 7. 吹笛人 (奧拉)
            else if (p.id === 'ola') {
                script.push({ type: 'narrate', text: '奧拉拿起了笛子。' });
                script.push({ type: 'call', func: () => {
                    window.Story_Common.showNightSelection("選擇迷惑對象", "吹奏", "#00bfff", (target) => {
                        if (!target) return;
                        let resultScript = [
                            { type: 'narrate', text: `詭異而悠揚的笛聲飄向了 ${target.name} 的房間……` },
                            { type: 'say', name: '奧拉', text: '「沉睡吧……在旋律中遺忘自我。」', color: '#00bfff' },
                            { type: 'end', text: 'Night Phase Complete (Demo)' }
                        ];
                        scriptQueue.splice(currentScriptIndex + 1, 0, ...resultScript);
                        nextDialogue(true);
                    });
                }});
            }
            // 8. 狼美人 (小雅各)
            else if (p.id === 'james') {
                script.push({ type: 'narrate', text: '小雅各身上的電流不安地跳動著。' });
                script.push({ type: 'call', func: () => {
                    window.Story_Common.showNightSelection("選擇魅惑對象", "魅惑", "#00ffff", (target) => {
                        if (!target) return;
                        let resultScript = [
                            { type: 'narrate', text: `粉紅色的電流悄悄連接到了 ${target.name} 的身上……` },
                            { type: 'say', name: '小雅各', text: '「不要離開我……如果我死了，你也要陪我喔……」', color: '#00ffff' },
                            { type: 'end', text: 'Night Phase Complete (Demo)' }
                        ];
                        scriptQueue.splice(currentScriptIndex + 1, 0, ...resultScript);
                        nextDialogue(true);
                    });
                }});
            }
            // 9. 魔術師 (蜜拉思)
            else if (p.id === 'melas') {
                script.push({ type: 'narrate', text: '蜜拉思洗著手中的撲克牌，眼神玩味。' });
                script.push({ type: 'say', name: '蜜拉思', text: '「今晚要交換哪兩隻小老鼠的命運呢？」', color: '#800080' });
                script.push({ type: 'call', func: () => {
                    // 第一次選擇
                    window.Story_Common.showNightSelection("選擇交換目標 A", "標記", "#800080", (targetA) => {
                        if (!targetA) return;
                        // 第二次選擇
                        setTimeout(() => {
                            window.Story_Common.showNightSelection("選擇交換目標 B", "交換", "#800080", (targetB) => {
                                if (!targetB) return;
                                let resultScript = [
                                    { type: 'narrate', text: `蜜拉思將 ${targetA.name} 和 ${targetB.name} 的卡牌互換了位置。` },
                                    { type: 'say', name: '蜜拉思', text: '「嘻嘻……魔術開始了。」', color: '#800080' },
                                    { type: 'end', text: 'Night Phase Complete (Demo)' }
                                ];
                                scriptQueue.splice(currentScriptIndex + 1, 0, ...resultScript);
                                nextDialogue(true);
                            }, (c) => c.id !== targetA.id); // 排除已選的A
                        }, 100);
                    });
                }});
            }
            // 10. 子狐 (安德烈)
            else if (p.id === 'andreas') {
                if (!window.andreasModel) {
                    script.push({ type: 'say', name: '安德烈', text: '「報告！系統初始化。需設定『行為邏輯榜樣』。」', color: '#4169e1' });
                    script.push({ type: 'choice', options: [
                        { text: "榜樣：彼得 (哥哥)", consequence: [{ type: 'call', func: () => { window.andreasModel = 'peter'; nextDialogue(true); }}] },
                        { text: "榜樣：小雅各 (觀察對象)", consequence: [{ type: 'call', func: () => { window.andreasModel = 'james'; nextDialogue(true); }}] }
                    ]});
                    script.push({ type: 'say', name: '安德烈', text: '「設定完成。將持續監測榜樣生命體徵。若榜樣停止運作，系統將執行『黑化協議』。」', color: '#4169e1' });
                } else {
                    script.push({ type: 'say', name: '安德烈', text: `「監測中……榜樣 (${window.andreasModel}) 生命體徵正常。」`, color: '#4169e1' });
                }
                script.push({ type: 'end', text: 'Night Phase Complete (Demo)' });
            }
            // 其他角色 (炸彈狂、獵人、天使、村長) - 被動或無夜間主動技
            else {
                script.push({ type: 'narrate', text: '今晚，你選擇靜觀其變，等待命運的安排。' });
                script.push({ type: 'end', text: 'Night Phase Complete (Demo)' });
            }
        }
        
        // 執行腳本
        scriptQueue = scriptQueue.concat(script);
        nextDialogue(true);
    }
});
