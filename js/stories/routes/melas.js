// ==========================================
// 檔案：js/stories/routes/melas.js
// 角色：蜜拉思 (Melas)
// 身分：下層區的神 / 魔術師
// 性格：平靜、隨心所欲、喜歡看戲、不作死
// ==========================================

window.Story_melas = {
    // ----------------------------------------------------------------
    // 序章：有趣的舞台
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'sneaky' }, 
        { type: 'sprite', char: getCharById('melas') },
        
        { type: 'narrate', text: '「嘻嘻……這個劇本，看起來很有趣呢。」' },
        { type: 'narrate', text: '你睜開眼，看見一個白髮（帶著紫色漸層）的男子正優雅地坐在桌子上，把玩著手中的撲克牌。' },
        { type: 'narrate', text: '他深邃的紅紫色眼眸裡帶著笑意，頭上的紫色小花隨著他的動作微微顫動。' },
        
        { type: 'say', name: '蜜拉思', text: '醒了嗎？小睡鼠。這場戲就要開始了喔。', color: '#800080' },
        
        { type: 'choice', options: [
            { text: "你是誰？", consequence: [
                { type: 'say', name: '蜜拉思', text: '我是蜜拉思。一個……喜歡看魔術表演的普通人。', color: '#800080' },
                { type: 'say', name: '蜜拉思', text: '雖然我想這麼說，但這裡的舞台似乎更適合發生一些超自然的事情？', color: '#800080' }
            ]},
            { text: "這場戲？", consequence: [
                { type: 'say', name: '蜜拉思', text: '是啊。封閉的古堡，各懷鬼胎的人們。這不是最棒的舞台嗎？', color: '#800080' },
                { type: 'say', name: '蜜拉思', text: '我很期待看到大家會露出什麼樣的表情。嘻嘻。', color: '#800080' }
            ]}
        ]},

        { type: 'say', name: '蜜拉思', text: '去大廳吧。奧拉應該也在那裡。', color: '#800080' },
        { type: 'say', name: '蜜拉思', text: '我有個有趣的想法想跟他分享。雖然他肯定會說我幼稚。', color: '#800080' },
        { type: 'narrate', text: '他輕盈地跳下桌子，雖然嘴上說著有趣，但他的眼神卻異常冷靜。他不是來搗亂的，他是來欣賞的。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 圖書室：遇到奧拉 (同事的閒聊) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('ola'), pos: 'left' },
            { type: 'playBgm', name: 'serious' },
            
            { type: 'say', name: '蜜拉思', text: '奧拉。你在這裡做什麼？聽牆角嗎？', color: '#800080' },
            { type: 'narrate', text: '蜜拉思笑著走到奧拉身邊，完全沒有距離感。' },
            
            { type: 'say', name: '奧拉', text: '我在聽旋律。蜜拉思，你太吵了。', color: '#00bfff' },
            { type: 'say', name: '蜜拉思', text: '別這麼冷淡嘛。你看這本書，上面寫的咒語，是不是很有創意？', color: '#800080' },
            { type: 'say', name: '蜜拉思', text: '如果用在那個自大的國王身上，他會露出什麼表情呢？真想看看。', color: '#800080' },
            
            { type: 'say', name: '奧拉', text: '……無聊的惡作劇。別把你的快樂建立在別人的混亂上。', color: '#00bfff' },
            { type: 'say', name: '蜜拉思', text: '可是這很有趣啊。而且我也只是「看看」而已。我可是很惜命的。', color: '#800080' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 大廳：遇到維納托 (看戲) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('venator'), pos: 'left' },
            
            { type: 'say', name: '維納托', text: '哼。陰沉的傢伙。你看起來一臉衰樣。', color: '#0000ff' },
            { type: 'narrate', text: '維納托對著蜜拉思挑了挑眉。' },
            
            { type: 'say', name: '蜜拉思', text: '嘻嘻……小天才。你的自信真是令人印象深刻。', color: '#800080' },
            { type: 'say', name: '蜜拉思', text: '希望你在這場遊戲結束的時候，還能保持這份優雅。', color: '#800080' },
            
            { type: 'say', name: '維納托', text: '本王當然會。不像你，只會躲在角落裡發霉。', color: '#0000ff' },
            { type: 'say', name: '蜜拉思', text: '（微笑）沒關係，我喜歡角落。角落視野最好，能看到所有人的醜態。', color: '#800080' },
            { type: 'narrate', text: '蜜拉思並沒有生氣，反而覺得維納托這種死鴨子嘴硬的樣子很有趣。' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 花園：遇到納希瑟斯 (看忠犬) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('narcissus'), pos: 'left' },
            
            { type: 'narrate', text: '納希瑟斯正在為維納托尋找最完美的花朵。' },
            
            { type: 'say', name: '蜜拉思', text: '真是勤奮呢。你就像一隻追著骨頭跑的小狗。', color: '#800080' },
            { type: 'say', name: '納希瑟斯', text: '……蜜拉思先生。請不要這樣形容。這是對維納托先生的忠誠。', color: '#8a2be2' },
            
            { type: 'say', name: '蜜拉思', text: '是是是，忠誠。不過，如果有一天你的主人不要你了，你會怎麼辦？', color: '#800080' },
            { type: 'say', name: '納希瑟斯', text: '不可能。維納托先生需要我。而且……我也不會讓那種事發生。', color: '#8a2be2' },
            { type: 'say', name: '蜜拉思', text: '喔？眼神變了呢。真有趣。看來你也沒那麼單純。', color: '#800080' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到克里昂 (科學與魔法) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('kleion'), pos: 'left' },
            
            { type: 'say', name: '克里昂', text: '蜜拉思！你那朵花是怎麼固定在頭上的？髮夾嗎？還是某種生物膠水？', color: '#ff4500' },
            { type: 'say', name: '蜜拉思', text: '……這是秘密。不過你的觀察點總是這麼特別。', color: '#800080' },
            
            { type: 'say', name: '克里昂', text: '我是科學派的！我認為所有現象都有解釋！比如你的詛咒，說不定是量子糾纏的一種表現形式！', color: '#ff4500' },
            { type: 'say', name: '蜜拉思', text: '量子糾纏？嘻嘻，聽起來比魔法還複雜。', color: '#800080' },
            { type: 'say', name: '蜜拉思', text: '不過我不討厭你的說法。至少比那些只會尖叫的人有趣多了。', color: '#800080' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 廚房：遇到科絲塔 (逗小孩) ---
        kitchen: [
            { type: 'scene', bg: assets.bg.kitchen },
            { type: 'join', char: getCharById('costa'), pos: 'left' },
            
            { type: 'say', name: '蜜拉思', text: '小科絲塔。妳在找什麼？', color: '#800080' },
            { type: 'say', name: '科絲塔', text: '蜜拉思先生……我在找糖果。BATA。', color: '#228b22' },
            
            { type: 'say', name: '蜜拉思', text: '糖果？我有喔。這顆紫色的，吃了會變成兔子，要嗎？', color: '#800080' },
            { type: 'narrate', text: '蜜拉思拿出了一顆看起來很可疑的糖果。' },
            
            { type: 'say', name: '科絲塔', text: '……騙人。克里昂說，物質守恆定律，人不能變成兔子。你不好心。', color: '#228b22' },
            { type: 'say', name: '蜜拉思', text: '哎呀，被識破了。真聰明，不好騙呢。嘻嘻。', color: '#800080' },
            
            { type: 'call', func: showMap }
        ]
    }
};