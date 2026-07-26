# drink-ordering-gh

飲料訂購系統 (Drink Ordering System)。

## 專案概要
本專案為一個飲料訂購系統，旨在提供便捷的飲料訂購與管理介面。

## 目錄結構
* `README.md` - 專案說明文件
* `agents.md` - 跨 Agent 工作區規則與配置
* `firestore.rules` - Firestore 安全規則
* `tools/set-admin-password.mjs` - 產生管理員密碼與 SHA-256 雜湊
* `.gitignore` - Git 忽略設定

## 管理員密碼設定

「一鍵清除本頁訂單」需要管理員密碼。安全規則只比對 SHA-256 雜湊，
Firestore 內不儲存明文，前端也只送出雜湊。

```bash
node tools/set-admin-password.mjs
```

腳本會產生一組 24 字元隨機密碼並印出雜湊值。接著到
Firebase Console → Firestore Database → `config` → `admin`：

1. 新增字串欄位 `passwordHash`，值填入腳本輸出的 64 位十六進位字串
2. 刪除舊的 `password` 欄位（明文）

明文密碼請存進密碼管理器，**不要 commit 進 repo**。

> 為什麼要用長隨機密碼：安全規則沒有速率限制，任何人都能匿名登入後反覆嘗試
> 刪除操作來試密碼。密碼長度就是這道防線的強度，短密碼會被腳本在數分鐘內試出來。
> 要根治需要把權限判定移到 Cloud Functions（需啟用 Blaze 方案）。

## App Check 設定

App Check 會擋掉非本站來源的自動化用戶端，降低匿名登入被腳本濫用的風險。

1. Firebase Console → App Check → 註冊網頁應用程式，provider 選 **reCAPTCHA v3**
2. 取得網站金鑰（site key）
3. 填入 `shop.js` 的 `APP_CHECK_SITE_KEY` 常數
4. 觀察 Console 的 App Check 指標，確認正常流量都帶著有效 token 後，
   再開啟 Firestore 的**強制執行（enforcement）**

App Check 只在 `APP_CHECK_HOSTS` 列出的網域啟用（目前為 `changyiwu.github.io`）。
本機以 `file://` 或 localhost 開啟時會自動跳過初始化，開發不受影響。

⚠️ 換網域時要同時更新三個地方，否則正式站會拿不到 token：
`shop.js` 的 `APP_CHECK_HOSTS`、reCAPTCHA 主控台的網域清單、Firebase Console 的 App Check 設定。

## 分享店家連結

分享到 LINE／FB 時，**請用各店的分享入口頁**，預覽才會顯示正確的店名：

| 店家 | 分享網址 |
|---|---|
| 50嵐 | `https://changyiwu.github.io/drink-ordering-gh/50lan.html` |
| 清心福全 | `.../chingshin.html` |
| CoCo 都可 | `.../coco.html` |
| 鮮茶道 | `.../presotea.html` |
| Mr. Wish | `.../mrwish.html` |

這些頁面只帶專屬 OG 標籤，開啟後會立即轉址到對應的 `shop.html?shop=<id>`。
直接分享 `shop.html?shop=50lan` 的話，預覽會顯示通用標題——因為純靜態站無法依
query 參數產生 OG 標籤，爬蟲也不會執行 JS。

首頁的店家卡片仍直接連到 `shop.html`，避免日常使用多一次轉址。

## 圖片素材

- `drink_banner.png` 為來源素材（1024×1024），頁面不再載入
- `drink_banner.webp` / `.jpg`：實際顯示用，1600×800
- `drink_banner_og.jpg`：社群分享用，1200×630
- `logo_*.webp`：店家卡片用，高度 88px；`logo_chingshin.png` 與 `logo_mrwish.svg` 維持原檔（轉檔後反而較大或本身為向量）

重新產生請用 [sharp](https://sharp.pixelplumbing.com/)，勿直接放大 `.png` 來源。

## 部署

```bash
firebase deploy --only firestore:rules
```

前端為靜態檔案，透過 GitHub Pages 發佈（push 到 `main` 即生效）。
