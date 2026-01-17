// ==========================================
// 檔案：js/stories/routes/venator.js
// 角色：維納托 (Venator)
// 身分：獵人 (Hunter) / 自稱「本王」的自戀狂
// 性格：自大、優雅、認為自己最美、納希瑟斯的戀人(主人?)
// ==========================================

window.Story_venator = {
    // ----------------------------------------------------------------
    // 序章：國王的甦醒
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'serious' }, 
        { type: 'sprite', char: getCharById('venator') },
        
        { type: 'say', name: '維納托', text: '……哼。這張床的絲綢支數不夠。勉強能睡。', color: '#0000ff' },
        { type: 'narrate', text: '你睜開眼，看見一個銀色長髮的男人正坐在床邊，對著鏡子整理他的儀容。' },
        { type: 'narrate', text: '他穿著華麗的長風衣，舉手投足間充滿了與生俱來的貴氣（和自戀）。' },
        
        { type: 'say', name: '維納托', text: '醒了嗎？庶民。能見到本王剛睡醒的樣子，是你幾輩子修來的福氣。', color: '#0000ff' },
        
        { type: 'choice', options: [
            { text: "你是誰？", consequence: [
                { type: 'say', name: '維納托', text: '尼古拉斯．維納托。當然，你也可以稱呼我為「陛下」或者「King」。', color: '#0000ff' },
                { type: 'say', name: '維納托', text: '記好了，這張臉可是造物主的奇蹟。', color: '#0000ff' }
            ]},
            { text: "你是國王？", consequence: [
                { type: 'say', name: '維納托', text: '當然。雖然我的王國在另一個層次，但在這裡，我依然是支配者。', color: '#0000ff' }
            ]}
        ]},

        { type: 'say', name: '維納托', text: '既然醒了，就跟上吧。本王感覺到了納希瑟斯的氣息。', color: '#0000ff' },
        { type: 'say', name: '維納托', text: '那傢伙如果長時間看不到我，會因為焦慮而變得煩人的。為了耳根清靜，本王得去讓他安心一下。', color: '#0000ff' },
        { type: 'narrate', text: '他優雅地轉身，衣擺在空中劃出一道完美的弧線，彷彿這裡不是陰森的古堡，而是他的皇宮走廊。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 花園：遇到納希瑟斯 (理所當然的接受服侍) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('narcissus'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            // 納希瑟斯正在焦急尋找
            { type: 'say', name: '納希瑟斯', text: '維納托先生！您在哪裡？這裡的露水很重，會弄濕您的鞋子的！', color: '#8a2be2' },
            
            // 維納托登場
            { type: 'say', name: '維納托', text: '我在這裡。吵死了，納希瑟斯。', color: '#0000ff' },
            { type: 'narrate', text: '納希瑟斯看到維納托，眼睛瞬間亮了起來，像隻看到主人的大金毛衝了過來。' },
            
            { type: 'say', name: '納希瑟斯', text: '維納托先生！太好了，您的髮型還是這麼完美！', color: '#8a2be2' },
            { type: 'narrate', text: '納希瑟斯自然地跪下，拿出不知從哪變出來的手帕，輕輕擦拭維納托鞋面上的一點點灰塵。' },
            
            { type: 'say', name: '維納托', text: '那是自然。就算世界毀滅，本王的美貌也是永恆的。', color: '#0000ff' },
            { type: 'say', name: '維納托', text: '不過，這花園的配色太俗氣了。配不上本王。我們走吧。', color: '#0000ff' },
            { type: 'say', name: '納希瑟斯', text: '遵命！我會一直跟在您身後，為您擋住所有灰塵的！', color: '#8a2be2' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 大廳：遇到彼得 (真假國王) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('peter'), pos: 'left' },
            
            { type: 'narrate', text: '彼得正披著一條窗簾布當披風，手裡拿著雞毛撢子當權杖。' },
            { type: 'say', name: '彼得', text: '我是國王！我是這裡的王！你們都要聽我的！', color: '#8b0000' },
            
            { type: 'say', name: '維納托', text: '……噗。', color: '#0000ff' },
            { type: 'narrate', text: '維納托發出了一聲毫不掩飾的嘲笑。' },
            
            { type: 'say', name: '彼得', text: '你笑什麼！你這個凡人！', color: '#8b0000' },
            { type: 'say', name: '維納托', text: '我在笑你的品味。窗簾布？雞毛撢子？拙劣的模仿秀。', color: '#0000ff' },
            { type: 'say', name: '維納托', text: '聽好了，瘋子。氣質這種東西是模仿不來的。本王就算穿著睡衣，也比你像國王。', color: '#0000ff' },
            
            { type: 'say', name: '彼得', text: '你……你身上有光的味道……你是來搶我的王位的嗎？！', color: '#8b0000' },
            { type: 'say', name: '維納托', text: '搶？本王從不需要搶。世界會主動獻給我。', color: '#0000ff' },
            
            { type: 'call', func: () => { addClue('clue_peter', '彼得的恐懼', '彼得似乎對維納托感到莫名的恐懼，認為他是來奪取「王位」的威脅。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 3. 圖書室：遇到林恩 (欣賞眼光) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('lynn'), pos: 'left' },
            
            { type: 'narrate', text: '林恩正拿著算盤，眼神精明地打量著維納托身上的飾品。' },
            
            { type: 'say', name: '林恩', text: '這顆藍寶石……色澤純正，切工完美。估價至少三百萬。', color: '#9400d3' },
            { type: 'say', name: '維納托', text: '喔？眼光不錯嘛，庶民。', color: '#0000ff' },
            
            { type: 'say', name: '林恩', text: '我是商人，對錢的味道很敏感。你看起來就是個行走的金庫。', color: '#9400d3' },
            { type: 'say', name: '維納托', text: '哼，那是自然。本王的存在本身就是無價之寶。', color: '#0000ff' },
            { type: 'say', name: '維納托', text: '既然你這麼有眼光，本王允許你欣賞一分鐘。不要用手碰，會留下指紋。', color: '#0000ff' },
            
            { type: 'say', name: '林恩', text: '……真難搞。不過看在錢的份上，我就勉強配合一下你的表演吧。涼拌。', color: '#9400d3' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到卡洛特 (直覺的厭惡) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('carlota'), pos: 'left' },
            
            { type: 'say', name: '卡洛特', text: '……好香。', color: '#4b0082' }, // 假設卡洛特是carlota
            { type: 'narrate', text: '卡洛特盯著維納托，鼻子微微聳動，眼神直勾勾的。' },
            
            { type: 'say', name: '維納托', text: '……真不舒服的眼神。像是在看食物。', color: '#0000ff' },
            { type: 'say', name: '維納托', text: '離本王遠點，野獸。你的口水要是滴到我的風衣上，把你賣了都賠不起。', color: '#0000ff' },
            
            { type: 'say', name: '卡洛特', text: '這不是食物的味道……這是……很強的味道。你是強者？', color: '#4b0082' },
            { type: 'say', name: '維納托', text: '哼。這是王者的霸氣。像你這種只靠本能行動的生物是無法理解的。', color: '#0000ff' },
            
            { type: 'narrate', text: '維納托雖然語氣輕蔑，但手卻悄悄按在了腰間的槍套上。他是獵人，他知道什麼東西是危險的。' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 廚房：遇到小雅各 (不知所措) ---
        kitchen: [
            { type: 'scene', bg: assets.bg.kitchen },
            { type: 'join', char: getCharById('james'), pos: 'left' },
            
            { type: 'narrate', text: '小雅各正拿著一個杯子，手抖得厲害，水灑了一地。' },
            { type: 'say', name: '小雅各', text: '怎麼辦……我拿不穩……為什麼會這樣……', color: '#00ffff' },
            
            { type: 'say', name: '維納托', text: '嘖。真難看。連個杯子都拿不穩嗎？', color: '#0000ff' },
            { type: 'say', name: '小雅各', text: '對、對不起……我不是故意的……我只是……有點亂……', color: '#00ffff' },
            
            { type: 'say', name: '維納托', text: '慌慌張張的，成何體統。', color: '#0000ff' },
            { type: 'say', name: '維納托', text: '把背挺直！如果你不想被這座古堡吞噬，就拿出點氣勢來。哪怕是裝的。', color: '#0000ff' },
            
            { type: 'say', name: '小雅各', text: '氣、氣勢？像您一樣嗎？', color: '#00ffff' },
            { type: 'say', name: '維納托', text: '想學本王？你還早了一百年呢。不過……哼，總比現在這副窩囊廢的樣子好。', color: '#0000ff' },
            
            { type: 'call', func: showMap }
        ]
    }
};