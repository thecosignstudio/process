---
title: "實做建議"
chapter_number: "06"
---

# 實做建議

## 介紹
**您將在此章節中學習到：**
- 如何為特定裝置準備素材 (assets)
- 如何正確地為素材命名
- 如何回答客戶最常詢問的問題
- 前往下個設計階段前，要問自己的問題

開始準備素材前，請先與該 App 的開發人員討論。每個開發人員對於實做設計有不同的方法。對於像是背景和按鈕這樣的互動元素等可擴充素材特別重要。

**相關成員**
- 設計師
- 客戶
- 內部開發人員
- 外部開發人員
- 專案經理

## 製作、管理素材的優良工具

在準備規格給開發人員時，製作精確、容易使用的文件極為重要。經過深入研究和比較不同類型的軟體後，我們採用 [InVision Inspect](https://www.invisionapp.com/feature/inspect){:target="_blank"} 做為 Netguru 的預設交付工具。

另一種免費工具的選擇是 [Sketch Measure](http://utom.design/measure/how-to.html){:target="_blank"}。可以在[此頁面](https://github.com/utom/sketch-measure){:target="_blank"}找到說明和下載連結。

除了原生的 Sketch 解決方案、inVision Inspect 和 Sketch Measure 外掛程式，還可以使用 [Zeplin](https://zeplin.io/){:target="_blank"}。

除此之外，運用 [Principle](http://principleformac.com){:target="_blank"} 和 [Framer](https://framer.com){:target="_blank"} 這類工具，針對特定元件製作動畫，並透過預覽動畫，產生有邏輯性的解釋和表現是非常重要的。

**最佳化工具**
使用最佳化工具諸如 [Kraken](https://kraken.io/web-interface){:target="_blank"}、 [ImageOptim](https://imageoptim.com/mac){:target="_blank"}或 [Optimage](http://getoptimage.com/){:target="_blank"}。Photoshop 和 Sketch 儲存圖片時，預設會儲存中繼資訊 (metadata)，而且不會進行最佳化。要使用工具過後才讓圖片看起來有相同品質，但佔用更少空間。

## 設計素材命名慣例

你可以創造屬於自己的命名模式，但也可以尊循以下方式：

- 在應用程式中的資源，有效命名是小寫的 a-z 英文字元、底線和 0-9 的數字。
- 素材的第一個字母可以是底線，小寫字母，但不能是數字。
- 不要使用大寫字母，更不要在 .png 或 .jpg 等副檔名使用。
- 可以在兩個單詞之間用底線作為分隔符號，不應使用橫槓 (-) 和空白字元。
- 素材的命名應該是獨一無二的，如果有兩個不同尺寸的「新增按鈕」，不能都命名成 add_icon.png；可以命名為 add_icon_small.png 和 add_icon_big.png，還有它們全部的像素密度變化。
- 在 iOS，要根據此規則命名每個素材：asset.png、asset@2x.png 和 asset@3x.png。
- 在 Android 裝置，需將素材命名成相同的 asset.png，並放在不同的專用資料夾內。資料夾結構應該要長成這樣：

{% include image.html img="image6.png" img2x="Image6@2x.png" alt="Desired folder structure" %}

為設計團隊建立好每個人都要遵循的設計命名慣例，為了防止誤解，我們建議在設計素材的不同狀態使用特定詞語，就像進行 CSS 開發的時候一樣，不必向工程人員解釋太多，就能夠理解其中含意。

- **Default** 預設的狀態
- **Hover** 滑鼠游標移到元素上面的狀態
- **Active** 按下按鈕瞬間的狀態
- **Focus** 使使用鍵盤操作或以滑鼠選取的狀態（單行、多行文字欄）
- **Visited** 狀態顯示為已造訪過的連結

好的命名慣例會長得像這樣：

- *ic* 做為圖示的字首
- *bg* 做為所有背景素材的字首
- *selected* 做為已選擇狀態的字尾
- *pressed* 做為按下選擇等狀態的字尾

範例：

- *ic_asset_name*
- *ic_asset_name_pressed*
- *ic_asset_name_selected*
- *ic_asset_name_disabled*
- *ic_asset_name_activated*

推薦閱讀這篇好文章來深入瞭解：[給設計師看的 Android 素材命名方式（英）](https://medium.com/@AkhilDad/a-designers-guide-for-naming-android-assets-f790359d11e5#.8gk28dx78){:target="_blank"}

## 針對 Android 平台

開發 Android 應用程式的時候，應該要以支援多種螢幕的方式進行。我們建議從 360x640 像素大小的畫布開始。因為就算只為智慧型手機製作應用程式，而且只支援直式螢幕，依然需要處理不同螢幕的解析度。通常，所有輸出給 Android 的素材都需要依照下列的解析度並且是 *.png* 格式：

- mdpi: 160 dpi
- hdpi: 240 dpi
- xhdpi: 320 dpi
- xxhdpi: 490 dpi
- xxxhdpi: 640 dpi

**小技巧：** 有空可以看看[如何統整檔案](https://gist.github.com/melvitax/fd592a162ad4fe48bd57){:target="_blank"}此珍貴資訊。

另外，SVG 圖片在很多情況下可以當做點陣圖 (bitmap) 的替代品。雖然 Android 本身並不支援，但可以輕易地從第三方資源套件顯示出來。它們佔用非常少空間 (尤其是壓縮版本：*svgz*)，)可以無限縮放且不會降低細節或品質，並且不需要為每個螢幕解析度單獨設置版本。只要記得請教工程師，要用哪種方式傳遞素材檔案。


**適用於 Android 的 9-patch 縮放**

{% include image.html img="9_patch_Android.png" img2x="9_patch_Android@2x.png" alt="9-patch scaling for Android" %}

如果有素材是多次使用於應用程式當中，並且能夠縮放成不同尺寸的，可以使用 9-patch 縮放 (例如：按鈕。) 像是圖示之類的東西可能無法正確縮放。所以，很遺憾地，必須手動調整所有解析度的大小。9-patch 的導線一定是 1 像素寬並且是黑色的 (#000000)，不然會無法辨識。切圖範圍則須比素材本身大 2 像素（左右或是上下 1 個像素寬。）因此，若素材是 48x48 像素，切圖範圍就是 50x50 像素。因為不能把 9-patch 圖片縮小，所以必須盡可能以最小尺寸交付，如此應用程式的整體性能會更好。使用 Android 的 Draw9Patch 工具輕鬆建立或是檢查 9-patch 圖片。更多有關於 9-patch 圖片詳細資料，請看 [Android Developers](http://developer.android.com/tools/help/draw9patch.html){:target="_blank"}網站。還可以利用[簡易 9-patch 圖片生成器 (Simple nine-patch generator)](https://romannurik.github.io/AndroidAssetStudio/nine-patches.html#&sourceDensity=320&name=example){:target="_blank"}。

請確認給應用程式使用的圖示和 Play Store 素材有遵循 Google 的[設計規範 (英) ](https://support.google.com/googleplay/android-developer/answer/1078870?hl=en){:target="_blank"}。

## 針對 iOS 平台

應用程式和所有該應用程式支援的裝置裡，圖像檔案都必須是高解析度圖片。根據不同裝置，每張圖片的像素長寬乘以特定縮放大小的數字。我們建議先以  375 X 667 像素（iPhone 6/7）當作一倍 @1x 畫布，再放大成更大比例的素材。

簡單來說，只需要提供 1 倍、2 倍和 3 倍大小的素材給工程師。就是這樣簡單。你一定知道怎麼做！

確認應用程式圖示和 App Store 素材都有符合 App Store 規範（請參見 Human Interface Guidelines 和 App Icons on iPhone, iPad and Apple Watch。）另外，Apple 會駁回有透明圖層的 PNG 檔案，所以要多檢查一遍。

## 客戶可能會問的問題

{% include qa.html question="所有素材都準備好了嗎？所有 iPhone/Android 的素材都做好了嗎？" answer="給客戶放置所有素材的連結（例如：以 Jira Ticket 附帶素材檔案或放置素材的 Google Drive 連結。）" %}

#### 在本階段問問自己：
  - 素材的命名都有跟工程師們討論過，並同意嗎？
  - 命名慣例有一致性嗎？
  - 已經製作所有符合平台尺寸需求的素材嗎？
  - 確定工程師有拿到所有他們所需要的嗎？

## 進行過此階段的理想結果
完成一整套符合所有目標裝置的設計素材。

## 延伸閱讀
- [讓 Sketch 有更好的 Android 流程（英）](https://medium.com/@lmindler/using-sketch-3-and-a-bit-of-fairy-dust-for-a-better-android-workflow-f667d0048855#.lgpmpu10m){:target="_blank"}
- [以開發人員的角度進行設計（英）](https://medium.com/going-your-way-anyway/design-like-a-developer-b92f7a8f4520#.1ynw77olc){:target="_blank"}
- [應該使用 Material Design 的原因（英）](https://www.netguru.co/blog/why-should-you-use-material-design){:target="_blank"}
