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
- Sketch 的小技巧

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

## 風格指南
在研究階段之後適合立即開始打造風格指南。在最初的版本，風格指南應該至少包含顏色與字型。進入視覺設計階段時，要更新到完整的版本。

**良好的風格指南應該有什麼？**
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

使用者以某種方法過度使用造成的狀態。過多結果（可以立刻替這些資料分頁），過多字母（能夠以 ... 省略）等。

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

## 有做到也不錯 (nice-to-haves) 的設計

### 準備有互動的設計
如果有足夠的時間，嘗試搜尋元素 (element) 之間的等待過渡期。像是你的專案中，有如魔法般的動態效果，這樣可以大大提升使用者體驗，如果要準備這些互動效果，你可以使用：
1. **Principle.** 當你需要在界面中設計動畫，你可以使用_Principle_ ，尤其是在一個適用不同螢幕的專案中；在設計原型(prototype)時，透過建立過渡期及元素的動態效果，可以幫助你更快速且容易點擊。 _Principle_ 應該是你的首選，如果:
  - 你需要快速產出一個原型(prototype)來確認 UI 解決方案是否有效；
  - 你要確定開發人員知道如何寫出互動效果；
  - 你想要創造更有意義的效果來增添經驗；
  - 你想要在社群平台上展示你的設計。
2. **Adobe After Effects.** _AE_ 真的很夠用 – 只要跟動畫有關的事情，它幾乎都可以做。 雖然功能豐富伽且強大，但_After Effects_ 如果可以處理 Sketch 的文件會更好。 _AE_ 也不允許在原型(prototype)上測試互動行為。a _After Effects_ 應該是你的首選，如果:
  - 你需要客制過度期或動態效果；
  - 你需要用不同角度或其他影片效果；
  - 你需要做出動態圖示(icons)或插圖(illustrations)。

### 自做自己的圖示(icon)
我們使用 _Nucleo_ 來設計, 如果有足夠的時間，你可以製作一組個人的圖示 (icon)，能讓應用軟體更有個性。

## 資源

### 圖示
- [Nucleo](https://nucleoapp.com/){:target="_blank"}, [FlatIcon](https://www.flaticon.com/){:target="_blank"}, [IconFinder](https://www.iconfinder.com/){:target="_blank"}

### 圖庫資源
- 付費圖庫資源： [iStockPhoto](http://www.istockphoto.com/){:target="_blank"}, [ShutterStock](https://www.shutterstock.com/){:target="_blank"}, [GettyImages](http://www.gettyimages.com/){:target="_blank"}
- 免費圖庫資源： [Aggregator for all top free stocks](http://allthefreestock.com/){:target="_blank"}

### 字型
- [Google Fonts](https://fonts.google.com/){:target="_blank"}, [Adobe Typekit](https://typekit.com/fonts){:target="_blank"}, [Font Squirrel](https://www.fontsquirrel.com/){:target="_blank"}, [MyFonts](https://www.myfonts.com/){:target="_blank"}, [DaFont](http://www.dafont.com/){:target="_blank"}

### Sketch – 標準範例
- [Sketch 的一般標準範例](https://www.uxpin.com/studio/blog/10-best-practices-sketch/){:target="_blank"}, [統一 Sketch 的元素](https://www.uxpin.com/studio/blog/10-best-practices-sketch/){:target="_blank"}

## 客戶可能會問的問答集

{% include qa.html question="設計加入團隊?" answer="團隊內有更多的專業人士，團隊的（其他設計專業像是UX、視覺設計或是插畫）。藉由團隊的專業經驗，能夠立即驗證不良的解決方案與錯誤，將會更有效率地解決開發產品遇到的問題。由於各司其職，工作分配後更有效率（特定設計師負責特定設計工作）。團隊成員間的互相激發創意，亦可相互給予專業的設計建議，產品成功的機會大大增加。" %}

{% include qa.html question="設計與Wireframe兩者的差異在哪?" answer="Wireframe 是運用基本視覺元素去定義一個專案架構、內容與功能的藍圖。在只使用簡單的元素的情況下，能夠更專心地找出最佳的使用者經驗解決方案，反覆修正的更快更具成本效益。" %}

{% include qa.html question="為何我們需要付費買字體呢?" answer="付費字體除了能提高品質，還包含更多樣式與字體粗細選擇（也讓設計師在設計層次上更不受限）。另外，付費字體有附加的字型與合字（西方字體），以及適當的字距調整。付費字體有助於建構產品的特徵，使之脫穎而出。雖然字體看似不太重要，但網站與手持裝置的內容有 95% 的內容都是字。使用更好的字體來確保產品有一定的品質。" %}

{% include qa.html question="為何不直接買現有的圖示，而要請設計師畫圖示?" answer="圖示與插畫並非只要求漂亮即可，而是要傳達訊息。使用客製化的圖示， 能夠確保圖片能夠傳達正確的訊息給使用者。就像是品牌使用統一的視覺元素，使用一致的色彩與字體，與競爭對手做區隔" %}

{% include qa.html question="我沒有 Sketch 這套軟體，我要如何開你們的設計檔案呢?" answer="我們可以提供PNG檔，有圖層的PDF檔，或是 HTML 檔的所有檔案，檔案包含給開發工程師的必要資訊。在互動上，我們用 InVision 這套軟體作出可在網頁瀏覽的互動原型。 " %}

{% include qa.html question="如何尋找靈感呢?" answer="最好的網站資源是 Behance (behance.net) 與 Dribbble (dribbble.com). " %}

{% include qa.html question="風格樣式指南是什麼?為何需要風格樣式指南？" answer="風格樣式指南是整體產品外觀與感覺的規範，它包含色彩、字型與常用設計元素的標準。在整個設計過程，定義標準有助於在不同螢幕與裝置上，產品整體外觀皆保持一致的視覺風格，尤其是多個設計師協作的情況下，每個成員有責任確保自己負責的設計在規範內。" %}

{% include qa.html question="為何需要知道我們的商業模式?" answer="樣式指南是整體產品外觀與感覺的規範，它包含色彩、字型與常用設計元素的標準。在整個設計過程，定義標準有助於在不同螢幕與裝置上，產品整體外觀皆保持一致的視覺風格，尤其是多個設計師協作的情況下，每個成員有責任確保自己負責的設計在規範內。" %}

{% include qa.html question="您希望得到哪種回饋呢?" answer="設計師提供使用者服務與商業的解決方案為目標，因此，您可以試著反覆檢查設計是否符合產業與商業目標。請記得，美學通常是個人主觀的想法，您的美感不一定與產品潛在客群的美學一致。" %}

**在此階段先確認四件事**
- 我是否有情緒板了呢？
- 我是否有風格樣式指南了呢？
- 我是否完成了所有目標裝置與各設計階段的設計了呢？
- 我是否蒐集客戶與團隊成員的回饋了呢？

## Desired outcomes of this stage
- 情緒板 (請參考 [範例一](https://netguru.invisionapp.com/boards/D834FYVZBKNWP){:target="_blank"} 與 [範例二](https://netguru.invisionapp.com/boards/F736L21WBKCPU){:target="_blank"})
- 風格樣式指南 (請參考範例 [Taqsim 風格樣式指南](https://netguru.invisionapp.com/share/7UAMU5OB3#/screens){:target="_blank"} 與 [色彩](https://projects.invisionapp.com/share/P79V1I7NK#/screens/212581073){:target="_blank"})
- 設計 ([參考範例 ](https://netguru.invisionapp.com/share/ZD9VDND6E#/screens/212677302){:target="_blank"})

## 延伸閱讀
- [產品設計背後的心理學 – 在分心時代保持專心（英）](https://www.netguru.co/blog/psychology-behind-the-product-design-staying-efficient-in-the-age-of-distractions){:target="_blank"}
- [如何讓 Sketch 更好（英）](https://www.netguru.co/blog/how-to-make-sketch-even-better){:target="_blank"}
- [如何”不"替你的手持裝置設計 App（英）](https://www.netguru.co/blog/how-not-to-design-an-interface-for-your-mobile-app){:target="_blank"}
- [我們賦予產品意義 – Netguru 公司的設計流程: the Approa（英）](https://www.netguru.co/blog/design-flow-at-netguru-pt.-1){:target="_blank"}
- [預設設計 第一部分（英） ](https://www.netguru.co/blog/anticipatory-design-part-1){:target="_blank"}
- [預設設計 第二部分（英） ](https://www.netguru.co/blog/anticipatory-design-2){:target="_blank"}
- [設計的九個階段（英）](https://medium.com/swlh/the-nine-states-of-design-5bfe9b3d6d85#.hmieefed1){:target="_blank"}
- [Google Material Design 的9個準則（英）](https://blog.prototypr.io/googles-9-principles-of-material-design-fb3fef64dcf){:target="_blank"}
- [被誤用的手持裝置 UX 模式（英）](https://medium.com/@kollinz/misused-mobile-ux-patterns-84d2b6930570){:target="_blank"}
- [如何設計手持裝置的原生App（英）](https://medium.com/@uxhow/how-to-design-native-mobile-apps-55d383fcb2b2){:target="_blank"}
- [使用者介面設計的黃金準則（英）](https://uxplanet.org/golden-rules-of-user-interface-design-19282aeb06b){:target="_blank"}
- [空白狀態： 手持裝置 App "會更好的” 必要設計（英）](https://uxplanet.org/empty-state-mobile-app-nice-to-have-essential-f11c29f01f3){:target="_blank"}
