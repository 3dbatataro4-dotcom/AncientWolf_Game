// ==========================================
// 檔案：js/stories/routes/james.js
// 角色：小雅各 (James)
// 身分：天皇 / 紙會教徒 / 狼美人
// 性格：外表靦腆不知所措、內心波濤洶湧(摩斯電碼)、討厭浪費食物
// ==========================================

window.Story_james = {
    // ----------------------------------------------------------------
    // 序章：不知所措的迷茫
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'cute' }, 
        { type: 'sprite', char: getCharById('james') },
        
        { type: 'narrate', text: '你看見一個長著水藍色長馬尾的少年正站在房間中央，眉頭皺成了八字形，看起來快哭了。' },
        { type: 'say', name: '小雅各', text: '這、這裡是哪裡……我不知道……怎麼辦……', color: '#00ffff' },
        
        { type: 'narrate', text: '雖然他嘴上這麼說，但如果你仔細聽，會聽到空氣中傳來細微的電流聲，節奏像是在打摩斯電碼。' },
        { type: 'narrate', text: '（電碼翻譯：媽的這是什麼鬼地方！老子要回去吃橘子！媽的！）' },
        
        { type: 'choice', options: [
            { text: "你還好嗎？", consequence: [
                { type: 'say', name: '小雅各', text: '我……我還好。只是有點……不知所措。', color: '#00ffff' },
                { type: 'say', name: '小雅各', text: '那個……你有看到安德烈嗎？黑頭髮，很帥的那個……', color: '#00ffff' }
            ]},
            { text: "別害怕。", consequence: [
                { type: 'say', name: '小雅各', text: '謝謝……你人真好。', color: '#00ffff' },
                { type: 'narrate', text: '他羞澀地笑了笑，身邊劈啪閃過一絲靜電。' }
            ]}
        ]},

        { type: 'say', name: '小雅各', text: '我們去大廳吧……雖然我不知道路，但是……跟著大家走應該沒錯吧？', color: '#00ffff' },
        { type: 'say', name: '小雅各', text: '希望那裡有吃的。我不想餓肚子。', color: '#00ffff' },
        { type: 'narrate', text: '他看起來柔柔弱弱的，完全沒有天皇的架子，反而像個迷路的小動物。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 廚房：遇到安德烈 (內心戲大爆發) ---
        kitchen: [
            { type: 'join', char: getCharById('andreas'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            { type: 'say', name: '小雅各', text: '安德烈！', color: '#00ffff' },
            { type: 'narrate', text: '看到安德烈，小雅各的眼睛瞬間亮了。' },
            { type: 'narrate', text: '（內心電碼：靚仔！我的靚仔！媽的今天也這麼帥！想親！）' },
            
            { type: 'say', name: '安德烈', text: '小雅各。報告，你的臉很紅。體溫升高了嗎？', color: '#4169e1' },
            { type: 'say', name: '小雅各', text: '沒、沒有啦……只是這裡有點熱……', color: '#00ffff' },
            
            { type: 'say', name: '安德烈', text: '了解。這裡的通風系統確實有待改進。', color: '#4169e1' },
            { type: 'say', name: '小雅各', text: '那、那個，安德烈，你要吃橘子嗎？我剛才找到的。', color: '#00ffff' },
            { type: 'narrate', text: '小雅各遞出一顆剝好的橘子，眼神充滿期待。' },
            { type: 'say', name: '安德烈', text: '謝謝。補充維生素C是很重要的。', color: '#4169e1' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 大廳：遇到彼得 (麻煩的哥哥) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('peter'), pos: 'left' },
            { type: 'playBgm', name: 'sneaky' },
            
            { type: 'say', name: '彼得', text: '你！你是那個教會的！你有沒有帶聖水？快給我！', color: '#8b0000' },
            { type: 'narrate', text: '彼得看起來瘋瘋癲癲的，抓住了小雅各的肩膀。' },
            
            { type: 'say', name: '小雅各', text: '哇！你、你別這樣……我沒有聖水……', color: '#00ffff' },
            { type: 'narrate', text: '小雅各嚇得縮成一團，身上開始冒出藍色的電弧。' },
            { type: 'narrate', text: '（內心電碼：媽的死瘋子！放開老子！不然電死你！要不是看在你是安德烈哥哥的份上……）' },
            
            { type: 'say', name: '彼得', text: '嘖，沒用的東西！連聖水都不帶，算什麼信徒！', color: '#8b0000' },
            { type: 'say', name: '小雅各', text: '對、對不起……（快滾啊！！！）', color: '#00ffff' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 花園：遇到拿但業 (尷尬的教友) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('nathanael'), pos: 'left' },
            
            { type: 'say', name: '拿但業', text: '喔，是你啊。總是遲到的小雅各。', color: '#90ee90' },
            { type: 'say', name: '小雅各', text: '拿但業……你好。', color: '#00ffff' },
            
            { type: 'narrate', text: '兩人面面相覷，氣氛有點尷尬。雖然是同一個教會（紙會）的，但似乎不太熟。' },
            
            { type: 'say', name: '拿但業', text: '這裡真髒。我的鞋子都髒了。你有帶手帕嗎？', color: '#90ee90' },
            { type: 'say', name: '小雅各', text: '我不……不知道……好像沒帶。', color: '#00ffff' },
            { type: 'say', name: '拿但業', text: '唉，真是靠不住。算了，我叫腓力來。', color: '#90ee90' },
            
            { type: 'narrate', text: '（內心電碼：這少爺真難伺候。媽的。）' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到卡洛特 (被觀察的恐懼) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('carlota'), pos: 'left' },
            
            { type: 'say', name: '卡洛特', text: '……你好。', color: '#4b0082' },
            { type: 'say', name: '小雅各', text: '哇！', color: '#00ffff' },
            { type: 'narrate', text: '小雅各被突然出現的卡洛特嚇了一大跳。' },
            
            { type: 'say', name: '卡洛特', text: '你的心跳很快。你在緊張？', color: '#4b0082' },
            { type: 'say', name: '小雅各', text: '我……我只是……不太習慣這裡……', color: '#00ffff' },
            
            { type: 'say', name: '卡洛特', text: '判定：友善。但是很弱小。需要保護。', color: '#4b0082' },
            { type: 'say', name: '小雅各', text: '謝、謝謝？（這人說話好奇怪……他是人嗎？）', color: '#00ffff' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 圖書室：遇到林恩 (請求支援) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('lynn'), pos: 'left' },
            
            { type: 'say', name: '小雅各', text: '那個……林恩先生？', color: '#00ffff' },
            { type: 'say', name: '林恩', text: '嗯？有事嗎？諮詢費每分鐘 100 幣。', color: '#9400d3' },
            
            { type: 'say', name: '小雅各', text: '不、不是諮詢……是彼得……', color: '#00ffff' },
            { type: 'say', name: '小雅各', text: '能不能請您……多管管他？他一直來煩安德烈，安德烈很困擾……', color: '#00ffff' },
            
            { type: 'say', name: '林恩', text: '喔？那個有創意的傢伙又惹事了？', color: '#9400d3' },
            { type: 'say', name: '林恩', text: '好吧，看在你這麼誠懇（而且長得還算順眼）的份上，我會去把他領回來的。涼拌。', color: '#9400d3' },
            { type: 'say', name: '小雅各', text: '太好了……謝謝您！', color: '#00ffff' },
            
            { type: 'call', func: showMap }
        ]
    }
};