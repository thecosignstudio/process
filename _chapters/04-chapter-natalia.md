---
title: "Testing"
chapter_number: "04"
---

# Introduction

**In this section, you will learn:**
- When to test wireframes or designs.
- What tests to use in specific situations.
- Tips for testing designs
- Questions most frequently asked by clients.cc

From Oxford English Dictionary:
{% include quote.html text="Test (v.): take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice." %}

You can test just about anything in a digital product: design solutions, code, performance, forms, buttons, etc. In this article, we will focus on design only. We are working in the Agile Scrum methodology, in which **testing is part and parcel of every sprint**. That’s why each design team at Netguru includes a dedicated QA specialist.
Every iteration you make on your design should be tested. The major stages in the design process, which you can see below, should involve testing methods that are adequate to the project’s scope and the stage you are in.

## Benefits of testing
**For the client**
- Minimize risk of the product’s failure – when it’s in users’ hands, it must work as it was designed.
- Be more confident and calm on the product’s launch.
- Save money on fixing bugs and flaws after the product is launched.
- Save money on customer service; otherwise, users would ask for help after not being able to accomplish what they set out to do.
- Get to know your customers, their behavior, needs and preferences.

**For Designers**
- Even a team of skilled designers won’t spot all the points where real users may get stuck when using the product.
- People not involved in creating the product will give the most valuable feedback, because they will have a fresh view.
- Avoid the embarrassing moment when you have to admit to making mistake in front of the client.
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
**Goal**: Test the UX. Wireframes are focused on high level design decisions such as user experience, user flow, information architecture. So, before you go to the next stage, the visual design, you will need to test these elements. In small projects, you can test the UX and the UI at the same time in the next stage.
**Tools**: design bug bash, user testing within your organisation’s people, guerrilla usability testing

### Tests after design
**Participants**: PD, QA, users
**Goal**: Test the UI. Visual design is focused on more specific design solutions such as UI elements, colors, shapes, and interactions. Assuming you ran tests after the wireframing, you need to test these elements now.
**Tools**: design bug bash (link), user testing with Netguru people or outside testers, guerrilla usability testing

### After implementation
**Participants**: PD, QA, users
**Goal**: Analyse users’ behavior to make sure they use product the way it was designed and ife the client’s goals are met.
**Tools**: Heatmaps, A/B tests, user testing with Netguru people or outside testers, Analytics

## Tools and techniques for testing
**Feedback from team (at Netguru we use the Slack channel #tradeguru-design)**
- **Time:**<br>
15 min
- **When?**<br>
After wireframing and after design.
- **Why?**<br>
This is the very first step, and the easiest one you can take to validate your design at any stage by design teamembers.
- **How?**<br>
Just post your design as an InVision link, preferably with a question – what you need to have validated/tested or what would you like to get people’s opinion about.<br>
Deliverables: Others should leave comments on InVision.

**Design bug bash** – [blogpost](https://www.netguru.co/blog/tips-for-a-bountiful-bug-bash-netguru-qa-flow)
- **Time**<br>
Up to 1h
- **When?**<br>
After wireframing and after design.
- **Why?**<br>
As you progress with the design, it gets more and more complex, you lose your fresh view, and help from other people becomes necessary.
- **How?**<br>
Ask your QA to arrange a 30-60-min design bug bash that will include at least three QA specialists: the project’s QA specialist and two QA specialists not involved in project. It should also include a PD. Also nice to have: a PM, a front-end developer, other project team members.<br>
Your QA specialist will lead the bug bash. At the beginning, you can tell others what the project is about, and who typical users will be. Explain what tasks you want to have accomplished by participants but don’t explain any design solutions beforehand. Everyone should go through the whole prototype, performing tasks given by the PD individually.
Deliverables: Any bugs/doubts should be written down as InVision comments by their finder.

**Guerrilla Usability Testing** – [more info](https://userbrain.net/blog/7-step-guide-guerrilla-usability-testing-diy-usability-testing-method)
- **Time**<br>
Up to 2h
- **When?**<br>
After wireframing and after design.
- **Why?**<br>
This is the most casual version of user testing. The main goal of guerrilla testing is to find errors and fix them as quickly as possible. Guerilla testing is about finding and fixing the most severe problems, not agonizing over every possible obstacle a user might encounter.
- **How?**<br>
You will need 3-5 participants – they can be your colleagues, friends or family. Steps of the process:
1. Come up with a list of tasks.
2. Prioritize tasks and decide which to test.
3. Turn your tasks into scenarios.
4. Combine all scenarios.
5. Start guerrilla testing.
6. Capture guerrilla testing insights.
7. Fix your usability problems.
Deliverables: Write down the top 3 usability problems or capture the task completion in a table.
[See detailed instructions here](https://userbrain.net/blog/7-step-guide-guerrilla-usability-testing-diy-usability-testing-method).

**User testing: moderated** - [more info](https://www.uxpin.com/studio/blog/moderated-vs-unmoderated-usability-testing-better/)
- **Time**<br>
At least 3h
- **When?**
  - After design, after implementation
  - Incomplete or buggy interfaces — MVPs, early-stage prototypes, low fidelity prototypes, parts of the app that need a really direct and clear explanation
  - Very complex interfaces— To make app learning process shorter/smoother
  - Mature product — Product needs a test of really specific functionalities
  - Security concerns — If you’re testing a product with access to data that you don’t want public, a moderator will keep the user where they belong
  - Existing product that will be redesigned by Netguru
- **Why?**<br>
You need a solid and objective test of your design (it must be something that your internal team or design oriented bug bash can’t deliver) and of the existing product. The test should require a specific target/personas.
- **How?**
  - Use a specialized agency.
  - Personally: give user a task and assist him/her through the test. Ask questions, guide and explain if necessary.<br> Deliverables
   - Detailed report
   - Attachments (recordings, etc.)

**User testing: unmoderated** – [more info](https://www.uxpin.com/studio/blog/moderated-vs-unmoderated-usability-testing-better/)
- **Products:** [Userzoom](http://www.userzoom.com/remote-usability-testing/), [AppSee](https://www.appsee.com/features/user-recordings), [UserTesting](https://www.usertesting.com/plans)
- **Time**<br>
At least 3h
- **When?**
  - After design and after implementation.
  - MVPs — you need to test and validate early stage products.
  - Low budget — client has no budget for other kind of testing.
  - No time — No time to run a moderated user test. Unmoderated tests can be done virtually anywhere at any time, by anyone who meets your criteria.
  - Existing product that needs redesign.
- **Why?**<br>
You need a solid and objective test of your design (it must be something that your internal team or design oriented bug bash can’t deliver) and of the existing product. The test should require a specific target/personas.
- **How?**
  - Use third party tools.
  - Personally: give user a task and leave him/her alone while camera is recording.<br>
Deliverables: Video recording summarized in a report

**A/B testing**
- **Products:**<br>
[Qubit](http://www.qubit.com/solutions/ab-mv-testing), [VWO](https://vwo.com/), ruby gems: [Split](https://github.com/splitrb/split), [Vanity](http://vanity.labnotes.org/)
- **When?**<br>
After implementation.
- **Why?**<br>
A/B testing allows you to make more out of your existing traffic. While the cost of acquiring paid traffic can be substantial, the cost of increasing your conversions is minimal. The Return On Investment on A/B testing can be massive, because even small changes on a landing page or website can result in significant increases in generated leads, sales, and revenue (examples link & link).
**What Can You Test?**
  - Headings
  - Subheadings
  - Paragraph Text
  - Testimonials
  - Call to Action text
  - Call to Action Button
  - LinksImages
  - Content near the fold
  - Social proof
  - Media mentions
  - Awards and badges<br>
Advanced tests can include pricing structures, sales promotions, free trial lengths, navigation and UX experiences, free or paid delivery, and more.<br>
**Links:**
  - To read what A/B testing is, you should try these links [link](http://unbounce.com/landing-page-articles/what-is-ab-testing/), [link](https://vwo.com/ab-testing/) & [link](https://www.optimizely.com/ab-testing/).
  - Learn how to bust these 7 A/B testing myths by Kissmetrics [link](https://blog.kissmetrics.com/ab-testing-myths/).
  - The ultimate guide to A/B Testing by Smashing Magazine [link](https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/).
  - Learn about most important A/B Testing checklist by HubSpot [link](https://blog.hubspot.com/marketing/a-b-test-checklist#sm.00001z5neov22f9pvdk194oo5d7tq).                                                                                   
- **How?**<br>
A/B Testing Process<br>
The correct way to run an A/B testing experiment is to follow a scientific experimental process. It includes the following steps:
1. **Study your Website Data:** Use a website analytics tool such as Google Analytics and find the problem areas in your conversion funnel. For example, you can identify the bottleneck-pages with bad metrics.
2. **Observe User Behavior:** Utilize visitor behavior analysis tools and find what is stopping the visitors from converting. For example, “The CTA button is not prominent on the home page."
3. **Construct a Hypothesis:** Per the insights from visitor behavior analysis tools, build a hypothesis aimed at increasing conversions. For example, “increasing the size of the CTA button will make it more prominent and will increase conversions”.
4. **Test your Hypothesis:** Create a variation per your hypothesis and A/B test it against the original page. For example, “A/B test your original home page against a version that has a larger CTA button.” Calculate the test duration with respect to the number of your monthly visitors, current conversion rate, and expected change in the conversion rate.
5. **Analyze Test Data and Draw Conclusions:** Analyze the A/B test results and see which variation delivered the highest conversion. If there is a clear winner among the variations, go ahead with its implementation. If the test remains inconclusive, go back to step number three and rework your hypothesis.
6. **Report results to all concerned:** Let others in Marketing, IT, and UI/UX know of the test results and the insights generated.

**Heatmaps**
- **Products:**<br>
[Crazy egg](https://www.crazyegg.com/), [Hotjar](https://www.hotjar.com/)
- **When?**<br>
After implementation.
- **Why?**<br>
Heatmaps are great for analyzing the behavior of your visitors. They can lead to insights you couldn’t find using other methods, and, consequently, it can greatly increase your conversion rate.<br>
Rather than showing raw statistics, it works by using different colors to indicate such things as:
  - Mouse movement: where the mouse moved (by means of mouse-tracking).
  - Click tracking: where the actual click occurred.
  - Scroll tracking: how far down the page the visitor scrolled.
  - Eye tracking: where people are most likely to focus upon first viewing an image.<br>
What's more, a heatmap can be incredibly helpful in improving the clickability of your images.
It will let you know what people are looking at and what details they are missing. From there, you can adjust, remove, and add whatever you need to increase the effectiveness of each image used.<br>
Links:
  - Learn about 8 heatmap tests that reveal visitors’ behavior (by Hotjar) [here](https://www.hotjar.com/heatmaps).
  - Learn how to use heatmaps to increase conversions (by Dan Virgillito from AdEspresso) [here](https://adespresso.com/academy/blog/the-ultimate-guide-for-using-heat-maps-to-increase-conversions/).
  - Practical guide how to increase conversions by using heatmaps [link](https://vwo.com/blog/increase-conversions-using-heatmaps/) & [link](https://mouseflow.com/blog/2016/10/how-to-boost-your-conversion-rate-and-lower-your-bounce-rate-with-heatmaps/).
- **How?**<br>
You can use Hotjar to generate heatmaps of any page on your site, including password protected pages and dynamically generated pages.
Types of Heatmaps
  - [Click and Tap Heatmaps](https://docs.hotjar.com/docs/types-of-heatmaps#section-click-and-tap-heatmaps)
  - [Move Heatmaps](https://docs.hotjar.com/docs/types-of-heatmaps#section-move-heatmaps)
  - [Scroll Heatmaps](https://docs.hotjar.com/docs/types-of-heatmaps#section-scroll-heatmaps)<br>
Hotjar is a new powerful tool that reveals the online behavior and voice of your users. By combining both (A) Analysis and (B) Feedback tools, Hotjar gives you the ‘big picture’ of how to improve your site's user experience and performance (conversion rates).<br>
The Analysis tools allow you to measure and observe user behavior (what users do), while the Feedback tools allow you to hear what your users have to say (Voice of User/Customer).<br>
The whole process and installation is described [here](https://docs.hotjar.com/docs).<br>
Additional links: [Hotjar heatmaps](https://docs.hotjar.com/docs/how-do-hotjar-heatmaps-work)

**Analytics** – [more info](https://blog.kissmetrics.com/expert-google-analytics-reports/)
- **Product:**<br>
[Google Analytics](https://analytics.google.com), [Woopra](https://www.woopra.com/), [Intercom](https://www.intercom.com/)
- **When?**<br>
After implementation.
- **Why?**<br>
Analyze the traffic and users’ behavior on a website or mobile app. You can also measure the conversion rates by setting goals.
- **How?**<br>
Ask your developer to install GA.<br>
You will see many different statistics: live traffic, bounce rate, time spent on a page, how users found your page, and a lot more.<br>
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

**Beta testing** – [more info](https://www.playtestcloud.com/blog/testflight-alternatives-ios-android)
- **Products:**
<br>[Test flight](https://developer.apple.com/testflight/), [HockeyApp](https://hockeyapp.net/), [Google Play Beta Testing](https://play.google.com/apps/publish/signup/), [Fabric.io](https://get.fabric.io/)
- **When?**<br>
After implementationand before official launch.
- **Why?**<br>
You have your product ready and working, but before the official release, you should test it on a small sample to gather feedback and spot any remaining bugs.
- **How?**<br>
It’s mostly done by developers and is especially useful for mobile apps testing, but it can be applied to any digital product. You can take advantage of usage metrics that are available in tools such as HockeyApp, and users can give feedback directly in the app.The smart approach to selecting your audience is to use [focus groups](https://en.wikipedia.org/wiki/Focus_group), which work as small, representative, scaled-down groups of your future customer base.

## Tips for testing your designs
- It’s wise to build prototypes and test as early and as often as possible to fix the major issues before you even move the project to the next stage.
- You just need 3-5 people to spot the biggest usability issues.
- It’s often better to test the product with new participants without any knowledge about you and your product.
- Don’t try to capture your insights (write them down, talk to yourself, etc.) during the test with real users – it makes them nervous.
- You don’t want to bias your users during the test. You want to see how they figure out things for themselves, or how they don’t figure them out. In real life, you wouldn’t sit next to them while they would be using your product.

## Q&A
**Questions your client can ask**
{% include qa.html question="Why do I need testing?" answer="Above all, you need it to minimize the risk of exposing bugs to real users in real scenarios. Also, the iterative nature of the Agile Scrum methodology helps to improve the weak points of the product in every sprint. Testing will detect those weak points." %}
{% include qa.html question="Who’s paying for the test?" answer="The client pays for the tests, because they are part of the services we provide. Tests that take significant amount of time should be discussed, estimated, and accepted with the client." %}
{% include qa.html question="How long will the test take? WIll it affect the deadline and/or development?" answer="See estimated times in the Tools section. If affecting the course of the development is not the purpose of the test (e.g. Heatmaps), it shouldn't affect the deadline or the development schedule." %}
{% include qa.html question="Was the app tested after design? Can we start the implementation? How?" answer="Yes, to assure the highest quality of our work. Let’s just test after the design phase, and we will be ready for implementation." %}
{% include qa.html question="What kind of tests does Netguru provide by default to assure high quality?" answer="Every project needs different testing methods, so tests are tailored individually. Feedback from the team and a design bug bash are usually carried out in all projects." %}

**Questions to ask yourself at this stage**
- Did I collect feedback within the team?
- Is the InVision mockup clickable?
- Was a design bug-bash conducted?
- Were tests conducted after the wireframe phase?
- Was a test conducted after the visual design phase?
- After the implementation, were at least Google Analytics installed? (Y/N)

**Desired outcomes of this stage:**
1. Wireframes or designs tested using appropriate techniques.
2. Feedback gathered and implemented.

**Additional reading**

[How to Improve Your UI with Remote Usability Testing](https://www.netguru.co/blog/improve-ui-remote-usability-testing)
