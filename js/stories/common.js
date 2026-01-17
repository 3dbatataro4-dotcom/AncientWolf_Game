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

window.Story_Common = {
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
        // 預先取得角色物件
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
            roleDesc = "【技能】：被查驗顯示為好人。你被惡意侵蝕，邏輯核心混亂。";
            narrative = "小目痛苦地扶著額頭，眼中的數據流瘋狂閃爍，西裝被抓出了褶皺。";
            dialogue = "「我的邏輯處理器……出現了未知錯誤。為什麼……我會覺得你們看起來像『獵物』？」";
        } else if (p.id === 'carlota') {
            roleTitle = "狼人 (Werewolf)"; roleColor = "#4b0082"; roleIcon = "🐺";
            roleDesc = "【技能】：每晚可襲擊一名玩家。古堡的惡意正在喚醒狩獵本能。";
            narrative = "卡洛特死死摀住嘴，瞳孔劇烈收縮，發出了像野獸般的喘息聲。";
            dialogue = "「好餓……為什麼突然變得這麼餓？這股味道……是血嗎？這不友善……」";
        } else if (p.id === 'peter') {
            roleTitle = "狼王 (Wolf King)"; roleColor = "#8b0000"; roleIcon = "👑";
            roleDesc = "【技能】：出局時可帶走一人。你是被惡意侵蝕最深的人。";
            narrative = "彼得抱著頭蹲在地上，指甲在地板上抓出了痕跡，發出了詭異的笑聲。";
            dialogue = "「聽到了嗎？那個聲音……它在命令我！它說要『獻祭』……滾出我的腦袋！」";
        } else if (p.id === 'james') {
            roleTitle = "狼美人 (Wolf Beauty)"; roleColor = "#00ffff"; roleIcon = "⚡";
            roleDesc = "【技能】：每晚魅惑一人。若你死亡，對方殉情。";
            narrative = "小雅各身上的電流失控地劈啪作響，藍髮在靜電中漂浮，眼神迷離。";
            dialogue = "「我控制不住……能量在溢出。我想抱緊誰……如果不釋放出去，我會壞掉的……」";
        } else if (p.id === 'andreas') {
            roleTitle = "子狐 (Fox Child)"; roleColor = "#4169e1"; roleIcon = "🦊";
            roleDesc = "【技能】：若榜樣死亡，你會因崩潰而黑化繼承殺意。";
            narrative = "安德烈驚恐地看著自己的機械臂，指示燈閃爍著危險的紅光。";
            dialogue = "「報告！檢測到入侵病毒『Eclipse』。這有點像我哥……中邪的反應。」";

        // ★ 神職陣營
        } else if (p.id === 'philippos') {
            roleTitle = "預言家 (Seer)"; roleColor = "#dc143c"; roleIcon = "🔮";
            roleDesc = "【技能】：每晚查驗一人身分。";
            narrative = "腓力擺出了防禦架式，眼神變得異常銳利，彷彿穿透了黑暗。";
            dialogue = "「少主說過，這裡有妖氣。我看見了……黑色的霧氣正在吞噬大家。別怕！」";
        } else if (p.id === 'kleion') {
            roleTitle = "魔鏡 (Magic Mirror)"; roleColor = "#ff4500"; roleIcon = "🪞";
            roleDesc = "【技能】：每晚可查驗一名玩家的具體身分。";
            narrative = "克里昂拿出小鏡子，眉頭緊鎖。";
            dialogue = "「真相就像化學方程式。讓我看看鏡子裡……映照出了誰的真面目？」";
        } else if (p.id === 'lynn') {
            roleTitle = "守衛 (Guard)"; roleColor = "#9400d3"; roleIcon = "🛡️";
            roleDesc = "【技能】：每晚可守護一名玩家免受襲擊。";
            narrative = "林恩深深嘆了一口氣，看起來像是剛被叫醒加班，慵懶中透著精明。";
            dialogue = "「哈啊……好麻煩。不過為了保護資產，還是得動動手。今晚保險金壓誰身上呢？」";
        } else if (p.id === 'mollie') {
            roleTitle = "女巫 (Witch)"; roleColor = "#ff69b4"; roleIcon = "🧪";
            roleDesc = "【技能】：擁有一瓶解藥和一瓶毒藥。";
            narrative = "茉莉優雅地吐出一口菸圈，指間夾著兩瓶顏色詭異的試管。";
            dialogue = "「生與死，都在一念之間。芒果……你想試試這瓶香香的，還是這瓶苦苦的？」";
        } else if (p.id === 'costa') {
            roleTitle = "小女孩 (Little Girl)"; roleColor = "#228b22"; roleIcon = "🫣";
            roleDesc = "【技能】：夜晚可偷看殺人者行動。";
            narrative = "科絲塔抱緊了玩偶，瑟瑟發抖地躲在你背後，只敢露出一隻眼睛。";
            dialogue = "「BATA……只要瞇著眼睛偷偷看……就不會被發現了吧？可是哥哥說這樣很危險……」";
        } else if (p.id === 'venator') {
            roleTitle = "獵人 (Hunter)"; roleColor = "#0000ff"; roleIcon = "🔫";
            roleDesc = "【技能】：死後可開槍帶走一人。";
            narrative = "維納托優雅地掏出左輪手槍，輕輕轉動彈倉，發出清脆的聲響。";
            dialogue = "「哼，這場狩獵誰是獵物還不一定。如果本王倒下了，對面也別想好過。」";
        } else if (p.id === 'narcissus') {
            roleTitle = "天使 (Angel)"; roleColor = "#8a2be2"; roleIcon = "👼";
            roleDesc = "【技能】：若維納托死亡，進入狂暴狀態。";
            narrative = "納希瑟斯眼中的星星閃爍著偏執的光芒，緊緊盯著維納托的方向。";
            dialogue = "「我會保護大家……但如果有人敢傷害維納托先生……我絕對不會原諒他。」";
        } else if (p.id === 'nuolang') {
            roleTitle = "炸彈狂 (Bomber)"; roleColor = "#2f4f4f"; roleIcon = "💣";
            roleDesc = "【技能】：被投票放逐時，可引爆炸彈拉所有人陪葬。";
            narrative = "諾郎神經質地抱著背包，指甲嵌進了掌心，眼神透著同歸於盡的瘋狂。";
            dialogue = "「別、別逼我……如果你們都要逼我……那我乾脆在這裡，跟大家一起爆了算了！」";
        } else if (p.id === 'melas') {
            roleTitle = "魔術師 (Magician)"; roleColor = "#800080"; roleIcon = "🎩";
            roleDesc = "【技能】：每晚可交換兩人的命運。";
            narrative = "蜜拉思發出令人背脊發涼的低笑，手中把玩著一張撲克牌。";
            dialogue = "「嘻嘻……你相信魔術嗎？今晚，讓我們來玩一個『移花接木』的小把戲吧。」";
        } else if (p.id === 'ola') {
            roleTitle = "吹笛人 (Piper)"; roleColor = "#00bfff"; roleIcon = "🪈";
            roleDesc = "【技能】：每晚迷惑一名玩家。全員迷惑則獲勝。";
            narrative = "奧拉拿出笛子，神情淡漠，彷彿周圍的恐懼與他無關。";
            dialogue = "「命運的絲線太吵雜。只要讓他們都沉醉在我的樂曲中……世界就會安靜了。」";
        } else if (p.id === 'novian') {
            roleTitle = "村長 (Mayor)"; roleColor = "#00ced1"; roleIcon = "⚖️";
            roleDesc = "【技能】：白天投票權重+1。";
            narrative = "諾維安深吸一口氣，強壓下慌亂，整理了一下那頂象徵船長的帽子。";
            dialogue = "「我是船長...也是負責人。我有責任維持秩序。請相信我，我們能找出兇手的！」";

        // ★ 中立/平民特色陣營 (核心)
        } else if (p.id === 'lanlan') {
            roleTitle = "縱火狂 (Arsonist)"; roleColor = "#00ced1"; roleIcon = "🔥";
            roleDesc = "【技能】：被襲擊時反燒兇手。";
            narrative = "蘭蘭興奮地搓著手，指尖冒出一簇幽幽的青色火苗。";
            dialogue = "「哇！這古堡太陰暗了！我們是不是可以點個火？一定很酷呀！」";
        } else if (p.id === 'jornona') {
            roleTitle = "女僕 (Maid)"; roleColor = "#ff69b4"; roleIcon = "🎀";
            roleDesc = "【技能】：與蘭蘭綁定。";
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
            { type: 'narrate', text: '第一夜，降臨了。' },
            { type: 'end', text: 'Day 0 End (Demo)' }
        ];

        // 插入隊列執行
        scriptQueue = scriptQueue.concat(nightScript);
        nextDialogue(true);
    }
};