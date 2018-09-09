---
title: "測試"
chapter_number: "04"
---

# 測試

## 介紹
**您將於此章節中學習到**
- 測試原型與設計的時機。
- 根據不同的情形使用不同的測試。
- 測試設計的訣竅。
- 使用者的常見問題。

{% include quote.html text="Test (v.): 藉由各種方式去確認品質、效能或一件事的可信度，尤其在它還未為眾人使用或實踐的時候" author="來自牛津辭典" %}

數位產品的任何部分均可測試：設計理念、程式碼、效能、表單、按鈕...等。在本文中，我們將僅探討設計。另一方面，我們以敏捷開發方式切入，闡述**測試在每個衝刺階段皆為重要的一環**。這就是每個設計團隊都有一個專門負責測試的品保專家的原因。
您測試中的所有反覆修正，皆需要測試。下列重要的設計開發過程中，應該要有適用於專案與您的階段的測試方法。

## 測試的好處
**對使用者而言**
- 最小化產品的錯誤，在使用者使用後，成效更好。
- 在產品的發佈時，您將更有自信而且可冷靜面對問題。
- 產品發佈後，修正錯誤的成本降低
- 降低了客服的成本，不然的話，使用者將會一直諮詢那些無法滿足他們需求的問題。
- 可藉此瞭解您客群的行為、需求、喜好。

**對設計師而言**
- 就算是一個經驗豐富的設計團隊也無法預測所有使用者在使用上的困惑點。
- 沒有參與開發的使用者，將可以給予最有價值的回饋，因為他們對於產品沒有太多成見。
- 對使用者承認您犯了錯誤這件事將不會那麼尷尬。
- 在設計階段中，您可以確認沒有在錯誤的方向，以免錯誤快速增加。
- 若您邀請客戶測試並發表一個理論基礎健全的論述，您將在客戶心中建立一個正面的形象，

**參與者**
- 品保
- 設計師
- 專案經理
- 開發工程師

## 測試時機
### 線框稿繪製後的測試

**參與者**：產品設計師、品保、使用者
**目標**：測試使用者體驗。線框稿將專注於重要性高的設計決定，例如：使用者體驗、使用者流程以及資訊架構。因此，在您進入下一階段「視覺設計」前，您將需要先測試這些元素。在小型專案中，您可以在下一階段同時測試使用者體驗與介面。
**工具**：設計缺陷掃除、組織內的使用者測試、游擊測試。

### 設計後的測試
**參與者**：產品設計師、品保、使用者
**目標**：測試使用者介面。視覺設計將更專注於特定設計理念，例如：使用者介面元素、顏色、形狀以及互動。假如您已在線框圖繪製後進行測試，您將在此階段測試那些元素。
**工具**: 設計缺陷掃除（連結）、組織內的使用者測試或者外部的測試者、游擊測試。

### 完成後的測試
**參與者**：產品設計師、品保、使用者
**目標**：藉由分析使用者行為，確認使用者以當初設計的方式使用產品，以及使用者是否達成他的目標。
**工具**：熱圖、A/B測試、組織內的使用者測試或者外部的測試者、分析。

## 測試工具與技術
**團隊的回饋（例如：Slack Channel的報告）**
- **時間：**<br>
十五分鐘
- **何時？**<br>
線框圖繪製後或設計後
- **原因？**<br>
這是最初始的階段，而且是進行測試最簡單的階段，並以便在任何階段驗證您的設計。
- **如何做？**<br>
僅需對他人分享您的設計，且建議同時詢問：您需要測試或驗證什麼？或您需要對方提供什麼看法。<br>
可實作的事：受測者應對您分享的設計留下評論（例如：透過InVision）

**[設計缺陷掃除（英）](https://www.netguru.co/blog/tips-for-a-bountiful-bug-bash-netguru-qa-flow){:target="_blank"}**
- **時間**<br>
最多一小時
- **何時？**<br>
線框圖繪製後或設計後
- **原因？**<br>
當您著手進行設計，測試將會越來越複雜，您將有更多的成見，因此，必須他人的幫助
- **如何做？**<br>
安排一個三十至六十分鐘的設計缺陷掃除，參與成員將包含至少三個品保專家：專案的品保專家以及兩個未參與專案的品保專家。也可以讓一個產品設計師加入。若有一個專案經理、前端工程師以及團隊的其他成員的加入，成效將更好。<br>
您的品保專家將主持這個設計缺陷掃除。在一開始，您可以告知其他人您的專案的內容，以及描述典型使用者的細節。解釋您需要參與者完成什麼事。但是不要預先解釋任何設計理念。任何人都需參與產品設計師提供的原型設計與任務
可實作的事：受測者感受到的任何錯誤、懷疑將被他們的邀請者記錄，例如：透過InVision的評論區。

**[游擊測試（英）](https://userbrain.net/blog/7-step-guide-guerrilla-usability-testing-diy-usability-testing-method){:target="_blank"}**
- **時間**<br>
最多兩小時
- **何時？**<br>
線框圖繪製後或設計後
- **原因？**<br>
這是最隨興的測試方法。游擊測試的最主要目的是去找到錯誤並快速解開它。游擊測試也是關於找到並修正最嚴重的問題，而非苦於每個使用者可能遇到的潛在阻礙。
- **如何做？**<br>
您需要三到五個參與者，他們可以是你的同事、朋友或家人。步驟如下：
1. 想出任務列表。
2. 為任務排列優先順序，並決定要測試哪些任務。
3. 將這些任務列入方案中。
4. 合併所有的方案。
5. 開始游擊測試。
6. 紀錄游擊測試過程中，受測者的見解
7. 修正您的使用性問題。可實作的事：寫下最重要的三個使用性問題或使用表格完整記錄整個任務。觀看所有的操作說明[此處（英）](https://userbrain.net/blog/7-step-guide-guerrilla-usability-testing-diy-usability-testing-method){:target="_blank"}.

**[User testing: moderated](https://www.uxpin.com/studio/blog/moderated-vs-unmoderated-usability-testing-better/){:target="_blank"}**
- **Time**<br>
At least 3h
- **When?**
  - After design, after implementation
  - Incomplete or buggy interfaces – MVPs, early-stage prototypes, low fidelity prototypes, or parts of the app that need a really direct and clear explanation
  - Very complex interfaces – To make app learning process shorter/smoother
  - Mature product – Product needs a test of particular functionalities
  - Security concerns – If you’re testing a product with access to data that you don’t want to become public, a moderator will keep the user where they belong
  - An existing product that needs to be redesigned
- **Why?**<br>
You need a reliable and objective test of your design (it must be something that your internal team or design-oriented bug bash can’t deliver) and of the existing product. The test should require a specific target/personas.
- **How?**
  - Use a specialized agency.
  - In person: give a user a task and assist him/her through the test. Ask questions, guide, and explain if necessary.<br> Deliverables
   - Detailed report
   - Attachments (recordings, etc.)

**[User testing: unmoderated](https://www.uxpin.com/studio/blog/moderated-vs-unmoderated-usability-testing-better/){:target="_blank"}**
- **Products:** <br>[Userzoom](http://www.userzoom.com/remote-usability-testing/){:target="_blank"}, [AppSee](https://www.appsee.com/features/user-recordings){:target="_blank"}, [UserTesting](https://www.usertesting.com/plans){:target="_blank"}
- **Time**<br>
At least 3h
- **When?**
  - After design and after implementation.
  - MVPs – you need to test and validate early-stage products.
  - Low budget – the client has no budget for other kinds of testing.
  - No time – No time to run a moderated user test. Unmoderated tests can be done virtually anywhere at any time by anyone who meets your criteria.
  - An existing product that needs a redesign.
- **Why?**<br>
You need a reliable and objective test of your design (it must be something that your internal team or design-oriented bug bash can’t deliver) and of the existing product. The test should require a specific target/personas.
- **How?**
  - Use third-party tools.
  - Personally: give the user a task and leave him/her alone while a camera is recording.<br>
Deliverables: A video recording summarized in a report

**A/B testing**
- **Products:**<br>
[Qubit](http://www.qubit.com){:target="_blank"}, [VWO](https://vwo.com/){:target="_blank"}
- **When?**<br>
After implementation.
- **Why?**<br>
A/B testing allows you to make more out of your existing traffic. While the cost of acquiring paid traffic can be substantial, the cost of increasing your conversions is minimal. The Return On Investment on A/B testing can be massive because even small changes on a landing page or website can result in significant increases in generated leads, sales, and revenue.
- **What can you test?**
  - Headings
  - Subheadings
  - Paragraph text
  - Testimonials
  - Call to Action text
  - Call to Action button
  - Links
  - Images
  - Content near the fold
  - Social proofs
  - Media mentions
  - Awards and badges<br>
  - Advanced tests can include pricing structures, sales promotions, free trial lengths, navigation and UX experience, free or paid delivery, and more.<br>
- **Links:**
  - To learn about A/B, visit these links [link](http://unbounce.com/landing-page-articles/what-is-ab-testing/){:target="_blank"}, [link](https://vwo.com/ab-testing/){:target="_blank"} & [link](https://www.optimizely.com/ab-testing/){:target="_blank"}.
  - Learn how to bust these 7 A/B testing myths by Kissmetrics [link](https://blog.kissmetrics.com/ab-testing-myths/){:target="_blank"}.
  - The ultimate guide to A/B Testing by Smashing Magazine [link](https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/){:target="_blank"}.
  - Learn about most important A/B Testing checklist by HubSpot [link](https://blog.hubspot.com/marketing/a-b-test-checklist#sm.00001z5neov22f9pvdk194oo5d7tq){:target="_blank"}.
- **How?**<br>
The correct way to run an A/B testing experiment is to follow a scientific experimental process. It includes the following steps:
1. **Study your Website Data:** Use a website analytics tool such as Google Analytics and find the problem areas in your conversion funnel. For example, you can identify the bottleneck pages with bad metrics.
2. **Observe User Behavior:** Utilize visitor behavior analysis tools and find out what is stopping the visitors from converting. For example, “The CTA button is not prominent on the home page."
3. **Construct a Hypothesis:** Per the insights from visitor behavior analysis tools, build a hypothesis aimed at increasing conversions. For example, “increasing the size of the CTA button will make it more prominent and will increase conversions.”
4. **Test your Hypothesis:** Create a variation per your hypothesis and A/B test it against the original page. For example, “A/B test your original homepage against a version that has a larger CTA button.” Calculate the test duration with respect to the number of your monthly visitors, current conversion rate, and the expected change in the conversion rate.
5. **Analyze Test Data and Draw Conclusions:** Analyze the A/B test results and see which variation delivered the highest conversion. If there is a clear winner among the variations, go ahead with its implementation. If the test remains inconclusive, go back to step number three and rework your hypothesis.
6. **Report results to all concerned:** Let others in Marketing, IT, and UI/UX know of the test results and the insights generated.

**Heatmaps**
- **Products:**<br>
[Crazy egg](https://www.crazyegg.com/){:target="_blank"}, [Hotjar](https://www.hotjar.com/){:target="_blank"}
- **When?**<br>
After implementation.
- **Why?**<br>
Heatmaps are great for analyzing your visitors’ behavior. They can bring insights you wouldn't have found using other methods, and, consequently, they can greatly increase your conversion rate.<br>
Rather than showing raw statistics, it works by using different colors to indicate such things as:
  - Mouse movement: where the mouse moved (using mouse-tracking).
  - Click tracking: where the actual click occurred.
  - Scroll tracking: how far down the page the visitor scrolled.
  - Eye tracking: where people are most likely to focus upon the first viewing of an image.<br>
  - What’s more, a heatmap can be incredibly helpful in improving the clickability of your images. It will let you know what people look at and what details they miss. From there, you can adjust, remove, and add whatever you need to increase the effectiveness of each image used.<br>
- **Links:**
  - Learn about 8 heatmap tests that reveal visitors’ behavior [here](https://www.hotjar.com/heatmaps){:target="_blank"} (by Hotjar).
  - Learn how to use heatmaps to increase conversions [here](https://adespresso.com/academy/blog/the-ultimate-guide-for-using-heat-maps-to-increase-conversions/){:target="_blank"} (by Dan Virgillito from AdEspresso).
  - Look at a practical guide how to increase conversions by using heatmaps [here](https://vwo.com/blog/increase-conversions-using-heatmaps/){:target="_blank"} and [here](https://mouseflow.com/blog/2016/10/how-to-boost-your-conversion-rate-and-lower-your-bounce-rate-with-heatmaps/){:target="_blank"}.
- **How?**<br>
You can use Hotjar to generate heatmaps of any page on your site, including password-protected pages and dynamically generated pages.
To learn about the different types of heatmaps (Click and Tap, Move, Scroll) visit this [link](https://docs.hotjar.com/docs/types-of-heatmaps#section-scroll-heatmaps){:target="_blank"}

[**Analytics**](https://blog.kissmetrics.com/expert-google-analytics-reports/){:target="_blank"}
- **Products:**<br>
[Google Analytics](https://analytics.google.com){:target="_blank"}, [Woopra](https://www.woopra.com/){:target="_blank"}, [Intercom](https://www.intercom.com/){:target="_blank"}
- **When?**<br>
After implementation.
- **Why?**<br>
Analyze the traffic and users’ behavior on a website or mobile app. You can also measure the conversion rates by setting goals.
- **How?**<br>
Ask your developer to install Google Analytics (GA).<br>
You can analyze many different statistics in GA: live traffic, bounce rate, time spent on a page, how users found your page, and a lot more.<br>
Typical reports in GA:
  - Device/Browser Report
  - Visitor Acquisition Efficiency Analysis Report
  - Customer Behavior Report
  - Mobile Performance Report
  - Site Diagnostics: Page Timing Report
  - Hours & Days Report
  - Referring Sites Report
  - Content Efficiency Report
  - Traffic Acquisition from Social Media Report

[**Beta testing**](https://www.playtestcloud.com/blog/testflight-alternatives-ios-android){:target="_blank"}
- **Products:**
<br>[TestFlight](https://developer.apple.com/testflight/){:target="_blank"}, [HockeyApp](https://hockeyapp.net/){:target="_blank"}, [Google Play Beta Testing](https://play.google.com/apps/publish/signup/){:target="_blank"}, [Fabric.io](https://get.fabric.io/){:target="_blank"}
- **When?**<br>
After implementation and before official launch.
- **Why?**<br>
You have your product ready and working, but before the official release, you should test it on a small sample to collect feedback and spot any remaining bugs.
- **How?**<br>
Beta testing is mostly done by developers and is especially useful for mobile apps testing, but it can be applied to any digital product. You can take advantage of usage metrics that are available in tools such as HockeyApp, and users can give feedback directly in the app.The smart approach to selecting your audience is to use [focus groups](https://en.wikipedia.org/wiki/Focus_group){:target="_blank"}, which work as small, representative, scaled-down groups of your future customer base.

## Tips for testing your designs
- It’s wise to build prototypes and test as early and as often as possible to fix the major issues before you even move the project to the next stage.
- You just need between 3 and 5 people to spot the most significant usability issues.
- It’s often better to test the product with new participants without any knowledge about you and your product.
- Don’t try to capture your insights (write them down, talk to yourself, etc.) while testing on real users – it makes them nervous.
- You don’t want to bias your users during the test. You want to see how they figure out things for themselves, or how they don’t figure them out. In real life, you wouldn’t sit next to them while they would be using your product.

## Questions your client can ask
{% include qa.html question="Why do I need testing?" answer="Above all, you need it to minimize the risk of exposing bugs to real users in real scenarios. Also, the iterative nature of the Agile Scrum methodology helps to improve the weak points of the product in every sprint. Testing will detect those weak points." %}
{% include qa.html question="Who’s paying for the test?" answer="The client pays for the tests because they are part of the services we provide. Tests that take a significant amount of time should be discussed, estimated, and agreed on with the client." %}
{% include qa.html question="How long will the test take? Will it affect the deadline and/or development?" answer="See estimated times in the Tools section. If affecting the course of the development is not the purpose of the test (e.g., Heatmaps), it shouldn’t affect the deadline or the development schedule." %}
{% include qa.html question="Was the app tested after design? Can we start the implementation? How?" answer="Yes, it was tested in order to ensure the highest quality of our work. Let’s just test after the design phase, and we will be ready for implementation." %}
{% include qa.html question="What kind of tests do you provide by default to ensure high quality?" answer="Every project needs different testing methods, so tests are tailored individually. Feedback from the team and a design bug bash are usually carried out in all projects." %}

**Questions to ask yourself at this stage**
- Have I collected feedback among the team?
- Is the mockup clickable?
- Was a design bug-bash conducted?
- Were tests conducted after the wireframe phase?
- Was a test conducted after the visual design phase?
- After the implementation, were Google Analytics installed, at least? (Y/N)

## Desired outcomes of this stage
1. Wireframes or designs tested using appropriate techniques.
2. Feedback collected and implemented.

## Additional reading
- [How to Improve Your UI with Remote Usability Testing](https://www.netguru.co/blog/improve-ui-remote-usability-testing){:target="_blank"}
