# drink-ordering-gh（跨 Agent 專案規則）

> 本檔是不同 Agent 共用的專案入口。

## 專案入口

- 專案名稱：`drink-ordering-gh`
- 專案用途：飲料訂購系統。
- 主要工作目錄：`C:\Users\chang\我的雲端硬碟\agents\drink-ordering-gh`
- GitHub repo：<https://github.com/changyiwu/drink-ordering-gh.git>
- 預設分支：`main`

## Obsidian 對應筆記

- Vault：`C:\Users\chang\我的雲端硬碟\2ndbrain`
- 專案筆記：`drink-ordering-gh/專案工作流程.md`

## 工作規則

- 回應與文件使用繁體中文。
- 涉及檔案操作時回報完整產出位置。
- Windows 指令優先使用 PowerShell 語法。
- 開工時讀取本檔、`handoff.md` 與 Obsidian 專案筆記，並檢查 Git 狀態。
- 收工時更新 Obsidian 專案筆記，檢查 diff，且只提交本次任務相關檔案。
- 不把每日流水帳寫進本檔。

## 安全與隱私

- 不要 commit API key、token、密碼或 Firebase Admin 憑證。
- 不要 commit NotebookLM 個人匯出清單或筆記本 ID 清單。
- 不要自動納入無關的 Git 變更。
- 不要儲存學生真名；正式資料只使用班級代號與座號。

## 最近進度

- 2026-07-22：統一跨 Agent 規則入口，並強化 Firestore 訂單建立時的姓名、杯數與價格欄位驗證。
