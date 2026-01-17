// ==========================================
// 檔案：js/stories/routes/nuolang.js
// 角色：諾郎 (Nuolang)
// 身分：調香師 (暗地裡是炸彈客) / 小目的弟弟
// 性格：陰沉、毒舌、有常識、保護諾維安、喜歡櫻桃汁
// ==========================================

window.Story_nuolang = {
    // ----------------------------------------------------------------
    // 序章：陰沉的開場
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'sneaky' }, 
        { type: 'sprite', char: getCharById('nuolang') },
        
        { type: 'say', name: '諾郎', text: '……濕度 85%。這種環境下，香氣分子會變得黏稠，令人作嘔。', color: '#778899' },
        { type: 'narrate', text: '你睜開眼，看見一個留著粉黃漸層及肩髮的男子正站在窗邊。' },
        { type: 'narrate', text: '他手裡拿著一瓶深紅色的液體（看起來像櫻桃汁），神情陰鬱，眼神中帶著一絲對現狀的審視。' },
        
        { type: 'say', name: '諾郎', text: '醒了？你看起來……一臉蠢樣。', color: '#778899' },
        { type: 'narrate', text: '他喝了一口手中的飲料，毫不客氣地評價道。' },

        { type: 'choice', options: [
            { text: "真沒禮貌。", consequence: [
                { type: 'say', name: '諾郎', text: '禮貌是社交的潤滑劑，但在這種生死未卜的情況下，只是多餘的偽裝。', color: '#778899' }
            ]},
            { text: "你在喝什麼？", consequence: [
                { type: 'say', name: '諾郎', text: '櫻桃汁。要來一點嗎？雖然我不打算分給你。', color: '#778899' },
                { type: 'say', name: '諾郎', text: '這是能讓我保持冷靜的燃料。' }
            ]}
        ]},

        { type: 'say', name: '諾郎', text: '我是諾郎。一個倒楣的調香師。', color: '#778899' },
        { type: 'say', name: '諾郎', text: '廣播說要去大廳。諾維安……船長應該也在那裡。', color: '#778899' },
        { type: 'say', name: '諾郎', text: '雖然很不想動，但為了確保恩人的安全，還是得去看看。', color: '#778899' },
        { type: 'say', name: '諾郎', text: '走吧。別離我太近，我身上帶著易燃物。如果你不想變成煙火的話。', color: '#778899' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 大廳：遇到諾維安 (唯一的好臉色/報恩) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('novian'), pos: 'left' },
            { type: 'playBgm', name: 'day' },
            
            { type: 'say', name: '諾維安', text: '大家不要慌！我們一定可以出去的！', color: '#00ced1' },
            
            { type: 'say', name: '諾郎', text: '諾維安。', color: '#778899' },
            { type: 'narrate', text: '諾郎原本陰沉的臉在看到諾維安時稍微柔和了一些。' },
            
            { type: 'say', name: '諾維安', text: '啊！諾郎！你也沒事，太好了！', color: '#00ced1' },
            { type: 'say', name: '諾郎', text: '這裡空氣流通性很差，還有股發霉的味道。你還好嗎？需要我幫你調一點提神的精油嗎？', color: '#778899' },
            
            { type: 'say', name: '諾維安', text: '不用了啦，我沒那麼嬌氣！倒是你看起來臉色不太好？', color: '#00ced1' },
            { type: 'say', name: '諾郎', text: '……我沒事。只是看到那邊有幾個討厭的傢伙，心情不好而已。', color: '#778899' },
            { type: 'say', name: '諾郎', text: '（低聲）如果有人敢給你找麻煩，跟我說。我會讓他這輩子都後悔出生。', color: '#778899' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 廚房：遇到喬諾娜 (吐槽戀愛腦哥哥) ---
        kitchen: [
            { type: 'join', char: getCharById('jornona'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            { type: 'say', name: '喬諾娜', text: '啊～不知道蘭蘭喜不喜歡吃這個～', color: '#ff69b4' },
            { type: 'narrate', text: '喬諾娜正拿著一個罐頭，滿臉幸福地傻笑。' },
            
            { type: 'say', name: '諾郎', text: '……哥。你的表情能不能收斂一點。', color: '#778899' },
            { type: 'narrate', text: '諾郎一臉「受不了」的表情走了進來。' },
            
            { type: 'say', name: '喬諾娜', text: '哎呀，是諾郎啊。你不懂啦，這就是愛～', color: '#ff69b4' },
            { type: 'say', name: '諾郎', text: '我確實不懂為什麼你要為了那條沒品的龍做到這個地步。', color: '#778899' },
            { type: 'say', name: '喬諾娜', text: '蘭蘭很可愛啊！而且他對我也很好！', color: '#ff69b4' },
            
            { type: 'say', name: '諾郎', text: '……隨便你。只要他沒欺負你就行。如果他敢對你不好，我就在他床底下放C4。', color: '#778899' },
            { type: 'say', name: '喬諾娜', text: '諾郎真是的，老是把爆炸掛在嘴邊，這樣會交不到女朋友喔～', color: '#ff69b4' },
            { type: 'say', name: '諾郎', text: '閉嘴。喝你的櫻桃汁去。', color: '#778899' },
            
            { type: 'call', func: () => { addClue('clue_smell', '特殊的香味', '諾郎在廚房聞到了一股不屬於食物的、類似化學藥劑的甜味。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 3. 花園：遇到小目 (嫌棄總裁弟弟) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('manmu'), pos: 'left' },
            
            { type: 'say', name: '小目', text: '這個花園的植被覆蓋率雖然達標，但修剪毫無美感。缺乏專業的園藝規劃。', color: '#ff1493' },
            
            { type: 'say', name: '諾郎', text: '……小目。你可以安靜一點嗎？', color: '#778899' },
            
            { type: 'say', name: '小目', text: '三哥？你這身打扮還是這麼……缺乏商業價值。你需要我幫你預約造型師嗎？', color: '#ff1493' },
            { type: 'say', name: '諾郎', text: '不需要。還有，別叫我三哥。聽到你那種總裁腔調我就頭痛。', color: '#778899' },
            
            { type: 'say', name: '小目', text: '嘖，不識好人心。我這是在提升家族形象。', color: '#ff1493' },
            { type: 'say', name: '諾郎', text: '省省吧。比起這個，你有沒有聞到？這裡的泥土裡有一股……鐵鏽味。', color: '#778899' },
            { type: 'say', name: '小目', text: '鐵鏽？可能是地下管線老化。需要更換。', color: '#ff1493' },
            { type: 'say', name: '諾郎', text: '……跟你說話真累。那是血的味道，白癡。', color: '#778899' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到蘭蘭 (沒品的龍) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('lanlan'), pos: 'left' },
            
            { type: 'say', name: '蘭蘭', text: '哇！諾郎！你在調香嗎？好香呀！', color: '#00ced1' },
            { type: 'narrate', text: '蘭蘭像隻大狗一樣湊了過來，鼻子動個不停。' },
            
            { type: 'say', name: '諾郎', text: '……離我遠點。你的品味會傳染。', color: '#778899' },
            { type: 'say', name: '蘭蘭', text: '別這麼冷淡嘛！蘭蘭可以跟你買香水喔！要最貴的那種！', color: '#00ced1' },
            
            { type: 'say', name: '諾郎', text: '我這裡只有硝化甘油的味道，你要嗎？', color: '#778899' },
            { type: 'say', name: '蘭蘭', text: '那是甚麼？好喝嗎？可以給喬諾娜喝嗎？', color: '#00ced1' },
            { type: 'say', name: '諾郎', text: '……喝了會死人的。你這傢伙腦子裡到底裝了什麼？', color: '#778899' },
            { type: 'say', name: '諾郎', text: '（嘆氣）真不知道二哥看上你哪一點。大概是有錢吧。', color: '#778899' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 圖書室：遇到克里昂 (化學組的碰撞) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('kleion'), pos: 'left' },
            
            { type: 'say', name: '克里昂', text: '……硫磺，木炭，還有硝酸鉀的殘留物。', color: '#ff4500' },
            { type: 'narrate', text: '克里昂正拿著一個試管觀察，他轉頭看向諾郎，推了推單邊眼鏡。' },
            
            { type: 'say', name: '克里昂', text: '你身上的化學物質濃度很高。根據配比推斷，你是做炸藥的？', color: '#ff4500' },
            
            { type: 'say', name: '諾郎', text: '……我是調香師。', color: '#778899' },
            { type: 'say', name: '諾郎', text: '不過，香水和炸彈在化學式上也沒差多少。只要結構稍微變一下……', color: '#778899' },
            
            { type: 'say', name: '克里昂', text: '有趣的論點。如果你需要提純技術，我們可以交流一下。', color: '#ff4500' },
            { type: 'say', name: '諾郎', text: '免了。我對冷冰冰的科學沒興趣，我追求的是「綻放」的瞬間。', color: '#778899' },
            
            { type: 'call', func: showMap }
        ]
    }
};