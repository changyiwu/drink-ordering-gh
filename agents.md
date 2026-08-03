# drink-ordering-gh（專案藍圖）

> 本檔為跨 Agent 通用的專案藍圖（AGENTS.md 開放標準）。任何 Agent 的每個 session 都應先讀本檔＋`handoff.md`。

## 專案簡介

飲料訂購系統。純靜態前端搭配 Firebase Firestore，支援多家飲料店菜單、匿名下單與管理員清除流程。

## 關鍵時程

<!-- 目前無固定時程 -->

## 目標與路線圖

- [x] 階段一：訂購前端與多店菜單（50嵐、清心福全、CoCo、鮮茶道、Mr. Wish）
- [x] 階段二：跨 Agent 規則入口統一為 `agents.md`
- [x] 階段三：強化 `firestore.rules`——保護設定文件、限制管理授權文件擁有者、新增訂單時驗證姓名／杯數／價格欄位
- [x] 階段四：使用 Firebase CLI 部署並測試新 Firestore 規則
- [x] 階段五：驗證匿名使用者新增／修改／刪除自己訂單（線上實測 29 項全數通過）
- [x] 階段六：網站視覺、效能與可用性改善（標題對比、品牌 logo、banner 壓縮、選單分組、觸控尺寸、分享入口頁）
- [x] 階段七：圖片素材集中至 `images/`
- [ ] 階段八：由使用者實測「一鍵清除」，確認 `config/admin` 的 `passwordHash` 設定正確
- [ ] 階段九：觀察 App Check 指標，確認多數請求已驗證後開啟 Firestore 強制執行
- [ ] 階段十（待評估）：訂單目前對任何匿名使用者全部可讀（含姓名），評估是否要限制
- [x] 階段十一：本機開發環境——看板渲染收斂為單一 `renderBoard()`，並新增 localhost 離線示範模式

## 資料夾結構

```
drink-ordering-gh/
├─ index.html          # 訂購主頁
├─ shop.html           # 店家頁
├─ shop.js             # 店家頁邏輯
├─ menu_data.js        # 菜單資料
├─ styles.css
├─ firestore.rules     # Firestore 安全規則
├─ tools/
│  └─ set-admin-password.mjs  # 產生管理員密碼與 SHA-256 雜湊
├─ firebase.json  .firebaserc  .firebase/
├─ 50lan.html  chingshin.html  coco.html  presotea.html  mrwish.html
│                     # 分享入口頁（帶專屬 OG 標籤後轉址）
├─ images/            # 所有圖片素材（banner、店家 logo、favicon）
├─ README.md
├─ agents.md           # 本檔：專案藍圖
├─ handoff.md          # 交接檔（每次收工必更新）
└─ .gitignore
```

## 同步層級（本專案初始化至第 3 層級）

| 層級 | 平台 | 位置 | 讀取時機 |
|------|------|------|---------|
| L1 | 本地（GDrive） | `agents.md`＋`handoff.md` | 每個 session |
| L2 | GitHub | https://github.com/changyiwu/drink-ordering-gh （公開） | 指定時 |
| L3 | Obsidian | `drink-ordering-gh/專案工作流程.md` | 有需要時 |

## 三個檔案的職責（依「時效性」分家，不是依「詳細程度」）

| 檔案 | 時效 | 寫入方式 | 放什麼 |
|------|------|---------|--------|
| `handoff.md` | **只對下一個 session 有效**，過期即丟 | 每次收工整份重寫 | 做到哪、下一步、**這次**的暫時 workaround |
| `agents.md`（本檔） | **長期有效**，每個 session 都適用 | 只有規則本身變了才改 | 目標、路線圖、常設規則、結構 |
| Obsidian／`git log` | **歷史**：發生過什麼、為什麼 | 只增不刪 | 決策紀錄、踩坑完整版、逐次進度 |

驗收標準：**`handoff.md` 整份刪掉，不應損失任何長期資訊**——會的話代表該升級進本檔卻沒升級。

**本檔不要出現的東西**：❌ `## 最近進度`／逐次工作紀錄、❌ 決策理由與踩坑完整版。2026-08-03 移除了 `## 最近進度`，內容逐條比對後已在 L3 筆記的〈🗓️ 最近更動紀錄〉——**是主動移除，不是遺漏，不要補回來**。踩過的坑只把**結論**收斂成一條祈使句寫進〈工作約定〉，原因留 L3。

## 工作約定

- 任何 Agent、任何電腦：**開工先讀 `handoff.md`，收工必更新 `handoff.md`**
- 修改共用檔案前先讀最新內容，避免覆蓋其他 Agent 的變更
- 所有回應與文件使用繁體中文；涉及檔案操作時回報完整產出位置
- Windows 指令優先使用 PowerShell 語法
- 收工時更新 Obsidian 專案筆記，檢查 diff，且只提交本次任務相關檔案
- 不把每日流水帳寫進本檔

## 安全與隱私

- 不要 commit API key、token、密碼或 Firebase Admin 憑證，也不要提交管理密碼
- `/config` 文件必須保持前端不可直接讀寫
- 不要自動納入無關的 Git 變更
- 不要儲存學生真名；正式資料只使用班級代號與座號
