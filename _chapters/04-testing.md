---
title: "測試"
chapter_number: "04"
exerpt: "數位產品的任何部分均可測試：設計理念、程式碼、效能、表單、按鈕…等"
---

# 測試

## 前言

**您將在此章節中學習到：**
- 測試原型與設計的時機。
- 根據不同的情形使用不同的測試。
- 測試設計的訣竅。
- 使用者的常見問題。

{% include quote.html text="Test (動詞): 藉由各種方式去確認品質、效能或一件事的可信度，尤其在它還未經過眾人使用或實踐的時候。" author="來自牛津辭典" %}

數位產品的任何部分均可測試：設計理念、程式碼、效能、表單、按鈕…等。在本文中，我們將僅探討設計。另一方面，我們以敏捷開發方式切入，闡述**測試在每個 Sprint 階段皆為重要的一環**。這就是每個設計團隊都有專門負責測試的品保專家的原因。
您測試中的所有反覆修正，皆需要測試。下列重要的設計開發過程中，應該要有適用於專案與該階段的測試方法。

## 測試的好處
**對使用者而言**
- 減少產品的錯誤，在使用者上手後，就應該按安排的方式運作。
- 在產品的發佈時，將更有自信而且冷靜面對問題。
- 產品發佈後，修正錯誤的成本降低。
- 降低客服的成本。不然的話，使用者會一直為了那些因為無法滿足需求所造成的問題尋求協助。
- 可藉此瞭解客群的行為、需求與喜好。

**對設計師而言**
- 就算是一群經驗豐富的設計師，也無法預測使用者在產品使用上的所有困惑點。
- 沒有參與開發的使用者，可以給予最有價值的回饋，因為他們對於產品沒有太多成見。
- 避免向使用者承認犯錯時的尷尬。
- 在設計階段中，可以確認不會花太多心力在錯誤的方向，因為臭蟲和疏漏增加的速度非常快。
- 建議客戶要進行測試，而且給予強而有力的見解，會在他們心中建立良好的形象。

**相關成員**
- 品保
- 設計師
- 專案經理
- 開發人員

## 測試時機
### 線稿繪製後的測試

**參與者**：產品設計師、品保、使用者

**目標**：測試 UX。線稿專注於高度重要性的設計決策，例如：使用者體驗、使用者流程以及資訊架構。因此，在進入下一階段「視覺設計」前，需要先測試這些元素。在小型專案中，您可以在下一階段同時測試 UX 與 UI。

**工具**：設計缺陷掃除、組織內的使用者測試、易用性游擊測試 (guerrilla usability testing)。

### 設計後的測試
**參與者**：產品設計師、品保、使用者

**目標**：測試 UI。視覺設計將更專注於特定設計理念，例如：UI 元素、顏色、形狀以及互動。假如已在線稿繪製後進行測試，在此階段要測試那些元素。

**工具**: 設計缺陷掃除 (連結)、組織內或外部的使用者測試、易用性游擊測試。

### 實做後的測試
**參與者**：產品設計師、品保、使用者

**目標**：藉由分析使用者行為，確認使用者以當初設計的方式使用產品，以及是否達成他的目標。

**工具**：熱點圖、A/B 測試、組織內或外部的使用者測試、分析。

## 測試工具與技巧
**團隊的回饋 (例如：透過 Slack Channel)**
- **所需時間**<br>
  15 分鐘
- **時機？**<br>
  線稿繪製後或設計後
- **原因？**<br>
  這是最開始的階段，而且是進行測試最簡單的階段，以便在任何階段驗證設計。
- **如何進行？**<br>
  僅需對他人分享設計，建議同時要問：您需要測試或驗證什麼？或您需要對方提供什麼看法。<br>
交付資料：受測者應對你分享的設計留下評論 (例如：透過 InVision)。

[**設計缺陷掃除 (英)**](https://www.netguru.co/blog/tips-for-a-bountiful-bug-bash-netguru-qa-flow){:target="_blank"}
- **所需時間**<br>
  最多 1 小時
- **時機？**<br>
  線稿繪製後或設計後
- **原因？**<br>
  著手進行設計後，測試將會越來越複雜，出現更多的成見，因此，必須從他人獲得幫助。
- **如何進行？**<br>
  安排 30 至 60 分鐘的設計缺陷掃除，參與成員包含至少 3 位品保專家：專案的品保專家以及 2 位未參與專案的品保專家。也可以讓 1 位產品設計師加入。若還有 1 位專案經理、前端工程師以及團隊的其他成員加入，成效會更好。<br>
  由品保專家主持設計缺陷掃除。在一開始，告知其他人專案內容，接著描述典型使用者的細節。解釋參與者得要完成的事情，但是不要預先解釋任何設計理念。每個人都需參與產品設計師提供的原型設計與任務。<br>
交付資料：察覺到任何錯誤與疑惑的人，都要記錄起來，像是在 InVision 留下評論。

[**游擊測試 (英)**](https://userbrain.net/blog/7-step-guide-guerrilla-usability-testing-diy-usability-testing-method){:target="_blank"}
- **所需時間**<br>
  最多 2 小時
- **時機？**<br>
  線稿繪製後或設計後
- **原因？**<br>
  這是最隨興的測試方法。游擊測試的最主要目的是找到錯誤並快速解開。游擊測試重點在找到、修正最嚴重的問題，而非陷在找出使用者可能遇到的每一個潛在阻礙。
- **如何進行？**<br>
  需要三到五個參與者，他們可以是同事、朋友或家人。步驟如下：
  1. 想出任務列表。
  2. 為任務排列優先順序，並決定要測試的任務。
  3. 將這些任務帶入情境。
  4. 合併所有情境。
  5. 開始游擊測試。
  6. 記錄游擊測試過程中，受測者的見解。
  7. 修正易用性問題。<br>

  交付資料：寫下 3 個最重要的易用性問題，或使用表格完整記錄整個任務。詳細的教學請看[此處](https://userbrain.net/blog/7-step-guide-guerrilla-usability-testing-diy-usability-testing-method){:target="_blank"} (英)。

[**有引導的易用性測試**](https://www.uxpin.com/studio/blog/moderated-vs-unmoderated-usability-testing-better/){:target="_blank"}
- **所需時間**<br>
  至少 3 小時
- **時機？**<br>
  - 在設計之後或在實做之後。
  - 在不完整或有錯誤的介面的時候 – 例如：最小可行性產品 (Minimum Viable Product)、早期的原型、低保真度的原型，或在 App 中需要非常直接且明確解釋的部分。
  - 非常複雜的介面：讓 App 的學習過程更短、更順暢。
  - 成熟的產品：需要對產品中的特定功能進行測試。
  - 安全性問題：如果你正在測試一項要存取不希望公開數據的產品，引導員可以讓使用者留在應該待的地方。
  - 現有產品需要重新設計。
- **原因？**<br>
  需要對目前設計和現有產品進行可靠且客觀的測試 (必須是內部團隊或設計導向的缺陷掃除無法提供的)，這項測試應有特定的目標或人物誌。
- **如何進行？**<br>
  - 找專門的機構。
  - 親自測試：給予使用者任務，並協助他/她完成測試。必要的話，可以詢問問題、給予指引或解釋。<br>

交付資料
  - 詳細的測試報告。
  - 相關檔案 (例如：錄音檔等)

[**沒有引導的易用性測試**](https://www.uxpin.com/studio/blog/moderated-vs-unmoderated-usability-testing-better/){:target="_blank"}
- **使用產品：** <br>
  [Userzoom](http://www.userzoom.com/remote-usability-testing/){:target="_blank"}、[AppSee](https://www.appsee.com/features/user-recordings){:target="_blank"}、[UserTesting](https://www.usertesting.com/plans){:target="_blank"}
- **所需時間**<br>
  至少 3 小時
- **時機？**<br>
  - 在設計之後和在實做之後。
  - 最小可行性產品：需要測試和驗證早期階段產品的時候。
  - 低預算：客戶沒有其他類型的測試預算。
  - 沒時間：沒時間去做有引導的使用者測試。任何符合條件的人都可以隨時隨地進行沒有引導的測試。
  - 現有產品需要重新設計。
- **原因？**<br>
  需要對目前設計和現有產品進行可靠且客觀的測試 (必須是內部團隊或設計導向的缺陷掃除無法提供的)，這項測試應有特定的目標或人物誌。
- **如何進行？**<br>
  - 使用第三方工具。
  - 親自測試：給予使用者任務，以相機錄製他/她獨自完成任務。<br>

交付資料：簡述錄影檔案的報告。

**A/B 測試**
- **使用產品：**<br>
  [Qubit](http://www.qubit.com){:target="_blank"}、[VWO](https://vwo.com/){:target="_blank"}
- **時機？**<br>
  在實做之後
- **原因？**<br>
  A/B 測試可讓你從現有流量獲得更多收穫。雖然付費流量的成本可能很高，但增加轉換次數的成本卻很低。A/B 測試的投資報酬率可能非常高，因為即使在登陸頁面或網站上的微小變化，也會大幅增加新的潛在客戶、銷售和收益。
- **可以測試的項目有哪些？**<br>
  - 標題
  - 副標題
  - 段落文字
  - 推薦的文案
  - 行動呼籲的文案
  - 行動呼籲的按鈕
  - 連結
  - 圖片  
  - 內容靠近第一眼畫面的地方
  - 社交推薦 (social proof)
  - 媒體曝光
  - 獎項與徽章
  - 更進階的測試有產品定價結構、促銷、免費試用時間長度、導覽和使用者經驗、運費是否免費…等。

- **相關連結：**
  - 想進一步瞭解 A/B 測試工具，可參考這些連結：[這個](http://unbounce.com/landing-page-articles/what-is-ab-testing/){:target="_blank"}、[這個](https://vwo.com/ab-testing/){:target="_blank"}和[這個連結](https://www.optimizely.com/ab-testing/){:target="_blank"}。
  - 學習如何破除這 7 個 A/B 測試的迷思，來源：Kissmetrics，[連結](https://blog.kissmetrics.com/ab-testing-myths/){:target="_blank"}。
  - A/B 測試的終極指南，來源：Smashing Magazine，[連結](https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/){:target="_blank"}。
  - 了解最重要的 A/B 測試清單，來源：HubSpot，[連結](https://blog.hubspot.com/marketing/a-b-test-checklist#sm.00001z5neov22f9pvdk194oo5d7tq){:target="_blank"}。
- **該如何進行測試?**
  進行 A/B 測試實驗的正確方法是遵循科學的實驗過程，包含以下步驟：
  1. **研究你的網站數據：**
  使用 Google Analytics 等網站分析工具，找到網站轉換漏斗 (conversion funnel) 的問題區域。例如：從表現很差的指標找出瓶頸頁面。
  2. **觀察使用者行為：**
  利用訪客行為分析工具，找出讓訪客無法轉換的內容。例如：首頁的行動呼籲按鈕不明顯。
  3. **建立假設：**
  根據訪客行為分析工具找出的洞見，建立以增加轉換率為目標的假設。例如：「增加行動呼與按鈕大小，使按鈕變得更明顯，以增加轉換率。」
  4. **測試假設：**
  根據假設，在原始頁面建立另外一個版本進行 A/B 測試。例如：「針對有更大行動呼籲按鈕的版本 A/B 測試原始主頁。」根據每月訪客數量、當前轉換率以及轉換率預期變化計算測試持續的時間。
  5. **分析測試數據、做成結論：**
  分析 A/B 測試結果，看看哪種版本提供最高的轉換率。請繼續執行其中明顯勝過其他的版本。如果仍無法對測試下定論，請返回第 3 步驟並重新設計假設。
  6. **向所有相關人員報告結果：**
  讓行銷人員、工程部門和使用者經驗部門中的其他成員知道測試結果和最後找到的洞察。


**熱點圖 (Heatmaps)**
- **使用產品：**<br>
  [Crazy egg](https://www.crazyegg.com/)、[Hotjar](https://www.hotjar.com/)
- **時機？**<br>
  專案開始執行後。
- **原因？**<br>
  熱點圖 (Heatmaps) 相當適合用來分析訪客行為，提供其他研究方法未必能洞察到的觀點，甚至能增加轉換率。
  - 有別於原始數據的呈現方式，熱點圖運用不同色彩標示出：
    - 滑鼠軌跡：記錄滑鼠移動的軌跡。
    - 點擊行為追蹤：記錄實際發生點擊行為的位置。
    - 捲動追蹤：記錄使用者在頁面往下捲到的位置。
    - 此外，使用熱點圖有助於提升圖片的可點性 (clickability)，讓你知道使用者的視線集中處，還有忽略掉的細節，就可以調整、刪減或增加任何功能，提高每張圖片的使用效果。

- **連結：**<br>
  - 從 8 個熱點分析案例，揭露訪客使用行為[按此](https://www.hotjar.com/heatmaps)(英)，作者為 Hotjar 團隊。
  - 如何使用熱點圖增加轉換率[按此](https://adespresso.com/academy/blog/the-ultimate-guide-for-using-heat-maps-to-increase-conversions/) (英)，作者是 AdEspresso 的 Dan Virgillito。
  - 利用熱點圖提升轉換率的實做指南請見[連結一](https://vwo.com/blog/increase-conversions-using-heatmaps/) (英)與[連結二](https://mouseflow.com/blog/2016/10/how-to-boost-your-conversion-rate-and-lower-your-bounce-rate-with-heatmaps/) (英)。
- **如何使用？**<br>
	使用 [Hotjar](https://www.hotjar.com/) 就能在網站任一頁製作熱點圖，密碼保護與動態的頁面也可以。想了解不同類型的熱點圖 (如滑鼠點擊、鍵盤敲擊、游標移動與滾輪滑動等)，請參見[此連結](https://docs.hotjar.com/docs/types-of-heatmaps#section-scroll-heatmaps) (英)。

[**分析**](https://blog.kissmetrics.com/expert-google-analytics-reports/){:target="_blank"}
- **使用產品：**<br>
  [Google Analytics](https://analytics.google.com/)、[Woopra](https://www.woopra.com/)、[Intercom](https://www.intercom.com/)
- **時機？**<br>
  專案開始執行後。
- **原因？**<br>
  分析網站或行動裝置 App 的流量與使用者行為，也可設定目標追蹤轉換率。
- **如何使用？**<br>
  請開發人員協助安裝 Google Analytics (GA)。<br>
  透過 GA 分析不同數據，例如即時流量、跳出率、單頁停留時間、使用者如何找到您的網頁等。<br>
  常見的 GA 報表：
  - 使用裝置/瀏覽器報表
  - 客戶開發效率分析報表
  - 消費者行為報表
  - 行動裝置效能報表
  - 網站診斷：網頁操作時間報表
  - 時段報表 (Hours & Days Report)
  - 參照連結網址報表
  - 網站內容有效性報表
  - 社群管道流量來源報表

[**外部人員測試 (Beta testing)**](https://www.playtestcloud.com/blog/testflight-alternatives-ios-android){:target="_blank"}
- **使用產品：**<br>
  [TestFlight](https://developer.apple.com/testflight/)、[HockeyApp](https://hockeyapp.net/)、[Google Play Beta Testing](https://play.google.com/apps/publish/signup/)、[Fabric.io](https://get.fabric.io/)
- **時機？**<br>
  專案執行後，公開發布前。
- **原因？**<br>
  當產品準備公開發布前，應該在小部分的樣品上做測試，並收集其他人員的回饋，及檢查有無尚未解決的錯誤。
- **如何執行？**<br>
  通常由開發人員負責測試，如果是針對行動裝置 App 的測試，外部測試是最管用的方法。不過也能應用在任何數位產品。利用 HockeyApp 等工具中提供的指標，使用者可直接在 App 給予回饋。另外，在目標受眾的選擇上有更聰明的方法，利用焦點團體 (focus group)，也就是以人數較少、代表性的小規模群眾作為未來產品使用者樣貌。

## 設計測試的建議
- 當專案要進行到下一階段時，儘早建構原型並進行測試，並頻繁地修正重大產品問題。
- 只需要 3 到 5 人檢查最重要的易用性問題。
- 最好是找對產品毫無背景知識的新受測者，參與測試。
- 在對真實使用者進行測試時，不要立刻記下洞察 (寫下來、自言自語等)，這會讓受試者覺得緊張。
- 進行測試時，不要引導使用者。因為想要知道的是使用者是如何自行找到答案或為何無法解決問題。在現實生活中，當使用者在操作產品時，您是不會坐在他旁邊協助的。

## 客戶可能會提的問題
{% include qa.html question="為什麼我的產品需要測試？" answer="綜上所述，您必須將出現錯誤的風險降到最低，因為您要面對的是現實中使用您產品的真實使用者。而且，敏捷 Scrum 方法的反覆修改特性，有助於在每個 Sprint 階段改進產品的弱點。測試就試用來找出弱點。" %}
{% include qa.html question="測試由誰來買單？" answer="由客戶買單，因為這是我們提供的服務之一。耗費大量時間的測試得先與客戶一同討論、評估，並且同意。" %}
{% include qa.html question="測試得花多少時間？會影響到期限和開發流程嗎？" answer="請見「工具」那段的預估時間。如果測試目標不是開發步調的影響 (像是熱點分佈)，那就不應該影響期限或開發時程。" %}
{% include qa.html question="App 在設計階段之後有測試過了嗎？我們可以開始實做了嗎？要怎麼做？" answer="測試過了！為了要確保工作結果的品質，產品必須經過測試。經過測試之後，就可以開始實做了。" %}
{% include qa.html question="至少會有哪些測試來確保高品質？" answer="每個產品適用不同的測試方法，所以測試的項目會依照產品性質客製。通常在所有的專案中都會包含總結工作團隊的回饋訊息和設計的漏洞掃除。" %}

#### 在本階段問問自己：
- 已經蒐集完團隊的回饋內容了嗎？
- 確保高保真原型是否可以點擊。
- 是否已經進行設計漏洞掃除？
- 是否在線稿階段後就做測試了？
- 在視覺設計階段後做測試了嗎？
- 實做階段後，至少已安裝完 Google Analytics？(是/否)

## 本階段的理想成果
1. 使用適合的工具測試線稿或設計稿。
2. 收集使用者回饋並且執行。

## 延伸閱讀
- [如何以遠端易用性測試改進介面設計](https://www.netguru.co/blog/improve-ui-remote-usability-testing) (英)

### 本章節譯者
[Cos Chen](https://coschen.icu){:target="_blank"}、[Gwynne Li](https://www.facebook.com/GwynneLL){:target="_blank"}、[何慕晨](https://www.linkedin.com/in/%25E6%2585%2595%25E6%2599%25A8-%25E4%25BD%2595-532130a2){:target="_blank"}、[林婉婷](https://www.linkedin.com/in/wantinglin93){:target="_blank"}

<a class="chapter-cc-license-link" href="https://creativecommons.org/licenses/by-nc/3.0/tw/" rel="nofollow" target="_blank">
  <i class="chapter-cc-license" alt="創用 CC 授權：姓名標示-非商業性 3.0 台灣"></i>
</a>
