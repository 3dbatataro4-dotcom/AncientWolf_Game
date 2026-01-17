// ==========================================
// 檔案：js/stories/routes/manmu.js
// 角色：小目 (Manmu)
// 性格：理性潔癖的仿生人總裁 / 對內（家人愛人）溫柔 / 講求邏輯與效率
// ==========================================

window.Story_manmu = {
    // ----------------------------------------------------------------
    // 序章：醒來與初次對話 (Day 0 Prologue)
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'serious' },
        { type: 'sprite', char: getCharById('manmu') },
        
        // --- 總裁式開場：理性分析環境 ---
        { type: 'say', name: '小目', text: '「嘖……這張床的支撐係數完全不符合人體工學。脊椎受力不均，長期睡眠會導致機體耗損。」', color: '#ff1493' },
        { type: 'narrate', text: '一個富有磁性的聲音在房間裡響起，語氣冷靜但充滿了挑剔。' },
        { type: 'narrate', text: '你睜開眼，看見一個粉色頭髮的男人正站在窗前。他正拿著手帕，仔細地擦拭著窗框上的灰塵，彷彿那一點灰塵會影響他的運算速度。' },
        { type: 'say', name: '小目', text: '「既然醒了就別裝睡。時間就是金錢，每一秒的閒置都是對資源的浪費。」', color: '#ff1493' },
        
        // --- 自我介紹 ---
        { type: 'say', name: '小目', text: '「聽好了，我是小目。雖然在這種環境下頭銜意義不大，但基於溝通效率，你可以叫我目總。」', color: '#ff1493' },
        { type: 'narrate', text: '他轉過身，用一種掃描儀般的眼神上下打量了你一番，似乎在評估你的功能性。' },
        
        { type: 'choice', options: [
            { text: "目總好！我是……", consequence: [
                { type: 'say', name: '小目', text: '「停。名字只是一個代號。在證明你的價值之前，你暫時被歸類為『臨時合作夥伴』。」', color: '#ff1493' },
                { type: 'say', name: '小目', text: '「希望你的執行力能達到及格線，我不喜歡處理冗餘的錯誤。」', color: '#ff1493' }
            ]},
            { text: "你看起來很鎮定？", consequence: [
                { type: 'say', name: '小目', text: '「慌張能解決問題嗎？如果不能，那就是無效的情緒支出。作為決策者，我必須時刻保持核心邏輯的穩定。」', color: '#ff1493' },
                { type: 'say', name: '小目', text: '「雖然這古堡的衛生條件……確實讓我的清潔模組一直在報警。」', color: '#ff1493' }
            ]}
        ]},

        { type: 'say', name: '小目', text: '「廣播說要去大廳集合。記住，跟緊我。在陌生環境中單獨行動是高風險行為。」', color: '#ff1493' },
        { type: 'say', name: '小目', text: '「走吧，別讓我的投資——我是說時間，打水漂了。」', color: '#ff1493' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段 (根據地點觸發)
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 廚房：遇到腓力 (修正：衛生觀念衝突) ---
        kitchen: [
            { type: 'join', char: getCharById('philippos'), pos: 'left' },
            { type: 'say', name: '小目', text: '「……這就是這座莊園的餐飲配置？沒有無菌處理，食材堆疊雜亂，營養配比不明。」', color: '#ff1493' },
            { type: 'narrate', text: '小目看著滿桌狼藉的食物，輕輕推了推眼鏡，保持著安全距離。' },
            
            { type: 'say', name: '腓力', text: '「喔！總裁！要吃嗎？這雞腿我剛啃了一口，沒毒！我幫你試過了！」', color: '#dc143c' },
            
            { type: 'narrate', text: '小目看著那隻被啃過的雞腿，表情僵硬了一瞬，隨即禮貌但堅決地後退了一步。' },
            { type: 'say', name: '小目', text: '「……感謝你的好意，但這不符合我的衛生標準。」', color: '#ff1493' },
            { type: 'say', name: '小目', text: '「唾液交換是高風險的病菌傳播途徑。為了確保團隊戰力，建議你下次不要進行這種無效的『試毒』行為。」', color: '#ff1493' },
            
            { type: 'say', name: '腓力', text: '「啊？是這樣嗎？我身體很好的！不用擔心！」', color: '#dc143c' },
            { type: 'say', name: '小目', text: '（嘆氣）「溝通成本過高……算了。你留著自己補充熱量吧。」', color: '#ff1493' },
            
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_food', '安全的食物', '腓力確認過廚房的食物目前沒有毒性反應。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 圖書室：理性分析 (發現復活書) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'say', name: '小目', text: '「這裡的藏書管理混亂至極。沒有索引，沒有分類……檢索效率趨近於零。」', color: '#ff1493' },
            { type: 'narrate', text: '小目雖然嘴上嫌棄，但還是隨手抽出了一本書快速翻閱起來。他的閱讀速度快得驚人，彷彿在掃描數據。' },
            { type: 'say', name: '小目', text: '「《靈魂置換論》、《黑水的受洗》、《死者蘇生》……哼。」', color: '#ff1493' },
            { type: 'say', name: '小目', text: '「全是關於復活的迷信和野史。缺乏科學依據。」', color: '#ff1493' },
            { type: 'say', name: '小目', text: '「如果復活這麼容易，全球醫療產業早就崩盤了。這些書唯一的價值就是拿去燒火供暖，提升熱能轉換率。」', color: '#ff1493' },
            { type: 'say', name: '小目', text: '「不過……掌握敵人的情報也是商業競爭的一環。我們姑且記下來。」', color: '#ff1493' },
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_book', '復活的書籍', '圖書室裡堆滿了關於死者復活、受洗與黑水的奇怪書籍。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 3. 花園：遇到妹妹科絲塔 (展現護短哥哥的一面) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('costa'), pos: 'left' },
            { type: 'narrate', text: '小目看到在花圃裡挖土的綠髮少女，原本冷靜的表情瞬間變得柔和，甚至有點緊張。' },
            
            { type: 'say', name: '科絲塔', text: '「BATA……這裡是哪裡？我想找克里昂……這裡沒有好心人BATA……」', color: '#228b22' },
            { type: 'say', name: '小目', text: '「科絲塔！別亂跑！這裡排水系統很差，地上全是泥巴！」', color: '#ff1493' },
            
            { type: 'narrate', text: '小目不顧自己昂貴的皮鞋，快步走到科絲塔身邊，拿出潔白的手帕幫她擦掉臉上的泥土。' },
            { type: 'say', name: '小目', text: '「有沒有受傷？系統運轉正常嗎？那個叫克里昂的傢伙沒照顧好妳嗎？嘖，我就知道那種搞化學的靠不住。」', color: '#ff1493' },
            { type: 'say', name: '科絲塔', text: '「哥哥！BATA！小瓜沒事，小瓜在找亮亮的東西……」', color: '#228b22' },
            { type: 'say', name: '小目', text: '「想要亮亮的東西哥哥給妳買，把這整個花園鏟平了給妳蓋遊樂園都行。別玩泥巴了，不衛生。」', color: '#ff1493' },
            
            { type: 'narrate', text: '小目轉頭看向你，眼神恢復了平日的犀利。' },
            { type: 'say', name: '小目', text: '「喂，員工。幫我妹妹把那個發光的種子挖出來。別讓科絲塔弄髒手。」', color: '#ff1493' },
            
            // 獲得道具
            { type: 'call', func: () => { addItem('seed', '發光的種子', '科絲塔發現的種子，小目讓你幫忙挖出來的。', '🌱'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到茉莉 (CP 發糖 / 總裁形象崩壞) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'narrate', text: '走廊裡瀰漫著一股淡淡的菸草味。' },
            { type: 'join', char: getCharById('mollie'), pos: 'left' },
            { type: 'playBgm', name: 'cute' }, // 切換可愛音樂
            
            { type: 'say', name: '茉莉', text: '「哎呀，這不是我的芒果嗎？～」', color: '#ff69b4' },
            { type: 'narrate', text: '聽到這個聲音，小目原本緊繃的「總裁臉」瞬間融化了，眼神裡充滿了驚喜，甚至……有點害羞？' },
            
            { type: 'say', name: '小目', text: '「咳！茉莉！現在是嚴肅的調查時間。別、別在員工面前叫那個名字……」', color: '#ff1493' },
            { type: 'narrate', text: '小目有些慌亂地看了你一眼，試圖維持他的專業形象，但他的耳朵已經紅透了。' },
            
            { type: 'say', name: '茉莉', text: '「呼——」茉莉優雅地吐出一口煙圈，眼角帶著笑意，「可是我很累嘛。芒果你要保護我喔～」', color: '#ff69b4' },
            { type: 'say', name: '小目', text: '「那、那是自然！我可是總裁！保護……咳，保護重要資產是我的職責！」', color: '#ff1493' },
            { type: 'say', name: '小目', text: '「還有，少抽點菸。對肺部模組不好。我上次幫你預約的頂級健康檢查你又沒去……」', color: '#ff1493' },
            
            { type: 'say', name: '茉莉', text: '「好啦好啦，真囉嗦～待會見囉，我的大總裁。」', color: '#ff69b4' },
            { type: 'leave', pos: 'left' },
            
            { type: 'playBgm', name: 'day' }, // 切回日常音樂
            { type: 'say', name: '小目', text: '「……看什麼看？這叫內部人事管理。懂嗎？」', color: '#ff1493' },
            { type: 'narrate', text: '他假裝鎮定地整理了一下領帶，但嘴角的笑意完全壓不住。' },
            { type: 'call', func: showMap }
        ],

        // --- 5. 大廳：遇到諾郎 (家人互動 / 嘴硬心軟) ---
        hall: [
            { type: 'join', char: getCharById('nuolang'), pos: 'left' },
            { type: 'say', name: '小目', text: '「諾郎？你在這角落做什麼？這裡採光不足，容易導致情緒低落。」', color: '#ff1493' },
            { type: 'narrate', text: '雖然語氣帶著一貫的說教，但小目還是主動走到了諾郎身邊，擋在了他和冰冷的牆壁之間。' },
            
            { type: 'say', name: '諾郎', text: '「……小目。你也還活著啊。」', color: '#778899' },
            { type: 'say', name: '諾郎', text: '「空氣裡……有硫磺的味道。還有苦杏仁……這裡很危險。」', color: '#778899' },
            
            { type: 'say', name: '小目', text: '「嘖，我就知道。這裡的安防系統漏洞百出。風險評估不及格。」', color: '#ff1493' },
            { type: 'say', name: '小目', text: '「聽著，諾郎。如果你覺得害怕，就……哼，就躲遠點。或者站在我後面。」', color: '#ff1493' },
            { type: 'say', name: '小目', text: '「別誤會，我只是不想你死得太難看，丟了我們家的臉。畢竟你是我的哥哥……雖然是個不懂得經營自己的哥哥。」', color: '#ff1493' },
            { type: 'say', name: '諾郎', text: '「……謝謝你，小目。你自己也小心。」', color: '#778899' },
            
            { type: 'call', func: () => { addClue('clue_smell', '諾郎的嗅覺', '諾郎在大廳聞到了硫磺與苦杏仁味，暗示可能有爆炸物或毒物。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ]
    }
};