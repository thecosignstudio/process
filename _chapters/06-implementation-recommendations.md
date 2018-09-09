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

如果想了解更多，可以閱讀此篇文章：A Designers Guide for naming Android Assets{:target="_blank"}.

## Android platform-specific tips

In Android app development, it’s a good practice to support multiple screens. We advise you to start working on a 360x640 px canvas. Even if you’re making an app only for smartphones and only for the portrait mode, you have to deal with different screen densities. As a rule, all assets exported for Android need to be in the following densities and in a *.png* format:

- mdpi:160 dpi
- hdpi: 240 dpi
- xhdpi: 320 dpi
- xxhdpi: 490 dpi
- xxxhdpi: 640 dpi

**Tip:** Take a look at this precious piece of information: [how to organize files](https://gist.github.com/melvitax/fd592a162ad4fe48bd57){:target="_blank"}.

Also, in many cases, SVG images can act as a good replacement for bitmaps. Although they are not supported natively by Android, they can be easily displayed using third-party libraries. They take up much less space (especially the zipped version, *svgz*), scale indefinitely with no loss of detail or quality, and don’t require a separate version for each screen density.
Just remember to ask the developer which way they want the assets to be delivered.

**9-patch scaling for Android**

{% include image.html img="9_patch_Android.png" img2x="9_patch_Android@2x.png" alt="9-patch scaling for Android" %}

If you have assets that are used more than once in your application and are scalable, you can use 9-patch scaling (e.g., for buttons). Things such as icons will probably not scale properly, so, unfortunately, you have to resize them manually for all the resolutions. The 9-patch guide is always 1 px thick and must be black (#000000); otherwise it won’t work. Your slice will always be 2 px bigger than the asset (1 px left and right and/or at the top and bottom). Thus, if your asset is 48x48 px, your slice will be 50x50 px. You can’t downscale 9-patch images, so you have to deliver them at the smallest size possible. This is also better for the overall performance of the application. You can use the Draw9Patch tool from Android to easily create or check your 9-patch images. For more specific information on 9-patch scaling and/or downloading the Draw9Patch tool, check the [Android Developers](http://developer.android.com/tools/help/draw9patch.html){:target="_blank"} website. You can also check [Simple nine-patch generator](https://romannurik.github.io/AndroidAssetStudio/nine-patches.html#&sourceDensity=320&name=example){:target="_blank"}.

Be sure that App icons and Play Store Assets are provided following [Google’s guidelines](https://support.google.com/googleplay/android-developer/answer/1078870?hl=en){:target="_blank"}.

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
