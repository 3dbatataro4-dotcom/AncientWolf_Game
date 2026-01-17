// ==========================================
// 檔案：js/stories/routes/kleion.js
// 角色：克里昂 (Kleion)
// 身分：魔鏡 (Magic Mirror) / 化學老師
// 性格：女裝大佬(完美偽裝)、開朗直男、化學狂熱、科絲塔的監護人
// ==========================================

window.Story_kleion = {
    // ----------------------------------------------------------------
    // 序章：拿著燒杯的西域美女
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'day' }, 
        { type: 'sprite', char: getCharById('kleion') },
        
        // --- 化學開場 ---
        { type: 'narrate', text: '「嗯……這個空氣濕度，加上微量的硫磺味……會加速金屬的氧化反應啊。」' },
        { type: 'narrate', text: '你睜開眼，看見一個穿著華麗西域舞孃服飾的「美女」正蹲在地上，用手指在那裡……採樣？' },
        { type: 'narrate', text: '他（？）臉上蒙著神秘的面紗，身上掛滿了叮噹作響的金飾，但那雙露在外面的眼睛裡，閃爍著求知的光芒。' },
        
        { type: 'say', name: '克里昂', text: '喔！你醒啦！早安！', color: '#ff4500' },
        { type: 'narrate', text: '他站起身，聲音意外的爽朗且充滿磁性，完全是個陽光大男孩的聲音。' },
        
        { type: 'choice', options: [
            { text: "你是……占卜師？", consequence: [
                { type: 'say', name: '克里昂', text: '哈哈！看起來像嗎？這叫「光學迷彩」……雖然原理不太一樣，但偽裝效果是一流的！', color: '#ff4500' },
                { type: 'say', name: '克里昂', text: '我是克里昂。雖然這身打扮有點飄逸，但我可是實實在在的唯物主義者喔。', color: '#ff4500' }
            ]},
            { text: "你在做什麼？", consequence: [
                { type: 'say', name: '克里昂', text: '觀察環境變數。這座古堡的建材好像混入了一些特殊的礦物，我很好奇它的化學成分。', color: '#ff4500' },
                { type: 'say', name: '克里昂', text: '要不是沒帶器材，真想現場做個焰色反應測試看看！', color: '#ff4500' }
            ]}
        ]},

        { type: 'say', name: '克里昂', text: '對了，你有看到科絲塔嗎？那個綠頭髮的小傢伙。', color: '#ff4500' },
        { type: 'say', name: '克里昂', text: '雖然她很聰明，但這裡環境太複雜，我怕她會因為恐懼而導致皮質醇飆升，影響判斷力。', color: '#ff4500' },
        { type: 'say', name: '克里昂', text: '走吧！去大廳！既然橋斷了，我們得去分析一下有沒有其他的物理路徑可以離開！', color: '#ff4500' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 花園：遇到科絲塔 (理性的監護人) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('costa'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            { type: 'say', name: '科絲塔', text: '克里昂！BATA！', color: '#228b22' },
            { type: 'narrate', text: '科絲塔看到克里昂，立刻安心地跑了過來，抱住了他的大腿。' },
            
            { type: 'say', name: '克里昂', text: '科絲塔！各項數值正常嗎？有沒有受傷？', color: '#ff4500' },
            { type: 'narrate', text: '克里昂雖然穿著裙子，但還是很帥氣地單手把科絲塔抱了起來。' },
            
            { type: 'say', name: '科絲塔', text: '我沒事……但是這裡的花好可怕。它們長得好像會咬人。', color: '#228b22' },
            { type: 'say', name: '克里昂', text: '別怕。那只是植物的防禦機制演化。妳看那個鋸齒，是為了增加表面積以收集水分，不是牙齒。', color: '#ff4500' },
            { type: 'say', name: '克里昂', text: '萬物都是由元素構成的。只要理解了原理，就不會害怕了。懂了嗎？', color: '#ff4500' },
            
            { type: 'say', name: '科絲塔', text: '唔……雖然聽不懂，但是克里昂這麼說的話，那應該就沒事了。BATA。', color: '#228b22' },
            { type: 'narrate', text: '克里昂用最硬核的科學知識，給予了科絲塔最安心的守護。' },
            
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 大廳：遇到維納托 (被搭訕的直男反應) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('venator'), pos: 'left' },
            
            { type: 'say', name: '維納托', text: '喔？這裡居然藏著一朵異域的玫瑰。', color: '#0000ff' },
            { type: 'narrate', text: '維納托上下打量著克里昂，眼神中流露出欣賞（對美貌的認可）。' },
            
            { type: 'say', name: '維納托', text: '你的面紗很神祕。但本王能看出來，面紗下的骨相是完美的黃金比例。', color: '#0000ff' },
            
            { type: 'say', name: '克里昂', text: '謝啦兄弟！你也挺有型的！那件風衣的材質看起來是高分子合成纖維吧？防水嗎？', color: '#ff4500' },
            { type: 'narrate', text: '克里昂用非常爽朗的男聲回應，還順手想去摸摸維納托的衣服材質。' },
            
            { type: 'say', name: '維納托', text: '……兄弟？', color: '#0000ff' },
            { type: 'narrate', text: '維納托的表情僵硬了一瞬，似乎大腦在處理「絕世美女發出兄弟聲音」的資訊衝擊。' },
            
            { type: 'say', name: '克里昂', text: '怎麼了？臉色發青？是不是缺氧？這裡通風確實不太好，二氧化碳濃度有點高。', color: '#ff4500' },
            { type: 'say', name: '維納托', text: '……離本王遠點。你這個……破壞美感的傢伙。', color: '#0000ff' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 圖書室：遇到蜜拉思 (魔術與科學) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('melas'), pos: 'left' },
            
            { type: 'say', name: '蜜拉思', text: '嘻嘻……真是有趣的偽裝。你看起來像是從童話故事裡走出來的。', color: '#800080' },
            { type: 'say', name: '克里昂', text: '童話？不不不，這是科學。', color: '#ff4500' },
            { type: 'narrate', text: '克里昂正拿著一本《鍊金術起源》，看得津津有味。' },
            
            { type: 'say', name: '克里昂', text: '你看，所謂的鍊金術，其實就是早期的化學實驗嘛！雖然理論基礎是錯的，但這種探索精神值得肯定！', color: '#ff4500' },
            { type: 'say', name: '蜜拉思', text: '喔？那你覺得「詛咒」是什麼呢？也是化學反應嗎？', color: '#800080' },
            
            { type: 'say', name: '克里昂', text: '當然！可能是某種神經毒素，或者是費洛蒙誘導的集體幻覺。', color: '#ff4500' },
            { type: 'say', name: '克里昂', text: '只要找到分子式，就沒有解不開的詛咒。这就是科學的浪漫啊！', color: '#ff4500' },
            
            { type: 'say', name: '蜜拉思', text: '……你果然很有趣。用科學來解釋魔法？我喜歡你的視角。', color: '#800080' },
            
            // 獲得線索 (化學視角)
            { type: 'call', func: () => { addClue('clue_book', '化學筆記', '克里昂認為古堡裡的「黑水」其實是一種高腐蝕性的強酸溶液，並非什麼詛咒。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到諾郎 (同好?) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('nuolang'), pos: 'left' },
            { type: 'playBgm', name: 'sneaky' },
            
            { type: 'say', name: '諾郎', text: '……你身上的味道。是金屬和……乙醇？', color: '#778899' },
            { type: 'narrate', text: '諾郎敏銳地嗅了嗅。' },
            
            { type: 'say', name: '克里昂', text: '喔！好鼻子！我剛才在擦拭我的鏡子，用的是高濃度的酒精消毒。', color: '#ff4500' },
            { type: 'say', name: '克里昂', text: '你是調香師對吧？我一直覺得調香就是液體化學的藝術！酯類、醛類、酮類的排列組合，太迷人了！', color: '#ff4500' },
            
            { type: 'say', name: '諾郎', text: '……我不覺得迷人。我只是在混合那些讓人安靜的東西。', color: '#778899' },
            { type: 'say', name: '克里昂', text: '別這麼消極嘛！如果有空的話，我們來交流一下提取技術？我對那個「冷吸法」很有興趣！', color: '#ff4500' },
            
            { type: 'say', name: '諾郎', text: '……再說吧。（這傢伙好刺眼，跟諾維安一樣亮）', color: '#778899' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 廚房：遇到腓力 (生活應用化學) ---
        kitchen: [
            { type: 'scene', bg: assets.bg.kitchen },
            { type: 'join', char: getCharById('philippos'), pos: 'left' },
            
            { type: 'narrate', text: '腓力正在煎牛排，鍋子裡滋滋作響。' },
            
            { type: 'say', name: '克里昂', text: '喔！美拉德反應（Maillard reaction）！', color: '#ff4500' },
            { type: 'say', name: '腓力', text: '啥？沒辣？這牛排我沒放辣啊？', color: '#dc143c' },
            
            { type: 'say', name: '克里昂', text: '不不不，我是說蛋白質和還原糖在受熱時發生的褐變反應。這是食物美味的來源！', color: '#ff4500' },
            { type: 'say', name: '克里昂', text: '火候控制得不錯！分子運動剛剛好！', color: '#ff4500' },
            
            { type: 'say', name: '腓力', text: '雖然聽不懂你在說什麼，但你是在誇我做飯好吃對吧？', color: '#dc143c' },
            { type: 'say', name: '克里昂', text: '當然！料理就是可食用的化學實驗！', color: '#ff4500' },
            
            { type: 'call', func: showMap }
        ]
    }
};