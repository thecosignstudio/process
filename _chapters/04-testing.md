---
title: "Testing"
chapter_number: "04"
---

# Testing

## Introduction
**In this section, you will learn**
- When to test wireframes or designs.
- What tests to use in specific situations.
- Tips for testing designs.
- Questions most frequently asked by clients.

{% include quote.html text="Test (v.): take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice." author="From Oxford English Dictionary" %}

You can test just about anything in a digital product: design solutions, code, performance, forms, buttons, etc. In this article, we will focus on design only. We are working in the Agile Scrum methodology, in which **testing is part and parcel of every sprint**. That’s why each design team needs to include a dedicated QA specialist, who is responsible for testing.
Every iteration you make on your design should be tested. The primary stages of the design process, which you can see below, should involve testing methods that are adequate to the project’s scope and the stage you are in.

## Benefits of testing
**For the client**
- Minimize the risk of the product’s failure – when it’s in users’ hands, it must work as intended.
- Be more confident and calm upon the product’s launch.
- Save money on fixing bugs and flaws after the product is launched.
- Save money on customer service; otherwise, users would ask for help after not being able to accomplish what they set out to do.
- Get to know your customers, their behavior, needs, and preferences.

**For Designers**
- Even a team of skilled designers won’t spot all the points where real users may get stuck when using the product.
- People not involved in creating the product will give the most valuable feedback because they will have a fresh view.
- Avoid the embarrassing moment when you have to admit that you made a mistake in front of the client.
- When designing, be sure you are not going in a wrong direction for too long, because bugs and flaws can escalate quickly.
- You will make a positive impression on the client when you recommend testing and give strong arguments about it.

**Stakeholders**
- QA
- Designer
- PM
- Developers

## When to test
### Tests after wireframing

**Participants**: PD, QA, users
**Goal**: Test the UX. Wireframes are focused on high-level design decisions such as user experience, user flow, and information architecture. So, before you go to the next stage – the visual design – you will need to test these elements. In small projects, you can test the UX and the UI at the same time in the next stage.
**Tools**: design bug bash, user testing within your organization, guerrilla usability testing.

### Tests after design
**Participants**: PD, QA, users
**Goal**: Test the UI. Visual design is focused on more specific design solutions such as UI elements, colors, shapes, and interactions. Assuming you ran tests after the wireframing, you need to test these elements now.
**Tools**: design bug bash (link), user testing within your organization or with outside testers, guerrilla usability testing.

### Tests after implementation
**Participants**: PD, QA, users
**Goal**: Analyze user behavior to make sure customers use the product the way it was designed and if the client’s goals are met.
**Tools**: heatmaps, A/B tests, user testing within your organization or with outside testers, analytics.

## Tools and techniques for testing
**Feedback from the team (e.g., delivered in a Slack channel)**
- **Time:**<br>
15 minutes
- **When?**<br>
After wireframing and after design.
- **Why?**<br>
This is the very first step, and the easiest one you can take, to validate your design at any stage.
- **How?**<br>
Just share your design with others, preferably with a question – what you need to have validated/tested or what you would like to get people’s opinion about.<br>
Deliverables: Others should leave comments on the design you've shared (e.g., on InVision).

**[Design bug bash](https://www.netguru.co/blog/tips-for-a-bountiful-bug-bash-netguru-qa-flow){:target="_blank"}**
- **Time**<br>
Up to 1h
- **When?**<br>
After wireframing and after design.
- **Why?**<br>
As you progress with the design, it gets more and more complex, you lose your fresh view, and help from other people becomes necessary.
- **How?**<br>
Arrange a 30- to 60-minute-long design bug bash that will include at least three QA specialists: the project’s QA specialist and two QA specialists not involved in the project. It should also include a PD. Also nice to have: a PM, a front-end developer, other project team members.<br>
Your QA specialist will lead the bug bash. In the beginning, you can tell others what the project is about, and who the typical users will be. Explain what tasks you want to have accomplished by participants but don’t explain any design solutions beforehand. Everyone should go through the whole prototype, performing tasks given by the PD individually.
Deliverables: Any bugs/doubts should be taken note of by their finder as, for example, InVision comments.

**[Guerrilla Usability Testing](https://userbrain.net/blog/7-step-guide-guerrilla-usability-testing-diy-usability-testing-method){:target="_blank"}**
- **Time**<br>
Up to 2h
- **When?**<br>
After wireframing and after design.
- **Why?**<br>
This is the most casual version of user testing. The main goal of guerrilla testing is to find errors and fix them as quickly as possible. Guerilla testing is about finding and fixing the most severe problems, not agonizing over every possible obstacle a user might encounter.
- **How?**<br>
You will need from 3 to 5 participants – they can be your colleagues, friends or family. Steps of the process:
1. Come up with a list of tasks.
2. Prioritize tasks and decide which to test.
3. Turn your tasks into scenarios.
4. Combine all scenarios.
5. Start guerrilla testing.
6. Capture the insights from the guerrilla testing.
7. Fix your usability problems. Deliverables: Write down the top 3 usability problems or capture the task completion in a table. See detailed instructions [here](https://userbrain.net/blog/7-step-guide-guerrilla-usability-testing-diy-usability-testing-method){:target="_blank"}.

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
  - 多媒體
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
使用 Google Analytics 等網站分析工具，找到你的網站轉換管道中的問題區域。例如，你可以識別具有錯誤指標的瓶頸頁面。
2. **觀察使用者的行為：** <br>
利用訪客行為分析工具，找出阻止訪客轉換（頁面或行為）的內容。例如，在主要頁面上的行為召喚按鈕不明顯。
3. **建立一個假設：** <br>
根據訪客行為分析工具的洞察，建立一個目標是在增加轉換率的假設。例如，「增加行為召喚的按鈕大小，使按鈕變得更明顯以增加轉換率。」
4. **測試你的假設：** <br>
根據你的假設建立另一個版本，並在原始頁面上對 A/B 版本進行測試。例如，「A/B 針對具有更大行為召喚的按鈕的版本測試你的原始主頁。」根據每月訪客的數量，當前轉換率以及轉換率的預期變化計算測試可以持續時間。
5. **分析測試數據並得出結論：** <br>
分析 A/B 測試結果，看看哪種版本提供了最高的轉換率。如果變化中有明顯的贏家，請繼續執行。 如果測試仍然不確定，請返回第三步並重新設計您的假設。
6. **向所有相關人員報告結果：** <br>
讓營運行銷人員、工程部門和使用者經驗部門中的其他人知道測試結果和最後產出的洞察。


## 熱點圖(Heatmaps)
* 使用產品:[Crazy egg](https://www.crazyegg.com/)、[Hotjar](https://www.hotjar.com/)
* 何時使用？
  專案開始執行後。
* 為什麼要使用熱點分析？
  熱點圖(Heatmaps) 相當適合用來分析訪客行為，可提供你其他研究方法未必能洞察到的觀點，甚至能增加轉換率。
* 有別於原始數據的呈現方式，熱點圖(Heatmaps)能運用不同色彩標示出不同數據，如：
  * 滑鼠軌跡：將滑鼠移動的軌跡記錄下來。
  * 點擊行為追蹤：紀錄實際發生點擊行為的位置。
  * 視線軌跡：紀錄使用者第一眼會停留在圖片的哪個位置。
  * 此外，使用熱點圖有助於提升圖片點擊率。它可以分析使用者視線集中於何處，以及操作過程中可能忽	略掉了哪些細節。你可以針對這結果去調整、刪減或增加任何功能，以提高每張圖片在操作上的效果。

* 如果想了解更多，可以閱讀下列文章：
  * [《從八個熱點分析案例，揭露訪客使用行為。》(英)](https://www.hotjar.com/heatmaps)(作者為 Hotjar 團隊)
  * [《如何使用熱點圖增加轉換率。》(英)](https://adespresso.com/academy/blog/the-ultimate-guide-for-using-heat-maps-to-increase-conversions/)(作者為 AdEspresso 的 Dan Virgillito)
  *《利用熱點圖提升轉換率的實作指南》(英) 請見[連結一](https://vwo.com/blog/increase-conversions-using-heatmaps/)與[連結二](https://mouseflow.com/blog/2016/10/how-to-boost-your-conversion-rate-and-lower-your-bounce-rate-with-heatmaps/)
* 如何使用？
	可以使用 [Hotjar](https://www.hotjar.com/) 製作網站上任一頁的熱點圖，包含有密碼保護的頁面與動態頁面都可製作。想了解不同類型的熱點圖（如滑鼠點擊、鍵盤敲擊、游標移動與滾輪滑動等），請參見[此連結(英)](https://docs.hotjar.com/docs/types-of-heatmaps#section-scroll-heatmaps)。

## [分析](https://blog.kissmetrics.com/expert-google-analytics-reports/)
* 使用產品：[Google Analytics](https://analytics.google.com/), [Woopra](https://www.woopra.com/), [Intercom](https://www.intercom.com/)
* 何時使用？
  專案開始執行後。
* 為什麼要使用網站分析工具？
  分析網站或行動裝置 App 的流量與使用者行為，也可設定目標追蹤轉換率。
* 如何使用？
* 請開發人員協助安裝 Google Analytics (GA)。您可以透過 GA 分析不同數據，如即時流量、跳出率、單頁停留時間、使用者如何找到您的網頁等。
  典型的 GA 報表：
  * 使用裝置/瀏覽器報表
  * 客戶開發效率分析報表
  * 消費者行為報表
  * 行動裝置表現報表
  * 網站診斷：網頁操作時間報表
  * 時段報表（Hours & Days Report）
  * 參照連結網址報表
  * 網站內容有效性報表
  * 社群管道流量來源報表

## 邀請團隊外部人員測試(Beta Testing)
* 使用產品：[TestFlight](https://developer.apple.com/testflight/), [HockeyApp](https://hockeyapp.net/), [Google Play Beta Testing](https://play.google.com/apps/publish/signup/), [Fabric.io](https://get.fabric.io/)
* 何時開始？
  專案執行後，公開發布前。
* 為什麼？
  當產品準備公開發布前，應該在小部分的樣品上做測試，並收集其他人員的回饋，及檢查有無尚未解決的錯誤。
* 如何執行？
  通常由開發人員負責外部測試，如果是針對行動裝置 App 的測試，外部測試是最管用的方法。不過外部測試也能應用在任何數位產品。您可利用 HockeyApp 等工具中提供的指標，使用者可直接在 App 給予回饋。另外，在目標受眾的選擇上有更聰明的方法，利用焦點團體，也就是以人數較少、代表性的小規模群眾作為未來產品使用者樣貌。

## 在產品測試上的建議
* 當專案要進行到下一階段時，儘早建構原型並進行測試，並頻繁地修正產品的重大問題。
* 您只需要約三到五人去檢查最重要的易用性問題。
* 最好是找對產品毫無背景知識的新受測者，參與測試。
* 在對真實用戶進行測試時，不要讓你的觀點影響使用者(寧可寫下來，與自己交談等)，這會讓受試者緊張。
* 在測試時，不要引導您的使用者。因為您需要知道使用者是如何找到答案或為何無法解決問題。在現實生活中，當使用者在操作產品時，您是不會坐在他旁邊協助的。

## 客戶可能會問您的問題
### Q 為什麼我的產品需要測試？
**A** 綜上所述，您必須將出現錯誤的風險降到最低，因為您要面對的是現實中使用您產品的真實用戶。

{% include qa.html question="Who’s paying for the test?" answer="The client pays for the tests because they are part of the services we provide. Tests that take a significant amount of time should be discussed, estimated, and agreed on with the client." %}
{% include qa.html question="How long will the test take? Will it affect the deadline and/or development?" answer="See estimated times in the Tools section. If affecting the course of the development is not the purpose of the test (e.g., Heatmaps), it shouldn’t affect the deadline or the development schedule." %}
{% include qa.html question="用程式在設計階段之後有測試過了嗎？我們可以開始建置了嗎？要怎麼做？" answer="測試過了！為了要確保工作結果的品質，產品必須經過測試。經過測試之後，就可以開始建置了。" %}
{% include qa.html question="What kind of tests do you provide by default to ensure high quality?建置前的測試包含了哪些項目以確保設計的品質？" answer="Every project needs different testing methods, so tests are tailored individually. Feedback from the team and a design bug bash are usually carried out in all projects.每個產品適用不同的測試方法，所以測試的項目會依照產品性質客製。通常在所有的專案中都會包含總結工作團隊的回饋訊息和設計的漏洞檢視(Bug Bash)" %}

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
