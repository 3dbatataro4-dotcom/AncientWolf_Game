// ==========================================
// 檔案：js/stories/routes/narcissus.js
// 角色：納希瑟斯 (Narcissus)
// 身分：天使 (Angel) / 守護者
// 性格：溫柔、深情、對維納托絕對忠誠 / 對外人禮貌疏離
// ==========================================

window.Story_narcissus = {
    // ----------------------------------------------------------------
    // 序章：醒來與初次對話
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'cute' }, // 使用較柔和的音樂
        { type: 'sprite', char: getCharById('narcissus') },
        
        // --- 溫柔但心不在焉的開場 ---
        { type: 'say', name: '納希瑟斯', text: '「……嗯？早安。」', color: '#8a2be2' },
        { type: 'narrate', text: '你睜開眼，看見一張精緻得如同油畫般的臉龐正俯視著你。金色的捲髮垂在肩頭，紫色的眼睛裡彷彿藏著星辰。' },
        { type: 'narrate', text: '他雖然在對你微笑，但眼神卻有些游離，似乎在尋找著別的東西。' },
        
        { type: 'say', name: '納希瑟斯', text: '「既然醒了，能請教你一件事嗎？你有看到維納托先生嗎？」', color: '#8a2be2' },
        { type: 'say', name: '納希瑟斯', text: '「就是一位穿著華麗、銀色長髮、看起來有點……嗯，有點傲慢但非常迷人的男士。」', color: '#8a2be2' },

        { type: 'choice', options: [
            { text: "沒看到耶。", consequence: [
                { type: 'say', name: '納希瑟斯', text: '「是嗎……真讓人擔心。他很挑剔，這種陌生的環境一定讓他睡不好。」', color: '#8a2be2' }
            ]},
            { text: "你是誰？", consequence: [
                { type: 'say', name: '納希瑟斯', text: '「失禮了。我是納希瑟斯。一個普通的……旅行者。」', color: '#8a2be2' },
                { type: 'narrate', text: '他輕輕行了一個禮，動作優雅得無可挑剔，但你能感覺到他對你並沒有太多興趣。' }
            ]}
        ]},

        { type: 'say', name: '納希瑟斯', text: '「廣播說要去大廳集合。維納托先生一定在那裡。」', color: '#8a2be2' },
        { type: 'narrate', text: '提到那個名字時，他眼中的星星瞬間亮了起來。' },
        { type: 'say', name: '納希瑟斯', text: '「走吧，我們不能讓他等太久。如果他餓壞了發脾氣，可是很難哄的。」', color: '#8a2be2' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 廚房：遇到維納托 (溺愛模式全開) ---
        kitchen: [
            { type: 'join', char: getCharById('venator'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            // 維納托的抱怨
            { type: 'say', name: '維納托', text: '「這是什麼？豬食嗎？本……咳，我絕對不會吃這種東西。」', color: '#0000ff' },
            { type: 'narrate', text: '維納托正拿著一塊乾硬的麵包，一臉嫌棄地想把它扔掉。' },
            
            // 納希瑟斯的登場
            { type: 'say', name: '納希瑟斯', text: '「維納托先生！」', color: '#8a2be2' },
            { type: 'narrate', text: '納希瑟斯快步走上前，自然地接過了維納托手中的麵包，彷彿那是什麼髒東西。' },
            { type: 'say', name: '納希瑟斯', text: '「這種東西確實配不上您。請稍等，我看看有沒有新鮮的食材，給您做點簡單的料理。」', color: '#8a2be2' },
            
            { type: 'say', name: '維納托', text: '「哼，算你來得及時。我要吃半熟的歐姆蛋，蛋液要剛好流出來的那種。」', color: '#0000ff' },
            { type: 'say', name: '納希瑟斯', text: '「好的，沒問題。只要您想吃，就算是龍蛋我也會去弄來的。」', color: '#8a2be2' },
            
            { type: 'narrate', text: '納希瑟斯轉頭看向你，臉上的溺愛瞬間切換成了禮貌的微笑。' },
            { type: 'say', name: '納希瑟斯', text: '「抱歉，能請你幫忙找找調味料嗎？為了維納托先生的早餐。」', color: '#8a2be2' },
            
            // 獲得線索 (透過做菜發現了什麼)
            { type: 'call', func: () => { addClue('clue_knife', '精緻的餐刀', '納希瑟斯在廚房找到的餐刀，鋒利得不像適用於料理。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 圖書室：遇到奧拉 (師徒關係) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'playBgm', name: 'daily_investigation' },
            { type: 'join', char: getCharById('ola'), pos: 'left' },
            
            { type: 'say', name: '納希瑟斯', text: '「老師？您也在這裡。」', color: '#8a2be2' },
            { type: 'narrate', text: '看到那位拿著笛子的藍髮青年，納希瑟斯的態度變得恭敬了許多。' },
            
            { type: 'say', name: '奧拉', text: '「……納希瑟斯。这里的書，很有趣。」', color: '#00bfff' },
            { type: 'say', name: '奧拉', text: '「它們記載了關於『靈魂』與『容器』的置換。你看，這本《蝕月教典》……」', color: '#00bfff' },
            
            { type: 'say', name: '納希瑟斯', text: '「我對這些不感興趣，老師。我只想知道，這種儀式會威脅到維納托先生的安全嗎？」', color: '#8a2be2' },
            { type: 'say', name: '奧拉', text: '「……命運的絲線已經纏繞在他身上了。但我會看著的。」', color: '#00bfff' },
            
            { type: 'say', name: '納希瑟斯', text: '「那就拜託您了，舅舅……不，老師。」', color: '#8a2be2' },
            
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_scroll', '教團卷軸', '奧拉正在閱讀的卷軸，上面記載了蝕月教團的受洗儀式。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 3. 花園：遇到彼得 (潛在威脅) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('peter'), pos: 'left' },
            
            { type: 'narrate', text: '彼得正蹲在花圃邊，神情有些恍惚，嘴裡唸唸有詞。' },
            { type: 'say', name: '彼得', text: '「我……我感覺到了……下面有東西……黑色的水……」', color: '#8b0000' },
            
            { type: 'say', name: '納希瑟斯', text: '「……這位先生，您還好嗎？」', color: '#8a2be2' },
            { type: 'narrate', text: '納希瑟斯雖然在問候，但身體卻下意識地擋在了你和彼得之間。他的手輕輕搭在腰間，眼神冷了下來。' },
            
            { type: 'say', name: '彼得', text: '「嘻嘻……別靠近我！我身體裡……好像有什麼東西要出來了！必須……必須用聖水洗乾淨！」', color: '#8b0000' },
            
            { type: 'say', name: '納希瑟斯', text: '（低聲）「精神狀態不穩定……攻擊性未知。是個危險因子。」', color: '#8a2be2' },
            { type: 'say', name: '納希瑟斯', text: '「我們走吧。離他遠點。如果他敢靠近維納托先生，我會毫不猶豫地處理掉他。」', color: '#8a2be2' },
            
            // 獲得線索 (彼得的瘋言瘋語)
            { type: 'call', func: () => { addClue('clue_peter', '彼得的囈語', '彼得似乎感應到了地下的「黑水」，精神狀態極不穩定。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到蜜拉思 (神秘的魔術師) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('melas'), pos: 'left' },
            
            { type: 'say', name: '蜜拉思', text: '「嘻嘻……這不是奧拉最喜歡的學生嗎？」', color: '#800080' },
            { type: 'narrate', text: '蜜拉思手中把玩著一張撲克牌，眼神玩味地打量著納希瑟斯。' },
            
            { type: 'say', name: '納希瑟斯', text: '「蜜拉思小姐。您看起來心情不錯。」', color: '#8a2be2' },
            { type: 'say', name: '蜜拉思', text: '「當然。這個舞台太棒了。你看，空氣中瀰漫著『交換』的味道。今晚，也許會有人的命運被調換喔？」', color: '#800080' },
            
            { type: 'say', name: '納希瑟斯', text: '「只要不波及到我的人，您想怎麼玩都隨意。但請記住……」', color: '#8a2be2' },
            { type: 'narrate', text: '納希瑟斯臉上的笑容消失了，紫色的眼眸裡閃過一絲殺意。' },
            { type: 'say', name: '納希瑟斯', text: '「別把魔術變到維納托先生身上。否則，我會折斷您的魔杖。」', color: '#8a2be2' },
            
            { type: 'say', name: '蜜拉思', text: '「哎呀，真可怕～嘻嘻。」', color: '#800080' },
            { type: 'leave', pos: 'left' },
            
            { type: 'call', func: showMap }
        ]
    }
};