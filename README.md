# Tab Prettier for Opera

[繁體中文](#繁體中文) · [English](#english)

## 繁體中文

Opera 和 Opera GX 不讓擴充功能取代新分頁，所以 [Tab Prettier](https://github.com/ChiuKuanHsun/Tab-prettier) 裝在 Opera 上時，開新分頁還是快速撥號。這個小助手會在你開新分頁時，把快速撥號換成 Tab Prettier。

### 安裝

1. 先從 [Chrome 線上應用程式商店](https://chromewebstore.google.com/detail/fnacfhfopcdcgidgjllgngoigaajbapi) 安裝 Tab Prettier（Opera 會先問你要不要允許其他商店的擴充功能，按允許）。
2. 到 [Releases](https://github.com/ChiuKuanHsun/Tab-Prettier-for-Opera/releases/latest) 下載 `tab-prettier-for-opera-*.zip`，解壓縮到一個不會刪掉的資料夾。
3. 打開 `opera://extensions`，開啟右上角的「開發人員模式」。
4. 按「載入未封裝項目」，選剛剛解壓縮的資料夾。
5. 開一個新分頁，就會是 Tab Prettier 了。

### 開關

點工具列上的圖示就能開或關，關閉時圖示上會顯示「OFF」，這時新分頁會是原本的快速撥號。圖示在拼圖選單裡的話，可以釘選到工具列。

### 須知

- 開新分頁時，快速撥號可能會閃一下（約 0.1 秒）：Opera 不允許把快速撥號那一頁直接導走，所以助手是在同一個位置開一個 Tab Prettier 分頁，再關掉快速撥號。
- 只處理新開的分頁，Opera 的「首頁」按鈕不受影響。
- 需要「讀取分頁」權限，用來辨認哪個分頁是快速撥號。助手不會讀取或傳送任何其他資料。
- 只能搭配 Chrome 商店版的 Tab Prettier。Opera 擴充商店禁止取代啟動頁，所以這個助手不會上架，只能用上面的方式安裝。

## English

Opera and Opera GX don't let extensions replace the new tab page, so with [Tab Prettier](https://github.com/ChiuKuanHsun/Tab-prettier) installed a new tab still shows Speed Dial. This small helper swaps Speed Dial for Tab Prettier whenever you open a new tab.

### Install

1. Install Tab Prettier from the [Chrome Web Store](https://chromewebstore.google.com/detail/fnacfhfopcdcgidgjllgngoigaajbapi) (Opera asks first whether to allow extensions from other stores; allow it).
2. Download `tab-prettier-for-opera-*.zip` from [Releases](https://github.com/ChiuKuanHsun/Tab-Prettier-for-Opera/releases/latest) and unzip it into a folder you'll keep.
3. Open `opera://extensions` and turn on "Developer mode" (top right).
4. Click "Load unpacked" and pick the unzipped folder.
5. Open a new tab: it's Tab Prettier now.

### On and off

Click the toolbar button to turn it on or off. While it's off the button shows "OFF" and new tabs show Speed Dial as usual. If the button is in the puzzle menu, pin it to the toolbar.

### Good to know

- Speed Dial may flash for about 0.1 s: Opera doesn't allow sending the Speed Dial tab elsewhere, so the helper opens Tab Prettier in the same spot and closes Speed Dial.
- Only new tabs are swapped; Opera's home button is left alone.
- It needs the "tabs" permission to tell which tab is Speed Dial. It reads or sends nothing else.
- It works with Tab Prettier from the Chrome Web Store only. The Opera add-ons store doesn't allow replacing the start page, so this helper isn't listed there and installs as above.

## License

GPL-3.0, like Tab Prettier.
