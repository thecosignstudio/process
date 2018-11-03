---
title: "設計"
chapter_number: "05"
---

# 設計

## 介紹
**您將在此章節中學習到：**
- 可以找到靈感的地方
- 如何蒐集靈感、準備情緒板 (moodboard)
- 如何準備風格樣式規範
- 如何準備特定的設計階段
- 專屬於某些裝置的設計小技巧
- 團隊協作的最佳做法
- 找到設計資源
- Sketch 小技巧

進行設計的目的是讓功能實現；以可用的資源解決問題。好的設計是在解決問題，甚至在遇到時不會認為那是個問題。好的介面設計、傳達流程，或是物件的操作不需要耗費使用者太多力氣；好的設計會讓你想到：天啊，我當時應該要那樣做！

沒錯，良好設計的視覺和體驗通常都讓人感到愉悅。因此，有時候外觀會優先於功能。

**相關成員**
- 設計師
- 客戶
- 品保
- 開發人員
- 專案經理

## 靈感
**為專案找到準確的風格**<br>
當你開始進行新專案的設計，要記得靈感激發流程是非常重要的。應用程式/網站整體的感覺，取決於你使用的顏色、字型或照片。
*記住：不要抄襲，只管從中汲取更多靈感！*

可以在這裡找尋靈感：
- [Awwwards](http://www.awwwards.com){:target="_blank"}
- [Dribbble](http://www.dribbble.com){:target="_blank"}
- [Behance](http://www.behance.com){:target="_blank"}
- [Designspiration](http://www.designspiration.net){:target="_blank"}
- [Pinterest](http://www.pinterest.com){:target="_blank"}

### 準備情緒板
這個步驟是對你和客戶來說都是必要的。當然，你會遇到設計完成後，讓客戶感到驚艷的情況，但是不會一直如此。我們建議準備上面有許多照片和圖片的板子，向客戶展示未來要完成的應用程式上要做的事情、這次設計會喚起什麼樣的「感覺」什麼樣的「感覺」，還有最後，客戶可以期待的事情。托這個方式的福，可以增加客戶喜歡本次解決方案的機會，還有你也會表現出重視客戶回饋的樣子。

**大約所需時間：4 小時。**造訪[此連結](https://netguru.invisionapp.com/boards/3M37AJO452DFW/){:target="_blank"}查看情緒板範本。

**如何準備情緒板？**<br>
我們使用 Boards by inVision 的理由：
- 較有彈性
- 有立即可用的樣板
- 提供加入圖片、字型和附件的功能選項
當然，可以隨意選擇自己使用的工具！

## 風格規範
在研究階段之後適合立即開始打造風格規範。在最初的版本，風格規範應該至少包含顏色與字型。進入視覺設計階段時，要更新到完整的版本。

**良好的風格規範應該有什麼？**
- **顏色** （主要使用的顏色和每一個顏色逐漸變化的程度）<br>
實用工具： [Coolors](https://coolors.co/app){:target="_blank"}、[Color Adobe](https://color.adobe.com/explore/?filter=most-popular&time=all){:target="_blank"}
- **文字排版** (字型和文字大小)<br>
為了讓設計保持簡潔，限制使用的字體數量和尺寸。根據經驗，從最多兩種字型開始：一個給標題使用，另一個給內文使用。在大多數情況下，不會需要用到更多。<br>
我們強烈建議使用免費字型。如果想要使用付費字型，就要小心確認字型的使用授權。客戶可能不願意為字型額外付費，所以要確認他們真的想花錢在字型上。

免費字型： [Google Fonts](https://fonts.google.com/){:target="_blank"}<br>
付費字型： [MyFonts](http://www.myfonts.com/){:target="_blank"} 和 [Typekit](https://typekit.com/){:target="_blank"}<br>
苦惱於字型搭配嗎？試試 [Typewolf](https://www.typewolf.com/){:target="_blank"} 或 [FontPairs](https://fontpair.co/){:target="_blank"}<br>

- **元件資源庫 (Components Library)**（狀態的設計）<br>
以元件為基礎的思考對工程師有幫助。設計元件可以恰好地轉譯進程式碼。從工程師的視角來看，元件看起來就像是可以組合在一起的樂高積木。<br>
例如：
  - 按鈕 (一般、滑鼠移入、選中、不能使用的狀態)
  - 輸入欄位 (空白、選取、輸入、錯誤、成功狀態)
- **網格和留白**<br>
建立每一種情況都適用的網格系統很重要。在此探討網格的部分，包含排、列、間格的數量，還有使用範例情境。
  - [8 像素網格系統](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632#.bipuod98k){:target="_blank"}
  - [Bootstrap grid](https://medium.com/@petehouston/setup-twitter-bootstrap-grid-in-sketch-f6e69eab95c2#.svi9r5wlj){:target="_blank"}

## 各種狀態的設計
在整個設計的過程當中，必須要記得 UI 會有不同的狀態：

**1. 預設狀態**

可能是使用者第一眼看到的畫面、介面元素或狀態，也可能是尚未啟用。元件確實存在，只是還沒開始運作。

**2. 讀取中狀態**

令人害怕的狀態。在理想狀況下，根本不會看到這個狀態。哎，就只有我們是這樣。有非常多種方式讓讀取狀態看起來很精緻或不突兀。

**3. 空白狀態**

元件已經啟動，卻是空的。沒有資料、沒有條目。或許是鼓勵使用者行動的好時機：「 做這件事！ 」或是給予獎勵：「做得好，全部都搞定了。」

**4. 只有單一資料的狀態**

現在總算有資料了。在資料輸入的情況，這可能出現在一按下鍵盤之後。在一份清單當中，它可能是在有一個項目的時候（或是只剩下一個項目的時候。）

**5. 有一些資料的狀態**

此狀態通常是你最先想到的。這個元件最理想的狀態要如何呈現？資料已經載入、有輸入資料，而且使用者也很熟悉。

**6. 過多資料的狀態**

使用者以某種方法過度使用造成的狀態。過多結果（可以立刻替這些資料分頁），過多字母（能夠以 …省略）等。

**7. 錯誤狀態**

元件無法正常運作，引發錯誤。

**8. 正確的狀態**

項目的需求已滿足。

**9. 完成狀態**
應用程式已經接收到使用者輸入的正確內容，已不必再擔心。

根據使用者的互動、上傳資料和各種應用程式狀態的改變，這些狀態會在頁面上不斷循環。只要能夠細心設計這些變化，就能夠為不管身處在哪種情況的使用者，打造優良的體驗。

## 針對手機原生應用程式的設計細節
如果你是原生應用程式的新手，閱讀 Android (Material Design) 和 iOS (Human Interface Guidelines) 作業系統官方規範是最好的方式。

**Android 裝置**：[Material Design Guidelines](https://material.io/guidelines/){:target="_blank"}

**Apple iPhone**：[Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/){:target="_blank"}

### 手勢設計的通則
使用 [最常見的手勢](https://blogs.adobe.com/creativecloud/in-app-gestures-and-mobile-app-user-experience/){:target="_blank"}讓 App 更具互動性。請記住，使用手機的時候，沒有像使用電腦看網頁一樣，能夠「右鍵點擊。」試著在使用者可能預期的區域設定最常見、直覺的手勢。

**行動 App 互動的重要性**<br>
閱讀：[微互動：設計良好 app 的秘密](https://intersection.tw/742c369a464e){:target="_blank"}（[原文](https://uxplanet.org/microinteractions-the-secret-to-great-app-design-4cfe70fbaccf){:target="_blank"}）<br>

## 團隊設計: 最佳作法

{% include dosndonts.html introduction="1. 每個專案都從腦力激盪階段開始。" dos="
要激烈討論、也鼓勵各種瘋狂想法。
| 利用團隊中現有的工具記錄想法。
| 為想法編號，並且以量化呈現。
| 進行腦力激盪時，讓非設計工作者參與，可帶來更多變化。
" donts="
避免批評，任何評斷都要保留到此階段結束後才說。
"%}

{% include dosndonts.html introduction="2. 務必了解個人責任及整個團隊的結構。" dos="
確保清楚知道自己的角色，以及負責的任務。
| 負責分配任務時，確保能力分配平均並縮短差距。
" donts="
別忘了專案時程及任務的期限。
"%}

{% include dosndonts.html
  introduction="3. 設計分歧出現時，將對話帶回到商業目標。"
  dos="設計出現分歧的時候，從團隊蒐集所有意見，選擇最能滿足產品商業目標的解決方案。
  | 以現實生活的範例與調查來證明你的想法。"
  donts="在尋找解決方案時，別讓視覺及個人喜好成為主要準則。
  | 不要試圖重新發明輪子：確認是否有人解決過此問題。
  | 別忘了專案時程及任務期限。"
%}

{% include dosndonts.html
  introduction="4. 要融入團隊，專注在傳達商業目標。"
  dos="積極反應並熱於助人：如果團隊成員詢問緊急問題，應該要視為高度優先。
  | 快速解決團隊內部的衝突及誤解：個人衝突要更優先。"
  donts="千萬不要將最終設計當做完全是自己的功勞。
  | 不要固執己見，隊友的解決方案可能更好。"
%}

{% include dosndonts.html introduction="5. 正確配置檔案。" dos="
命名一致性；在設計軟體工具中，將資料夾的命名標準化。Sketch、Adobe XD 或 inVision Studio 在每個圖層都有適當命名且結構一致時，最有效率。
| 盡可能共用文字及顏色樣式。
| 針對反覆出現的樣式建立 Symbol 和參照樣本 (instances)。
| 透過 Artboard 或分頁劃分設計。
" donts="
避免檔案四散各處：所有專案素材都放在都同一位置，最好是共享資料夾。
| 特別注意不佳的圖層及文件命名。
| 確保每個圖層都有群組及命名：要不然團隊成員打開檔案後可能還得要幫忙收拾。
"%}

{% include dosndonts.html introduction="6. 要給予回饋意見，也要放寬心胸接納意見。"
dos="每個階段都詢問團隊成員意見回饋，有定期的設計評鑑。
| 向客戶展示成果前，務必要先以傳訊程式從全體設計團隊獲得回饋，或是當面進行。"
donts="
不要固執，接受有建設性的批評：沒有回饋，就不會成長。
"%}

{% include dosndonts.html introduction="7. 展示、辯護想法。" dos="
知道自己作品行得通的原因，是能夠流暢地解釋、辯護的關鍵。
| 針對想要說服客戶的想法做功課。
| 熟悉解決方案背後的數字。
" donts="
介紹作品時，不要使用專業術語：客戶不必知道什麼是人物誌 (persona) 或第一眼畫面 (above-the-fold)。
"%}

{% include dosndonts.html introduction="8. 擁抱溝通文化。"
dos="提早、經常且清楚地溝通
| 最好在第一次展示設計時，與客戶進行即時通話，這樣才有機會回答所有問題並避免誤解。"
donts="不要害怕發問：記住！沒有笨問題。
| 不要認為客戶應該知道如何使用協作工具。
| 不要在複雜流程的設計上未留下任何註解。"
%}

## 進行設計時，「有做到會更好」的項目

### 準備互動式設計
如果有足夠的時間，為已設計的介面元素搜尋現成轉場效果 (transitions)。這可以大大提升使用者體驗，因為專案的動畫就像是魔法一般。要準備這些互動效果，可以使用：
1. **Principle**<br>
當你需要讓介面元素以動畫呈現，尤其在用到多重螢幕的專案的時候，適合使用 **Principle**。透過內建的轉場效果及元素動畫，有助於更快速且容易地建立能夠點擊的原型。以下這些情況， **Principle** 會是可靠的工具：
  - 需要快速產出原型來驗證 UI 解決方案是否有效；
  - 確認開發人員理解如何寫出互動效果的程式碼；
  - 想要創造更有意義的動畫來增添體驗；
  - 想要在社群平台上展示設計。
2. **Adobe After Effects**<br>
**AE** 真的很夠用：只要跟動畫有關的事情，它幾乎都可以搞定。雖然功能豐富又強大，但是，After Effects 可以處理 Sketch 文件的話會更好。**AE** 也不允許在原型上測試互動行為。After Effects 是可靠的工具，會用在：
  - 需要自訂轉場或動畫效果；
	- 需要用到透視法 (perspective) 或其他影片效果；
	- 需要做出動態圖示或插圖。

### 打造自己的圖示
只要時間足夠，就可以自製圖示。我們使用 **Nucleo** 進行設計，自製圖示能讓應用軟體更具有獨特感。

## 資源

### 圖示
  - [Nucleo](https://nucleoapp.com/){:target="_blank"}、[FlatIcon](https://www.flaticon.com/){:target="_blank"}、[IconFinder](https://www.iconfinder.com/){:target="_blank"}

### 圖庫資源
  - 付費圖庫資源： [iStockPhoto](http://www.istockphoto.com/){:target="_blank"}、[ShutterStock](https://www.shutterstock.com/){:target="_blank"}、[GettyImages](http://www.gettyimages.com/){:target="_blank"}
  - 免費圖庫資源： [Aggregator for all top free stocks](http://allthefreestock.com/){:target="_blank"}

### 字型
  - [Google Fonts](https://fonts.google.com/){:target="_blank"}、[Adobe Typekit](https://typekit.com/fonts){:target="_blank"}、[Font Squirrel](https://www.fontsquirrel.com/){:target="_blank"}、[MyFonts](https://www.myfonts.com/){:target="_blank"}、[DaFont](http://www.dafont.com/){:target="_blank"}

### 良好的 Sketch 做法
- [常見的 Sketch 良好做法](https://www.uxpin.com/studio/blog/10-best-practices-sketch/){:target="_blank"}

## 客戶可能會提的問題

{% include qa.html question="為什麼以團隊進行設計會更好？" answer="技能搭配和合作經驗的範圍會更廣（互補團隊的成員都有各自獨特的技能，像是 UX、視覺設計或是插畫。）團隊成員能夠立即互相驗證不良的推測與錯誤方案，會更有效率地解決問題。由於靈巧的工作指派（設計師都有各自能做得更快的工作，）效率也會提升。團隊能夠提供更大的新想法能量，還可以立刻獲得熟知脈絡的不同見解，產品成功的機會大大增加。" %}

{% include qa.html question="設計與線稿 (wireframe) 的差異在哪？" answer="線稿是運用基本視覺指引，定義專案的架構、內容與功能的藍圖。在只使用簡單的元素，不必因為視覺而分神的情況下，能夠更專心地找出最佳的使用者經驗解決方案，更快速進行反覆修正且更具成本效益。" %}

{% include qa.html question="為什麼字型要付費呢？" answer="付費字型通常代表更好的品質，有更多樣式和粗細選擇（也讓設計師在結構設計上更不受限、）額外的字符號與合字 (ligature)，以及適當的字距 (kerning) 調整。付費字型有助於建構視覺特徵，使之脫穎而出。雖然看似不太重要，但網站與行動裝置的產品有 95% 的內容都是文字排版。使用品質良好的字型也代表產品設計有機會是高品質。" %}

{% include qa.html question="為何不直接買現有的圖示，而要訂做一套？" answer="圖示與插畫並非只求漂亮即可，而是要傳達訊息。使用訂做的圖像，能夠確信圖片傳達正確的訊息給使用者。就像是品牌使用統一的顏色與字型，獨特的視覺風格有助於跟競爭對手做區隔，也可以傳達一致的視覺語言。" %}

{% include qa.html question="我沒有 Sketch 這套軟體，要如何看設計檔呢？" answer="我們可以提供各種不同檔案類型，包含：平面化的 PNG 檔、有圖層的 PDF 檔，或 HTML 格式的詳細說明文件，其中有給開發人員的所有必要資訊。在意見回饋的部分，我們用 InVision 這套軟體做出在網頁瀏覽的互動原型，上面有對話式的留言區。" %}

{% include qa.html question="如何尋找靈感呢?" answer="最佳的靈感來源應該可說是 Behance (behance.net) 與 Dribbble (dribbble.com)。" %}

{% include qa.html question="什麼是風格規範？為什麼得準備一份？" answer="風格是整體產品外觀與感覺的規範，它包含色彩、字型與常用設計元素的標準。在整個設計過程，定義標準有助於在不同螢幕與裝置上，產品整體外觀皆保持一致的視覺風格，尤其是多位設計師協作的情況下特別有效果，每個成員負責產品其中不同的部分。" %}

{% include qa.html question="為什麼想要知道商業模式？" answer="設計師汲汲於提供同時解決使用者與企業本身的方案，因此，可以試著檢查設計是否滿足商業目標並且符合該產業。請記得，美學通常是個人主觀品味，自己的美感不一定與產品潛在客群的美學一致。" %}

#### 在本階段問問自己：
- 是否有情緒板了？
- 是否有風格規範了？
- 是否完成所有目標裝置與各個設計狀態了？
- 是否收到客戶與團隊成員的回饋了？

## 本階段的理想成果
- 情緒板 (請參考[範例一](https://netguru.invisionapp.com/boards/D834FYVZBKNWP){:target="_blank"}與[範例二](https://netguru.invisionapp.com/boards/F736L21WBKCPU){:target="_blank"})。
- 風格樣式指南 (請參考範例 [Taqsim 風格樣式指南](https://netguru.invisionapp.com/share/7UAMU5OB3#/screens){:target="_blank"} 與 [色彩](https://projects.invisionapp.com/share/P79V1I7NK#/screens/212581073){:target="_blank"})
- 設計 ([參考範例 ](https://netguru.invisionapp.com/share/ZD9VDND6E#/screens/212677302){:target="_blank"})

## 延伸閱讀
- [產品設計背後的心理學：在分心時代保持專心（英）](https://www.netguru.co/blog/psychology-behind-the-product-design-staying-efficient-in-the-age-of-distractions){:target="_blank"}
- [如何讓 Sketch 更好用（英）](https://www.netguru.co/blog/how-to-make-sketch-even-better){:target="_blank"}
- [如何「不」替手機 App 設計介面（英）](https://www.netguru.co/blog/how-not-to-design-an-interface-for-your-mobile-app){:target="_blank"}
- [我們賦予產品意義 – Netguru 公司的設計流程：the Approa（英）](https://www.netguru.co/blog/design-flow-at-netguru-pt.-1){:target="_blank"}
- [預期設計 第 1 部分（英） ](https://www.netguru.co/blog/anticipatory-design-part-1){:target="_blank"}
- [預期設計 第 2 部分（英） ](https://www.netguru.co/blog/anticipatory-design-2){:target="_blank"}
- [設計的 9 種狀態（英）](https://medium.com/swlh/the-nine-states-of-design-5bfe9b3d6d85#.hmieefed1){:target="_blank"}
- [Google Material Design 的 9 個原則（英）](https://blog.prototypr.io/googles-9-principles-of-material-design-fb3fef64dcf){:target="_blank"}
- [被誤用的手持裝置 UX 模式（英）](https://medium.com/@kollinz/misused-mobile-ux-patterns-84d2b6930570){:target="_blank"}
- [如何設計手持裝置的原生 App（英）](https://medium.com/@uxhow/how-to-design-native-mobile-apps-55d383fcb2b2){:target="_blank"}
- [使用者介面設計的黃金準則（英）](https://uxplanet.org/golden-rules-of-user-interface-design-19282aeb06b){:target="_blank"}
- [空白狀態：讓手持裝置 App「會更好」的必要設計（英）](https://uxplanet.org/empty-state-mobile-app-nice-to-have-essential-f11c29f01f3){:target="_blank"}
