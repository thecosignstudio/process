---
title: "Implementation recommendations"
chapter_number: "06"
---

# Implementation recommendations

## Introduction
**In this section you can learn:**
- How to prepare assets for a project on specific devices.
- How to properly name assets.
- How to answer questions that clients ask most frequently.
- What questions to ask yourself before proceeding to the next design stage.

Talk with the developer of the app before you start preparing assets. Developers have different ways of implementing the design. This is especially important with scalable assets such as backgrounds and interactive elements such as buttons.

**Stakeholders:**
- Designers
- Client
- Internal Developers
- External Developers
- Project Manager

## Tools for better asset production and management

When it comes to preparing specifications for our developers, it is vital to generate precise and easy-to-use documentation.
After a thorough research & comparing different types of software, we decided to implement [InVision Inspect](https://www.invisionapp.com/feature/inspect){:target="_blank"} as a default handover tool at Netguru.

An alternative and free tool is [Sketch Measure](http://utom.design/measure/how-to.html){:target="_blank"}. You can find a guide and download links on [this page](https://github.com/utom/sketch-measure){:target="_blank"}.

Besides the native Sketch solution, InVision Inspect, and the Sketch Measure plugin, you can also use other tools such as [Zeplin](https://zeplin.io/){:target="_blank"}.

Moreover, it is very important for us to generate a description of the logic and behaviour for some components using animated preview generated with a tool such as [Principle](http://principleformac.com){:target="_blank"} and [Framer](https://framer.com){:target="_blank"}.

**Optimization tools**

Use optimization tools such as [Kraken](https://kraken.io/web-interface){:target="_blank"}, [ImageOptim](https://imageoptim.com/mac){:target="_blank"} or [Optimage](http://getoptimage.com/){:target="_blank"}. Photoshop and Sketch save a picture’s metadata by default and don’t use optimization algorithms that could make your picture look the same but take up less space.

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

## iOS platform-specific

You must supply high-resolution images for all the artwork in your app and all the devices your app supports. Depending on the device, you will accomplish this by multiplying the number of pixels in each image by a specific scale factor. We advise you to work on a @1x canvas size of 375x667 px (iPhone 6/7) and export upsized assets.

To put it simply, all you need is to provide the developer with @1x, @2x, @3x assets. That’s it. You’re brilliant.

Be sure that App icons and App store Assets will be in accordance with the App Store guidelines (see [Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/graphics/app-icon/){:target="_blank"} and [App Icons on iPhone, iPad and Apple Watch](https://developer.apple.com/library/content/qa/qa1686/_index.html){:target="_blank"}), also double-check that PNG files do not contain the alpha channel, because Apple will reject them otherwise.

## Questions your client may ask

{% include qa.html question="Are all assets ready? Are all assets for the iPhone/Android done?" answer="Guide the client to where you store the assets (e.g. Jira tickets with assets attached or links to assets on Google Drive)." %}

### Questions to ask yourself at this stage:

- Has the naming of my assets been discussed and agreed with the developers?
- Is my naming convention consistent?
- Have I made platform-specific assets in all required sizes?
- Am I sure developers have all they need?

## Desired outcomes after this stage

A set of assets covering all the designs for all target devices is complete.

## Additional reading
- [Better Android workflows with Sketch](https://medium.com/@lmindler/using-sketch-3-and-a-bit-of-fairy-dust-for-a-better-android-workflow-f667d0048855#.lgpmpu10m){:target="_blank"}
- [Design like a Developer](https://medium.com/going-your-way-anyway/design-like-a-developer-b92f7a8f4520#.1ynw77olc){:target="_blank"}
- [Why should you use Material Design](https://www.netguru.co/blog/why-should-you-use-material-design){:target="_blank"}
