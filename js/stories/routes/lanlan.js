// ==========================================
// 檔案：js/stories/routes/lanlan.js
// 角色：蘭蘭 (Virdrakos)
// 身分：離家出走的龍 / 走私船員
// 性格：多金大方、寵老婆、講義氣、極度怕鬼、語癖「呀」
// ==========================================

window.Story_lanlan = {
    // ----------------------------------------------------------------
    // 序章：怕鬼的有錢龍
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'sneaky' }, 
        { type: 'sprite', char: getCharById('lanlan') },
        
        { type: 'say', name: '蘭蘭', text: '「嗚哇……這裡好黑呀……」', color: '#00ced1' },
        { type: 'narrate', text: '你睜開眼，看見一個高大的長髮少年正縮在床角，警惕地看著四周的陰影。' },
        { type: 'narrate', text: '他有一頭海草般的藍綠色捲髮，雖然長相帥氣，但此刻的表情卻有點慫。' },
        
        { type: 'say', name: '蘭蘭', text: '「你是人嗎？還是鬼呀？蘭蘭不怕你喔！蘭蘭會噴火喔！」', color: '#00ced1' },
        { type: 'narrate', text: '他雖然嘴上這麼說，但身體卻往後縮了縮，甚至還抓住了被子角。' },

        { type: 'choice', options: [
            { text: "我是人類。", consequence: [
                { type: 'say', name: '蘭蘭', text: '「呼……嚇死蘭蘭了。這裡陰森森的，感覺隨時會有髒東西跑出來呀。」', color: '#00ced1' }
            ]},
            { text: "你是誰？", consequence: [
                { type: 'say', name: '蘭蘭', text: '「我是蘭蘭呀！維爾德拉克斯！是條龍喔！」', color: '#00ced1' },
                { type: 'say', name: '蘭蘭', text: '「不過這裡好奇怪，我的翅膀好像打不開……要是遇到鬼怎麼辦呀！」', color: '#00ced1' }
            ]}
        ]},

        { type: 'say', name: '蘭蘭', text: '「對了！喬諾娜呢？我的老婆呢？這裡這麼可怕，喬諾娜一定會嚇哭的呀！」', color: '#00ced1' },
        { type: 'narrate', text: '提到喬諾娜，蘭蘭的表情瞬間從害怕變成了焦急，眼神堅定了不少。' },
        { type: 'say', name: '蘭蘭', text: '「不行，蘭蘭要去找他！{player}，你跟著我，蘭蘭罩你！如果看到鬼……你、你就負責擋住它呀！」', color: '#00ced1' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段 (5個地點)
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 廚房：遇到喬諾娜 (無限寵溺) ---
        kitchen: [
            { type: 'join', char: getCharById('jornona'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            // 喬諾娜在哼歌
            { type: 'narrate', text: '喬諾娜正在哼著輕快的歌，看起來心情不錯。' },
            { type: 'say', name: '喬諾娜', text: '「🎶～不知道蘭蘭想吃什麼～」', color: '#ff69b4' },
            
            // 蘭蘭登場
            { type: 'say', name: '蘭蘭', text: '「老婆！！！」', color: '#00ced1' },
            { type: 'narrate', text: '蘭蘭衝過去，一把抱住了喬諾娜，還用臉蹭了蹭他的脖子。' },
            
            { type: 'say', name: '喬諾娜', text: '「哎呀，蘭蘭！你沒事真是太好了～」', color: '#ff69b4' },
            { type: 'say', name: '蘭蘭', text: '「這裡好破呀！廚房也好小！喬諾娜，我們把這裡買下來吧？」', color: '#00ced1' },
            { type: 'say', name: '蘭蘭', text: '「然後把這些破爛都扔了，換成金子做的廚具！給你買最大的烤箱！買呀！」', color: '#00ced1' },
            
            { type: 'say', name: '喬諾娜', text: '「呵呵，蘭蘭真大方～不過現在好像買不了東西呢。」', color: '#ff69b4' },
            { type: 'say', name: '蘭蘭', text: '「那就先吃櫻桃！蘭蘭剛才看到那邊有櫻桃罐頭，蘭蘭去幫你拿呀！」', color: '#00ced1' },
            
            { type: 'narrate', text: '看著這對黏糊糊的情侶，你覺得自己像個巨大的電燈泡。' },
            
            // 獲得線索
            { type: 'call', func: () => { addClue('clue_food', '高級罐頭', '蘭蘭為了哄喬諾娜開心，翻出了廚房裡藏著的高級櫻桃罐頭。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 大廳：遇到諾郎 (老婆的弟弟) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('nuolang'), pos: 'left' },
            
            { type: 'narrate', text: '諾郎正坐在角落，表情陰鬱，手裡緊緊抓著背包。' },
            
            { type: 'say', name: '蘭蘭', text: '「這不是諾郎嗎？怎麼一個人在這裡長蘑菇呀？」', color: '#00ced1' },
            { type: 'say', name: '諾郎', text: '「……蘭蘭。這裡氣氛很糟糕，我有不好的預感。」', color: '#778899' },
            
            { type: 'say', name: '蘭蘭', text: '「是嗎？蘭蘭也覺得這裡有鬼呀！不過沒關係，你是喬諾娜的弟弟，也就是蘭蘭的弟弟！」', color: '#00ced1' },
            { type: 'narrate', text: '蘭蘭豪爽地拍了拍諾郎的肩膀，差點把瘦弱的諾郎拍散架。' },
            { type: 'say', name: '蘭蘭', text: '「要是害怕的話，蘭蘭送你一顆寶石壯膽喔？要紅的還是綠的？雖然這裡沒有店，但我可以現在就把這些石頭變現給你呀！」', color: '#00ced1' },
            
            { type: 'say', name: '諾郎', text: '「……不用了。你自己小心點，別總是給喬諾娜添麻煩。」', color: '#778899' },
            { type: 'say', name: '蘭蘭', text: '「才不會呢！喬諾娜最喜歡蘭蘭了呀！」', color: '#00ced1' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 花園：遇到諾維安 (好兄弟) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('novian'), pos: 'left' },
            
            { type: 'say', name: '諾維安', text: '「阿蘭！你也醒了！太好了！」', color: '#00ced1' },
            { type: 'say', name: '蘭蘭', text: '「諾維安！太好了，有你在我就放心了呀！你的方向感最好了！」', color: '#00ced1' },
            
            { type: 'narrate', text: '蘭蘭看到熟人，開心地搖起了隱形的尾巴。' },
            
            { type: 'say', name: '諾維安', text: '「呃……雖然我想帶大家出去，但橋斷了……訊號也沒了……」', color: '#00ced1' },
            { type: 'say', name: '蘭蘭', text: '「沒關係呀！反正只要和喬諾娜在一起，哪裡都是度假！而且我還有你這個領航員呀！」', color: '#00ced1' },
            { type: 'say', name: '蘭蘭', text: '「對了，這花園太醜了，我想把它鏟平了給喬諾娜蓋個櫻桃園，要花多少錢呀？我可以全款付清喔！」', color: '#00ced1' },
            
            { type: 'say', name: '諾維安', text: '「哈哈……阿蘭還是這麼有活力呢。（擦汗）」', color: '#00ced1' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 圖書室：遇到林恩 (貧富差距) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('lynn'), pos: 'left' },

            { type: 'narrate', text: '林恩正拿著算盤，一臉痛苦地計算著古堡的虧損。' },
            { type: 'say', name: '蘭蘭', text: '「哇！紫色的貓！你在玩算盤嗎？」', color: '#00ced1' },

            { type: 'say', name: '林恩', text: '「……走開。別打擾我算帳。每分鐘的利息你賠得起嗎？」', color: '#9400d3' },
            { type: 'say', name: '蘭蘭', text: '「賠得起呀！你要多少？」', color: '#00ced1' },
            { type: 'narrate', text: '蘭蘭隨手從口袋裡掏出一顆閃閃發光的寶石，放在桌上。' },

            { type: 'say', name: '林恩', text: '「！！！」', color: '#9400d3' },
            { type: 'narrate', text: '林恩的眼睛瞬間變成了金錢符號，態度一百八十度大轉變。' },
            { type: 'say', name: '林恩', text: '「哎呀，這不是尊貴的龍族少爺嗎？有什麼需要服務的？要不要買下這座圖書室？我可以給你打九八折。」', color: '#9400d3' },

            { type: 'say', name: '蘭蘭', text: '「這裡有鬼故事書嗎？如果有，全部燒掉！我給你兩倍的錢！」', color: '#00ced1' },
            { type: 'say', name: '林恩', text: '「成交。涼拌……不，我是說，馬上處理。」', color: '#9400d3' },

            { type: 'call', func: () => { addClue('clue_money', '金錢的力量', '蘭蘭用寶石「賄賂」了林恩，讓他幫忙處理掉所有看起來很可怕的書籍。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],

        // --- 5. 走廊：遇到彼得 (怕鬼時刻) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('peter'), pos: 'left' },
            { type: 'playBgm', name: 'sneaky' },

            { type: 'narrate', text: '彼得正趴在地上，用詭異的姿勢爬行，嘴裡唸著咒語。' },
            
            { type: 'say', name: '蘭蘭', text: '「哇啊啊啊啊！殭屍呀！！！」', color: '#00ced1' },
            { type: 'narrate', text: '蘭蘭嚇得直接跳了起來，躲到了你身後，抓著你的肩膀瑟瑟發抖。' },

            { type: 'say', name: '彼得', text: '「殭屍？在哪裡？我聞到了……腐爛的味道……」', color: '#8b0000' },
            { type: 'say', name: '彼得', text: '「是你帶來的嗎？外鄉人？」', color: '#8b0000' },

            { type: 'say', name: '蘭蘭', text: '「你、你別過來！我有火喔！我真的會噴火喔！喬諾娜救命呀！」', color: '#00ced1' },
            { type: 'say', name: '蘭蘭', text: '（對你說）「{player}！快擋住他！蘭蘭給你買金子！買鑽石！快把他趕走呀！」', color: '#00ced1' },

            { type: 'say', name: '彼得', text: '「嘻嘻……膽小鬼。靈魂也是髒的。」', color: '#8b0000' },

            { type: 'call', func: showMap }
        ]
    }
};