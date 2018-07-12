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

## Asset naming convention

You can create your own naming pattern for your app, but keep in mind the following:
- The valid charset for naming resources is [a-z, _, 0–9], i.e., all lowercase characters, numbers, and underscore.
- The first character of your asset name can be either an underscore _ or a lowercase letter, but it cannot be a number.
- Do not use uppercase letters. Not even in extensions such as *.png* or *.jpg*
- Use an underscore _ as separator wherever you want to “put a space” between two words because hyphen (-) and space are not allowed.
- Asset names should be unique across the app’s screens. If you have two add buttons with different dimensions, you cannot name both as *add_icon.png*. Instead, you can create two different icons, e.g., *add_icon_small.png* and *add_icon_big.png* with all their density variants.
- For iOS, name each asset according to this naming convention: _asset.png, asset@2x.png, asset@3x.png_
- For Android Devices, provide each asset with the same name _asset.png_ but dedicated folders. Desired folder structure:

{% include image.html img="image6.png" img2x="Image6@2x.png" alt="Desired folder structure" %}

Set a naming convention for your design team – everyone should follow the same naming convention. To prevent misunderstandings, we recommend that you use a specific terminology for the different states of your elements, just as we do in CSS. Developers will know what you’re talking about without too much explanation.

- **Default.**
- **Hover.** The state of the element on a mouseover.
- **Active.** The state of the element upon a button press.
- **Focus.** The state of an element that is currently manipulated with the keyboard, or activated with the mouse (i.e., inputs, text areas).
- **Visited.** The state of the links that have already been visited

A good naming convention will look as follows:
- *ic* as a prefix for all icons
- *bg* as a prefix for all background assets
- *selected* as a suffix for selected states
- *pressed* as a suffix for pressed states and so on

Examples:
- *ic_asset_name*
- *ic_asset_name_pressed*
- *ic_asset_name_selected*
- *ic_asset_name_disabled*
- *ic_asset_name_activated*

If you want to find out more, here’s an excellent article: [A Designers Guide for naming Android Assets](https://medium.com/@AkhilDad/a-designers-guide-for-naming-android-assets-f790359d11e5#.8gk28dx78){:target="_blank"}.

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
