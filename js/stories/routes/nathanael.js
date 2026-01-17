// ==========================================
// 檔案：js/stories/routes/nathanael.js
// 角色：拿但業 (Nathanael)
// 身分：詩人 (Poet) / 嬌氣少爺
// 性格：身嬌肉貴、審美高、直白地挑剔、極度依賴腓力
// ==========================================

window.Story_nathanael = {
    // ----------------------------------------------------------------
    // 序章：受難的少爺
    // ----------------------------------------------------------------
    prologue: [
        { type: 'playBgm', name: 'cute' }, 
        { type: 'sprite', char: getCharById('nathanael') },
        
        { type: 'say', name: '拿但業', text: '這什麼鬼地方……好硬……好潮濕……', color: '#90ee90' },
        { type: 'narrate', text: '你睜開眼，看見一個紅髮少年正坐在床邊，一臉委屈地揉著自己的腰。' },
        { type: 'narrate', text: '他穿著精緻的絲綢襯衫，但現在衣角有點皺了，這讓他看起來非常不開心。' },
        
        { type: 'say', name: '拿但業', text: '腓力？腓力！！你在哪裡？我要喝水！我要換衣服！', color: '#90ee90' },
        { type: 'narrate', text: '沒有回應。少年更慌了，轉頭看向你，眼神像隻迷路的波斯貓。' },

        { type: 'choice', options: [
            { text: "你是誰？", consequence: [
                { type: 'say', name: '拿但業', text: '我是拿但業。你看起來好像能動，能幫我倒杯水嗎？要溫的，不要太燙。', color: '#90ee90' }
            ]},
            { text: "別叫了，這裡沒人。", consequence: [
                { type: 'say', name: '拿但業', text: '怎麼可能沒人！腓力一定在附近！他發誓過不會離開我超過五步的！', color: '#90ee90' },
                { type: 'say', name: '拿但業', text: '嗚……我的鞋子呢？地上好髒，我不想赤腳走……', color: '#90ee90' }
            ]}
        ]},

        { type: 'say', name: '拿但業', text: '廣播說要去大廳……可是走過去好累喔。', color: '#90ee90' },
        { type: 'say', name: '拿但業', text: '既然你也在這裡，那你負責保護我到大廳吧。如果我少了一根頭髮，腓力會生氣的喔！', color: '#90ee90' },
        { type: 'narrate', text: '他理所當然地對你伸出了手，似乎在等你扶他起來。' }
    ],

    // ----------------------------------------------------------------
    // Day 0 調查階段
    // ----------------------------------------------------------------
    locations: {
        
        // --- 1. 廚房：遇到腓力 (終於找到保母) ---
        kitchen: [
            { type: 'join', char: getCharById('philippos'), pos: 'left' },
            { type: 'playBgm', name: 'cute' },
            
            // 腓力正在狂吃/做飯
            { type: 'say', name: '腓力', text: '少主！！我在這！！我剛才在試毒！！', color: '#dc143c' },
            
            // 拿但業的反應
            { type: 'say', name: '拿但業', text: '腓力——！！！', color: '#90ee90' },
            { type: 'narrate', text: '拿但業幾乎是撲到了腓力身上（雖然腓力一身油煙味，但他忍了）。' },
            
            { type: 'say', name: '拿但業', text: '你去哪裡了！我餓死了！而且這裡的水好難喝！還有蚊子！', color: '#90ee90' },
            { type: 'say', name: '腓力', text: '對不起少主！我馬上給你做飯！這裡有雞腿！我幫你把皮剝掉了！', color: '#dc143c' },
            
            { type: 'say', name: '拿但業', text: '哼，這還差不多。還有，我的肩膀好痠，等一下幫我捏捏。', color: '#90ee90' },
            { type: 'say', name: '腓力', text: '遵命少主！馬上就好！', color: '#dc143c' },
            
            { type: 'narrate', text: '看著這一幕，你深刻體會到了什麼叫「一個願打，一個願挨」。' },
            
            { type: 'call', func: () => { addClue('clue_food', '剝皮的雞腿', '腓力為了拿但業特製的愛心料理，確認了廚房目前是安全的（至少對他們來說）。'); nextDialogue(true); }},
            { type: 'call', func: showMap }
        ],
        
        // --- 2. 花園：遇到諾維安 (抱怨環境) ---
        garden: [
            { type: 'scene', bg: assets.bg.garden },
            { type: 'join', char: getCharById('novian'), pos: 'left' },
            
            { type: 'say', name: '諾維安', text: '小心腳下！這裡泥土很軟！', color: '#00ced1' },
            
            { type: 'say', name: '拿但業', text: '噫！泥巴！好噁心！', color: '#90ee90' },
            { type: 'narrate', text: '拿但業像觸電一樣縮回了腳，一臉嫌棄。' },
            
            { type: 'say', name: '拿但業', text: '這裡就不能鋪個地毯嗎？或者木棧道？這種原始的泥地怎麼走人啊！', color: '#90ee90' },
            { type: 'say', name: '諾維安', text: '哈哈……抱歉啊，這裡是自然風格的庭院……', color: '#00ced1' },
            
            { type: 'say', name: '拿但業', text: '這不叫自然，這叫野蠻。我的褲腳要是髒了怎麼辦？這可是限量版耶！', color: '#90ee90' },
            { type: 'say', name: '拿但業', text: '（對你說）{player}，你揹我過去。快點。', color: '#90ee90' },
            
            { type: 'call', func: showMap }
        ],

        // --- 3. 圖書室：遇到林恩 (金錢觀) ---
        library: [
            { type: 'scene', bg: assets.bg.library },
            { type: 'join', char: getCharById('lynn'), pos: 'left' },
            
            { type: 'say', name: '林恩', text: '……別碰那本書。弄壞了要賠償原價的 200%。', color: '#9400d3' },
            
            { type: 'say', name: '拿但業', text: '哈？這本破書？紙都黃了，送我都不要。', color: '#90ee90' },
            { type: 'say', name: '拿但業', text: '這裡連一本像樣的詩集都沒有嗎？全是什麼「黑魔法」、「受洗」，無聊死了。', color: '#90ee90' },
            
            { type: 'say', name: '林恩', text: '這是古董。不懂貨的小鬼。', color: '#9400d3' },
            { type: 'say', name: '拿但業', text: '你才不懂！這種充滿霉味的地方根本不適合閱讀！我要回房間了，這裡待久了會長皺紋。', color: '#90ee90' },
            
            { type: 'say', name: '林恩', text: '……慢走不送。記得把門帶上，冷氣跑出去也是成本。涼拌。', color: '#9400d3' },
            
            { type: 'call', func: showMap }
        ],

        // --- 4. 走廊：遇到諾郎 (香水話題) ---
        corridor: [
            { type: 'scene', bg: assets.bg.corridor },
            { type: 'join', char: getCharById('nuolang'), pos: 'left' },
            
            { type: 'say', name: '拿但業', text: '嗯？你身上的味道……還蠻好聞的。', color: '#90ee90' },
            { type: 'narrate', text: '拿但業湊近諾郎，這大概是他目前為止唯一感興趣的東西。' },
            
            { type: 'say', name: '諾郎', text: '……這是我調的「雨後鳶尾」。可以安神。', color: '#778899' },
            
            { type: 'say', name: '拿但業', text: '勉強還行吧。比這裡那股發霉的味道好多了。', color: '#90ee90' },
            { type: 'say', name: '拿但業', text: '給我一瓶。我要噴在枕頭上，不然這種破床我根本睡不著。', color: '#90ee90' },
            
            { type: 'say', name: '諾郎', text: '……可以。不過這裡面加了一點安眠成分，量如果控制不好，可能會睡死過去。', color: '#778899' },
            { type: 'say', name: '拿但業', text: '沒差啦，反正有腓力會叫我起床。快給我！', color: '#90ee90' },
            
            { type: 'call', func: showMap }
        ],

        // --- 5. 大廳：遇到維納托 (審美碰撞) ---
        hall: [
            { type: 'scene', bg: assets.bg.hall },
            { type: 'join', char: getCharById('venator'), pos: 'left' },
            
            { type: 'say', name: '維納托', text: '哼。這個大廳的配色還算勉強入眼。', color: '#0000ff' },
            
            { type: 'say', name: '拿但業', text: '哪裡入眼了？那個窗簾是大紅色的耶！跟地毯一點都不搭！', color: '#90ee90' },
            { type: 'say', name: '拿但業', text: '這個設計師一定是色盲！看了眼睛好痛！', color: '#90ee90' },
            
            { type: 'say', name: '維納托', text: '喔？你懂審美？', color: '#0000ff' },
            { type: 'say', name: '維納托', text: '雖然這紅色的確俗艷了點，但若是有本王站在這裡，這背景也就有了價值。', color: '#0000ff' },
            
            { type: 'say', name: '拿但業', text: '……你這個人好奇怪。雖然長得是不錯啦，但說話好噁心。', color: '#90ee90' },
            { type: 'say', name: '維納托', text: '大膽！竟敢對本王無理！不過看在你還有點品味的份上，本王原諒你的無禮。', color: '#0000ff' },
            
            { type: 'call', func: showMap }
        ]
    }
};