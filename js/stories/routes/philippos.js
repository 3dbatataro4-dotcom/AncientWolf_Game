// ==========================================
// 檔案：js/stories/routes/philippos.js
// 角色：腓力 (Philippos)
// 身分：預言家 (Seer) / 保鑣
// 性格：直率、單純、忠誠、武力高強 / 拿但業的專屬保母
// ==========================================

window.Story_philippos = {
    // ----------------------------------------------------------------
    // 序章：醒來與大喊大叫 (Day 0 Prologue)
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'day' }, // 使用充滿活力的音樂
        { type: 'sprite', char: getCharById('philippos') },
        
        // --- 大嗓門的開場 ---
        { type: 'say', name: '腓力', text: '「少主————！！！」', color: '#dc143c' },
        { type: 'narrate', text: '一聲中氣十足的怒吼差點震破你的耳膜。' },
        { type: 'narrate', text: '你睜開眼，看見一個身材魁梧、綁著馬尾的紅髮青年正焦急地在房間裡轉圈。他看起來像是一頭找不到主人的大型犬。' },
        
        { type: 'say', name: '腓力', text: '「喂！你！你看見我家少主了嗎？」', color: '#dc143c' },
        { type: 'narrate', text: '他衝到你面前，雙手抓住你的肩膀，力氣大得讓你齜牙咧嘴。' },
        { type: 'say', name: '腓力', text: '「捲頭髮！長得有點胖！脾氣……呃，脾氣很有個性！」', color: '#dc143c' },

        { type: 'choice', options: [
            { text: "沒看見，你先冷靜點。", consequence: [
                { type: 'say', name: '腓力', text: '「冷靜？！我怎麼能冷靜！少主從來沒離開過我身邊半步！要是他餓了怎麼辦？要是有人欺負他怎麼辦？」', color: '#dc143c' }
            ]},
            { text: "你是誰？", consequence: [
                { type: 'say', name: '腓力', text: '「我是腓力！拿但業少主的貼身護衛！」', color: '#dc143c' },
                { type: 'say', name: '腓力', text: '「這裡是哪裡？這床太軟了，少主睡了會腰疼的。」', color: '#dc143c' }
            ]}
        ]},

        { type: 'say', name: '腓力', text: '「廣播說要去大廳集合？少主一定在那裡！」', color: '#dc143c' },
        { type: 'say', name: '腓力', text: '「快走快走！我得趕緊去確認少主的安全。要是少主少了一根頭髮，我……我就把這座古堡拆了！」', color: '#dc143c' },
        { type: 'narrate', text: '雖然他說話很衝，但你能感覺到他並沒有惡意，只是一心一意地擔心著重要的人。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 廚房：遇到拿但業 (主僕互動/廚藝展示) ---
        kitchen: [
            { type: 'join', char: getCharById('nathanael'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            // 拿但業的抱怨
            { type: 'say', name: '拿但業', text: '「腓力——！你在哪裡——！我要餓死了——！」', color: '#90ee90' },
            { type: 'narrate', text: '一個穿著講究的紅髮少年正坐在餐桌邊，拿著銀湯匙敲打著盤子，一臉的不高興。' },
            
            // 腓力登場
            { type: 'say', name: '腓力', text: '「少主！！我在這裡！！」', color: '#dc143c' },
            { type: 'narrate', text: '腓力像一陣風一樣衝了過去，迅速檢查拿但業全身上下。' },
            { type: 'say', name: '腓力', text: '「少主你沒事吧？有沒有受傷？有沒有被奇怪的人嚇到？」', color: '#dc143c' },
            
            { type: 'say', name: '拿但業', text: '「吵死了！本少爺沒事，就是餓了。這裡的東西難吃死了，像是給豬吃的。」', color: '#90ee90' },
            { type: 'say', name: '腓力', text: '「我看過了，這裡的廚子確實不行。少主別急，我馬上給你做！」', color: '#dc143c' },
            
            { type: 'narrate', text: '腓力捲起袖子，熟練地拿起菜刀。原本粗魯的青年在拿起廚具的瞬間變得異常專注細膩。' },
            { type: 'say', name: '腓力', text: '（對你說）「喂，那邊那個。幫我把火升起來。我家少主胃口刁，不能餓著。」', color: '#dc143c' },
            { type: 'narrate', text: '沒過多久，一碗香氣四溢的麵條就端到了拿但業面前。' },
            
            { type: 'say', name: '拿但業', text: '「哼，這還差不多。腓力，你也吃一口。」', color: '#90ee90' },
            { type: 'say', name: '腓力', text: '「嘿嘿，少主先吃。我不餓。」', color: '#dc143c' },
            
            // 獲得線索 (發現廚房物資充足但有怪味)
            { type: 'call', func: () => { addClue('clue_food', '奇怪的肉', '腓力在做飯時發現冰箱深處有一些發黑的肉塊，被他扔掉了。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 花園：遇到彼得 (直覺/預言家的感應) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'playBgm', name: 'serious' },
            { type: 'join', char: getCharById('peter'), pos: 'left' },
            
            { type: 'narrate', text: '彼得正站在一棵枯樹下，對著空氣比手畫腳，神情有些癲狂。' },
            { type: 'say', name: '彼得', text: '「不對……不對！这里的風水被汙染了……是誰？誰把髒東西埋在下面？」', color: '#8b0000' },
            
            { type: 'say', name: '腓力', text: '「……少主說過，遇到瘋子要繞道走。」', color: '#dc143c' },
            { type: 'narrate', text: '腓力雖然嘴上這麼說，但他卻皺起了眉頭，手按在了腰間的武器上。' },
            
            { type: 'say', name: '腓力', text: '「喂！你！離我遠點。你身上的『氣』……很混濁。」', color: '#dc143c' },
            { type: 'say', name: '彼得', text: '「混濁？嘻嘻……你懂什麼？這是力量！國王的力量！」', color: '#8b0000' },
            
            { type: 'narrate', text: '腓力把你拉到了身後，神情嚴肅。' },
            { type: 'say', name: '腓力', text: '（低聲）「這傢伙不對勁。雖然我腦子沒少主好使，但我練過武，能感覺到殺氣。這裡面……有髒東西。」', color: '#dc143c' },
            
            // 獲得線索 (預言家的直覺)
            { type: 'call', func: () => { addClue('clue_aura', '混濁的氣息', '腓力憑藉直覺（或某種能力），感覺到彼得身上纏繞著不祥的氣息。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 3. 圖書室：遇到林恩 (貓？) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('lynn'), pos: 'left' },
            
            { type: 'narrate', text: '林恩正趴在桌子上睡覺，身邊堆滿了帳本。' },
            { type: 'say', name: '腓力', text: '「少主！你看！這裡有一隻大懶貓！」', color: '#dc143c' },
            { type: 'narrate', text: '腓力興奮地指著林恩，聲音大得嚇人。' },
            
            { type: 'say', name: '林恩', text: '「……吵死了。誰是貓啊？」', color: '#9400d3' },
            { type: 'narrate', text: '林恩緩緩抬起頭，眼神裡充滿了被吵醒的怨念。' },
            
            { type: 'say', name: '腓力', text: '「啊，抱歉。我看你縮成一團，跟我家鄉那隻花貓睡覺的姿勢一模一樣。」', color: '#dc143c' },
            { type: 'say', name: '林恩', text: '「……無聊。如果你沒有要交易的東西，就別打擾我休息。涼拌。」', color: '#9400d3' },
            
            { type: 'say', name: '腓力', text: '「真是個怪人。不過……」', color: '#dc143c' },
            { type: 'narrate', text: '腓力湊近看了看林恩手中的帳本。' },
            { type: 'say', name: '腓力', text: '「這傢伙雖然看起來懶，但帳本上記得清清楚楚。這莊園買了好多『黑水』？那是甚麼玩意？」', color: '#dc143c' },
            
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_ledger', '購買清單', '林恩的帳本上記錄著莊園近期購入了大量的化學藥劑與「聖水」。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到諾維安 (負責人) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('novian'), pos: 'left' },
            
            { type: 'say', name: '諾維安', text: '「這位客人，請不要在走廊上大聲喧嘩。」', color: '#00ced1' },
            { type: 'say', name: '腓力', text: '「喔！你是那個船長！喂，我問你，這裡到底安不安全？」', color: '#dc143c' },
            
            { type: 'say', name: '諾維安', text: '「當、當然安全！我們有完善的保全系統……雖然現在出了一點小意外。」', color: '#00ced1' },
            { type: 'say', name: '腓力', text: '「我看未必。這地方陰森森的，而且那邊那個窗戶鎖都壞了。」', color: '#dc143c' },
            { type: 'say', name: '腓力', text: '「聽著，如果這裡真的有危險，我會帶著少主衝出去。我不信任你們這些穿西裝的人。」', color: '#dc143c' },
            
            { type: 'say', name: '諾維安', text: '「請、請相信我！我會盡力保護大家的！」', color: '#00ced1' },
            
            { type: 'call', func: showMap }
        ]
    }
};