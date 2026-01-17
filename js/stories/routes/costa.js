// ==========================================
// 檔案：js/stories/routes/costa.js
// 角色：科絲塔 (Costa)
// 身分：小女孩 (Little Girl) / 小目的妹妹
// 性格：膽小但敏銳、依賴家人、有口癖「BATA」
// ==========================================

window.Story_costa = {
    // ----------------------------------------------------------------
    // 序章：尋找家人的小女孩
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'sneaky' }, 
        { type: 'sprite', char: getCharById('costa') },
        
        { type: 'say', name: '科絲塔', text: 'BATA……這裡是哪裡？好黑……', color: '#228b22' },
        { type: 'narrate', text: '你睜開眼，看見一個抱著破舊玩偶的綠髮小女孩正蹲在床邊。' },
        { type: 'narrate', text: '她大大的眼睛裡充滿了不安，但並沒有哭鬧，而是警惕地觀察著四周。' },
        
        { type: 'say', name: '科絲塔', text: '大哥哥/大姊姊……你醒了嗎？', color: '#228b22' },
        { type: 'say', name: '科絲塔', text: '小瓜說……這個房間的味道很不舒服。BATA。', color: '#228b22' },

        { type: 'choice', options: [
            { text: "別怕，我在。", consequence: [
                { type: 'say', name: '科絲塔', text: '嗯……謝謝你。但是哥哥說過，不能隨便相信陌生人。', color: '#228b22' },
                { type: 'say', name: '科絲塔', text: '不過你看起來不像壞人……大概吧？BATA？', color: '#228b22' }
            ]},
            { text: "妳家人呢？", consequence: [
                { type: 'say', name: '科絲塔', text: '我在找克里昂……還有哥哥。', color: '#228b22' },
                { type: 'say', name: '科絲塔', text: '他們一定在外面找我。我不能亂跑，要在這裡等……可是廣播說要去大廳。', color: '#228b22' }
            ]}
        ]},

        { type: 'say', name: '科絲塔', text: '我們去大廳吧。只要跟著人群，應該就不會被怪物抓走了。', color: '#228b22' },
        { type: 'narrate', text: '她抱緊了懷裡的玩偶，雖然身體在微微發抖，但眼神卻意外地堅定。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 花園：遇到克里昂 (理性的安慰) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('kleion'), pos: 'left' },
            { type: 'playBgm', name: 'day' },
            
            { type: 'say', name: '科絲塔', text: '克里昂！BATA！', color: '#228b22' },
            { type: 'narrate', text: '科絲塔看到那個穿著白大褂的身影，立刻跑了過去。' },
            
            { type: 'say', name: '克里昂', text: '科絲塔。心跳指數正常嗎？有沒有受傷？', color: '#ff4500' },
            { type: 'say', name: '科絲塔', text: '沒有……但是這裡好可怕。那些花……長得好像會咬人。', color: '#228b22' },
            
            { type: 'say', name: '克里昂', text: '那是因為光影折射產生的錯覺。加上這類植物的葉片呈現鋸齒狀，容易引發人類的防禦本能。', color: '#ff4500' },
            { type: 'say', name: '克里昂', text: '這只是植物學現象，不是怪物。明白了嗎？', color: '#ff4500' },
            
            { type: 'say', name: '科絲塔', text: '唔……雖然聽不懂，但是克里昂這麼說的話，那應該就沒事了。BATA。', color: '#228b22' },
            { type: 'narrate', text: '聽著克里昂理性的解釋，科絲塔的情緒明顯穩定了下來。' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 走廊：遇到小目 (哥哥的寵溺) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('manmu'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            { type: 'say', name: '小目', text: '科絲塔！妳跑去哪裡了！我不是說過要在原地待命嗎！', color: '#ff1493' },
            { type: 'narrate', text: '小目一看到科絲塔，立刻衝過來檢查她有沒有缺胳膊少腿。' },
            
            { type: 'say', name: '科絲塔', text: '哥哥……對不起BATA。因為廣播說要去大廳……', color: '#228b22' },
            
            { type: 'say', name: '小目', text: '嘖，那個廣播系統也是，噪音太大，容易損傷聽力。', color: '#ff1493' },
            { type: 'say', name: '小目', text: '算了，沒事就好。來，哥哥抱。地上髒，別把鞋子弄濕了。', color: '#ff1493' },
            
            { type: 'narrate', text: '平日裡高高在上的總裁，此刻毫不猶豫地蹲下身，把科絲塔抱了起來。' },
            { type: 'say', name: '科絲塔', text: '嘿嘿……哥哥最好了。但是哥哥，你的領帶歪了喔？', color: '#228b22' },
            { type: 'say', name: '小目', text: '咳！那是因為剛才跑太快……不許笑！保持總裁家屬的威嚴！', color: '#ff1493' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 廚房：遇到卡洛特 (敏銳的直覺) ---
        kitchen: [
            { type: 'scene', bg: assets.bg.kitchen },
            { type: 'join', char: getCharById('carlota'), pos: 'left' },
            { type: 'playBgm', name: 'sneaky' },
            
            { type: 'say', name: '卡洛特', text: '……肉。好香。', color: '#4b0082' },
            { type: 'narrate', text: '卡洛特正盯著桌上的一塊生肉，眼神有些發直。' },
            
            { type: 'say', name: '科絲塔', text: '……BATA！', color: '#228b22' },
            { type: 'narrate', text: '科絲塔猛地躲到了你身後，抓緊了你的衣服。' },
            
            { type: 'choice', options: [
                { text: "怎麼了？", consequence: [
                    { type: 'say', name: '科絲塔', text: '那個姊姊……感覺怪怪的。', color: '#228b22' }
                ]}
            ]},
            
            { type: 'say', name: '科絲塔', text: '雖然她長得像人……可是味道不像。', color: '#228b22' },
            { type: 'say', name: '科絲塔', text: '她看著肉的眼神……像是在看同類？不對，像是在看獵物……BATA，好可怕。', color: '#228b22' },
            { type: 'narrate', text: '雖然科絲塔很害怕，但她卻精準地察覺到了卡洛特的異樣。' },
            
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_eye', '小女孩的直覺', '科絲塔覺得卡洛特給人的感覺「不像人類」，這或許是某種重要的警訊。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 4. 大廳：遇到彼得 (害怕瘋子) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('peter'), pos: 'left' },
            
            { type: 'say', name: '彼得', text: '嘻嘻……不要躲……我看到你們了……髒東西……', color: '#8b0000' },
            { type: 'narrate', text: '彼得正對著空無一人的角落說話，表情扭曲。' },
            
            { type: 'say', name: '科絲塔', text: '那個叔叔……是不是生病了？', color: '#228b22' },
            { type: 'say', name: '科絲塔', text: '克里昂說，大腦激素分泌異常會導致幻覺。可是……', color: '#228b22' },
            
            { type: 'say', name: '彼得', text: '（猛轉頭）小孩！妳也是祭品嗎？妳的靈魂很乾淨……適合獻祭！', color: '#8b0000' },
            { type: 'say', name: '科絲塔', text: '哇啊！不要過來！BATA！', color: '#228b22' },
            { type: 'narrate', text: '科絲塔嚇得臉色發白，但還記得拉著你一起後退。' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 圖書室：遇到蜜拉思 (被看戲) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('melas'), pos: 'left' },
            
            { type: 'say', name: '蜜拉思', text: '哎呀，這不是小科絲塔嗎？', color: '#800080' },
            { type: 'narrate', text: '蜜拉思笑瞇瞇地看著科絲塔，像是在看一隻可愛的小白鼠。' },
            
            { type: 'say', name: '科絲塔', text: '蜜拉思姊姊……這裡有關於「黑水」的書嗎？我想查一下……', color: '#228b22' },
            { type: 'say', name: '蜜拉思', text: '黑水？那是大人的話題喔。不過……', color: '#800080' },
            { type: 'say', name: '蜜拉思', text: '妳要是把這顆糖吃了，我就告訴妳。', color: '#800080' },
            { type: 'narrate', text: '蜜拉思拿出了一顆顏色詭異的糖果。' },
            
            { type: 'say', name: '科絲塔', text: '……克里昂說不能吃來路不明的東西。而且那顆糖在發光BATA。', color: '#228b22' },
            { type: 'say', name: '蜜拉思', text: '真聰明，不好騙呢。嘻嘻。', color: '#800080' },
            
            { type: 'call', func: showMap }
        ]
    }
};