---
title: "Design"
chapter_number: "05"
---

# 設計

## 介紹
**在這個章節，你將會學到：**
- 到哪裡可以找到靈感
- 如何收集靈感與準備情緒板 ( moodboard )
- 如何準備風格樣式指南
- 如何準備一個特定的設計階段
- 在不同特定裝置上設計的小技巧
- 最好的團隊協作練習
- 在哪裡可以找到設計資源
- 設計草稿的小技巧

我們設計東西是在透過一套可用的資源，給出可以解決問題的用途一個形式。好的設計是解決一個問題，所以他首先看起來是沒有什麼問題的。好的介面設計、溝通過程，或是物件的操作是不需要耗費使用者太多的力氣的。好的設計會讓你想到：天啊，我本來應該可以靠自己做到的！<br>
是的，良好的設計物件通常是一個令人愉悅的看待或是體驗。在一些案例裡面，這些形式將會處於功能之前。

**利益相關人**
- 設計師
- 客戶
- 品質管理員
- 開發人員
- 專案經理

## Inspiration
**Find an accurate style for the project**<br>
Remember that the inspiration process is critical when you start designing a new project. The overall feeling of an application/website depends on the colors, fonts, or photos you use. **Remember: Do not copy, just get inspired!**

You can look for inspiration here:
- [Awwwards](http://www.awwwards.com){:target="_blank"}
- [Dribbble](http://www.dribbble.com){:target="_blank"}
- [Behance](http://www.behance.com){:target="_blank"}
- [Designspiration](http://www.designspiration.net){:target="_blank"}
- [Pinterest](http://www.pinterest.com){:target="_blank"}

### Preparing moodboards
This step is essential for you and your client. There will, of course, be situations when you finish your design, and the client is thrilled – but this will not always be the case. We recommend that you prepare a board with a lot of photos and pictures that will show to your client what you would like to do with the future app, what “feelings” your designs will evoke, and finally, what the client can expect. Thanks to this approach, you will increase the chances that the client likes your solutions, and you will show that you appreciate the client’s feedback. **Approximate time: 4h.** Visit [this link](https://netguru.invisionapp.com/boards/3M37AJO452DFW/){:target="_blank"} to see an example of a moodboard.

**How to prepare a moodboard?**<br>
We use Boards by InVision for the following reasons:
- Flexibility
- Predefined layouts
- Option to add images, fonts, and attachments

Of course, feel free to choose your own tool!

## Style guide
It’s good to start creating a style guide right after the research stage. The initial version of the style guide should at least contain the colors and typography. During the visual design phase, you should update your style guide to a full version.

**What should a good style guide contain?**
- **Color** (the main colors and shade variations for each of them)<br>
Useful tools:  [Coolors](https://coolors.co/app){:target="_blank"}, [Color Adobe](https://color.adobe.com/explore/?filter=most-popular&time=all){:target="_blank"}
- **Typography** (font family and type scale)<br>
Limit the number of typefaces and sizes you use in order to keep your designs simple. As a general rule of thumb, start with two fonts at most – one for your headers, and another one for your bodies. Most of the time, you won’t need any more than that.<br>
We highly recommend using free fonts. If you want to use a paid font, check the licence carefully. Your client might be reluctant to pay extra money for fonts, so make sure they do want to spend money on fonts.<br>
Free fonts: [Google Fonts](https://fonts.google.com/){:target="_blank"}<br>
Paid fonts: [MyFonts](http://www.myfonts.com/){:target="_blank"} and [Typekit](https://typekit.com/){:target="_blank"}<br>
Having troubles with pairing fonts? Try [Typewolf](https://www.typewolf.com/){:target="_blank"} or [FontPairs](https://fontpair.co/){:target="_blank"}<br>
- **Component library** (states of design)<br>
Component-based thinking helps engineers. Design components can translate neatly into code. From the engineering perspective, components are like Lego blocks that you can put together.<br>
For example:
  - Buttons (normal, hover, active, disabled)
  - Inputs (empty, selected, typing, error, success)
- **Grids and spacing**<br>
It’s important to establish a grid system that works for every use case. In the section on grids, include information on the number of columns and rows, margins, and example uses.
  - [8pt grid system](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632#.bipuod98k){:target="_blank"}
  - [Bootstrap grid](https://medium.com/@petehouston/setup-twitter-bootstrap-grid-in-sketch-f6e69eab95c2#.svi9r5wlj){:target="_blank"}

## States of design
During the design process, you have to keep in mind that your UI can be in different states:

**1. Nothing**

Maybe it’s the first time a user sees a view, interface element, or status. Maybe it hasn't been activated yet. Essentially, the component exists but hasn’t started working yet.

**2. Loading**

The dreaded state. In a perfect world, no one would ever see this. Alas, here we find ourselves. There are plenty of ways to keep your loading state subtle and unobtrusive.

**3. None**

Your component has initialized, but it’s empty. No data. No Items. Now may be a good time to get the user to act (“Do this!”), or to reward them (“Good job, everything has been taken care of”).

**4. One**

You have some data. On input, this might come after the first keystroke. In a list, it might be when you have one item (or only one item left).

**5. Some**

This is usually what you think of first. What is the ideal state for this component? Your data is loaded, you have input, and the user is familiar with it.

**6. Too many**

The user has overdone it in some way. Too many results (maybe you paginate them now), too many characters (maybe ellipses?), and so on.

**7. Incorrect**

Something is not right about the component. An error has occurred.

**8. Correct**

This item has had its requirements satisfied.

**9. Done**

The user’s correct input has been received by the application. The user doesn’t have to worry about it anymore.

These states will recur based on the page, user interaction, updated data, and pretty much any change to your application’s state. By thoughtfully designing these changes, you can create a polished experience for users no matter which situation they find themselves in.

## Designing specifics for native mobile apps
If you are only starting to design native apps, the best thing to do is to read the official guidelines for the Android (Material Design) and iOS (Human Interface Guidelines) operating systems.

**Android devices**
[Material Design Guidelines](https://material.io/guidelines/){:target="_blank"}

**Apple’s iPhones**
[Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/){:target="_blank"}

### Designing for gestures in general
Use [the most popular gestures](https://blogs.adobe.com/creativecloud/in-app-gestures-and-mobile-app-user-experience/){:target="_blank"} to make application even more interactive. Remember that when using your phone, there is no “right click” as would be the case with browsing websites on a computer. Try to put the most popular and intuitive gestures in areas where users might expect them.

**Mobile app interactions matter**<br>
Read: [Microinteractions: The Secret of Great App Design](https://uxplanet.org/microinteractions-the-secret-to-great-app-design-4cfe70fbaccf){:target="_blank"}<br>

## Designing in Teams: Best Practices

{% include dosndonts.html introduction="1. Start every project with a brainstorming session." dos="
Debate and encourage wild ideas.
| Capture the ideas in a tool available for the whole group
| Number your ideas and go for quantity.
| Having a non-designer present during brainstorming brings diversity to the table.
" donts="
Do not criticize. Suspend any judgment until the end of the session.
"%}

{% include dosndonts.html introduction="2. Be sure to know your responsibilities and the overall team hierarchy." dos="
Make sure you clearly understand your role and the tasks you’re responsible for.
| When responsible for task distribution, be sure to balance skill sets and eliminate gaps
" donts="
Don’t forget about the project timeline and task deadlines.
"%}

{% include dosndonts.html introduction="3. When a design conflict emerges, bring the discussion back to the business objectives." dos="
When a conflict arises, collect all arguments from the team and choose the solution that serves your product’s business objectives better.
| Support your ideas with real-life examples and surveys.
" donts="
Don’t let aesthetics or personal preferences be your primary guide when searching for solutions.
| Do not try to reinvent the wheel: always make sure that your problem hasn’t already been solved by someone else.
| Don’t forget about the project timeline and task deadlines.
"%}

{% include dosndonts.html introduction="4. Be a team player and work to deliver the business objectives." dos="
Be responsive and helpful: if a team member asks you for urgent feedback, give it a high priority.
| Solve conflicts and misunderstandings within the team quickly: personal conflicts tend to escalate.
" donts="
Don’t take credit for the final design on your own.
| Don’t get too attached to your designs – your teammates’ solutions might be better than yours.
"%}

{% include dosndonts.html introduction="5. Prepare your files properly." dos="
Use consistent naming conventions; standardize the folder naming within your design software. Tools as Sketch, Adobe XD, or Invision Studio work best when all layers have proper naming and a consistent hierarchy.
| Use shared text styles and shared colors wherever possible.
| Create symbols and instances for recurrent patterns.
| Try to split your designs using artboards or pages.
" donts="
Don’t scatter files around: use one location for all the project’s assets – ideally a shared folder.
| Be on the lookout for bad layer or file naming.
| Don’t leave your layers ungrouped and unnamed: your team member might need to pick up from your file.
"%}

{% include dosndonts.html introduction="6. Give feedback and be open to feedback." dos="
Ask your team for feedback on every step. Have regular design reviews.
| Before presenting your work to the client, be sure to get feedback from the whole design team via a messaging app or in person.
" donts="
Don’t be stubborn and accept constructive criticism – you won’t grow without feedback.
"%}

{% include dosndonts.html introduction="7. Presenting and defending your ideas." dos="
Knowing why your design works is the key to explaining and defending it well.
| Do research on the ideas you try to convince the client to.
| Know the numbers behind your solutions.
" donts="
Don’t use jargon when presenting your work – the client doesn’t have to know what persona or above-the-fold mean.
"%}

{% include dosndonts.html introduction="8. Embrace the culture of communication." dos="
Communicate clearly, early and often.
| It’s a good idea to have a live call with the client when presenting the designs for the first time – this way you will have an opportunity to answer all questions and avoid misunderstandings.
" donts="
Don’t be afraid to ask – remember that there are no stupid questions.
| Don’t assume your client knows how to use collaboration tools.
| Don’t leave designs of complicated processes without any comments.
"%}

## Nice-to-haves when designing

### Prepare interactive designs
If there is enough time, try to search for ready transitions between the elements of your designed interface. This will greatly enhance the experience of users, as animations in your project can do magic. To prepare such interactions, you can use:
1. **Principle.** Use _Principle_ when you need to animate interface elements, especially in a multi-screen project; the built-in transitions and element-based animations will help create quick and easily clickable prototypes. _Principle_ should be your go-to tool if:
  - you need to build a quick prototype to check if a UI solution works;
  - you want to make sure the developer knows how to code the interaction;
  - you want to enrich the experience by creating meaningful animations;
  - you want to showcase your design on social media.
2. **Adobe After Effects.** _AE_ is a true workhorse – it can do almost everything related to animation. While versatile and powerful, _After Effects_ could be better when it comes to working with Sketch files. _AE_ also won’t allow you to test your interactions on a prototype. _After Effects_ is your go-to tool if:
  - you need custom transitions or animation effects;
  - you need to use perspective or other video effects;
  - you want to animate icons and illustrations.

### Craft your own icons
If there is enough time, you can create your own icon set. We use _Nucleo_ for our designs, but creating your own icons will add a more individual feeling to the application.

## Resources

### Icons
- [Nucleo](https://nucleoapp.com/){:target="_blank"}, [FlatIcon](https://www.flaticon.com/){:target="_blank"}, [IconFinder](https://www.iconfinder.com/){:target="_blank"}

### Stock Images
- Paid: [iStockPhoto](http://www.istockphoto.com/){:target="_blank"}, [ShutterStock](https://www.shutterstock.com/){:target="_blank"}, [GettyImages](http://www.gettyimages.com/){:target="_blank"}
- Free: [Aggregator for all top free stocks](http://allthefreestock.com/){:target="_blank"}

### Fonts
- [Google Fonts](https://fonts.google.com/){:target="_blank"}, [Adobe Typekit](https://typekit.com/fonts){:target="_blank"}, [Font Squirrel](https://www.fontsquirrel.com/){:target="_blank"}, [MyFonts](https://www.myfonts.com/){:target="_blank"}, [DaFont](http://www.dafont.com/){:target="_blank"}

### Sketch – good practices
- [General Sketch good practices](https://www.uxpin.com/studio/blog/10-best-practices-sketch/){:target="_blank"}, [Symbols in Sketch](https://www.uxpin.com/studio/blog/10-best-practices-sketch/){:target="_blank"}

## Questions your client may ask

{% include qa.html question="Why is designing in teams better?" answer="You get a broader skillset and the team’s collective experience (complementary teams have members with unique skills such as UX, visual design, or illustration). Problems are solved more efficiently because team members instantly verify each other’s incorrect assumptions and bad solutions. The work efficiency also increases, because tasks are distributed in a smart way (certain designers work faster on certain tasks). The chances of the product’s success increase, because teams offer more idea-creation power and instant second opinion with full-context feedback." %}

{% include qa.html question="What’s the difference between a design and a wireframe?" answer="A wireframe is a basic visual guide that serves as a blueprint that defines each project’s structure, content, and functionality. By using very simple elements without paying attention to visuals, we can focus on finding the best user experience solutions and creating iterations faster and more cost-efficiently." %}

{% include qa.html question="Why do I have to pay for fonts?" answer="Paid fonts are usually of higher quality and contain a broader range of styles and weights (which will give the designers more freedom in hierarchy design), additional glyphs and ligatures, and a decent kerning table. A paid font also helps to build a unique visual voice by making the product easier to stand out from the crowd. This seems to be of small importance, but keep in mind that web and mobile products are based on typography in 95%. By using a quality font, you make sure your product design will also be of the highest possible quality." %}

{% include qa.html question="Why do I need to have custom icons, why can’t we just buy some?" answer="Icons and illustrations are not just about pretty pictures – they convey a message. By using custom-made images, you can be sure that they illustrate the concept accurately. Just as brands use corporate colors and fonts, a unique visual style can help to differentiate you from your competition and will speak a consistent visual language." %}

{% include qa.html question="I don’t work in Sketch, how can I see the designs?" answer="We can provide you with many different file types: flattened PNGs, multi-layer PDFs, or comprehensive documentation in an HTML file with all the necessary information for your developer. For feedback, we use InVision, which is a browser-based prototyping tool with conversation-like commenting." %}

{% include qa.html question="Where can I find some inspiration?" answer="The best sources of inspiration would be _Behance_ (behance.net) and _Dribbble_ (dribbble.com). " %}

{% include qa.html question="What is a style guide and why do I need one?" answer="A style guide is a type of template that contains colors, fonts and commonly used interface elements, which will standardize the look and feel of the whole product. It helps to keep a consistent visual style across all screens and devices and during the whole design process. It is especially useful on multi-designer projects, where every team member is responsible for a different part of the product." %}

{% include qa.html question="Why do you want to know the business model?" answer="A style guide is a type of template that contains colors, fonts, and commonly used interface elements, which will standardize the look and feel of the whole product. It helps to keep a consistent visual style across all screens and devices and during the whole design process. It is especially useful in multi-designer projects, where every team member is responsible for a different part of the product." %}

{% include qa.html question="What kind of feedback would you like me to give?" answer="Designers always try to deliver solutions that serve both the user and the business itself – you can try to check if the designs serve the business objectives and fit the industry. Remember that the aesthetics are often a matter of personal taste, and your esthetics might not converge on the universal esthetics for your product’s potential users." %}

**Questions to ask yourself at this stage**
- Do I have a moodboard?
- Do I have a style guide?
- Have I designed for all target devices and design states?
- Have I collected feedback from client and the team?

## Desired outcomes of this stage
- Moodboard (example [here](https://netguru.invisionapp.com/boards/D834FYVZBKNWP){:target="_blank"} and [here](https://netguru.invisionapp.com/boards/F736L21WBKCPU){:target="_blank"})
- Style guide (check an example of [Taqsim Style Guide](https://netguru.invisionapp.com/share/7UAMU5OB3#/screens){:target="_blank"} and short [article about color](https://projects.invisionapp.com/share/P79V1I7NK#/screens/212581073){:target="_blank"})
- Designs ([check an example here](https://netguru.invisionapp.com/share/ZD9VDND6E#/screens/212677302){:target="_blank"})

## Additional reading
- [Psychology behind Product Design – staying efficient in the age of distraction](https://www.netguru.co/blog/psychology-behind-the-product-design-staying-efficient-in-the-age-of-distractions){:target="_blank"}
- [How to make Sketch even better](https://www.netguru.co/blog/how-to-make-sketch-even-better){:target="_blank"}
- [How NOT To Design An Interface For Your Mobile App](https://www.netguru.co/blog/how-not-to-design-an-interface-for-your-mobile-app){:target="_blank"}
- [We Give Meaning to Products – Design Flow at Netguru: the Approach](https://www.netguru.co/blog/design-flow-at-netguru-pt.-1){:target="_blank"}
- [Anticipatory Design, pt. 1](https://www.netguru.co/blog/anticipatory-design-part-1){:target="_blank"}
- [Anticipatory Design, pt. 2](https://www.netguru.co/blog/anticipatory-design-2){:target="_blank"}
- [The Nine States of Design](https://medium.com/swlh/the-nine-states-of-design-5bfe9b3d6d85#.hmieefed1){:target="_blank"}
- [Google’s 9 Principles of Material Design](https://blog.prototypr.io/googles-9-principles-of-material-design-fb3fef64dcf){:target="_blank"}
- [Misused mobile UX patterns](https://medium.com/@kollinz/misused-mobile-ux-patterns-84d2b6930570){:target="_blank"}
- [How to Design Native Mobile Apps](https://medium.com/@uxhow/how-to-design-native-mobile-apps-55d383fcb2b2){:target="_blank"}
- [Golden Rules of User Interface Design](https://uxplanet.org/golden-rules-of-user-interface-design-19282aeb06b){:target="_blank"}
- [Empty State: Mobile App “Nice-to-Have” Essential](https://uxplanet.org/empty-state-mobile-app-nice-to-have-essential-f11c29f01f3){:target="_blank"}
