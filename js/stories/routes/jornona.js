// ==========================================
// 檔案：js/stories/routes/jornona.js
// 角色：喬諾娜 (Jornona)
// 身分：女僕 (仿生人) / 蘭蘭的戀人
// 性格：溫柔、求生欲強、有自知之明、覺得蘭蘭最可愛、吐槽役
// ==========================================

window.Story_jornona = {
    // ----------------------------------------------------------------
    // 序章：尋找蘭蘭的戀愛腦
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'cute' }, 
        { type: 'sprite', char: getCharById('jornona') },
        
        { type: 'say', name: '喬諾娜', text: '「蘭蘭……蘭蘭在哪裡？」', color: '#ff69b4' },
        { type: 'narrate', text: '一個穿著精緻女僕裝的高挑身影正擔憂地看著窗外。' },
        { type: 'narrate', text: '他整理了一下那頭粉黃漸層的長髮。雖然是男性，但為了蘭蘭的喜好，他穿得非常漂亮。' },
        
        { type: 'say', name: '喬諾娜', text: '「這裡感覺怪怪的……有點像B級恐怖片裡的場景。」', color: '#ff69b4' },
        { type: 'say', name: '喬諾娜', text: '「要是突然跳出電鋸殺人魔怎麼辦？我可打不過啊……得趕快找到蘭蘭才行。」', color: '#ff69b4' },

        { type: 'choice', options: [
            { text: "你是男生？", consequence: [
                { type: 'say', name: '喬諾娜', text: '「是啊。蘭蘭說這套衣服很適合我，我就一直穿著了。」', color: '#ff69b4' },
                { type: 'say', name: '喬諾娜', text: '「怎麼樣？是不是很可愛？這可是蘭蘭親自挑選的呢。」', color: '#ff69b4' }
            ]},
            { text: "你在找人？", consequence: [
                { type: 'say', name: '喬諾娜', text: '「嗯，我在找蘭蘭。他是一條很可愛的龍喔！雖然有點怕鬼，但還是很帥氣的！」', color: '#ff69b4' }
            ]}
        ]},

        { type: 'say', name: '喬諾娜', text: '「希望蘭蘭不要被嚇到了……雖然他真的很強，但膽子其實意外的小呢。」', color: '#ff69b4' },
        { type: 'narrate', text: '他嘆了口氣，雖然害怕，但為了找到戀人，還是鼓起勇氣往外走。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段 (5個地點)
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 廚房：遇到小目 (親兄弟的吐槽) ---
        kitchen: [
            { type: 'join', char: getCharById('manmu'), pos: 'left' },
            { type: 'playBgm', name: 'day' },
            
            // 小目在裝總裁
            { type: 'say', name: '小目', text: '「這張桌子的材質不符合高端審美。失敗的設計。」', color: '#ff1493' },
            
            // 喬諾娜登場
            { type: 'say', name: '喬諾娜', text: '「哎呀，這不是小目嗎？」', color: '#ff69b4' },
            
            { type: 'say', name: '小目', text: '「二哥！咳……我是說，喬諾娜。」', color: '#ff1493' },
            { type: 'narrate', text: '小目看到喬諾娜，原本端著的架子稍微放下來了一點，但還是很油。' },
            { type: 'say', name: '小目', text: '「你這身裝扮依然如此……獨特。但在這個資本運作的世界裡，只要能創造價值，我不予置評。」', color: '#ff1493' },
            
            { type: 'say', name: '喬諾娜', text: '「嘔……小目，你講話可以不要這麼油嗎？我快吐了。」', color: '#ff69b4' },
            { type: 'say', name: '喬諾娜', text: '「明明大家都是一家人，正常說話不行嗎？唉，真受不了～」', color: '#ff69b4' },
            { type: 'say', name: '喬諾娜', text: '「還是我的蘭蘭比較可愛，說話又直率又好聽。」', color: '#ff69b4' },
            
            { type: 'say', name: '小目', text: '「這是總裁的格調！你不懂！」', color: '#ff1493' },
            
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_food', '普通的食材', '喬諾娜在廚房找到了一些普通的食材，打算待會給蘭蘭做點好吃的。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 大廳：遇到蘭蘭 (盲目的暈船) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('lanlan'), pos: 'left' },
            
            { type: 'say', name: '蘭蘭', text: '「喬諾娜！你看這個吊燈！要是把它拆下來賣掉，可以買好多櫻桃呀！」', color: '#00ced1' },
            
            { type: 'say', name: '喬諾娜', text: '「蘭蘭！太好了，你沒事！」', color: '#ff69b4' },
            { type: 'narrate', text: '喬諾娜看到蘭蘭，眼睛裡瞬間冒出了愛心泡泡，之前的恐懼一掃而空。' },
            
            { type: 'say', name: '喬諾娜', text: '「蘭蘭說得對～這個吊燈雖然俗氣，但應該挺值錢的。蘭蘭真聰明！」', color: '#ff69b4' },
            { type: 'say', name: '蘭蘭', text: '「對吧！對吧！蘭蘭是不是很厲害呀！」', color: '#00ced1' },
            { type: 'say', name: '喬諾娜', text: '「嗯嗯，蘭蘭最厲害了～」', color: '#ff69b4' },
            
            { type: 'narrate', text: '喬諾娜完全是蘭蘭說什麼都好的狀態。' },
            
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_crystal', '吊燈碎片', '蘭蘭不知道什麼時候掰下來的一塊水晶，喬諾娜幫他收好了。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 3. 走廊：遇到維納托 (求生欲上線) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('venator'), pos: 'left' },
            
            { type: 'narrate', text: '維納托正靠在牆邊，擦拭著他的槍，氣場強大。' },
            
            { type: 'say', name: '維納托', text: '「哼，穿著裙子的男人。有趣的品味。」', color: '#0000ff' },
            
            { type: 'say', name: '喬諾娜', text: '「……！」', color: '#ff69b4' },
            { type: 'narrate', text: '喬諾娜瞬間感覺到了危險，本能地退後了一步。' },
            
            { type: 'say', name: '喬諾娜', text: '「抱、抱歉打擾了……我只是路過。」', color: '#ff69b4' },
            { type: 'say', name: '喬諾娜', text: '（小聲對你說）「{player}，我們快走。這個人感覺會隨便殺人，我可不想死在這裡。」', color: '#ff69b4' },
            
            { type: 'say', name: '維納托', text: '「本王對你沒興趣。滾吧。」', color: '#0000ff' },
            
            { type: 'narrate', text: '喬諾娜如獲大赦，拉著你趕緊提著裙子溜走了。' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 花園：遇到安德烈 (害怕危險武器) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('andreas'), pos: 'left' },

            { type: 'narrate', text: '安德烈正站在花園中央，機械臂發出運轉聲，看起來火力十足。' },
            
            { type: 'say', name: '喬諾娜', text: '「嗚……那是機器人嗎？還有槍？」', color: '#ff69b4' },
            { type: 'say', name: '安德烈', text: '「掃描中……身分不明。請保持距離。」', color: '#4169e1' },

            { type: 'say', name: '喬諾娜', text: '「好、好的！我馬上走！千萬別開槍！」', color: '#ff69b4' },
            { type: 'say', name: '喬諾娜', text: '「雖然蘭蘭可能會覺得這很酷，但我只覺得這很危險啊……」', color: '#ff69b4' },

            { type: 'call', func: showMap }
        ],

        // --- 5. 圖書室：遇到奧拉 (直覺敏銳) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('ola'), pos: 'left' },

            { type: 'narrate', text: '奧拉正拿著笛子，眼神空洞地看著前方。' },
            
            { type: 'say', name: '喬諾娜', text: '「……這個人是怎麼回事？感覺好陰森。」', color: '#ff69b4' },
            { type: 'say', name: '奧拉', text: '「……我在聽。命運的聲音。」', color: '#00bfff' },

            { type: 'say', name: '喬諾娜', text: '「咿！聽起來好毛！」', color: '#ff69b4' },
            { type: 'say', name: '喬諾娜', text: '「對不起打擾了！您繼續聽，我們去別的地方！」', color: '#ff69b4' },
            { type: 'narrate', text: '喬諾娜拉著你迅速離開了圖書室。' },
            { type: 'say', name: '喬諾娜', text: '「呼……比起那種神神叨叨的人，我還是比較喜歡唱歌跳舞這種開心的事。」', color: '#ff69b4' },

            { type: 'call', func: showMap }
        ]
    }
};