---
title: "Implementation recommendations"
chapter_number: "06"
---


# Introduction

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

##Tools for better asset production and management

Sketch Measure is a great tool for making specifications for developers. You can find a guide and download links on their website [Sketch Measure](http://utom.design/measure/how-to.html).
Besides the native Sketch solution, you can also use plugins such as Sketch Export Assets [Plugin Sketch Export Assets](https://github.com/GeertWille/sketch-export-assets).

**Optimization tools**

Use optimization tools like [Kraken](https://kraken.io/web-interface), [ImageOptim](https://imageoptim.com/mac), or [Optimage](http://getoptimage.com/). Photoshop and Sketch save a picture’s metadata by default and don’t use optimization algorithms that could make your picture look the same but take up less space.

## Asset naming convention

You can decide your own naming pattern for your app, but you must keep in mind the following:
1. The valid charset for naming resources is [a-z, _, 0–9], i.e. all lowercase characters, numbers, and underscore.
2. The first character of your asset name can be either an underscore _ or a lowercase letter, but it cannot be a number.
3. Do not use uppercase letters. Not even in extensions such as *.png* or *.jpg*
4. Use an underscore _ as separator wherever you want to “put space” between two words because hyphen - and space are not allowed
5. Asset names should be unique across the app’s screens. If you have two add buttons with different dimensions, you cannot name both as *add_icon.png*, you can create two different icons, e.g. *add_icon_small.png* and *add_icon_big.png* with all their density variants.
6. For iOS, name each asset according to this naming convention
- asset.png
- asset@2x.png
- asset@3x.png
7. For Android Devices, provide each asset with the same name but dedicated folders.
- asset.png
- desired folder structure:

{% include image.html img="image6.jpg" alt="Desired folder structure" %}

Set a naming convention for your design team – everyone should follow the same naming convention. To prevent misunderstandings, we recommend that you use a specific terminology for the different states of your elements, just as we do in CSS. Developers will know what you’re talking about without too much explanation.

- **Default.**
- **Hover.** The state of the element on a mouseover.
- **Active.** The state of the element upon press. 
- **Focus.** The state of element that is currently manipulated by the keyboard, or activated by the mouse (i.e. inputs, text areas).
- **Visited.** The state of the links that have already been visited

A good naming convention will look like this:
- *ic* as prefix for all icons
- *bg* as prefix for all background
- *selected* as suffix for selected states
- *pressed* as suffix for pressed states and so on...

Examples:
- *ic_asset_name*
- *ic_asset_name_pressed*
- *ic_asset_name_selected*
- *ic_asset_name_disabled*
- *ic_asset_name_activated*

If you want to find out more, here’s a [good article](https://medium.com/@AkhilDad/a-designers-guide-for-naming-android-assets-f790359d11e5#.8gk28dx78).

## Android platform-specific tips

In Android app development, it’s a good practice to support multiple screens. We advise you to start working on a 360x640 px canvas. And even if you’re making an app only for smartphones and only for the portrait mode, you have to deal with different screen densities. As a rule, all assets exported for Android need to be in the following densities and in a *.png* format:

- mdpi:160 dpi
- hdpi: 240 dpi
- xhdpi: 320 dpi
- xxhdpi: 490 dpi
- xxxhdpi: 640 dpi

**Tip:** Take a look at this precious piece of information: [how to organize files](https://gist.github.com/melvitax/fd592a162ad4fe48bd57).

Also, in many cases, SVG images can act as a good replacement for bitmaps. Although they are not supported natively by Android, they can be easily displayed by means of third-party libraries. They take up much less space (especially the zipped version, svgz), scale indefinitely with no loss of detail or quality, and don’t require a separate version for each screen density.
Just remember to ask the developer which way they want the assets to be delivered.

**9-patch scaling for Android**

{% include image.html img="9_patch_Android.png" alt="9 patch scaling for Android" %}

If you have assets that are used more than once in your application and are scalable, you can use 9-patch scaling (e.g. for buttons). Things like icons will probably not scale properly, so unfortunately, you have to resize them manually for all the resolutions. The 9-patch guide is always 1 px thick and must be black (#000000), otherwise it won’t work. Your slice will always be 2 px bigger than the asset (1 px left and right and/or at the top and bottom). Thus, if your asset is 48x48 px, your slice will be 50x50 px. You can’t downscale 9-patch images, so you have to deliver them at the smallest size possible. This is also better for the overall performance of the application. You can use the Draw9Patch tool from Android to easily create or check your 9-patch images. For more specific information on 9-patch scaling and/or downloading the draw9patch tool, check the [Android Developers](http://developer.android.com/tools/help/draw9patch.html) website. You can also check [this link](https://romannurik.github.io/AndroidAssetStudio/nine-patches.html#&sourceDensity=320&name=example).

Be sure that App icons and Play Store Assets are provided following [Google’s guidelines](https://support.google.com/googleplay/android-developer/answer/1078870?hl=en).

## iOS platform-specific

You must supply high-resolution images for all artwork in your app and for all the devices your app supports. Depending on the device, you will accomplish this by multiplying the number of pixels in each image by a specific scale factor. We advise you to work on a @1x canvas size of 375x667 px (iPhone 6/7) and export upsized assets

To put it simply, all you need is to provide the developer with @1x, @2x, @3x assets. That’s it. You’re brilliant.

Be sure that App icons and App store Assets will be in accordance with the App Store guidelines [link1](https://developer.apple.com/ios/human-interface-guidelines/graphics/app-icon/) and [link2](https://developer.apple.com/library/content/qa/qa1686/_index.html), also double check that PNG files do not have the alpha channel, because Apple will reject them otherwise.

### Questions your client may ask

{% include qa.html question="Are all assets ready? Are all assets for the iPhone/Android done?" answer="Guide the client to the Jira tickets with assets attached, provide links to assets in the Google Drive folder." %}

{% include qa.html question="Q: Why do you use Sketch? Can I get a Photoshop file?" answer="We work with Sketch – this makes us much more productive (it means you pay less). It’s the market standard for web and mobile design. We strongly advise against migrating from Sketch to Photoshop." %}

### Questions to ask yourself at this stage:

- Has the naming of my assets been discussed and agreed with the developers?
- Is my naming convention consistent?
- Have I made platform-specific assets in all required sizes?
- Am I sure developers have all they need?

### Desired outcomes after this stage:

1. A set of assets covering all the designs for all target devices is complete.

### Additional reading:

- [Better Android workflows with Sketch](https://medium.com/@lmindler/using-sketch-3-and-a-bit-of-fairy-dust-for-a-better-android-workflow-f667d0048855#.lgpmpu10m)
- [Design like a Developer](https://medium.com/going-your-way-anyway/design-like-a-developer-b92f7a8f4520#.1ynw77olc)
- [Why should you use Material Design](https://www.netguru.co/blog/why-should-you-use-material-design )
