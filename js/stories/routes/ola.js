// ==========================================
// 檔案：js/stories/routes/ola.js
// 角色：奧拉 (Ola)
// 身分：吹笛人 (Piper) / 記錄旋律的神
// 性格：高自尊、小心眼、話少平淡、尊重人、討厭雜音
// ==========================================

window.Story_ola = {
    // ----------------------------------------------------------------
    // 序章：調音
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'serious' }, 
        { type: 'sprite', char: getCharById('ola') },
        
        { type: 'narrate', text: '房間裡很安靜，只有手指敲擊銀笛的細微聲響。' },
        { type: 'narrate', text: '一個藍髮青年正坐在椅子上，神情專注地檢查著手中的樂器。他看起來很平靜，與周圍詭異的環境格格不入。' },
        
        { type: 'say', name: '奧拉', text: '醒了？', color: '#00bfff' },
        { type: 'narrate', text: '他抬起頭，金色的眼眸淡淡地掃了你一眼，沒有什麼情緒。' },
        
        { type: 'say', name: '奧拉', text: '你的呼吸頻率有點亂。建議調整一下。', color: '#00bfff' },

        { type: 'choice', options: [
            { text: "你是誰？", consequence: [
                { type: 'say', name: '奧拉', text: '奧拉。', color: '#00bfff' },
                { type: 'say', name: '奧拉', text: '如你所見，只是個拿著笛子的人。', color: '#00bfff' }
            ]},
            { text: "這裡發生什麼事了？", consequence: [
                { type: 'say', name: '奧拉', text: '不知道。但我聽到了大廳有集合的聲音。', color: '#00bfff' },
                { type: 'say', name: '奧拉', text: '去看看就知道了。我不喜歡猜測。', color: '#00bfff' }
            ]}
        ]},

        { type: 'say', name: '奧拉', text: '走吧。我不喜歡遲到。那不符合禮儀。', color: '#00bfff' },
        { type: 'narrate', text: '他站起身，拍了拍衣服上不存在的灰塵，步履從容地走向門口。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 花園：遇到納希瑟斯 (嚴師的指點) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('narcissus'), pos: 'left' },
            
            { type: 'say', name: '納希瑟斯', text: '老師！您在這裡！', color: '#8a2be2' },
            { type: 'narrate', text: '納希瑟斯看到奧拉，立刻恭敬地跑了過來。' },
            
            { type: 'say', name: '奧拉', text: '納希瑟斯。你的聲音太大了。', color: '#00bfff' },
            { type: 'say', name: '納希瑟斯', text: '抱歉，老師。我只是有點擔心。這裡的情況……還有維納托先生……', color: '#8a2be2' },
            
            { type: 'say', name: '奧拉', text: '那個國王？他自己會照顧自己。', color: '#00bfff' },
            { type: 'say', name: '奧拉', text: '你總是為這種瑣事心神不寧。這會影響你的判斷。', color: '#00bfff' },
            { type: 'say', name: '奧拉', text: '保持安靜。觀察。然後再行動。懂了嗎？', color: '#00bfff' },
            
            { type: 'say', name: '納希瑟斯', text: '是……我知道了，老師。', color: '#8a2be2' },
            { type: 'say', name: '奧拉', text: '（小聲）真是個吵鬧的學生。', color: '#00bfff' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 廚房：遇到腓力 (嫌吵/頻率不合) ---
        kitchen: [
            { type: 'join', char: getCharById('philippos'), pos: 'left' },
            { type: 'playBgm', name: 'day' },
            
            { type: 'say', name: '腓力', text: '少主！！這個湯好燙啊！！呼呼！！', color: '#dc143c' },
            { type: 'narrate', text: '腓力正在大呼小叫地試吃剛煮好的湯，鍋碗瓢盆撞擊的聲音此起彼落。' },
            
            { type: 'say', name: '奧拉', text: '……太吵了。', color: '#00bfff' },
            { type: 'narrate', text: '奧拉微微皺眉，這並非厭惡，而是像聽到了走音的樂器一樣感到生理上的不適。' },
            
            { type: 'say', name: '腓力', text: '啊？你誰啊？在嘀咕什麼？想喝湯嗎？', color: '#dc143c' },
            { type: 'say', name: '奧拉', text: '你的聲音分貝過高，且缺乏韻律。這會干擾我對周圍環境的感知。', color: '#00bfff' },
            
            { type: 'say', name: '腓力', text: '哈？聽不懂你在說什麼文縐縐的話。不喝拉倒！', color: '#dc143c' },
            { type: 'say', name: '奧拉', text: '……頻率無法對接。溝通無效。', color: '#00bfff' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 圖書室：遇到蜜拉思 (有趣的同事) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('melas'), pos: 'left' },
            
            { type: 'say', name: '蜜拉思', text: '嘻嘻……奧拉。你也對這些古老的劇本感興趣嗎？', color: '#800080' },
            { type: 'narrate', text: '蜜拉思手裡拿著一本關於儀式的書，眼神玩味。' },
            
            { type: 'say', name: '奧拉', text: '我只對記錄在案的「事實」感興趣。這本書……記載了蝕月教團的受洗儀式。', color: '#00bfff' },
            { type: 'say', name: '蜜拉思', text: '這可不是單純的記錄，這是接下來要上演的戲碼。你不覺得這很有趣嗎？', color: '#800080' },
            
            { type: 'say', name: '奧拉', text: '期待？不。這只是樂章發展的必然。', color: '#00bfff' },
            { type: 'say', name: '奧拉', text: '當惡意積累到一定程度，就會尋找宣洩的出口。就像滿溢的水，必然會決堤。', color: '#00bfff' },
            { type: 'say', name: '蜜拉思', text: '你還是這麼無趣～明明我們可以一起欣賞這場魔術秀的。', color: '#800080' },
            
            { type: 'call', func: () => { addClue('clue_book', '儀式記錄', '奧拉和蜜拉思正在研究關於古堡結構與儀式的關聯性。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到科絲塔 (客觀的觀察) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('costa'), pos: 'left' },
            
            { type: 'narrate', text: '科絲塔正抱著玩偶縮在牆角，低聲啜泣。' },
            
            { type: 'say', name: '奧拉', text: '……讓路。妳擋到我了。', color: '#00bfff' },
            
            { type: 'say', name: '科絲塔', text: '嗚嗚……BATA……對不起……', color: '#228b22' },
            { type: 'narrate', text: '奧拉停下腳步，靜靜地看著她。' },
            
            { type: 'choice', options: [
                { text: "不去安慰她嗎？", consequence: [
                    { type: 'say', name: '奧拉', text: '哭泣是一種釋放壓力的生理機制，但對改變現狀毫無幫助。', color: '#00bfff' }
                ]},
                { text: "你真冷靜。", consequence: [
                    { type: 'say', name: '奧拉', text: '慌亂會打亂呼吸的節奏。在這種地方，亂了節奏就意味著死亡。', color: '#00bfff' }
                ]}
            ]},
            
            { type: 'say', name: '奧拉', text: '小女孩。妳的哭聲引發了空氣的震動。如果這裡有獵食者，妳就是最好的路標。', color: '#00bfff' },
            { type: 'narrate', text: '這句話雖然聽起來無情，但卻是實質的警告。科絲塔嚇得立刻摀住了嘴巴。', color: '#00bfff' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 大廳：遇到彼得 (噪音與雜質) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('peter'), pos: 'left' },
            
            { type: 'narrate', text: '彼得正摀著耳朵在地上打滾，彷彿聽見了什麼旁人聽不見的聲音。' },
            { type: 'say', name: '彼得', text: '別吹了！別吹了！那個聲音……在鑽我的腦子！把它趕走！', color: '#8b0000' },
            
            { type: 'say', name: '奧拉', text: '……我並沒有吹奏。', color: '#00bfff' },
            { type: 'narrate', text: '奧拉平靜地看著發狂的彼得。' },
            
            { type: 'say', name: '奧拉', text: '你聽到的不是笛聲，是你自己靈魂裂縫中發出的嘶吼。', color: '#00bfff' },
            { type: 'say', name: '彼得', text: '閉嘴！騙子！你想控制我！我是國王！我命令你閉嘴！', color: '#8b0000' },
            
            { type: 'say', name: '奧拉', text: '……可悲的靈魂。已經被雜質侵蝕得千瘡百孔了。', color: '#00bfff' },
            { type: 'narrate', text: '奧拉拿出筆記本，彷彿在記錄一個實驗數據般，寫下了彼得的狀態。' },
            
            { type: 'call', func: showMap }
        ]
    }
};