// ==========================================
// 檔案：js/stories/routes/peter.js
// 角色：彼得 (Peter)
// 身分：國王 / 紙會信徒 / 林恩的合作夥伴
// 性格：冷漠傲慢、責任感、易中邪體質、喝潔廁靈驅邪
// ==========================================

window.Story_peter = {
    // ----------------------------------------------------------------
    // 序章：冷漠的國王
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'serious' }, 
        { type: 'sprite', char: getCharById('peter') },
        
        // --- 冷漠開場 ---
        { type: 'say', name: '彼得', text: 'Shit... 這裡是哪裡？陰氣這麼重。', color: '#8b0000' },
        { type: 'narrate', text: '你睜開眼，看見一個戴著黑色王冠的長髮男子正站在窗邊，眉頭緊鎖。' },
        { type: 'narrate', text: '他拿出一瓶看起來像清潔劑的東西喝了一口，表情才稍微舒緩了一些。' },
        
        { type: 'say', name: '彼得', text: '醒了？別在那裡裝死。我沒空管閒事。', color: '#8b0000' },
        { type: 'narrate', text: '他冷冷地瞥了你一眼，眼神中帶著上位者的傲慢與疏離。' },

        { type: 'choice', options: [
            { text: "你在喝什麼？", consequence: [
                { type: 'say', name: '彼得', text: '驅邪聖水。這裡不乾淨，充滿了骯髒的東西。', color: '#8b0000' },
                { type: 'say', name: '彼得', text: '你也離我遠點，別把晦氣傳給我。' }
            ]},
            { text: "你是誰？", consequence: [
                { type: 'say', name: '彼得', text: '彼得。如果不認識我，說明你孤陋寡聞。', color: '#8b0000' },
                { type: 'say', name: '彼得', text: '我是國王。雖然現在不在我的領土上，但規矩還是一樣的。少說話，多做事。' }
            ]}
        ]},

        { type: 'say', name: '彼得', text: '廣播說要去大廳？嘖，麻煩。', color: '#8b0000' },
        { type: 'say', name: '彼得', text: '但我必須去確認一下林恩在哪裡。沒有他在身邊，這裡的邪氣讓我頭痛。', color: '#8b0000' },
        { type: 'narrate', text: '他整理了一下衣領，雖然嘴上抱怨，但行動卻很果決，大步流星地走了出去。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 大廳：遇到諾維安 (冷漠的國王) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('novian'), pos: 'left' },
            { type: 'playBgm', name: 'day' },
            
            { type: 'say', name: '諾維安', text: '彼得先生！請不要站在吊燈下面，那裡可能不安全！', color: '#00ced1' },
            
            { type: 'say', name: '彼得', text: '閉嘴。你在教我做事？', color: '#8b0000' },
            { type: 'narrate', text: '彼得不耐煩地揮了揮手，像是驅趕蒼蠅一樣。' },
            
            { type: 'say', name: '彼得', text: '這個位置的光線最強，陽氣最足。你懂什麼？', color: '#8b0000' },
            { type: 'say', name: '諾維安', text: '呃……可是那個吊燈看起來搖搖欲墜……', color: '#00ced1' },
            { type: 'say', name: '彼得', text: 'Shit... 真是個烏鴉嘴。算了，本王不跟平民計較。', color: '#8b0000' },
            { type: 'narrate', text: '彼得雖然嘴硬，但還是默默地移開了幾步，繼續尋找著什麼（大概是林恩）。' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 廚房：遇到安德烈 (兄弟互動) ---
        kitchen: [
            { type: 'scene', bg: assets.bg.kitchen },
            { type: 'join', char: getCharById('andreas'), pos: 'left' },
            { type: 'playBgm', name: 'day' },
            
            { type: 'say', name: '彼得', text: '安德烈！你有沒有帶潔廁靈？我的喝完了。', color: '#8b0000' },
            { type: 'narrate', text: '彼得看到安德烈，語氣稍微熟稔了一些，雖然還是帶著命令的口吻。' },
            
            { type: 'say', name: '安德烈', text: '報告！那是強鹼性腐蝕液體。禁止食用。', color: '#4169e1' },
            { type: 'say', name: '彼得', text: '少囉嗦！這是驅邪用的！你這個不懂變通的傢伙。', color: '#8b0000' },
            
            { type: 'say', name: '安德烈', text: '為了你的生命安全，我拒絕提供。並且，我建議你現在立刻去漱口。', color: '#4169e1' },
            { type: 'say', name: '彼得', text: '你敢違抗我？我是你哥！', color: '#8b0000' },
            { type: 'say', name: '安德烈', text: '報告！如果是無理的要求，我有權拒絕。另外，林恩先生在那邊。', color: '#4169e1' },
            { type: 'say', name: '彼得', text: '林恩？！在哪？算了，這次先放過你。', color: '#8b0000' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 走廊：遇到維納托 (國王間的對話) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('venator'), pos: 'left' },
            
            { type: 'say', name: '維納托', text: '彼得。你看起來氣色不錯，雖然品味還是一樣糟糕。', color: '#0000ff' },
            
            { type: 'say', name: '彼得', text: '維納托。少在那邊陰陽怪氣。', color: '#8b0000' },
            { type: 'say', name: '彼得', text: '這裡的風水不對勁，你最好小心點。別死得太難看，丟了我們國王的臉。', color: '#8b0000' },
            
            { type: 'say', name: '維納托', text: '哼，本王可是天選之子，區區風水能奈我何？倒是你，別又中邪了。', color: '#0000ff' },
            { type: 'say', name: '彼得', text: 'Shit... 只要有貓在，我就不會有事。', color: '#8b0000' },
            { type: 'say', name: '維納托', text: '貓？你是說林恩？真是有趣的依賴關係。', color: '#0000ff' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 花園：遇到腓力 (誤會) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('philippos'), pos: 'left' },
            
            { type: 'say', name: '腓力', text: '哇！你的臉色好白！是不是中邪了？', color: '#dc143c' },
            { type: 'narrate', text: '腓力大驚小怪地指著彼得。' },
            
            { type: 'say', name: '彼得', text: '……離我遠點。你的陽氣太重了，衝撞到我的靈感。', color: '#8b0000' },
            
            { type: 'say', name: '腓力', text: '啊？我是關心你耶！我有帶大蒜，你要不要吃一點？', color: '#dc143c' },
            { type: 'say', name: '彼得', text: '滾。再靠近我就讓人把你扔出去。', color: '#8b0000' },
            { type: 'say', name: '腓力', text: '真兇……跟少主起床氣有的比。', color: '#dc143c' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 圖書室：遇到奧拉 (本能的迴避) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('ola'), pos: 'left' },
            { type: 'playBgm', name: 'serious' },
            
            { type: 'narrate', text: '奧拉正靜靜地看書，周圍的空氣彷彿凝固了一般。' },
            { type: 'say', name: '彼得', text: '……嘖。', color: '#8b0000' },
            { type: 'narrate', text: '彼得一看到奧拉，立刻停下了腳步，眉頭皺得死緊。' },
            
            { type: 'say', name: '彼得', text: '（低聲）這傢伙身上……有種讓人不舒服的味道。太乾淨了，乾淨得像……神？', color: '#8b0000' },
            { type: 'say', name: '奧拉', text: '……有事嗎？', color: '#00bfff' },
            { type: 'narrate', text: '奧拉抬起頭，淡淡地看了彼得一眼。' },
            
            { type: 'say', name: '彼得', text: '沒事。我不跟神棍打交道。', color: '#8b0000' },
            { type: 'narrate', text: '彼得轉身就走，步伐比平時快了許多，彷彿在逃離某種不想面對的存在。' },
            
            { type: 'call', func: showMap }
        ]
    }
};