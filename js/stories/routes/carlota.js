// ==========================================
// 檔案：js/stories/routes/carlota.js
// 角色：卡洛特 (Carlota)
// 身分：偽人 / 諾維安的弟弟 / 林恩的追求者(?)
// 性格：電波、直覺系、模仿人類、評判「友善/不友善」
// ==========================================

window.Story_carlota = {
    // ----------------------------------------------------------------
    // 序章：後室來的觀察者
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'sneaky' }, 
        { type: 'sprite', char: getCharById('carlota') },
        
        // --- 偽人的觀察 ---
        { type: 'narrate', text: '你睜開眼，發現一張臉正貼在你的面前，距離近到你能看清他紫色的炸蝦辮子。' },
        { type: 'say', name: '卡洛特', text: '……眨眼。呼吸頻率正常。體溫正常。', color: '#4b0082' },
        { type: 'narrate', text: '他歪著頭看著你，眼神直勾勾的，不像是惡意，倒像是在觀察一個新奇的物件。' },
        
        { type: 'say', name: '卡洛特', text: '你醒了。我是卡洛特。我在練習……怎麼像個人類一樣打招呼。', color: '#4b0082' },
        
        { type: 'choice', options: [
            { text: "你好？", consequence: [
                { type: 'say', name: '卡洛特', text: '你好。你的聲音……頻率很穩定。判定：友善。', color: '#4b0082' },
                { type: 'say', name: '卡洛特', text: '這裡的味道我不喜歡。沒有蘿蔔的味道。只有灰塵。', color: '#4b0082' }
            ]},
            { text: "你是誰？", consequence: [
                { type: 'say', name: '卡洛特', text: '我是卡洛特。諾維安的弟弟。雖然我們長得不像，但這是設定。', color: '#4b0082' },
                { type: 'say', name: '卡洛特', text: '我的直覺告訴我，我們要去大廳。那是群體活動的規則。', color: '#4b0082' }
            ]}
        ]},

        { type: 'say', name: '卡洛特', text: '走吧。這裡的空氣流動很奇怪。像後室一樣……但是沒有那個黃色的牆紙。', color: '#4b0082' },
        { type: 'say', name: '卡洛特', text: '如果遇到不友善的東西，我會告訴你。然後我們就跑。', color: '#4b0082' },
        { type: 'narrate', text: '他模仿著人類走路的姿勢，雖然關節看起來有點僵硬，但他似乎很努力在讓自己看起來「正常」。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 花園：遇到諾維安 (非常友善的哥哥) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('novian'), pos: 'left' },
            { type: 'playBgm', name: 'day' },
            
            { type: 'say', name: '諾維安', text: '卡洛特！你在這裡啊！有沒有受傷？肚子餓不餓？', color: '#00ced1' },
            { type: 'narrate', text: '諾維安像個老媽子一樣衝過來，對卡洛特噓寒問暖。' },
            
            { type: 'say', name: '卡洛特', text: '哥哥。我沒事。', color: '#4b0082' },
            { type: 'say', name: '卡洛特', text: '（對你說）這是諾維安。我的哥哥。判定：非常友善。', color: '#4b0082' },
            
            { type: 'say', name: '諾維安', text: '哈哈，你在跟新朋友介紹我嗎？這裡花草很多，你要小心別過敏喔！', color: '#00ced1' },
            { type: 'say', name: '卡洛特', text: '我不喜歡草的味道。但是哥哥在這裡，所以這裡是安全的。', color: '#4b0082' },
            { type: 'say', name: '卡洛特', text: '哥哥，你身上有陽光的味道。很暖和。', color: '#4b0082' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 圖書室：遇到林恩 (天菜/友善的老公?) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('lynn'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            { type: 'say', name: '林恩', text: '……別盯著我看。我有收費標準的。', color: '#9400d3' },
            { type: 'narrate', text: '林恩被卡洛特直勾勾的眼神看得有點發毛。' },
            
            { type: 'say', name: '卡洛特', text: '……好看。', color: '#4b0082' },
            { type: 'say', name: '卡洛特', text: '判定：非常友善。極度友善。天菜。', color: '#4b0082' },
            
            { type: 'say', name: '林恩', text: '哈？你在說什麼夢話？', color: '#9400d3' },
            { type: 'say', name: '卡洛特', text: '你是林恩。我看過你的照片。我想和你結婚。', color: '#4b0082' },
            
            { type: 'say', name: '林恩', text: '……咳！現在的小孩都這麼直接嗎？我有對象了（雖然是個麻煩的國王）。', color: '#9400d3' },
            { type: 'say', name: '林恩', text: '而且我對沒錢的小鬼沒興趣。涼拌。', color: '#9400d3' },
            { type: 'say', name: '卡洛特', text: '沒關係。我可以學怎麼賺錢。我學東西很快。', color: '#4b0082' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 大廳：遇到彼得 (不友善的國王) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('peter'), pos: 'left' },
            { type: 'playBgm', name: 'sneaky' },
            
            { type: 'say', name: '彼得', text: '誰在那裡！我看見你了！你的影子不對勁！', color: '#8b0000' },
            { type: 'narrate', text: '彼得神經質地指著卡洛特。' },
            
            { type: 'say', name: '卡洛特', text: '……不友善。', color: '#4b0082' },
            { type: 'narrate', text: '卡洛特迅速退後了兩步，眼神變得警惕。' },
            
            { type: 'say', name: '卡洛特', text: '這個人的訊號……是裂開的。有很多雜音。', color: '#4b0082' },
            { type: 'say', name: '彼得', text: '雜音？那是神諭！我是被選中的國王！你這個冒牌貨！', color: '#8b0000' },
            
            { type: 'say', name: '卡洛特', text: '這不友善！非常不友善！我們走，離他遠點。他會咬人。', color: '#4b0082' },
            
            { type: 'call', func: () => { addClue('clue_peter', '異常的氣場', '卡洛特的直覺告訴他，彼得的精神狀態極度危險，甚至可能已經「壞掉」了。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到諾郎 (不友善的弟弟?) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('nuolang'), pos: 'left' },
            
            { type: 'say', name: '諾郎', text: '……又是你。別老是纏著諾維安。', color: '#778899' },
            { type: 'say', name: '卡洛特', text: '諾郎。判定：普通不友善。', color: '#4b0082' },
            
            { type: 'say', name: '諾郎', text: '誰管你友不友善。你只要記得，諾維安是我的恩人。如果你敢給他惹麻煩……', color: '#778899' },
            { type: 'say', name: '卡洛特', text: '諾維安是我哥哥。我會保護他。不需要你教我。', color: '#4b0082' },
            
            { type: 'say', name: '諾郎', text: '……嘖。這傢伙到底是什麼構造？完全無法溝通。', color: '#778899' },
            { type: 'say', name: '卡洛特', text: '你的身上有火藥味。這很危險。請保持安全距離。', color: '#4b0082' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 廚房：遇到小雅各 (困惑的觀察) ---
        kitchen: [
            { type: 'scene', bg: assets.bg.kitchen },
            { type: 'join', char: getCharById('james'), pos: 'left' },
            
            { type: 'narrate', text: '小雅各正拿著一顆橘子，看起來很猶豫要不要剝開。' },
            
            { type: 'say', name: '卡洛特', text: '……你在發抖。', color: '#4b0082' },
            { type: 'say', name: '小雅各', text: '哇！你、你走路沒有聲音的嗎？', color: '#00ffff' },
            
            { type: 'say', name: '卡洛特', text: '你的心跳很快。你在害怕什麼？', color: '#4b0082' },
            { type: 'say', name: '小雅各', text: '我……我不知道……這裡感覺怪怪的……', color: '#00ffff' },
            
            { type: 'say', name: '卡洛特', text: '判定：友善。但是很弱小。', color: '#4b0082' },
            { type: 'say', name: '卡洛特', text: '別怕。如果你遇到不友善的東西，可以尖叫。我會聽到的。', color: '#4b0082' },
            { type: 'say', name: '小雅各', text: '謝、謝謝……你人真好（雖然說話有點怪）。', color: '#00ffff' },
            
            { type: 'call', func: showMap }
        ]
    }
};