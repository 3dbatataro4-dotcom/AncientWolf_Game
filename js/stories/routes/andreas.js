// ==========================================
// 檔案：js/stories/routes/andreas.js
// 角色：安德烈 (Andreas)
// 身分：發明家 / 彼得的弟弟 / 紙會教徒
// 性格：認真、紳士、較真、口頭禪「報告！」
// ==========================================

window.Story_andreas = {
    // ----------------------------------------------------------------
    // 序章：檢查設備的發明家
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'serious' }, 
        { type: 'sprite', char: getCharById('andreas') },
        
        // --- 認真的開場 ---
        { type: 'narrate', text: '「報告！左臂外骨骼液壓正常。翻譯模組……訊號接收中。」' },
        { type: 'narrate', text: '你睜開眼，看見一個黑髮男子正冷靜地檢查著自己左手上的機械裝置。' },
        { type: 'narrate', text: '他有一雙寶藍色的眼睛，左耳戴著一個金屬耳飾，看起來斯文、理性且充滿智慧。' },
        
        { type: 'say', name: '安德烈', text: '報告！發現倖存者一名。請問你的身體機能運作是否正常？', color: '#4169e1' },
        
        { type: 'choice', options: [
            { text: "你是機器人？", consequence: [
                { type: 'say', name: '安德烈', text: '否定。我是人類。這是輔助用的機械外骨骼，用於精密作業。', color: '#4169e1' },
                { type: 'say', name: '安德烈', text: '我是安德烈。一名發明家。', color: '#4169e1' }
            ]},
            { text: "我沒事。", consequence: [
                { type: 'say', name: '安德烈', text: '收到。目前環境參數未知，建議前往大廳與其他人匯合。', color: '#4169e1' }
            ]}
        ]},

        { type: 'say', name: '安德烈', text: '不知道小雅各在哪裡……我的翻譯裝置還沒接收到他的頻率。', color: '#4169e1' },
        { type: 'narrate', text: '他按了按左耳的耳飾，眉頭微微皺起，眼神中流露出一絲不易察覺的溫柔與擔憂。' },
        { type: 'say', name: '安德烈', text: '還有彼得……要是沒有人看著，他可能又會去嘗試食用非食品類物質了。報告！必須立即行動！', color: '#4169e1' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 廚房：遇到小雅各 (心聲與靚仔) ---
        kitchen: [
            { type: 'join', char: getCharById('james'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            // 小雅各在心裡罵髒話/發花癡 (摩斯電碼)
            { type: 'narrate', text: '小雅各正一臉乖巧地站在那裡，但安德烈的耳飾卻瘋狂閃爍紅光。' },
            { type: 'narrate', text: '安德烈耳邊傳來翻譯後的聲音：（嗶——嗶嗶——這裡好髒——媽的——）' },
            
            { type: 'say', name: '安德烈', text: '小雅各。', color: '#4169e1' },
            { type: 'say', name: '小雅各', text: '啊！安德烈！你來啦！', color: '#00ffff' }, // 假設小雅各ID是james
            
            { type: 'narrate', text: '小雅各露出靦腆的笑容，但心聲繼續傳來：（嗶——靚仔來了！好帥！媽的真帥！想摸！）' },
            { type: 'say', name: '安德烈', text: '……報告。你的心聲訊號過強。請控制一下頻率。', color: '#4169e1' },
            
            { type: 'say', name: '小雅各', text: '唔……我、我不知道你在說什麼……（臉紅）', color: '#00ffff' },
            { type: 'say', name: '安德烈', text: '這裡食物充足嗎？有沒有人浪費食物？我知道你會不開心。', color: '#4169e1' },
            { type: 'say', name: '小雅各', text: '目前還好……安德烈，你的手沒事吧？', color: '#00ffff' },
            { type: 'say', name: '安德烈', text: '運作正常。小雅各……真可愛。（小聲）', color: '#4169e1' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 大廳：遇到彼得 (幫哥哥收爛攤子) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('peter'), pos: 'left' },
            { type: 'playBgm', name: 'serious' },
            
            { type: 'say', name: '彼得', text: '這裡有鬼！我要喝潔廁靈驅邪！快給我！我感覺到了！', color: '#8b0000' },
            { type: 'narrate', text: '彼得正試圖衝進廁所，安德烈一把抓住了他（用外骨骼強化的手，穩如泰山）。' },
            
            { type: 'say', name: '安德烈', text: '報告！禁止食用強鹼性腐蝕液體！彼得！根據化學常識，那會導致食道穿孔！', color: '#4169e1' },
            { type: 'say', name: '彼得', text: '放開我！你這個逆子！你想害死我嗎！那是聖水！', color: '#8b0000' },
            
            { type: 'say', name: '安德烈', text: '我是你弟弟。報告！我可以打暈你嗎？為了你的生命安全著想。', color: '#4169e1' },
            { type: 'say', name: '彼得', text: '你敢！林恩呢？我的貓呢？快把貓找來！只有貓能救我！', color: '#8b0000' },
            { type: 'say', name: '安德烈', text: '收到。尋找林恩列為最高優先級任務。這傢伙只有林恩治得了。', color: '#4169e1' },
            
            { type: 'call', func: () => { addClue('clue_peter', '彼得的異常', '安德烈證實彼得有異食癖和中邪妄想，需要林恩在場才能鎮定。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 3. 圖書室：遇到林恩 (專利交易) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('lynn'), pos: 'left' },
            
            { type: 'say', name: '安德烈', text: '報告！林恩先生！', color: '#4169e1' },
            { type: 'say', name: '林恩', text: '……好大聲。幹嘛？如果是彼得發瘋了別找我，現在是非工作時間。', color: '#9400d3' },
            
            { type: 'say', name: '安德烈', text: '關於我最新研發的「自動驅邪機器人」專利，以及彼得名下的三座礦山……', color: '#4169e1' },
            { type: 'say', name: '林恩', text: '（眼睛一亮）成交。他在哪裡？我去看看我有創意的合作夥伴。', color: '#9400d3' },
            
            { type: 'say', name: '安德烈', text: '感謝配合。請務必看好他，別讓他再來禍害我了。我想和小雅各安靜地待一會。', color: '#4169e1' },
            { type: 'narrate', text: '安德烈為了擺脫哥哥，毫不猶豫地出賣了家產。', color: '#4169e1' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到拿但業 (花瓶的恩怨) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('nathanael'), pos: 'left' },
            
            { type: 'say', name: '拿但業', text: '哼，是你啊。破壞狂。', color: '#90ee90' },
            { type: 'say', name: '安德烈', text: '報告！那是意外！當時我在測試新型推進器，軌道計算出現了 0.01% 的誤差。', color: '#4169e1' },
            
            { type: 'say', name: '拿但業', text: '那個花瓶是乾隆年間的！你賠得起嗎？那可是我的寶貝！', color: '#90ee90' },
            { type: 'say', name: '安德烈', text: '我已經發明了「自動修復膠水」並將其修復完畢，且賠償了相應的金額。功能上完全沒有問題。', color: '#4169e1' },
            { type: 'say', name: '拿但業', text: '那是美感的問題！裂痕就是裂痕！算了，跟你這種理工男說不通。走開，別擋路。', color: '#90ee90' },
            { type: 'say', name: '安德烈', text: '收到。讓出通道。', color: '#4169e1' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 花園：遇到腓力 (力量觀察) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('philippos'), pos: 'left' },
            
            { type: 'say', name: '腓力', text: '嘿！安德烈！你的手好帥啊！可以借我玩玩嗎？', color: '#dc143c' },
            { type: 'say', name: '安德烈', text: '否定。這是精密儀器。不是玩具。請勿觸摸。', color: '#4169e1' },
            
            { type: 'say', name: '腓力', text: '小氣～那比腕力？我不用內力，你用機械手，看看誰贏！', color: '#dc143c' },
            { type: 'say', name: '安德烈', text: '……無意義的能量消耗。但根據數據分析，你的肌肉密度非常高。像牛一樣。', color: '#4169e1' },
            { type: 'say', name: '安德烈', text: '報告！如果你能幫我搬運一些重型實驗設備，我可以考慮讓你看一下內部構造圖。', color: '#4169e1' },
            { type: 'say', name: '腓力', text: '成交！只要不是算數學就行！', color: '#dc143c' },
            
            { type: 'call', func: showMap }
        ]
    }
};