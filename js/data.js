// ==========================================
// 檔案：js/data.js
// 描述：遊戲資料庫（素材、地點、角色）
// ==========================================

// --- 1. 素材總表 (Assets) ---
const assets = {
    // 背景圖片 (Backgrounds)
    bg: {
        black: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E8%83%8C%E6%99%AF/BLACK.png',
        room: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E8%83%8C%E6%99%AF/%E6%88%BF%E9%96%93.jpg',
        corridor: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E8%83%8C%E6%99%AF/%E5%8F%A4%E5%A0%A1%E8%B5%B0%E5%BB%8A.jpg',
        hall: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E8%83%8C%E6%99%AF/%E5%8F%A4%E5%A0%A1%E5%A4%A7%E5%BB%B3.jpg',
        kitchen: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E8%83%8C%E6%99%AF/%E5%BB%9A%E6%88%BF.jpg',
        library: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E8%83%8C%E6%99%AF/%E5%9C%96%E6%9B%B8%E9%A4%A8.jpg',
        garden: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E8%83%8C%E6%99%AF/%E8%8A%B1%E5%9C%92.jpg',
        meeting: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E8%83%8C%E6%99%AF/%E6%9C%83%E8%AD%B0%E5%9C%93%E6%A1%8C.jpg',
        coffin: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E6%A3%BA%E6%9D%90_.png' // 人物背後的棺材底圖
    },
    // 背景音樂 (BGM)
    bgm: {
        title: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/%E6%A8%99%E9%A1%8C%E9%81%B8%E4%BA%BA%E9%9F%B3%E6%A8%82.mp3',
        day: 'https://files.catbox.moe/nkckkm.mp3', // 白天探索
        voting: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/%E8%A8%8E%E8%AB%96%E9%9F%B3%E6%A8%82.mp3',
        bad_end: 'https://files.catbox.moe/hza8yd.mp3',
        daily_investigation: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/%E6%97%A5%E5%B8%B8_%E8%AA%BF%E6%9F%A5.mp3',
        daily_memory: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/%E6%97%A5%E5%B8%B8_%E5%9B%9E%E6%86%B6_.mp3',
        funny: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/%E6%AF%94%E8%BC%83%E6%BB%91%E7%A8%BD%EF%BC%8C%E4%BF%8F%E7%9A%AE%E7%9A%84%E9%9F%B3%E6%A8%82.mp3',
        serious: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/%E6%B0%A3%E6%B0%9B%E5%87%9D%E9%87%8D.mp3',
        death: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/%E6%9C%89%E4%BA%BA%E6%AD%BB%E4%BA%86.mp3',
        cute: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/%E5%8F%AF%E6%84%9B%E7%9A%84%E9%9F%B3%E6%A8%82.mp3',
        sneaky: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/%E5%81%B7%E5%81%B7%E6%91%B8%E6%91%B8_%E6%AF%94%E8%BC%83%E8%BC%95%E9%AC%86%E7%9A%84%E4%BA%8B%E4%BB%B6.mp3',
        wolf: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/%E4%B8%AD%E9%82%AA_%E7%8B%BC%E4%BA%BA%E8%A6%96%E8%A7%92%E9%9F%B3%E6%A8%82.mp3'
    },
    // 音效 (SFX) - 注意：這裡假設副檔名為 .mp3，如果沒聲音請確認是否為 wav
    sfx: {
        click: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/SXF/%E9%BB%9E%E6%93%8A%E7%95%AB%E9%9D%A2%E9%9F%B3%E6%95%88',
        ui: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/SXF/UI%E6%8C%89%E9%88%95%E9%9F%B3%E6%95%88',
        choice: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/SXF/%E9%81%B8%E6%93%87%E9%81%B8%E9%A0%85',
        item: 'https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/bgm/SXF/%E7%8D%B2%E5%BE%97%E9%81%93%E5%85%B7',
        reveal: 'https://files.catbox.moe/djmm5v.mp3' // 角色揭曉音效(維持舊的或替換)
    }
};

// --- 2. 地點資料庫 (對應新背景) ---
const locations = [
    { id: 'hall', name: '古堡大廳', img: assets.bg.hall, locked: false },
    { id: 'kitchen', name: '廚房', img: assets.bg.kitchen, locked: false }, 
    { id: 'library', name: '圖書室', img: assets.bg.library, locked: false }, 
    { id: 'corridor', name: '古堡走廊', img: assets.bg.corridor, locked: false }, 
    { id: 'garden', name: '花園', img: assets.bg.garden, locked: false }, 
    { id: 'myroom', name: '我的房間', img: assets.bg.room, locked: false },
    { id: 'meeting', name: '會議室', img: assets.bg.meeting, locked: true } 
];

// --- 3. 角色資料庫 (更新立繪) ---
const characters = [
     { id: "manmu", name: "小目", title: "Hidden Wolf", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E7%9B%AE%E9%9A%B1.png", color: "linear-gradient(to bottom, #ff1493 0%, #000000 100%)", nameColor: "#ff1493", desc: "霸道總裁風的仿生人。", intro: ["「嘖，這張床的支撐係數完全不符合人體工學。」","「我是小目，你的……暫時合作夥伴。」"]},
     { id: "james", name: "小雅各", title: "Beauty Wolf", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E7%8B%BC%E5%B0%8F%E4%BA%BA.png", color: "linear-gradient(to bottom right, #ff8c00 0%, #00ffff 100%)", nameColor: "#ff8c00", desc: "會發電的長髮美人。", intro: ["房間的角落裡傳來一陣輕微的電流聲。","「我叫小雅各。」"]},
     { id: "carlota", name: "卡洛特", title: "Werewolf", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E5%8D%A1%E7%8B%BC%E7%89%B9.png", color: "linear-gradient(to bottom, #00008b 0%, #4b0082 100%)", nameColor: "#4b0082", desc: "有點電波的偽人。", intro: ["「你的靈魂顏色……有點灰灰的。」","「我是卡洛特。這裡的味道……不友善。」"]},
     { id: "andreas", name: "安德烈", title: "Fox Child", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E5%B0%8F%E8%B2%93.png", color: "linear-gradient(to bottom, #4169e1 0%, #0047ab 100%)", nameColor: "#4169e1", desc: "認真的機械發明家。", intro: ["「報告！檢測到生命體甦醒跡象！」","「我是安德烈。」"]},
     { id: "peter", name: "彼得", title: "Wolf King", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E5%BD%BC%E7%8B%BC.png", color: "linear-gradient(to bottom, #ff0000 0%, #8b0000 100%)", nameColor: "#8b0000", desc: "容易中邪的國王。", intro: ["「Shit……這裡的風水簡直是災難。」","「我是彼得。本王允許你跟在我身後半步的距離。」"]},
     { id: "lynn", name: "林恩", title: "Guard", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E5%AE%88%E6%9E%97.png", color: "linear-gradient(to bottom, #9400d3 0%, #4b0082 100%)", nameColor: "#9400d3", desc: "商業大佬，性格軟爛淡定。", intro: ["「哈啊……」一聲綿長而慵懶的哈欠聲。","「我是林恩。如果沒什麼事的話，能不能讓我再睡五分鐘？」"]},
     { id: "costa", name: "科絲塔", title: "Villager", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E5%B0%8F%E5%A5%B3%E7%93%9C.png", color: "linear-gradient(to bottom, #7cfc00 0%, #228b22 100%)", nameColor: "#228b22", desc: "反應慢半拍的可愛仿生人。", intro: ["「BATA……系統重啟中……」","「啊，你醒了BATA。我是科絲塔，大家叫我小瓜。」"]},
     { id: "mollie", name: "茉莉", title: "Witch", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E8%8C%89%E8%8E%89.png", color: "linear-gradient(to bottom, #ff69b4 0%, #db7093 100%)", nameColor: "#ff69b4", desc: "被壓榨的社畜醫生。", intro: ["一股淡淡的菸草味飄散在空氣中。","「我是茉莉。隨便你怎麼叫。」"]},
     { id: "nathanael", name: "拿但業", title: "Cursed Fox", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E5%92%92%E7%93%9C.png", color: "linear-gradient(to bottom, #ffb6c1 0%, #90ee90 100%)", nameColor: "#ffb6c1", desc: "嬌氣的少爺詩人。", intro: ["「腓力——！腓力你在哪？」","「你是誰？算了，我是拿但業。」"]},
     { id: "narcissus", name: "納希瑟斯", title: "Angel", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E6%9B%89%E5%B8%8C.png", color: "linear-gradient(to bottom, #8a2be2 0%, #483d8b 100%)", nameColor: "#8a2be2", desc: "神仙顏值，眼睛裡有星星。", intro: ["你睜開眼的第一瞬間，以為自己看到了天使。","「我是納希瑟斯。」"]},
     { id: "jornona", name: "喬諾娜", title: "Maid", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E5%BF%A0%E5%AF%A6%E7%9A%84%E5%83%95%E9%83%8E.png", color: "linear-gradient(to bottom, #ff69b4 0%, #ffd700 100%)", nameColor: "#ff69b4", desc: "粉色頭髮的可愛男孩子。", intro: ["「🎶~愛是折磨人的東西~🎶」","「我是喬諾娜！你覺得這對櫻桃耳環好看嗎？」"]},
     { id: "philippos", name: "腓力", title: "Seer", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E8%85%93%E5%8A%9B.png", color: "linear-gradient(to bottom, #dc143c 0%, #800000 100%)", nameColor: "#dc143c", desc: "樸實率直的武功高手。", intro: ["「喝！」一聲強而有力的低喝聲把你嚇醒了。","「喔！你醒了！我是腓力！抱歉吵到你！」"]},
     { id: "ola", name: "奧拉", title: "Piper", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E5%90%B9%E7%AC%9B%E4%BA%BA.png", color: "linear-gradient(to bottom, #00bfff 0%, #87cefa 100%)", nameColor: "#00bfff", desc: "神秘的吹笛人。", intro: ["悠揚而詭異的笛聲在房間裡迴盪。","「我是奧拉。這場雨……是命運的絲線糾纏的結果。」"]},
     { id: "venator", name: "維納托", title: "Hunter", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E9%80%97%E8%8A%AC.png", color: "linear-gradient(to bottom, #0000ff 0%, #00008b 100%)", nameColor: "#0000ff", desc: "自信的天才前國王。", intro: ["「哼，這房間的裝潢真是毫無美感。」","「庶民，你終於醒了。本王是尼古拉斯．維納托。」"]},
     { id: "melas", name: "蜜拉思", title: "Magician", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E9%AD%94%E8%A1%93%E5%B8%AB.png", color: "linear-gradient(to bottom, #c71585 0%, #800080 100%)", nameColor: "#c71585", desc: "陰沉神秘，頭戴紫色小花。", intro: ["「嘻嘻……」一陣讓人背脊發涼的低笑聲。","「我是蜜拉思。別緊張，我只是在觀察牆角的黴菌。」"]},
     { id: "nuolang", name: "諾郎", title: "Bomber", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E7%82%B8%E5%BD%88%E9%83%8E.png", color: "linear-gradient(to bottom, #778899 0%, #2f4f4f 100%)", nameColor: "#778899", desc: "陰沉敏感的調香師。", intro: ["「別過來！……啊，是你。」","「我是諾郎。你……你身上沒有帶危險品吧？」"]},
     { id: "novian", name: "諾維安", title: "Mayor", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E6%9D%91%E7%B6%AD%E5%AE%89.png", color: "linear-gradient(to bottom, #00ffff 0%, #e6e6fa 100%)", nameColor: "#00ffff", desc: "陽光開朗的村長。", intro: ["「早安！夥伴！」","「我是諾維安！這艘……呃，這座古堡目前的負責人！」"]},
     { id: "lanlan", name: "蘭蘭", title: "Arsonist", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E8%98%AD%E8%98%AD.png", color: "linear-gradient(to bottom, #00ced1 0%, #20b2aa 100%)", nameColor: "#00ced1", desc: "沒心沒肺的快樂小龍。", intro: ["「哇！這個燭台好漂亮！如果點起來一定是青色的！」","「啊，你醒啦？我是維爾德拉克斯，叫我蘭蘭就好呀！」"]},
     { id: "kleion", name: "克里昂", title: "Mirror Girl", sprite: "https://file.garden/aWe99vhwaGcNwkok/%E5%8F%A4%E5%A0%A1/%E7%AB%8B%E7%B9%AA/%E5%85%8B%E9%87%8C%E6%98%82.png", color: "linear-gradient(to bottom, #ff4500 0%, #ff6347 100%)", nameColor: "#ff4500", desc: "陽光正直的半精靈。", intro: ["「這裙子的蕾絲邊是不是有點歪了？」","「喔！早安！我是克里昂。」"]},
];