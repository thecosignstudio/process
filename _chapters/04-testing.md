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

**[經過審核的易用性測試](https://www.uxpin.com/studio/blog/moderated-vs-unmoderated-usability-testing-better/){:target="_blank"}**
- **所需時間**<br>
至少 3 小時
- **什麼時候進行測試?**
  - 在設計之後或在實作之後。
  - 在不完整或有錯誤的介面的時候 – 例如：最小可行性產品 MVP (Minimum Viable Product)、早期的原型、低保真度的原型或在 APP 中的ㄧ部分需要非常直接且明確的解釋。
  - 在非常複雜的介面的時候 – 讓 APP 的學習過程更短或更順暢。
  - 成熟產品 – 需要對產品中的特定功能進行測試。
  - 安全性問題 – 如果你正在測試一項可以存取你不希望公開的數據的產品，審核者會讓使用者保留在他們所屬的位置。
  - 當現有產品需要被重新設計的時候。
- **為什麼需要做測試?**<br>
你需要對你目前設計和現有產品進行可靠且客觀的測試（它必須是你的內部團隊或設計導向的測試無法提供的），這項測試應該需要特定的目標或角色。
- **該如何進行測試?**
  - 找專門的機構。
  - 親自測試：給使用者一項任務並協助他/她完成測試。必要的話，可以詢問使用者問題、給予使用者指引或解釋給使用者聽。
  <br> 交付文件
   - 詳細的測試報告。
   - 附件 (例如：錄音檔等)

**[未經審核的易用性測試](https://www.uxpin.com/studio/blog/moderated-vs-unmoderated-usability-testing-better/){:target="_blank"}**
- **相關產品：** <br>[Userzoom](http://www.userzoom.com/remote-usability-testing/){:target="_blank"}, [AppSee](https://www.appsee.com/features/user-recordings){:target="_blank"}, [UserTesting](https://www.usertesting.com/plans){:target="_blank"}
- **所需時間**<br>
至少 3 小時
- **什麼時候進行測試?**
  - 在設計之後和在實作之後。
  - 最小可行性產品 – 當你需要測試和驗證早期產品的時候。
  - 預算低的時候 – 客戶沒有其他類型的測試預算。
  - 沒時間的時候 – 沒時間去做適度的使用者測試。任何符合條件的人都可以隨時隨地進行無人審核的測試。
  - 當現有產品需要被重新設計的時候。
- **為什麼需要做測試?**<br>
你需要對你目前設計和現有產品進行可靠且客觀的測試（它必須是你的內部團隊或設計導向的測試無法提供的），這項測試應該需要特定的目標或角色。
- **該如何進行測試?**
  - 使用第三方工具。
  - 親自測試：給使用者一項任務，讓他/她獨自在相機錄製時完成任務。
  <br>可交付的成果：在一份報告中提供匯總的視頻錄製檔案。

**A/B 測試**
- **相關產品：**<br>
[Qubit](http://www.qubit.com){:target="_blank"}, [VWO](https://vwo.com/){:target="_blank"}
- **什麼時候進行測試?**<br>
在實作之後。
- **為什麼需要做測試?**<br>
A/B 測試可讓你從現有流量中獲得更多收益。雖然獲得付費流量的成本可能很高，但增加轉換次數的成本卻很低。A/B 測試的投資報酬率可能非常高，因為即使在頁面或網站上的微小變化，也會大幅增加新的潛在客戶、銷售和收入。
- **你可以測試的項目有哪些？**
  - 標題
  - 副標
  - 段落文字
  - 推薦的文案
  - 行為召喚的文案（希望使用者進行某種行為）
  - 行為召喚的按鈕
  - 連結
  - 圖片  
  - 內容靠近首屏的地方（在頁面首次加載時在瀏覽器窗口中可見的部分）
  - 社會認同
  - Media mentions
  - 獎項和徽章<br>
  - 進階的測試可以包含產品定價結構、促銷、免費試用時間長度、導覽和使用者經驗、免費或付費的交付等等。
  <br>
- **相關連結:**
  - 想多了解各個 A/B 測試工具，可參考這些連結：<br>
    1.[unbounce - 什麼是A/B 測試？](http://unbounce.com/landing-page-articles/what-is-ab-testing/){:target="_blank"}
    <br>
    2.[vwo - A / B測試完整指南](https://vwo.com/ab-testing/){:target="_blank"}
    <br>
    3.[optimizely - 什麼是A/B 測試？](https://www.optimizely.com/ab-testing/){:target="_blank"}.
  - 學習如何打破七個 A/B 測試 by Kissmetrics（原文連結已失效）[連結](https://blog.kissmetrics.com/ab-testing-myths/){:target="_blank"}.
  - A/B 測試的終極指南 by Smashing Magazine [連結](https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/){:target="_blank"}.
  - 了解最重要的 A/B 測試清單 by HubSpot [連結](https://blog.hubspot.com/marketing/a-b-test-checklist#sm.00001z5neov22f9pvdk194oo5d7tq){:target="_blank"}.
- **該如何進行測試?**<br>
進行 A/B 測試實驗的正確方法是遵循科學的實驗過程，它包含以下步驟：
1. **研究你的網站數據：** <br>
使用 Google Analytics 等網站分析工具，找到你的網站轉換渠道中的問題區域。例如，你可以識別具有錯誤指標的瓶頸頁面。
2. **觀察使用者的行為：** <br>
利用訪客行為分析工具，找出阻止訪客轉換（頁面或行為）的內容。例如，在主要頁面上的行為召喚按鈕不明顯。
3. **構建一個假設：** <br>
根據訪客行為分析工具的洞察，建立一個假設目標是在增加轉換率的假設。例如，「增加行為召喚的按鈕大小，使按鈕變得更明顯以增加轉換率。」
4. **測試你的假設：** <br>
根據你的假設建立另一個版本，並在原始頁面上對 A/B 版本進行測試。例如，「A/B 針對具有更大行為召喚的按鈕的版本測試你的原始主頁。」根據每月訪客的數量，當前轉換率以及轉換率的預期變化計算測試可以持續時間。
5. **分析測試數據並得出結論：** <br>
分析 A/B 測試結果，看看哪種版本提供了最高的轉換率。如果變化中有明顯的贏家，請繼續執行。 如果測試仍然不確定，請返回第三步並重新設計您的假設。
6. **向所有相關人員報告結果：** <br>
讓營運行銷人員、工程部門和使用者經驗部門中的其他人知道測試結果和最後產出的洞察。

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
