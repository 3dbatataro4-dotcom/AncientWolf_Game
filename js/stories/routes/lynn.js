// ==========================================
// 檔案：js/stories/routes/lynn.js
// 角色：林恩 (Lynn)
// 身分：守衛 (Guard) / 商人 / 茉莉的老闆
// CP：彼得 (認為彼得很有創意)
// 性格：慵懶、守財奴、毒舌、貓系男子 / 口頭禪「涼拌」
// ==========================================

window.Story_lynn = {
    // ----------------------------------------------------------------
    // 序章：精算的守財奴
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'day' }, 
        { type: 'sprite', char: getCharById('lynn') },
        
        // --- 算帳開場 ---
        { type: 'narrate', text: '算盤撥動的聲音：「啪、啪、啪」。' },
        { type: 'say', name: '林恩', text: '「精神損失費、誤工費、加上這張床的折舊費……嘖，虧大了。」', color: '#9400d3' },
        
        { type: 'narrate', text: '你睜開眼，看見一個紫髮男人正盤腿坐在床邊，手裡拿著一個金算盤，眉頭緊鎖。' },
        { type: 'say', name: '林恩', text: '「喂，你醒了？醒了就快點起來。佔用客房超過退房時間是要加錢的。」', color: '#9400d3' },

        { type: 'choice', options: [
            { text: "你是誰？", consequence: [
                { type: 'say', name: '林恩', text: '「我是林恩。一個不幸被捲入這場賠本生意的商人。」', color: '#9400d3' },
                { type: 'say', name: '林恩', text: '「看你的樣子也不像有錢人……算了，別給我添亂就行。」', color: '#9400d3' }
            ]},
            { text: "你在算什麼？", consequence: [
                { type: 'say', name: '林恩', text: '「我在算如果我們死在這裡，保險公司會賠多少。」', color: '#9400d3' },
                { type: 'say', name: '林恩', text: '「結果是零。因為『不可抗力』條款。真是涼拌。」', color: '#9400d3' }
            ]}
        ]},

        { type: 'say', name: '林恩', text: '「廣播說要去大廳？哈啊……真不想動。」', color: '#9400d3' },
        { type: 'say', name: '林恩', text: '「走路會消耗鞋底，還會消耗卡路里，這些都是成本。算了，為了找人賠償，還是得去一趟。」', color: '#9400d3' },
        { type: 'narrate', text: '他懶洋洋地站起來，將算盤別在腰間，眼神裡寫滿了「好麻煩」。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段 (5個地點)
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 廚房：遇到茉莉 (壓榨員工) ---
        kitchen: [
            { type: 'join', char: getCharById('mollie'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            // 茉莉在偷懶
            { type: 'narrate', text: '茉莉正躲在廚房角落，試圖打開一罐鮪魚罐頭。' },
            { type: 'say', name: '茉莉', text: '「打不開……好累……要是芒果在就好了……」', color: '#ff69b4' },
            
            // 林恩登場
            { type: 'say', name: '林恩', text: '「茉莉。」', color: '#9400d3' },
            { type: 'narrate', text: '聽到這個聲音，茉莉手裡的罐頭「哐噹」一聲掉在地上。' },
            
            { type: 'say', name: '茉莉', text: '「老、老闆？！我沒有偷吃！我是在……檢查食品安全！」', color: '#ff69b4' },
            { type: 'say', name: '林恩', text: '「擅自食用公司資產（雖然這不是我的公司），扣薪水。」', color: '#9400d3' },
            { type: 'say', name: '林恩', text: '「還有，那個罐頭的市價是 50 幣，從你下個月工資裡扣。」', color: '#9400d3' },
            
            { type: 'say', name: '茉莉', text: '「嗚……太黑了！這罐頭哪有那麼貴！」', color: '#ff69b4' },
            { type: 'say', name: '林恩', text: '「現在是特殊時期，物資溢價。不想被扣錢就快點去幹活。我要知道這裡還有多少庫存。涼拌。」', color: '#9400d3' },
            
            { type: 'say', name: '茉莉', text: '「是……我知道了啦……」', color: '#ff69b4' },
            
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_resource', '物資清單', '林恩命令茉莉盤點了廚房的物資，發現這裡的存糧只夠支撐三天。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 花園：遇到腓力 (貓的誤會) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('philippos'), pos: 'left' },
            
            { type: 'narrate', text: '林恩正蹲在花圃邊，瞇著眼睛曬太陽，看起來像極了一隻慵懶的大貓。' },
            
            { type: 'say', name: '腓力', text: '「哇！這裡有一隻紫色的貓！」', color: '#dc143c' },
            { type: 'narrate', text: '腓力興奮地跑過來，看起來很想伸手摸摸林恩的頭。' },
            
            { type: 'say', name: '林恩', text: '「……如果你敢把你的髒手伸過來，我就收你一次『觸摸費』，價格是你付不起的那種。」', color: '#9400d3' },
            { type: 'say', name: '腓力', text: '「咦？貓會說話？成精了？」', color: '#dc143c' },
            
            { type: 'say', name: '林恩', text: '「我是人。而且是你的債主（精神上）。快滾，你擋住我的陽光了。涼拌。」', color: '#9400d3' },
            { type: 'say', name: '腓力', text: '「脾氣真差……跟少主起床時一樣。」', color: '#dc143c' },
            
            { type: 'narrate', text: '林恩翻了個白眼，換了個姿勢繼續曬太陽，完全不想理會這個肌肉笨蛋。' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 走廊：遇到小目 (商人的交鋒) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('manmu'), pos: 'left' },
            
            { type: 'narrate', text: '小目正在走廊上檢查窗戶的鎖扣，林恩則靠在牆邊撥弄算盤。' },
            
            { type: 'say', name: '小目', text: '「林恩先生。根據我的計算，這座古堡的修繕費用將是一個天文數字。」', color: '#ff1493' },
            { type: 'say', name: '林恩', text: '「不用你說我也知道。這是一筆爛帳。持有者絕對破產。」', color: '#9400d3' },
            
            { type: 'say', name: '小目', text: '「比起這個，我更關心茉莉的工作績效。他在你手下工作，似乎……很缺乏效率？」', color: '#ff1493' },
            { type: 'narrate', text: '提到茉莉，林恩挑了挑眉。' },
            
            { type: 'say', name: '林恩', text: '「雖然他又懶又饞，但好歹是我的員工。怎麼，目總想挖角？」', color: '#9400d3' },
            { type: 'say', name: '小目', text: '「不。我只是希望你能……少給他排點夜班。這對皮膚不好。」', color: '#ff1493' },
            { type: 'say', name: '林恩', text: '「呵，那得看你能出多少『加班補償費』了。只要錢到位，讓他天天放假都行。」', color: '#9400d3' },
            
            { type: 'say', name: '小目', text: '「……開個價吧。」', color: '#ff1493' },
            { type: 'narrate', text: '林恩露出了今天第一個真心的笑容（雖然很奸詐）。' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 大廳：遇到彼得 (CP互動：太有創意了) ---
        hall: [
            { type: 'join', char: getCharById('peter'), pos: 'left' },
            { type: 'playBgm', name: 'cute' }, // 使用可愛/輕鬆的音樂
            
            { type: 'narrate', text: '彼得正趴在地上，用放大鏡研究地毯的花紋，嘴裡唸唸有詞。' },
            { type: 'say', name: '彼得', text: '「不對……這個角度不對！煞氣會從這裡漏出來……」', color: '#8b0000' },
            
            { type: 'narrate', text: '突然，彼得抬起頭看到了林恩（以及他腰間的金算盤），眼睛瞬間亮了起來。' },
            { type: 'say', name: '彼得', text: '「哇！金色的！好閃！很吉祥！！」', color: '#8b0000' },
            
            { type: 'narrate', text: '彼得像隻看到逗貓棒的貓一樣撲了過來，伸手想摸那個算盤。' },
            { type: 'say', name: '林恩', text: '「喂，別亂摸。這是純金的，摸壞了你賠不起。」', color: '#9400d3' },
            { type: 'narrate', text: '雖然嘴上這麼說，但林恩並沒有躲開，任由彼得在他身邊轉圈圈。' },
            
            { type: 'say', name: '彼得', text: '「嘿嘿……只要跟著你，那些髒東西就不敢靠近！你是招財貓！是大吉大利的象徵！」', color: '#8b0000' },
            { type: 'say', name: '林恩', text: '「……招財貓？你的想像力真是太有創意了。我是不是該收你點『觀賞費』？」', color: '#9400d3' },
            
            { type: 'say', name: '彼得', text: '「沒問題！等我當上國王，我把整個國庫都給你！嘻嘻！」', color: '#8b0000' },
            { type: 'say', name: '林恩', text: '「哈……等你當上再說吧。真是的，只有這種時候才會覺得你這瘋子有點可愛。涼拌。」', color: '#9400d3' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 圖書室：遇到諾維安 (索賠) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('novian'), pos: 'left' },
            
            { type: 'say', name: '林恩', text: '「船長先生。我們來談談賠償問題吧。」', color: '#9400d3' },
            { type: 'narrate', text: '林恩攔住了正焦頭爛額的諾維安。' },
            
            { type: 'say', name: '諾維安', text: '「林恩先生……現在不是談這個的時候……」', color: '#00ced1' },
            { type: 'say', name: '林恩', text: '「現在才是時候。等大家都死光了，我找誰要錢去？」', color: '#9400d3' },
            { type: 'say', name: '林恩', text: '「精神損失費、非法拘禁費、還有這糟糕的伙食費。簽個字吧，我已經算好總額了。」', color: '#9400d3' },
            
            { type: 'say', name: '諾維安', text: '「這……這上面好多零……」', color: '#00ced1' },
            { type: 'say', name: '林恩', text: '「放心，支援分期付款。利息只要 20%。很公道吧？」', color: '#9400d3' },
            { type: 'narrate', text: '諾維安看著帳單，臉色比剛才更蒼白了。' },
            
            { type: 'call', func: showMap }
        ]
    }
};