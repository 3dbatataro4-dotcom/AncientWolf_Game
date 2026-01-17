// ==========================================
// 檔案：js/stories/routes/mollie.js
// 角色：茉莉 (Mollie)
// 身分：女巫 (Witch) / 藥劑師
// 性格：男性、懶散、愛錢怕死、小目的戀人
// ==========================================

window.Story_mollie = {
    // ----------------------------------------------------------------
    // 序章：不想加班的藥劑師
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'cute' }, 
        { type: 'sprite', char: getCharById('mollie') },
        
        { type: 'say', name: '茉莉', text: '「哈啊……」', color: '#ff69b4' },
        { type: 'narrate', text: '一個留著粉色長髮的男人正癱坐在椅子上，發出了長長的嘆息。' },
        { type: 'narrate', text: '他雖然長得十分美麗，但那種彷彿被抽乾了靈魂的社畜氣質，明確地告訴你他現在只想躺平。' },
        
        { type: 'say', name: '茉莉', text: '「現在幾點了？這算工傷嗎？還是算無償加班？」', color: '#ff69b4' },
        { type: 'say', name: '茉莉', text: '「我明明記得我在休假……為什麼一覺醒來又在這種麻煩的地方……」', color: '#ff69b4' },
        
        { type: 'choice', options: [
            { text: "你看起來很累？", consequence: [
                { type: 'say', name: '茉莉', text: '「當然累。活著就很累。呼吸也很累。可以的話我真想當一株光合作用的植物。」', color: '#ff69b4' }
            ]},
            { text: "你是？", consequence: [
                { type: 'say', name: '茉莉', text: '「我是茉莉。一個被資本主義壓榨的可憐藥劑師。」', color: '#ff69b4' },
                { type: 'say', name: '茉莉', text: '「事先聲明，如果是體力活別找我。我會暈倒給你看的，我演技很好的。」', color: '#ff69b4' }
            ]}
        ]},

        { type: 'say', name: '茉莉', text: '「廣播說要去大廳？唉……走過去要花多少卡路里啊。」', color: '#ff69b4' },
        { type: 'say', name: '茉莉', text: '「芒果……小目在哪裡？我想讓他背我過去……」', color: '#ff69b4' },
        { type: 'narrate', text: '他慢吞吞地站了起來，駝著背，彷彿身上背負著全世界的怨氣，一步三晃地往外走。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段 (5個地點)
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 大廳：遇到諾維安 (關心賠償金) ---
        hall: [
            { type: 'join', char: getCharById('novian'), pos: 'left' },
            { type: 'say', name: '諾維安', text: '「請大家保持冷靜！我們正在嘗試修復通訊……」', color: '#00ced1' },
            
            { type: 'say', name: '茉莉', text: '「那個……船長先生？」', color: '#ff69b4' },
            { type: 'narrate', text: '茉莉舉起了一隻手，像是在課堂上提問的懶學生。' },
            
            { type: 'say', name: '諾維安', text: '「是？茉莉先生，你有什麼發現嗎？」', color: '#00ced1' },
            { type: 'say', name: '茉莉', text: '「這種非法監禁的情況，我是不是可以申請精神賠償？還有，這裡的住宿費是主辦方出吧？」', color: '#ff69b4' },
            
            { type: 'say', name: '諾維安', text: '「呃……現在不是討論這個的時候……」', color: '#00ced1' },
            { type: 'say', name: '茉莉', text: '「這很重要。如果是自費，我現在就死給你看喔。」', color: '#ff69b4' },
            { type: 'say', name: '諾維安', text: '「免、免費的！一切費用由莊園承擔！」', color: '#00ced1' },
            { type: 'say', name: '茉莉', text: '「那就好。呼……嚇得我差點心率過速。」', color: '#ff69b4' },
            
            { type: 'call', func: showMap }
        ],

        // --- 2. 廚房：遇到小目 (CP發糖/依賴芒果) ---
        kitchen: [
            { type: 'join', char: getCharById('manmu'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            { type: 'narrate', text: '小目正在廚房裡忙進忙出，手裡拿著消毒噴霧，正在處理餐具。' },
            { type: 'say', name: '小目', text: '「餐具表面菌落數超標。建議進行高溫殺菌流程。」', color: '#ff1493' },
            
            { type: 'say', name: '茉莉', text: '「芒果……」', color: '#ff69b4' },
            { type: 'narrate', text: '茉莉像個沒有骨頭的人一樣，從背後掛在了小目身上，把下巴抵在他的肩膀上。' },
            
            { type: 'say', name: '小目', text: '「！！」', color: '#ff1493' },
            { type: 'narrate', text: '小目身體僵硬了一下，但並沒有推開他，反而自然地伸手扶住了茉莉的腰。' },
            { type: 'say', name: '小目', text: '「茉莉。現在是公共場合。還有，我正在進行衛生作業……」', color: '#ff1493' },
            
            { type: 'say', name: '茉莉', text: '「我餓了。不想動。這裡好髒。我想回家。」', color: '#ff69b4' },
            { type: 'say', name: '小目', text: '「……我知道。再忍耐一下。」', color: '#ff1493' },
            { type: 'narrate', text: '小目嘆了口氣，從口袋裡掏出一塊包裝精美的能量棒，撕開包裝遞到茉莉嘴邊。' },
            
            { type: 'say', name: '小目', text: '「先吃這個。高熱量，易吸收。吃完去旁邊坐著，別弄髒手。」', color: '#ff1493' },
            { type: 'say', name: '茉莉', text: '「嗯……芒果最好了。」', color: '#ff69b4' },
            
            { type: 'call', func: () => { addClue('clue_drink', '奇怪的液體', '茉莉雖然懶，但身為藥劑師，他一眼就發現廚房角落的瓶子裡裝的不是飲料，而是化學藥劑。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 3. 走廊：遇到諾郎 (見家屬?) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('nuolang'), pos: 'left' },
            
            { type: 'narrate', text: '諾郎正縮在走廊的陰影裡，看起來陰氣沉沉。' },
            { type: 'say', name: '茉莉', text: '「哎呀，這不是芒果的弟弟嗎？」', color: '#ff69b4' },
            
            { type: 'say', name: '諾郎', text: '「……茉莉先生。」', color: '#778899' },
            { type: 'say', name: '諾郎', text: '「你也……被捲進來了啊。小目他……很擔心你。」', color: '#778899' },
            
            { type: 'say', name: '茉莉', text: '「他就是愛操心。明明是個機器腦袋，想得卻比誰都多。」', color: '#ff69b4' },
            { type: 'say', name: '茉莉', text: '「你看起來氣色很差喔？需要我給你開點抗憂鬱的藥嗎？雖然要收費就是了。」', color: '#ff69b4' },
            
            { type: 'say', name: '諾郎', text: '「……不用了。我聞到了……危險的味道。你最好一直待在小目身邊。」', color: '#778899' },
            { type: 'say', name: '茉莉', text: '「不用你說我也會這麼做～畢竟我是個柔弱的後勤人員嘛。」', color: '#ff69b4' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 4. 圖書室：遇到林恩 (怕老闆) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('lynn'), pos: 'left' },
            
            { type: 'narrate', text: '林恩正坐在書堆裡算帳，氣場強大且低氣壓。' },
            { type: 'say', name: '茉莉', text: '「呃……老闆。」', color: '#ff69b4' },
            { type: 'narrate', text: '原本還在抱怨的茉莉，看到林恩的瞬間立刻站直了一些（雖然還是有點駝背），表情變得有些畏縮。' },
            
            { type: 'say', name: '林恩', text: '「……茉莉。你在這裡晃什麼？不用幹活嗎？」', color: '#9400d3' },
            { type: 'say', name: '林恩', text: '「現在情況緊急。如果你敢偷懶，這個月的獎金全部扣光。」', color: '#9400d3' },
            
            { type: 'say', name: '茉莉', text: '「別啊！老闆！我、我正在調查！非常認真地調查！」', color: '#ff69b4' },
            { type: 'say', name: '茉莉', text: '「話說……這次算差旅嗎？有危險加給嗎？如果不幸殉職有撫卹金嗎？」', color: '#ff69b4' },
            
            { type: 'say', name: '林恩', text: '「活下來再跟我談錢。去把那些書整理一下。涼拌。」', color: '#9400d3' },
            { type: 'say', name: '茉莉', text: '「嗚……是……萬惡的資本家……」', color: '#ff69b4' },
            
            { type: 'call', func: () => { addClue('clue_resource', '林恩的帳本', '林恩正在計算古堡的價值，他命令茉莉找出所有值錢或有用的情報。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

// --- 5. 花園：遇到安德烈 (怕危險的發明家) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('andreas'), pos: 'left' },
            
            { type: 'narrate', text: '安德烈正站在花園中央，正在調試他左手的機械外骨骼，金屬關節發出沉重的液壓聲。' },
            
            { type: 'say', name: '茉莉', text: '「……那是什麽？好大的機械手……看起來被打到會很痛。」', color: '#ff69b4' },
            { type: 'narrate', text: '茉莉迅速躲到了你的身後，只探出一顆粉色的腦袋，一臉驚恐。' },
            
            { type: 'say', name: '安德烈', text: '「報告！發現兩名人員。請問有何貴幹？」', color: '#4169e1' },
            { type: 'narrate', text: '安德烈猛地轉身，眼神銳利，那一絲不苟的態度讓人感到壓力。' },
            
            { type: 'say', name: '茉莉', text: '「咿！別、別過來！我只是路過的！我骨質疏鬆！一碰就碎！」', color: '#ff69b4' },
            { type: 'say', name: '茉莉', text: '（對你說）「喂，我們快走吧。這種一板一眼的武鬥派（？）我最應付不來了。感覺隨時會被抓去勞動改造。」', color: '#ff69b4' },
            
            { type: 'say', name: '安德烈', text: '「……否定。這是輔助實驗用的精密儀器，並非武器。我也不會隨意攻擊平民。」', color: '#4169e1' },
            { type: 'say', name: '茉莉', text: '「呼……嚇死我了。那東西看起來跟凶器沒兩樣嘛……」', color: '#ff69b4' },
            
            { type: 'call', func: showMap }
        ]
    }
};