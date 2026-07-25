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

`APP_CHECK_SITE_KEY` 留空時會跳過初始化，本機開發不受影響。

## 部署

```bash
firebase deploy --only firestore:rules
```

前端為靜態檔案，透過 GitHub Pages 發佈（push 到 `main` 即生效）。
