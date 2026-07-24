# drink-ordering-gh（專案藍圖）

> 本檔為跨 Agent 通用的專案藍圖（AGENTS.md 開放標準）。任何 Agent 的每個 session 都應先讀本檔＋`handoff.md`。

## 專案簡介

飲料訂購系統。純靜態前端搭配 Firebase Firestore，支援多家飲料店菜單、匿名下單與管理員清除流程。

## 關鍵時程

<!-- 目前無固定時程 -->

## 目標與路線圖

- [x] 階段一：訂購前端與多店菜單（50嵐、清心、CoCo、迷客夏、鮮茶道）
- [x] 階段二：跨 Agent 規則入口統一為 `agents.md`
- [x] 階段三：強化 `firestore.rules`——保護設定文件、限制管理授權文件擁有者、新增訂單時驗證姓名／杯數／價格欄位
- [ ] 階段四：使用 Firebase CLI 部署並測試新 Firestore 規則
- [ ] 階段五：驗證匿名使用者新增／修改／刪除自己訂單，以及管理員清除流程

## 資料夾結構

```
drink-ordering-gh/
├─ index.html          # 訂購主頁
├─ shop.html           # 店家頁
├─ shop.js             # 店家頁邏輯
├─ menu_data.js        # 菜單資料
├─ styles.css
├─ firestore.rules     # Firestore 安全規則
├─ firebase.json  .firebaserc  .firebase/
├─ drink_banner.png  logo_*.png  logo_mrwish.svg
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

## 最近進度

- 2026-07-22：統一跨 Agent 規則入口，並強化 Firestore 訂單建立時的姓名、杯數與價格欄位驗證。
- 2026-07-24：專案藍圖改用標準範本格式（補上路線圖 checklist、資料夾結構與同步層級表）。
