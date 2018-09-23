---
title: "實行建議"
chapter_number: "06"
---

# 實行建議

## 介紹
**在這個章節你可以學到：**
- 如何準備專案的特殊裝置元件
- 如何好好地為元件命名
- 如何回答客戶常詢問的問題
- 前往下個設計階段前要問自己什麼問題

開始準備元件前，請先與開發人員討論。開發人員對於實現設計有不同的方法。這特別對於元件擴充而言很重要，像是背景、互動元件和按鈕。

**相關成員**
- 設計師
- 客戶
- 內部開發人員
- 外部開發人員
- 專案經理

## 最佳化的元件製作和管理工具

當我們在準備規範給開發人員時，明確的製作和容易使用文件是極為重要的。經過深入研究和比較不同類型的軟體後，我們決定將 [inVision Inspect](https://www.invisionapp.com/feature/inspect){:target="_blank"} 作為 Netguru 的預設提交工具。

另一種免費工具的選擇 [Sketch Measure](http://utom.design/measure/how-to.html){:target="_blank"}。你能在[此頁面](https://github.com/utom/sketch-measure){:target="_blank"}找到導覽和下載連結。

除了原生 Sketch 解決方案，inVision Inspect 和 Sketch Measure 外掛程式，你還可以使用其他工具，例如 [Zeplin](https://zeplin.io/){:target="_blank"}.

除此之外，運用像 [Principle](http://principleformac.com){:target="_blank"}. 和 [Framer](https://framer.com){:target="_blank"}. 這類工具，針對特定元件製作動畫，並透過預覽動畫去產生有邏輯性的解釋和表現是非常重要的。

**最佳化工具**
使用最佳化工具諸如 [Kraken](https://kraken.io/web-interface){:target="_blank"}、 [ImageOptim](https://imageoptim.com/mac){:target="_blank"}或 [Optimage](http://getoptimage.com/){:target="_blank"}。Photoshop 和 Sketch 儲存圖片時，使用預設設定會讓你的圖片看起來和使用最佳化演算相同品質，但佔用更少的空間。

## 設計元件命名習慣

你可以創造屬於自己的命名模式，但也可以尊循以下的方式：

- 在應用程式中有效的命名資源字符包含了 小寫的a-z英文字元，_底線，和0-9的數字。
- 設計元件第一個字母可以是_底線，小寫字母，但不能是數字。
- 不要使用大寫字母等，也不要包括 .png或 .jpg等檔名。
- 可以在兩個單詞之間用_下底線作為分隔符號，(-)和空白格在命名上不允許被使用。
- 設計元件命名應該是獨一無二的，如果你有兩個不同尺寸的“新增按鈕”，你不能都命名成add_icon.png，你可以命名為add_icon_small.png和add_icon_big.png或其他的變量。
- 對於iOS系統，可以根據此規則命名每個設計元件：asset.png, asset@2x.png, asset@3x.png
- 對於Android系統，需將每個設計元件命名成相同的 asset.png，並放在不同的專用資料夾內。所需要的資料夾結構為：

{% include image.html img="image6.png" img2x="Image6@2x.png" alt="Desired folder structure" %}
為設計團隊建立好設計的命名習慣，每個人都應當遵循設計命名原則，為了防止誤解，我們建議在設計素材的不同狀態使用特定術語，就像CSS開發一樣，不用解釋太多工程人員就能夠理解其中含意。

- **Default** 預設的狀態
- **Hover** 徘徊，懸停的狀態
- **Active** 按下按鈕時的狀態
- **Focus** 使用鍵盤或滑鼠啟用的狀態（輸入，文字區）
- **Visited** 連結已造訪過的狀態

好的命名方式如下：

- *ic*可以作為圖示元件的字首
- *bg*可以作為所有背景元件的字首
- *selected*做為選擇狀態的字尾*
- *pressed*做為按下選擇狀態的字尾等*

範例：

- *ic_asset_name*
- *ic_asset_name_pressed*
- *ic_asset_name_selected*
- *ic_asset_name_disabled*
- *ic_asset_name_activated*

如果想了解更多，可以閱讀此篇文章：[給設計師看的 Android 元件命名方式（英）](https://medium.com/@AkhilDad/a-designers-guide-for-naming-android-assets-f790359d11e5#.8gk28dx78){:target="_blank"}

## 針對 Android 平台

在 Android 應用程式開發中，開發支援不同屏幕是一個很好的做法。我們建議你從 360x640 px 大小的畫布開始。因為就算你只為智慧型手機製作應用程式，而且只支援直式螢幕，你依然需要處理不同螢幕的解析度。通常來說，所有輸出給 Android 使用的物件都需要依照下列的解析度並且為 *.png* 格式：

- mdpi:160 dpi
- hdpi: 240 dpi
- xhdpi: 320 dpi
- xxhdpi: 490 dpi
- xxxhdpi: 640 dpi

**小技巧:** 請查看這個珍貴的資訊： [如何統整檔案](https://gist.github.com/melvitax/fd592a162ad4fe48bd57){:target="_blank"}.

此外，在許多狀況下，SVG 圖像可以作為取代點陣圖的替代品。雖然 Andoird 本身並不支援，但可以輕易地在第三方資料庫中顯示出來。它們佔用的空間更少 (特別是壓縮版本：*svgz*)，可以無限縮放且不會降低細節或質量，並且不需要為每個螢幕解析度單獨設置版本。
只要記得請教工程師，哪一種切圖方式是他們所想要的。


**適用於 Andoird 的 9-patch 圖片縮放**

{% include image.html img="9_patch_Android.png" img2x="9_patch_Android@2x.png" alt="9-patch scaling for Android" %}

如果你有物件是需要多次使用於應用程式當中，並且需要縮放成不同尺寸的，你可以使用9-patch 圖片縮放 (例如: 按鈕)。 諸如圖標之類的東西可能無法正確縮放，所以不幸的是，你必須手動調整所有解析度的大小。9-patch的導線通常為 1 像素寬且必須為黑色的 (#000000) ; 不然將無法辨識。你的切圖範圍則須比物件大 2 個像素 ( 左右或是上下 1 個像素寬)。若你的物件為 48x48 像素，你的切圖大小將會為 50x50 像素。你不能將9-patch 圖片縮小，所以你必須盡可能以最小尺寸交付。這會對於應用程式的整體性能更好。你可以使用 Android 的 Draw9Patch 工具輕鬆建立或是檢查 9-patch 圖片。更多有關於 9-patch 圖片詳細資料，請查看 [Android Developers](http://developer.android.com/tools/help/draw9patch.html){:target="_blank"}網站。 你還可以利用[簡易9-patch 圖片生成器 (Simple nine-patch generator)](https://romannurik.github.io/AndroidAssetStudio/nine-patches.html#&sourceDensity=320&name=example){:target="_blank"}。

請確認應用程式中的圖示和 Play Store 的物件有依照 Google 所提供的[設計規範 (英) ](https://support.google.com/googleplay/android-developer/answer/1078870?hl=en){:target="_blank"}。

## 針對iOS系統

在你的應用程式和該應用程式支援的其他裝置裡，所有的原圖都必須是高解析度圖片。根據不同裝置，每張圖片將依據一個特定的比例乘以一定量的像素（piexl）。我們建議你先 375 X 667 像素（iPhone 6/7）一倍@1x 畫布為基礎，再放大成更大比例的設計元件。
簡單來說，你只需要提供一倍、兩倍和三倍大小的設計元件給工程師。就是這樣簡單。你非常棒！
確定應用程式圖示和 App Store 設計元件都有符合 App Store 規範（請參見Human Interface Guidelines 和 App Icons on iPhone, iPad and Apple Watch）。另外，Apple會駁回有包含透明塗層的PNG檔案，所以要多檢查一遍。

## 客戶有可能會問的問題

問：所有設計元件都準備好了嗎？所有iPhone/Android版本的設計元件都製作好了嗎？
答：給客戶你所有設計元件的連結（例如：吉拉提供設計元件附檔或是Google Drive 連結到設計元件存儲地。）


## 在這階段你可能會問自己的問題
  - 所有設計元件的命名都有和工程師們討論並同意過嗎？
  - 我命名習慣有一至性嗎？
  - 我有製作所有符合平台尺寸的設計元件嗎？
  - 我確定工程師有拿到所有他們所需要的嗎？

## 在這階段後期望的結果
完成一系列符合所有目標裝置的設計元件。

## 延伸閱讀
- [Better Android workflows with Sketch](https://medium.com/@lmindler/using-sketch-3-and-a-bit-of-fairy-dust-for-a-better-android-workflow-f667d0048855#.lgpmpu10m){:target="_blank"}
- [Design like a Developer](https://medium.com/going-your-way-anyway/design-like-a-developer-b92f7a8f4520#.1ynw77olc){:target="_blank"}
- [Why should you use Material Design](https://www.netguru.co/blog/why-should-you-use-material-design){:target="_blank"}
