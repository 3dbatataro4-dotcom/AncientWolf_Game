// ==========================================
// 檔案：js/stories/routes/novian.js
// 角色：諾維安 (Novian)
// 身分：村長 (Mayor) / 船長 / 負責人
// 性格：陽光開朗、責任感強、苦勞人、真心為大家著想
// ==========================================

window.Story_novian = {
    // ----------------------------------------------------------------
    // 序章：振作起來的船長
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'day' }, 
        { type: 'sprite', char: getCharById('novian') },
        
        { type: 'say', name: '諾維安', text: '嗯……這張床還挺舒服的嘛！不過現在可不是睡覺的時候！', color: '#00ced1' },
        { type: 'narrate', text: '你睜開眼，看見一個紫髮青年正精神抖擻地在房間裡做伸展運動。' },
        { type: 'narrate', text: '他穿著類似船長的制服，笑容燦爛得和窗外的雷雨天完全不搭。' },
        
        { type: 'say', name: '諾維安', text: '喔！你醒啦！早安！我是諾維安，這艘……呃，這次旅行的負責人！', color: '#00ced1' },
        
        { type: 'choice', options: [
            { text: "這裡是哪裡？", consequence: [
                { type: 'say', name: '諾維安', text: '這裡是賽勒涅莊園！雖然發生了一點小意外（橋斷了），但別擔心，我會負責大家的安危的！', color: '#00ced1' }
            ]},
            { text: "你看起來很有精神？", consequence: [
                { type: 'say', name: '諾維安', text: '當然！身為船長，如果我先垂頭喪氣的話，大家會不安的！', color: '#00ced1' },
                { type: 'say', name: '諾維安', text: '笑容就是力量！哈哈！', color: '#00ced1' }
            ]}
        ]},

        { type: 'say', name: '諾維安', text: '廣播說要去大廳集合。我們快走吧！', color: '#00ced1' },
        { type: 'say', name: '諾維安', text: '得去確認一下大家的人數，還要檢查物資……哇，要做的事情好多！不過我會加油的！', color: '#00ced1' },
        { type: 'narrate', text: '他握緊拳頭給自己打氣，充滿了正能量（雖然有點刺眼）。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 大廳：遇到諾郎 (被守護的感覺) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('nuolang'), pos: 'left' },
            { type: 'playBgm', name: 'day' },
            
            { type: 'say', name: '諾維安', text: '諾郎！你在這裡啊！你的臉色看起來不太好，是不是哪裡不舒服？', color: '#00ced1' },
            { type: 'narrate', text: '諾維安擔心地湊過去，想摸摸諾郎的額頭。' },
            
            { type: 'say', name: '諾郎', text: '……我沒事。只是這裡空氣不好。', color: '#778899' },
            { type: 'say', name: '諾郎', text: '諾維安，你站到我這邊來。那邊風口大，而且……有些人看你的眼神不對勁。', color: '#778899' },
            
            { type: 'say', name: '諾維安', text: '哈哈，你想太多了啦！大家都是好夥伴啊！', color: '#00ced1' },
            { type: 'say', name: '諾郎', text: '（嘆氣）你就是太毫無防備了。總之，別離開我的視線。我答應過要還你人情的。', color: '#778899' },
            { type: 'say', name: '諾維安', text: '諾郎真是個好人呢！明明自己看起來更需要照顧。', color: '#00ced1' },
            
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_smell', '諾郎的警告', '諾郎似乎對周圍的環境非常警惕，並時刻保護著神經大條的諾維安。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 花園：遇到蘭蘭 (頭痛的熊孩子) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('lanlan'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            { type: 'say', name: '蘭蘭', text: '諾維安！你看！我把這些醜醜的草都拔掉了！', color: '#00ced1' },
            { type: 'narrate', text: '蘭蘭指著一地狼藉的花圃，一臉「快誇獎我」的表情。' },
            
            { type: 'say', name: '諾維安', text: '阿蘭！！那些是名貴的藥草啊！！', color: '#00ced1' },
            { type: 'narrate', text: '諾維安抱著頭，一臉崩潰。' },
            
            { type: 'say', name: '蘭蘭', text: '可是它們擋路呀！而且也沒有喬諾娜喜歡的花！', color: '#00ced1' },
            { type: 'say', name: '諾維安', text: '不管是什麽理由，破壞公物是不對的！要是莊園主人怪罪下來……', color: '#00ced1' },
            { type: 'say', name: '蘭蘭', text: '沒關係，蘭蘭會賠的！給他一顆鑽石夠不夠？不夠再加一顆！', color: '#00ced1' },
            { type: 'say', name: '諾維安', text: '這不是錢的問題啦……唉，算了，只要你開心就好（只要別放火）。', color: '#00ced1' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 圖書室：遇到林恩 (巨額債務) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('lynn'), pos: 'left' },
            
            { type: 'say', name: '林恩', text: '船長先生。關於剛才說的「精神賠償費」，我這裡擬了一份新的草案。', color: '#9400d3' },
            { type: 'narrate', text: '林恩拿著長長的帳單，像幽靈一樣出現在諾維安身後。' },
            
            { type: 'say', name: '諾維安', text: '哇啊！林恩先生！那個……我們能不能先談談怎麼逃出去？', color: '#00ced1' },
            { type: 'say', name: '林恩', text: '逃出去是你的工作。我的工作是確保我的資產不受損。', color: '#9400d3' },
            { type: 'say', name: '林恩', text: '如果你現在簽字，我可以給你打九五折。這已經是友情價了。', color: '#9400d3' },
            
            { type: 'say', name: '諾維安', text: '可是……我沒那麼多錢啊……我也只是個打工的船長……', color: '#00ced1' },
            { type: 'say', name: '林恩', text: '那就肉償……我是說，用勞力償還。你接下來十年的薪水都歸我管了。涼拌。', color: '#9400d3' },
            { type: 'say', name: '諾維安', text: '嗚嗚……我的未來一片黑暗……', color: '#00ced1' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到克里昂 (理性的對話) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('kleion'), pos: 'left' },
            
            { type: 'say', name: '克里昂', text: '諾維安船長。根據我的觀察，這座古堡的結構存在很多不合理的空間。', color: '#ff4500' },
            { type: 'say', name: '諾維安', text: '喔！是克里昂啊！不合理的空間？是指密室嗎？', color: '#00ced1' },
            
            { type: 'say', name: '克里昂', text: '很有可能。牆壁的厚度與房間面積對不上。或許藏著通風管道或維修通道。', color: '#ff4500' },
            { type: 'say', name: '諾維安', text: '太好了！那說不定是出口！我們趕快去調查一下！', color: '#00ced1' },
            { type: 'say', name: '克里昂', text: '別急。在沒有防護裝備的情況下進入未知空間是不理智的。我們需要制定計劃。', color: '#ff4500' },
            { type: 'say', name: '諾維安', text: '哈哈，克里昂真的很可靠呢！有你在我就放心了！', color: '#00ced1' },
            
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_structure', '古堡結構圖', '克里昂通過測量發現古堡內有許多隱藏空間，諾維安覺得這是逃生的希望。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 5. 廚房：遇到拿但業 (被嫌棄) ---
        kitchen: [
            { type: 'scene', bg: assets.bg.kitchen },
            { type: 'join', char: getCharById('nathanael'), pos: 'left' },
            
            { type: 'say', name: '拿但業', text: '這裡好髒！地上有油漬！我的鞋底會黏黏的！', color: '#90ee90' },
            { type: 'say', name: '諾維安', text: '拿但業少爺，忍耐一下嘛。現在不是講究這個的時候……', color: '#00ced1' },
            
            { type: 'say', name: '拿但業', text: '就是因為這種時候才要講究！如果連生活品質都放棄了，跟野獸有什麼兩樣？', color: '#90ee90' },
            { type: 'say', name: '拿但業', text: '你去把地拖乾淨。快點。腓力在忙，你剛好沒事做吧？', color: '#90ee90' },
            
            { type: 'say', name: '諾維安', text: '呃……我是負責人耶……', color: '#00ced1' },
            { type: 'say', name: '拿但業', text: '負責人就是負責服務大家的吧？快去！我要喝熱水！', color: '#90ee90' },
            { type: 'say', name: '諾維安', text: '好、好……我這就去拖地……（真是個任性的少爺啊）', color: '#00ced1' },
            
            { type: 'call', func: showMap }
        ]
    }
};