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
