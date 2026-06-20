// Comprehensive Drink Menus with Central Taiwan Pricing (Approx 80 items per shop)
export const SHOPS_DATA = {
  '50lan': {
    name: '50嵐',
    themeClass: 'theme-50lan',
    menuLink: 'https://www.facebook.com/p/50%E5%B5%90-%E4%B8%AD%E5%8D%80-100076062604036/?locale=zh_TW',
    menu: [
      // 找好茶
      { name: '茉莉綠茶', prices: { M: 30, L: 35 } },
      { name: '阿薩姆紅茶', prices: { M: 30, L: 35 } },
      { name: '四季春青茶', prices: { M: 30, L: 35 } },
      { name: '黃金烏龍茶', prices: { M: 30, L: 35 } },
      { name: '芒果青', prices: { M: 40, L: 50 } },
      { name: '冰淇淋紅茶', prices: { M: 50, L: 60 } },
      { name: '旺來綠', prices: { M: 45, L: 55 } },
      { name: '8冰綠', prices: { M: 45, L: 55 } },
      { name: '梅の綠', prices: { M: 40, L: 50 } },
      { name: '檸檬綠', prices: { M: 45, L: 55 } },
      { name: '檸檬紅', prices: { M: 45, L: 55 } },
      { name: '金桔綠', prices: { M: 45, L: 55 } },
      { name: '葡萄柚綠', prices: { M: 55, L: 65 } },
      { name: '鮮柚綠', prices: { M: 60, L: 70 } },
      { name: '蜂蜜綠', prices: { M: 45, L: 55 } },
      { name: '蜂蜜紅', prices: { M: 45, L: 55 } },

      // 找奶茶
      { name: '奶茶', prices: { M: 45, L: 55 } },
      { name: '奶綠', prices: { M: 45, L: 55 } },
      { name: '烏龍奶茶', prices: { M: 45, L: 55 } },
      { name: '椰果奶茶', prices: { M: 45, L: 55 } },
      { name: '椰果奶綠', prices: { M: 45, L: 55 } },
      { name: '仙草凍奶茶', prices: { M: 45, L: 55 } },
      { name: '珍珠奶茶', prices: { M: 45, L: 55 } },
      { name: '珍珠奶綠', prices: { M: 45, L: 55 } },
      { name: '波霸奶茶', prices: { M: 45, L: 55 } },
      { name: '波霸奶綠', prices: { M: 45, L: 55 } },
      { name: '布丁奶茶', prices: { M: 55, L: 65 } },
      { name: '布丁奶綠', prices: { M: 55, L: 65 } },
      { name: '燕麥奶茶', prices: { M: 50, L: 60 } },
      { name: '燕麥奶綠', prices: { M: 50, L: 60 } },
      { name: '蒟蒻奶茶', prices: { M: 50, L: 60 } },
      { name: '蒟蒻奶綠', prices: { M: 50, L: 60 } },

      // 找口感
      { name: '四季春珍波椰 (1號)', prices: { M: 35, L: 45 } },
      { name: '珍珠綠茶', prices: { M: 35, L: 45 } },
      { name: '珍珠紅茶', prices: { M: 35, L: 45 } },
      { name: '珍珠青茶', prices: { M: 35, L: 45 } },
      { name: '珍珠烏龍', prices: { M: 35, L: 45 } },
      { name: '波霸綠茶', prices: { M: 35, L: 45 } },
      { name: '波霸紅茶', prices: { M: 35, L: 45 } },
      { name: '波霸青茶', prices: { M: 35, L: 45 } },
      { name: '波霸烏龍', prices: { M: 35, L: 45 } },
      { name: '椰果綠茶', prices: { M: 35, L: 45 } },
      { name: '椰果紅茶', prices: { M: 35, L: 45 } },
      { name: '椰果青茶', prices: { M: 35, L: 45 } },
      { name: '椰果烏龍', prices: { M: 35, L: 45 } },
      { name: '仙草凍綠茶', prices: { M: 35, L: 45 } },
      { name: '仙草凍紅茶', prices: { M: 35, L: 45 } },
      { name: '仙草凍青茶', prices: { M: 35, L: 45 } },
      { name: '仙草凍烏龍', prices: { M: 35, L: 45 } },
      { name: '燕麥綠茶', prices: { M: 40, L: 50 } },
      { name: '燕麥紅茶', prices: { M: 40, L: 50 } },
      { name: '燕麥青茶', prices: { M: 40, L: 50 } },
      { name: '燕麥烏龍', prices: { M: 40, L: 50 } },

      // 拿鐵系列
      { name: '紅茶拿鐵', prices: { M: 55, L: 65 } },
      { name: '綠茶拿鐵', prices: { M: 55, L: 65 } },
      { name: '青茶拿鐵', prices: { M: 55, L: 65 } },
      { name: '烏龍拿鐵', prices: { M: 55, L: 65 } },
      { name: '阿華田拿鐵', prices: { M: 60, L: 70 } },
      { name: '可可芭蕾拿鐵', prices: { M: 65, L: 75 } },
      { name: '珍珠紅茶拿鐵', prices: { M: 60, L: 70 } },
      { name: '波霸紅茶拿鐵', prices: { M: 60, L: 70 } },
      { name: '椰果紅茶拿鐵', prices: { M: 60, L: 70 } },
      { name: '仙草凍紅茶拿鐵', prices: { M: 60, L: 70 } },
      { name: '燕麥紅茶拿鐵', prices: { M: 65, L: 75 } },
      { name: '布丁紅茶拿鐵', prices: { M: 70, L: 80 } },

      // 瑪奇朵
      { name: '紅茶瑪奇朵', prices: { M: 45, L: 55 } },
      { name: '綠茶瑪奇朵', prices: { M: 45, L: 55 } },
      { name: '青茶瑪奇朵', prices: { M: 45, L: 55 } },
      { name: '烏龍瑪奇朵', prices: { M: 45, L: 55 } },
      { name: '芒果瑪奇朵', prices: { M: 50, L: 60 } },
      { name: '阿華田瑪奇朵', prices: { M: 55, L: 65 } },
      { name: '可可芭蕾瑪奇朵', prices: { M: 60, L: 70 } },
      { name: '四季奶青瑪奇朵', prices: { M: 45, L: 55 } },

      // 找新鮮與特調
      { name: '金桔檸檬', prices: { M: 45, L: 55 } },
      { name: '檸檬汁', prices: { M: 45, L: 55 } },
      { name: '檸檬梅子', prices: { M: 45, L: 55 } },
      { name: '檸檬蜜', prices: { M: 50, L: 60 } },
      { name: '8冰茶', prices: { M: 45, L: 55 } },
      { name: '蜂蜜青茶', prices: { M: 45, L: 55 } },
      { name: '蜂蜜烏龍茶', prices: { M: 45, L: 55 } },
      { name: '麵茶紅茶拿鐵', prices: { M: 60, L: 70 } }
    ]
  },
  'chingshin': {
    name: '清心福全',
    themeClass: 'theme-chingshin',
    menuLink: 'https://www.chingshin.tw/',
    menu: [
      // 經典茗品
      { name: '烏龍綠茶', prices: { M: 30, L: 35 } },
      { name: '特級綠茶', prices: { M: 30, L: 35 } },
      { name: '錫蘭紅茶', prices: { M: 30, L: 35 } },
      { name: '極品菁茶', prices: { M: 30, L: 35 } },
      { name: '原鄉四季', prices: { M: 30, L: 35 } },
      { name: '特選普洱茶', prices: { M: 30, L: 35 } },
      { name: '翡翠烏龍茶', prices: { M: 30, L: 35 } },
      { name: '大麥紅茶', prices: { M: 30, L: 35 } },
      { name: '經典大麥茶', prices: { M: 30, L: 35 } },

      // 嚴選奶茶
      { name: '奶茶', prices: { M: 40, L: 50 } },
      { name: '奶綠', prices: { M: 40, L: 50 } },
      { name: '烏龍奶茶', prices: { M: 40, L: 50 } },
      { name: '菁香奶茶', prices: { M: 40, L: 50 } },
      { name: '普洱奶茶', prices: { M: 40, L: 50 } },
      { name: '麥香奶茶', prices: { M: 40, L: 50 } },
      { name: '錫蘭奶紅', prices: { M: 40, L: 45 } },
      { name: '珍珠奶茶', prices: { M: 40, L: 50 } },
      { name: '波霸奶茶', prices: { M: 40, L: 50 } },
      { name: '椰果奶茶', prices: { M: 40, L: 50 } },
      { name: '仙草凍奶茶', prices: { M: 40, L: 50 } },
      { name: '布丁奶茶', prices: { M: 50, L: 60 } },
      { name: '雙Q奶茶', prices: { M: 45, L: 55 } },
      { name: '蜂蜜奶茶', prices: { M: 45, L: 55 } },
      { name: '蜂蜜奶綠', prices: { M: 45, L: 55 } },
      { name: '特級奶綠', prices: { M: 40, L: 50 } },

      // 鮮奶拿鐵
      { name: '鮮奶拿鐵', prices: { M: 55, L: 65 } },
      { name: '綠茶拿鐵', prices: { M: 55, L: 65 } },
      { name: '烏龍拿鐵', prices: { M: 55, L: 65 } },
      { name: '菁茶拿鐵', prices: { M: 55, L: 65 } },
      { name: '普洱拿鐵', prices: { M: 55, L: 65 } },
      { name: '大麥鮮奶', prices: { M: 55, L: 65 } },
      { name: '珍珠鮮奶茶', prices: { M: 60, L: 70 } },
      { name: '波霸鮮奶茶', prices: { M: 60, L: 70 } },
      { name: '椰果鮮奶茶', prices: { M: 60, L: 70 } },
      { name: '仙草凍鮮奶茶', prices: { M: 60, L: 70 } },
      { name: '紅豆鮮奶茶', prices: { M: 65, L: 75 } },
      { name: '黑糖鮮奶茶', prices: { M: 60, L: 70 } },
      { name: '琥珀黑糖鮮奶', prices: { M: 65, L: 75 } },

      // 優多系列
      { name: '優多綠茶', prices: { M: 40, L: 50 } },
      { name: '優多紅茶', prices: { M: 40, L: 50 } },
      { name: '優多青茶', prices: { M: 40, L: 50 } },
      { name: '優多烏龍茶', prices: { M: 40, L: 50 } },
      { name: '檸檬優多', prices: { M: 45, L: 55 } },
      { name: '葡萄柚優多', prices: { M: 55, L: 65 } },
      { name: '百香果優多', prices: { M: 50, L: 60 } },
      { name: '藍莓優多', prices: { M: 45, L: 55 } },
      { name: '紅心芭樂優多', prices: { M: 50, L: 60 } },

      // 季節鮮果與特調
      { name: '蜂蜜綠茶', prices: { M: 40, L: 50 } },
      { name: '蜂蜜紅茶', prices: { M: 40, L: 50 } },
      { name: '蜂蜜烏龍茶', prices: { M: 40, L: 50 } },
      { name: '梅子綠茶', prices: { M: 35, L: 45 } },
      { name: '梅子紅茶', prices: { M: 35, L: 45 } },
      { name: '梅子青茶', prices: { M: 35, L: 45 } },
      { name: '金桔檸檬', prices: { M: 45, L: 55 } },
      { name: '檸檬綠茶', prices: { M: 40, L: 50 } },
      { name: '檸檬紅茶', prices: { M: 40, L: 50 } },
      { name: '檸檬青茶', prices: { M: 40, L: 50 } },
      { name: '葡萄柚綠茶', prices: { M: 55, L: 65 } },
      { name: '百香果綠茶', prices: { M: 45, L: 55 } },
      { name: '雙Q百香果綠茶', prices: { M: 50, L: 60 } },
      { name: '蜜桃凍紅茶', prices: { M: 40, L: 50 } },
      { name: '藍莓香醋', prices: { M: 40, L: 50 } },
      { name: '蘋果香醋', prices: { M: 40, L: 50 } },

      // 冬瓜系列
      { name: '冬瓜茶', prices: { M: 25, L: 30 } },
      { name: '冬瓜綠茶', prices: { M: 30, L: 35 } },
      { name: '冬瓜青茶', prices: { M: 30, L: 35 } },
      { name: '冬瓜麥茶', prices: { M: 30, L: 35 } },
      { name: '冬瓜檸檬', prices: { M: 40, L: 50 } },
      { name: '冬瓜鮮奶', prices: { M: 50, L: 60 } },

      // 冰淇淋系列
      { name: '冰淇淋紅茶', prices: { M: 45, L: 55 } },
      { name: '冰淇淋綠茶', prices: { M: 45, L: 55 } },
      { name: '冰淇淋奶茶', prices: { M: 50, L: 60 } },

      // 隱藏版與特殊調飲
      { name: '珍珠蜂蜜鮮奶普洱', prices: { M: 60, L: 70 } },
      { name: '蜂蜜烏龍加東方美人', prices: { M: 50, L: 60 } },
      { name: '優多綠茶加梅子', prices: { M: 45, L: 55 } }
    ]
  },
  'coco': {
    name: 'CoCo 都可',
    themeClass: 'theme-coco',
    menuLink: 'https://www.facebook.com/cocofreshtea.tw/?locale=zh_TW',
    menu: [
      // 純茶系列
      { name: '手採紅茶', prices: { M: 30, L: 35 } },
      { name: '茉莉綠茶', prices: { M: 30, L: 35 } },
      { name: '四季春茶', prices: { M: 30, L: 35 } },
      { name: '莊園紅茶', prices: { M: 35, L: 40 } },
      { name: '輕焙烏龍茶', prices: { M: 30, L: 35 } },

      // 經典奶茶
      { name: '奶茶', prices: { M: 40, L: 50 } },
      { name: '奶綠', prices: { M: 40, L: 50 } },
      { name: '烏龍奶茶', prices: { M: 40, L: 50 } },
      { name: '茉香奶綠', prices: { M: 40, L: 50 } },
      { name: '珍珠奶茶', prices: { M: 40, L: 50 } },
      { name: '波霸奶茶', prices: { M: 40, L: 50 } },
      { name: '椰果奶茶', prices: { M: 40, L: 50 } },
      { name: '布丁奶茶', prices: { M: 50, L: 60 } },
      { name: '仙草凍奶茶', prices: { M: 40, L: 50 } },
      { name: '雙Q奶茶', prices: { M: 45, L: 55 } },
      { name: '西谷米奶茶', prices: { M: 45, L: 55 } },
      { name: '奶茶三兄弟', prices: { L: 60 } },

      // 鮮乳拿鐵
      { name: '紅茶拿鐵', prices: { M: 55, L: 65 } },
      { name: '綠茶拿鐵', prices: { M: 55, L: 65 } },
      { name: '烏龍拿鐵', prices: { M: 55, L: 65 } },
      { name: '四季春拿鐵', prices: { M: 55, L: 65 } },
      { name: '珍珠紅茶拿鐵', prices: { M: 60, L: 70 } },
      { name: '波霸紅茶拿鐵', prices: { M: 60, L: 70 } },
      { name: '布丁鮮奶茶', prices: { M: 65, L: 75 } },
      { name: '仙草鮮奶茶', prices: { M: 60, L: 70 } },
      { name: '芋頭牛奶', prices: { M: 60, L: 70 } },
      { name: '珍珠芋頭牛奶', prices: { M: 65, L: 75 } },

      // 鮮果茶系列
      { name: '百香雙響炮', prices: { L: 60 } },
      { name: '紅柚雙響炮', prices: { L: 65 } },
      { name: '葡萄柚果粒茶', prices: { L: 65 } },
      { name: '21歲輕檸烏龍', prices: { L: 50 } },
      { name: '鮮橙綠茶', prices: { M: 50, L: 60 } },
      { name: '金桔檸檬', prices: { M: 45, L: 50 } },
      { name: '檸檬冬瓜露', prices: { M: 40, L: 45 } },
      { name: '檸檬紅茶', prices: { M: 40, L: 45 } },
      { name: '檸檬綠茶', prices: { M: 40, L: 45 } },
      { name: '蜜桔檸檬', prices: { M: 45, L: 55 } },
      { name: '百香綠茶', prices: { M: 40, L: 45 } },
      { name: '芒果綠茶', prices: { M: 45, L: 55 } },
      { name: '水蜜桃綠茶', prices: { M: 45, L: 55 } },
      { name: '檸檬霸', prices: { L: 65 } },
      { name: '鳳梨青茶', prices: { M: 45, L: 55 } },

      // 奶蓋系列
      { name: '法式奶蓋綠茶', prices: { L: 55 } },
      { name: '法式奶蓋紅茶', prices: { L: 55 } },
      { name: '法式奶蓋青茶', prices: { L: 55 } },
      { name: '法式奶蓋烏龍', prices: { L: 55 } },
      { name: '法式奶蓋可可', prices: { L: 65 } },

      // 冰沙系列
      { name: '芒果冰沙', prices: { L: 70 } },
      { name: '百香冰沙', prices: { L: 65 } },
      { name: '綠豆沙', prices: { L: 55 } },
      { name: '綠豆沙牛奶', prices: { L: 65 } },
      { name: '巧克力冰沙', prices: { L: 70 } },
      { name: '摩卡咖啡冰沙', prices: { L: 75 } },

      // 生椰/椰奶系列
      { name: '生椰拿鐵咖啡', prices: { L: 70 } },
      { name: '生椰紅茶', prices: { L: 60 } },
      { name: '生椰綠茶', prices: { L: 60 } },
      { name: '椰奶珍椰青', prices: { M: 50, L: 60 } },

      // 特色甜品調飲
      { name: '粉角檸檬冬瓜', prices: { M: 45, L: 50 } },
      { name: '粉角紅茶', prices: { M: 40, L: 45 } },
      { name: '粉角奶茶', prices: { M: 45, L: 55 } },
      { name: '西谷米芒果露', prices: { L: 70 } },
      { name: '養樂多綠茶', prices: { M: 45, L: 50 } },
      { name: '養樂多紅茶', prices: { M: 45, L: 50 } },
      { name: '冬瓜茶', prices: { M: 25, L: 30 } },
      { name: '冬瓜西谷米', prices: { M: 35, L: 40 } },

      // 咖啡系列
      { name: '職人美式咖啡', prices: { M: 45, L: 55 } },
      { name: '經典拿鐵咖啡', prices: { M: 55, L: 65 } },
      { name: '焦糖瑪奇朵', prices: { M: 60, L: 70 } },
      { name: '榛果拿鐵咖啡', prices: { M: 60, L: 70 } }
    ]
  },
  'presotea': {
    name: '鮮茶道',
    themeClass: 'theme-presotea',
    menuLink: 'https://www.presotea.com/',
    menu: [
      // 阿里山純萃茶
      { name: '阿里山冰茶', prices: { M: 35, L: 40 } },
      { name: '日月潭紅玉', prices: { M: 30, L: 35 } },
      { name: '文山清茶', prices: { M: 30, L: 35 } },
      { name: '錫蘭紅茶', prices: { M: 30, L: 35 } },
      { name: '頂級茉莉綠茶', prices: { M: 30, L: 35 } },
      { name: '白桃烏龍茶', prices: { M: 35, L: 40 } },
      { name: '玫瑰鐵觀音', prices: { M: 35, L: 40 } },
      { name: '凍頂烏龍茶', prices: { M: 30, L: 35 } },
      { name: '焙茶', prices: { M: 30, L: 35 } },
      { name: '煎茶', prices: { M: 30, L: 35 } },
      { name: '日式玄米茶', prices: { M: 30, L: 35 } },

      // 經典奶茶
      { name: '琥珀奶茶', prices: { M: 45, L: 50 } },
      { name: '茉香奶綠', prices: { M: 45, L: 50 } },
      { name: '烏龍奶茶', prices: { M: 45, L: 50 } },
      { name: '鐵觀音奶茶', prices: { M: 45, L: 50 } },
      { name: '焙茶烤奶', prices: { M: 50, L: 55 } },
      { name: '沖繩黑糖風味奶茶', prices: { M: 50, L: 55 } },
      { name: '伯爵奶茶', prices: { M: 50, L: 55 } },
      { name: '伯爵奶茶家族', prices: { M: 55, L: 60 } },
      { name: '布丁奶茶', prices: { M: 55, L: 60 } },
      { name: '仙草凍奶茶', prices: { M: 45, L: 50 } },
      { name: '熊貓黑糖珍奶茶', prices: { M: 60, L: 70 } },
      { name: '珍珠奶茶', prices: { M: 45, L: 50 } },
      { name: '椰果奶茶', prices: { M: 45, L: 50 } },
      { name: '雙Q奶茶', prices: { M: 50, L: 55 } },

      // 鮮奶拿鐵
      { name: '紅茶拿鐵', prices: { M: 55, L: 60 } },
      { name: '綠茶拿鐵', prices: { M: 55, L: 60 } },
      { name: '鐵觀音拿鐵', prices: { M: 55, L: 60 } },
      { name: '伯爵拿鐵', prices: { M: 55, L: 65 } },
      { name: '焙茶拿鐵', prices: { M: 60, L: 65 } },
      { name: '玄米茶拿鐵', prices: { M: 60, L: 65 } },
      { name: '珍珠鮮奶茶', prices: { M: 60, L: 70 } },
      { name: '黑糖珍珠鮮奶', prices: { M: 65, L: 70 } },
      { name: '芋頭鮮奶', prices: { M: 65, L: 75 } },

      // 熱帶鮮果茶
      { name: '墾丁冰茶', prices: { M: 45, L: 50 } },
      { name: '招牌水果茶', prices: { M: 55, L: 60 } },
      { name: '紅心芭樂汁', prices: { M: 50, L: 55 } },
      { name: '百香雙Q', prices: { M: 50, L: 55 } },
      { name: '百香果綠茶', prices: { M: 45, L: 50 } },
      { name: '柳橙綠茶', prices: { M: 50, L: 55 } },
      { name: '檸檬綠茶', prices: { M: 45, L: 50 } },
      { name: '檸檬紅茶', prices: { M: 45, L: 50 } },
      { name: '藍莓綠茶', prices: { M: 45, L: 50 } },
      { name: '水蜜桃烏龍', prices: { M: 45, L: 50 } },
      { name: '芒果綠茶', prices: { M: 45, L: 50 } },
      { name: '鳳梨青茶', prices: { M: 45, L: 50 } },

      // 調味特調
      { name: '蜂蜜綠茶', prices: { M: 40, L: 45 } },
      { name: '蜂蜜紅茶', prices: { M: 40, L: 45 } },
      { name: '蜜香烏龍茶', prices: { M: 40, L: 45 } },
      { name: '梅子綠茶', prices: { M: 35, L: 40 } },
      { name: '梅子青茶', prices: { M: 35, L: 40 } },
      { name: '冬瓜檸檬', prices: { M: 45, L: 50 } },
      { name: '養樂多綠茶', prices: { M: 45, L: 50 } },
      { name: '養樂多檸檬', prices: { M: 50, L: 55 } },

      // 冬瓜系列
      { name: '古早味冬瓜茶', prices: { M: 25, L: 30 } },
      { name: '冬瓜綠茶', prices: { M: 30, L: 35 } },
      { name: '冬瓜青茶', prices: { M: 30, L: 35 } },
      { name: '冬瓜鮮奶', prices: { M: 50, L: 55 } },
      { name: '冬瓜雙Q', prices: { M: 40, L: 45 } },

      // 氣泡蘇打
      { name: '百香氣泡蘇打', prices: { L: 55 } },
      { name: '芒果氣泡蘇打', prices: { L: 55 } },
      { name: '藍莓氣泡蘇打', prices: { L: 55 } },

      // 纖活養生
      { name: '文山薑茶', prices: { M: 45, L: 50 } },
      { name: '桂圓紅棗茶', prices: { M: 45, L: 50 } },
      { name: '桂圓紅棗奶茶', prices: { M: 50, L: 55 } },
      { name: '人蔘烏龍茶', prices: { M: 50, L: 55 } },
      { name: '菊花枸杞茶', prices: { M: 45, L: 50 } }
    ]
  },
  'mrwish': {
    name: 'Mr. Wish',
    themeClass: 'theme-mrwish',
    menuLink: 'https://www.mr-wish.com/',
    menu: [
      // 招牌鮮果茶
      { name: '光果茶', prices: { L: 65 } },
      { name: '青果茶', prices: { L: 60 } },
      { name: '奇異果綠茶', prices: { L: 60 } },
      { name: '鮮榨柳橙綠', prices: { L: 65 } },
      { name: '葡萄柚綠茶', prices: { L: 60 } },
      { name: '百香果綠茶', prices: { L: 55 } },
      { name: '鳳梨青茶', prices: { L: 55 } },
      { name: '水蜜桃紅茶', prices: { L: 55 } },
      { name: '芒果綠茶', prices: { L: 60 } },
      { name: '檸檬綠茶', prices: { L: 50 } },
      { name: '桔子綠茶', prices: { L: 50 } },

      // 經典手作純茶
      { name: '高山金萱茶', prices: { M: 30, L: 35 } },
      { name: '熟成紅茶', prices: { M: 30, L: 35 } },
      { name: '茉香綠茶', prices: { M: 30, L: 35 } },
      { name: '四季春茶', prices: { M: 30, L: 35 } },
      { name: '炭焙烏龍茶', prices: { M: 30, L: 35 } },

      // 鮮奶與厚奶系列
      { name: '芒果厚奶', prices: { L: 80 } },
      { name: '草莓厚奶', prices: { L: 75 } },
      { name: '芋頭QQ鮮奶', prices: { M: 70, L: 75 } },
      { name: '波霸珍珠鮮奶茶', prices: { M: 60, L: 65 } },
      { name: '珍珠鮮奶綠', prices: { M: 60, L: 65 } },
      { name: '布丁鮮奶茶', prices: { M: 65, L: 70 } },
      { name: '仙草凍鮮奶茶', prices: { M: 60, L: 65 } },
      { name: '紅豆牛奶', prices: { M: 60, L: 65 } },

      // 香甜冰沙系列
      { name: '楊枝甘露', prices: { L: 80 } },
      { name: '愛文芒果冰沙', prices: { L: 75 } },
      { name: '草莓冰沙', prices: { L: 70 } },
      { name: '水蜜桃冰沙', prices: { L: 70 } },
      { name: '奇異果冰沙', prices: { L: 70 } },
      { name: '鳳梨冰沙', prices: { L: 65 } },
      { name: '綠豆沙牛奶', prices: { L: 60 } },

      // 芝芝奶蓋系列
      { name: '芝芝草莓', prices: { L: 85 } },
      { name: '芝芝芒果', prices: { L: 85 } },
      { name: '芝芝桃氣', prices: { L: 80 } },
      { name: '芝芝葡萄', prices: { L: 85 } },
      { name: '芝芝綠茶', prices: { L: 55 } },
      { name: '芝芝紅茶', prices: { L: 55 } },

      // 果醋與特調
      { name: '紅心芭樂梅', prices: { L: 60 } },
      { name: '紅心芭樂檸檬', prices: { L: 60 } },
      { name: '藍莓果醋', prices: { L: 55 } },
      { name: '蘋果果醋', prices: { L: 55 } },
      { name: '金桔檸檬', prices: { M: 45, L: 50 } },
      { name: '冬瓜青茶', prices: { M: 35, L: 40 } },
      { name: '冬瓜檸檬', prices: { M: 40, L: 45 } },
      { name: '冬瓜茶', prices: { M: 25, L: 30 } },
      { name: '養樂多綠茶', prices: { M: 45, L: 50 } },
      { name: '檸檬多多', prices: { M: 45, L: 50 } },

      // 烤奶與歐蕾
      { name: '湖塩太妃烤奶', prices: { M: 55, L: 60 } },
      { name: '玫瑰芝芝烤奶', prices: { M: 55, L: 60 } },
      { name: '伯爵歐蕾', prices: { M: 55, L: 60 } },
      { name: '紅茶拿鐵', prices: { M: 55, L: 65 } },
      { name: '綠茶拿鐵', prices: { M: 55, L: 65 } },

      // 嚼感系列
      { name: '粽夏一號', prices: { L: 65 } },
      { name: '粽夏奶烏', prices: { L: 75 } },
      { name: '粉粿紅茶', prices: { M: 40, L: 45 } },
      { name: '粉粿奶茶', prices: { M: 45, L: 55 } },
      { name: '黑糖珍珠鮮奶', prices: { M: 65, L: 70 } },
      { name: '珍珠奶茶', prices: { M: 45, L: 50 } }
    ]
  }
};
