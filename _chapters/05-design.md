---
title: "Design"
chapter_number: "05"
---

# Design

## Introduction
**In this section, you will learn:**
- Where to look for inspiration
- How collect inspirations and prepare moodboards
- How to prepare style guides
- Specific design states and how to prepare one
- Tips for designing for a specific device
- Best practices for working in teams
- Where to find design resources
- Sketch tips

We design something to give form to a function – to solve a problem with a set of available resources. Good design is solving a problem so that it seems as if there had never been a problem in the first place. Well designed interfaces, communication processes, or objects shouldn’t require too much effort from their users. Good design often makes you think: Gosh, I could have done that myself!<br>
And yes, well-designed things are often a pleasure to look at or experience. In some cases, the form will precede the function.

**Stakeholders**
- Designer
- Client
- QA
- Developers
- PM

## Inspiration
**Find an accurate style for the project**<br>
Remember that the inspiration process is really important when you start designing a new project. The overall feeling of an application/website depends on which colors, fonts or photos you use. **Remember: Do not copy, just get inspired!**

You can look for inspiration here:
- [Awwwards](http://www.awwwards.com){:target="_blank"}
- [Dribbble](http://www.dribbble.com){:target="_blank"}
- [Behance](http://www.behance.com){:target="_blank"}
- [Designspiration](http://www.designspiration.net){:target="_blank"}
- [Pinterest](http://www.pinterest.com){:target="_blank"}

### Preparing moodboards
This step is really important for you and your client. There are situations when you finish your design, and the client is really happy – but this is not always the case. We recommend that you prepare a board with a lot of photos and pictures that will show your client what you would like to do with the future app, what “feelings” your designs will evoke, and finally, what the client can expect. Thanks to this approach you will increase the chances that client likes your solutions, and you will show that you care about the client’s feedback. **Approximate time: 4h.** For an example of a moodboard visit [this link](https://netguru.invisionapp.com/boards/3M37AJO452DFW/){:target="_blank"}.

**How to prepare a moodboard?**<br>
Use Boards by InVision for the following reasons:
- Flexibility
- Predefined layouts
- Option to add images, fonts and attachments

## Style guide
It’s good to start creating a style guide right after the research stage. The initial version should at least contain the colors and typography. During the visual design phase, you should update your style guide to a full version.

**What should a good style guide contain?**
- **Color** (main colors and shade variations for each of them)<br>
Useful tools:  [Coolors](https://coolors.co/app){:target="_blank"}, [Color Adobe](https://color.adobe.com/explore/?filter=most-popular&time=all){:target="_blank"}
- **Typography** (font family and type scale)<br>
Limit the number of typefaces and sizes you use in order to keep your designs simple. As a general rule of thumb, start with two fonts at most – one for your headers, and another one for your bodies. Most of the time, you won’t need any more than that.<br>
We highly recommend using free fonts. If you want to use a paid font, check the licence carefully. If we use paid fonts, we charge clients. We can buy fonts for them and bill them – make sure the client agrees before that happens.<br>
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

Maybe it’s the first time a user sees view, interface element or status. Maybe it’s not activated yet. Essentially, the component exists but hasn’t started.

**2. Loading**

The dreaded state. In a perfect world, no one would ever see this. Alas, here we find ourselves. There are plenty of ways to keep your loading state subtle and unobtrusive.

**3. None**

Your component has initialized, but it’s empty. No data. No Items. Now may be a good time to get the user to act (“Do this!”), or to reward them (“Good job, everything has been taken care of”).

**4. One**

You have some data. On an input, this may be after the first keystroke. In a list, it might be when you have one item (or one left).

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

These states will recur based on the page, user interaction, updated data, and pretty much any change to your application’s state. By thoughtfully designing for these changes, you can create a polished experience for users no matter which situation they find themselves in.

## Designing specifics for mobile native apps
If you are only starting to design native apps, the best thing is to read the official guidelines for the Android (Material Design) and for iOS (Human Interface Guidelines) operation systems.

**Android devices**
[Material Design Guidelines](https://material.io/guidelines/){:target="_blank"}

**Apple’s iPhones**
[Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/){:target="_blank"}

### Designing for gestures in general
Use [the most popular gestures](https://blogs.adobe.com/creativecloud/in-app-gestures-and-mobile-app-user-experience/){:target="_blank"} to make application even more interactive. Remember that while using your phone, there is no “right click” as is the case with browsing websites on a computer. Try to put the most popular and intuitive finger gestures in areas where users might expect them.

**Mobile app Interactions matters**<br>
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
When a conflict arises, gather all arguments from the team and choose the solution which serves your product’s business objectives better.
| Support your ideas with real-life examples and surveys.
" donts="
Don’t let aesthetics or personal preferences be your primary guide when on search for solutions.
| Do not try to reinvent the wheel: always make sure that your problem hasn’t already been solved by someone else.
| Don’t forget about the project timeline and task deadlines.
"%}

{% include dosndonts.html introduction="4. Be a team player and work to deliver the business objectives." dos="
Be responsive and helpful: if a team member asks you for urgent feedback, give it a high priority.
| Solve conflicts and misunderstandings within the team quickly: personal conflicts have a tendency to escalate.
" donts="
Don’t take credit for the final design on your own.
| Don’t get too attached to your designs – your teammates’ solutions might be better than yours.
"%}

{% include dosndonts.html introduction="5. Prepare your files properly." dos="
Use consistent naming conventions; standardize the folder naming within Sketch and Photoshop.
| Use shared text styles and shared colors.
| Create symbols in Sketch and Smart Objects in Photoshop for recurrent patterns.
| Use artboards and Pages in Sketch.
" donts="
Don’t scatter around files: use one location for all the project’s assets – ideally a shared folder.
| Be on the lookout for bad layer or file naming.
| Don’t leave your layers ungrouped and unnamed: your team member might need to pick up from your file.
"%}

{% include dosndonts.html introduction="6. Give feedback and be open to feedback." dos="
Ask your team for feedback on every step; have regular design reviews.
| Before presenting your work to the client, be sure to get feedback from the whole design team on communicator’s chanel / in person.
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
If there is enough time, try to search for ready transitions between the elements of your designed interface. This will greatly enhance the experience of users, as animations in your project really do magic. To prepare such interactions, you can use:
1. **Principle.** Use Principle when you need to animate interface elements, especially in a multi-screen project; the build-in transitions and element-based animations help to create quick and easily clickable prototypes. Principle is your go-to tool if:
  - you need to build a quick prototype to check if a UI solution works;
  - you want to make sure the developer knows how to code the interaction;
  - you want to enrich the experience by creating meaningful animations;
  - you want to showcase your design on social media.
2. **Adobe After Effects.** AE is a true workhorse – it can do almost everything related to animation. While versatile and powerful, After Effects could be better when it comes to working with Sketch files. AE also won’t allow you to test your interactions on a prototype. After Effects is your go-to tool if:
  - you need custom transitions or animation effects;
  - you need to use perspective or other video effects;
  - you want to animate icons and illustrations.

### Craft your own icons
If there is enough time, you can create your own icon set. We use Nucleo for our designs, but creating your own icons will add a more individual feeling to application.

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

## Q&A

**Questions your client may ask**

{% include qa.html question="Why is designing in teams better?" answer="TYou get a broader skillset & the team’s collective experience (complementary teams have members with unique skills such as UX, visual design, or illustration). Problems are solved more efficiently, because team members instantly verify each other’s incorrect assumptions and bad solutions. The work efficiency also increases, because tasks are distributed in a smart way (certain designers work faster on certain tasks). The chances of the product’s success increase, because teams offer more idea-creation power and instant second opinion with full-context feedback." %}

{% include qa.html question="What’s the difference between a design and a wireframe?" answer="A wireframe is a basic visual guide that serves as a blueprint that defines each project’s structure, content, and functionality. By using very simple elements without paying attention to visuals, we can focus on finding the best user experience solutions, creating iterations faster and more cost-efficiently." %}

{% include qa.html question="Why do I have to pay for fonts?" answer="Paid fonts are usually of higher quality and contain a broader range of styles and weights (giving designers more freedom in hierarchy design), additional glyphs and ligatures, and a decent kerning table. A paid font also helps to build a more unique visual voice by making the product easier to stand out from the crowd. This seems to be of small importance, but keep in mind that web and mobile products are in 95% based on typography. By using a quality font you make sure your product design will also be of the highest possible quality." %}

{% include qa.html question="Why do I have to have custom icons, why can’t we just buy some?" answer="Icons and illustrations are not just about pretty pictures – they convey a message. By using custom-made images, you can be sure that they illustrate the concept accurately. Just like brands use corporate colors and fonts, a unique visual style can help to differentiate you from your competition and speak a consistent visual language." %}

{% include qa.html question="I don’t work in Sketch, how can I see the designs?" answer="We can provide you with a number of different file types: flattened PNGs, multi-layer PDFs, or advanced documentation in a HTML file with all necessary information for your developer. For feedback, we use InVision, which is a browser-based prototyping tool with conversation-like commenting." %}

{% include qa.html question="Where can I find some inspiration?" answer="The best sources of inspiration would be Behance (behance.net) and Dribbble (dribbble.com). " %}

{% include qa.html question="What is a style guide and why do I need one?" answer="This will allow us some amount of lorem ipsum dolor sit amet conscetur blah blah" %}

{% include qa.html question="Why do you want to know the business model?" answer="A style guide is a type of template that contains colors, fonts and commonly used interface elements, which will standardize the look and feel of the whole product. It helps to keep a consistent visual style across all screens and devices and during the whole design process. It is especially useful on multi-designer projects, where every team member is responsible for a different part of the product." %}

{% include qa.html question="What kind of feedback you want me to give?" answer="Designers always try to deliver solutions that serve both the user and the business itself – you can try to check if the designs serve the business objectives and fit the industry. Remember that the esthetics are often a matter of personal taste, and your’s might not be the most universal one for your product’s potential users." %}

**Questions to ask yourself at this stage**
- Do I have a moodboard?
- Do I have a style guide?
- Have I designed for all target devices and design states?
- Have I gathered feedback from client and the team?

**Desired outcomes of this stage:**
- Moodboard (example [here](https://netguru.invisionapp.com/boards/D834FYVZBKNWP){:target="_blank"} and [here](https://netguru.invisionapp.com/boards/F736L21WBKCPU){:target="_blank"})
- Style guide ([external example](https://projects.invisionapp.com/share/P79V1I7NK#/screens/212581073){:target="_blank"}, [internal example](https://netguru.invisionapp.com/share/7UAMU5OB3#/screens){:target="_blank"})
Designs ([example here](https://netguru.invisionapp.com/share/ZD9VDND6E#/screens/212677302){:target="_blank"})

**Additional reading**
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