// ==========================================
// 檔案：js/stories/routes/peter.js
// 角色：彼得 (Peter)
// 身分：狼王 (Wolf King)
// 性格：神經質、潔癖、偏執、風水迷信、自稱「我」但傲慢
// ==========================================

window.Story_peter = {
    // ----------------------------------------------------------------
    // 序章：瘋狂的清潔工
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'sneaky' }, 
        { type: 'sprite', char: getCharById('peter') },
        
        { type: 'say', name: '彼得', text: '「髒……太髒了……」', color: '#8b0000' },
        { type: 'narrate', text: '你睜開眼，看見一個男人正趴在地上，用袖子瘋狂地擦拭著地板。他的動作神經質而急促，彷彿那裡有什麼看不見的污漬。' },
        
        { type: 'say', name: '彼得', text: '「擦不掉……為什麼擦不掉！這是詛咒！是那些髒東西留下的印記！」', color: '#8b0000' },
        { type: 'narrate', text: '他猛地抬起頭，那雙佈滿血絲的眼睛死死盯著你。' },
        
        { type: 'say', name: '彼得', text: '「你是誰？你也帶了髒東西進來嗎？快出去！我要消毒！」', color: '#8b0000' },

        { type: 'choice', options: [
            { text: "你在做什麼？", consequence: [
                { type: 'say', name: '彼得', text: '「我在淨化！這座古堡的風水被破壞了……有人把『惡意』埋在了地基裡！」', color: '#8b0000' }
            ]},
            { text: "我很乾淨！", consequence: [
                { type: 'say', name: '彼得', text: '「嘻嘻……沒有人是乾淨的。你的靈魂……也有黑點。」', color: '#8b0000' }
            ]}
        ]},

        { type: 'say', name: '彼得', text: '「我是彼得。記住這個名字。我是唯一能看清真相的人……」', color: '#8b0000' },
        { type: 'say', name: '彼得', text: '「大廳……對，要去大廳。那裡的吊燈位置不對，會招來煞氣。我必須去調整一下……」', color: '#8b0000' },
        { type: 'narrate', text: '他神神叨叨地站了起來，一邊咬著指甲，一邊搖搖晃晃地往外走。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段 (5個地點)
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 大廳：與諾維安的衝突 (風水大師) ---
        hall: [
            { type: 'join', char: getCharById('novian'), pos: 'left' },
            
            { type: 'say', name: '諾維安', text: '「彼得先生，請不要站在桌子上！那很危險！」', color: '#00ced1' },
            { type: 'narrate', text: '彼得正蹲在長桌上，死死盯著天花板上的水晶吊燈。' },
            
            { type: 'say', name: '彼得', text: '「閉嘴，凡人。你看不見嗎？這燈……就像一隻垂死的眼睛。」', color: '#8b0000' },
            { type: 'say', name: '彼得', text: '「它正盯著我們。它想掉下來……砸碎我們……變成一地紅色的玻璃渣。嘻嘻。」', color: '#8b0000' },
            
            { type: 'say', name: '諾維安', text: '「這、這只是普通的吊燈……」', color: '#00ced1' },
            { type: 'say', name: '彼得', text: '「普通？這座古堡裡沒有普通的東西。每一塊磚都在呼吸。你這個冒牌船長根本什麼都不懂。」', color: '#8b0000' },
            
            { type: 'call', func: showMap }
        ],

        // --- 2. 廚房：遇到安德烈 (忠誠的護衛) ---
        kitchen: [
            { type: 'join', char: getCharById('andreas'), pos: 'left' },
            { type: 'playBgm', name: 'serious' },
            
            { type: 'say', name: '安德烈', text: '「教官！這裡的食物檢測完畢。雖然不完美，但可以維持生命體徵。」', color: '#4169e1' },
            { type: 'narrate', text: '彼得嫌棄地看了一眼食物，摀住了口鼻。' },
            
            { type: 'say', name: '彼得', text: '「別碰！安德烈，我教過你多少次了？入口的東西最容易被下咒。」', color: '#8b0000' },
            { type: 'say', name: '彼得', text: '「我聞到了……這肉裡有死人的味道。廚師一定是個黑巫師。」', color: '#8b0000' },
            
            { type: 'say', name: '安德烈', text: '「收到！立即封鎖廚房區域！保護教官安全！」', color: '#4169e1' },
            { type: 'say', name: '彼得', text: '（轉向你）「你也別吃。除非你想肚子裡長出蛇來。嘻嘻……」', color: '#8b0000' },
            
            { type: 'call', func: () => { addClue('clue_poison', '彼得的警告', '彼得堅稱廚房的食物被下了「詛咒」，雖然聽起來像瘋話，但不得不防。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 3. 走廊：遇到維納托 (狼與獵人) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('venator'), pos: 'left' },
            
            { type: 'narrate', text: '維納托正優雅地擦拭著手中的左輪手槍。彼得看到他，背瞬間弓了起來，像是一隻炸毛的野獸。' },
            
            { type: 'say', name: '彼得', text: '「鐵鏽味……火藥味……你是來打獵的？」', color: '#8b0000' },
            { type: 'say', name: '維納托', text: '「喔？你的鼻子倒是很靈。瘋狗的直覺嗎？」', color: '#0000ff' },
            
            { type: 'say', name: '彼得', text: '「別惹我。我知道你手裡拿的是什麼。那是帶來死亡的凶器……是大凶之物！」', color: '#8b0000' },
            { type: 'say', name: '維納托', text: '「哼，這可是藝術品。不過對你這種瘋子來說，大概是對牛彈琴吧。」', color: '#0000ff' },
            { type: 'say', name: '彼得', text: '「離我遠點……不然我會把你撕碎……連同你的玩具一起。」', color: '#8b0000' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 花園：遇到腓力 (宿敵感應) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('philippos'), pos: 'left' },
            
            { type: 'narrate', text: '腓力正警惕地盯著彼得。' },
            { type: 'say', name: '腓力', text: '「喂，你。離這邊遠點。你的眼神讓我很不舒服。」', color: '#dc143c' },
            
            { type: 'say', name: '彼得', text: '「不舒服？那是因為你也感應到了吧？地下的脈動……咚、咚、咚……」', color: '#8b0000' },
            { type: 'narrate', text: '彼得趴在地上，耳朵貼著泥土，表情狂熱。' },
            { type: 'say', name: '彼得', text: '「它在下面！黑色的水！它要湧上來了！我們都會被淹沒！」', color: '#8b0000' },
            
            { type: 'say', name: '腓力', text: '「瘋子。少主，我們走。」', color: '#dc143c' },
            { type: 'leave', pos: 'left' },
            
            { type: 'say', name: '彼得', text: '「逃吧……逃也沒用。沒有人能逃過『受洗』。」', color: '#8b0000' },
            
            { type: 'call', func: () => { addClue('clue_blackwater', '地下黑水', '彼得聲稱古堡地下有黑水流動，且即將湧出。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 5. 圖書室：遇到奧拉 (噪音與控制) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('ola'), pos: 'left' },
            
            { type: 'narrate', text: '奧拉正靜靜地擦拭著他的笛子。' },
            { type: 'say', name: '彼得', text: '「停下！把那根棍子拿開！」', color: '#8b0000' },
            { type: 'narrate', text: '彼得痛苦地摀住耳朵，彷彿聽到了什麼刺耳的聲音（雖然奧拉根本沒吹）。' },
            
            { type: 'say', name: '彼得', text: '「那個聲音……會鑽進腦子裡！會控制我！不要吹！我不要聽！」', color: '#8b0000' },
            { type: 'say', name: '奧拉', text: '「……你的靈魂很吵鬧。充滿了裂痕。」', color: '#00bfff' },
            
            { type: 'say', name: '彼得', text: '「閉嘴！我才是這裡的王！沒有人能控制我！」', color: '#8b0000' },
            { type: 'narrate', text: '彼得的情緒極度不穩定，隨時可能暴走。' },
            
            { type: 'call', func: showMap }
        ]
    }
};