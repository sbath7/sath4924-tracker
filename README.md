
# 'Touch Grass' - Tracking Application

<br>

## Overview
"Touch Grass" is a simple single-page application (SPA) that allows you to track the amount of time that you've spent in nature, per week. It's built using basic HTML and JavaScript, and uses localStorage for data persistence.

<br>
<br>

## Justification
### General purpose
Spending time in nature is essential for our physical health and cognitive function (Robbins, 2020). Exposure to nature has been linked to lowered blood pressure, enhanced immune system function, improved mood, increased self-esteem, and reduced stress and anxiety levels (Jimenez et. al, 2021). Spending two hours a week in nature is the threshold for these health benefits (White et. al, 2019), regardless of whether these two hours are spread out across the entire week (White et. al, 2019). Specifically, types of nature such as vegetation cover and bird communities, both of which are easily available in urban areas, have been linked to lower depression, anxiety and stress levels (Cox, et. al, 2017). 

However, rapid urbanisation coupled with an increase in technology-use and the duration of the average work day, has deprived us of nature. “Touch Grass” is an application that encourages playful exploration of nature. The app tracks users’ weekly time spent in nature, encouraging them to fulfil the baseline goal of two hours. Users can also record subjective measures of well-being such as daily mood, self-esteem, stress levels and sleep quality. The goal is for users to observe the positive correlation between their exposure to nature and an overall improvement in their well-being.

With its simple directive of “Touch Grass”, the app hopes for users to integrate nature into their weekly routine. Its ultimate goal is for users to eventually uninstall the app, recognising the irony of it and more importantly, no longer having a need for it. By recording, first-hand, empirical evidence of its benefits, users will be motivated to seek nature themselves.

<br>

### Target Audience
The app targets young adults, particularly working professionals, as they spend extended periods of time indoors and using technology. It is for individuals who are interested in the benefits of nature and want to improve their overall wellbeing.

<br>

### Goals

1. Get users to reflect on the (lack of) time they spend in nature.
2. Help users increase the amount of time they spend in nature, at minimum achieving 2 hours per week.
3. Incentivise users to spend more time in nature by observing its positive correlation with an improvement in their well-being.  
4. Track users’ well-being over an extended period of time and display it in different, visually meaningful ways.
5. Help users take actionable steps towards having a healthier lifestyle, and overall, be a happier and more content individual.

<br>
<br>

## Features
- **Log 'Nature Time'** - the 'log nature time' button allows users to record how many hours/minutes they've spent in nature that day and during what time of day (morning, evening, etc.)
- **Weekly Goal Display** - using the 'nature time' data, the app updates the weekly goal tracker, increasing the percentage accordingly. Throughout the week, it displays how close users are to reaching their goal.
- **Log Wellbeing Metrics** - users can log four wellbeing metrics (mood, self-esteem, stress, and sleep). Their corresponding buttons direct users to a modal where they record can how they're feeling today, etc.
- **Delete buttons** - users can delete 'nature time' sessions or any wellbeing metric logged, using their corresponding delete buttons.
- **Data Persistence** - the application uses localStorage to remember your 'nature time' and wellbeing metrics, even if you refresh the page or close and reopen your browser.

<br>
<br>

## Instructions
### Setup
No setup is required.

<br>

### Usage
There are two options:
1. View the website online at the following URL: [link to github pages]
2. Open the index.html file through VS Code and Live Server to use the application in your web browser.

Once the page is open, first click the 'log nature time' button to record data. Then, try logging your wellbeing using the '+' buttons under each wellbeing metric.

<br>
<br>

## Version Control
This project uses git and github for tracking changes and managing development. Please see the github repository here: [URL to github repo]

<br>
<br>

## Development Process
### Iteration #1 (Low-Fidelity Wireframes)
These are the initial low-fidelity wireframes (submitted in DECO2017 A2). At this stage, the application had five key features:
- Logging 'nature sessions'
- Logging wellbeing metrics
- Alternate views (monthly/yearly summary)
- Logging natural features (that the user encounters during their 'nature time' that day)
- 'Weekly Garden' that displays images of all of the natural features the user has logged that week

All of the logging features were displayed in a carousel pattern, using progressive disclosure to break down the process and guide users through it. There was also a 'quick-log' system which allowed users to efficiently log that they had 'touched grass' that day without having to go through the entire carousel logging process. This accommodated the busy schedules of students/working professionals. 

The remaining features and design choices are annotated below:
![Wireframes of seven mobile screens annotated with blue and green text, and arrows](README_assets\iteration_1_mobile.png "Mobile Screens")
![Wireframes of three desktop screens annotated with blue text and arrows](README_assets\iteration_1_desktop.png "Desktop Screens")

#### Considerations moving forwards
The following tutor and user feedback was taken into consideration in my next iteration. 
##### Tutor's Feedback from A2
> - Your annotations could be improved through **greater focus on design justifications and supporting design principles**. 
> - Consider adjusting the layout of your user flow to **illustrate all flows the user might decide to follow e.g. exiting out of a screen early or skipping a step**.

##### User Feedback
> I expected the app to be more playful and minimalist because of its funny/colloquial name. Like, a simple screen that asks you: "Have you touched grass today?"

<br>

### Iteration #2 (Mid-Fidelity Wireframes)
These are the initial mid-fidelity wireframes. In terms of design choices, only a few changes were made from the previous iteration. This iteration was dedicated to simply implementing the immediate feedback I received by **elaborating on design justifications/principles**, **displaying alternate user flows** and **attempting to adopt a more playful visual identity**. The latter was done so through the addition of a playful opening screen. 

Changes/new annotations are marked in orange below. 
![Wireframes of eight mobile screens annotated with blue and orange text, and arrows](README_assets\iteration_2_mobile.png "Mobile Screens")
![Wireframes of seven mobile screens annotated with orange text and graphics, illustrating alternate user flows](README_assets\iteration_2_alt.png "Alternate User Flow Screens")

#### Considerations moving forwards
I conducted a heuristic evaluation of iteration #2, and identified various other general issues within the design. I also sought inspiration from existing tracking applications, aiming to redesign numerous features. Through this process, I identified the following areas to address in the next iteration:

##### Heuristic Evaluation
Heuristic violations are colour coded by severity.

![a table displaying a heuristic evaluation with violations colour coded by severity in green, orange and red](README_assets\heuristic_pg_1.png "Heuristic Evaluation, Page 1")

<br>

![the second page of the heuristic evaluation table, with violations similarly colour-coded](README_assets\heuristic_pg_2.png "Heuristic Evaluation, Page 2")

<br>

##### Other Content & Design Considerations
Design considerations are colour coded by priority.
![A list of various design issues/considerations sorted by priority in terms of how important it is to implement them](README_assets\design_considerations.png "Other Design Considerations")

<br>

##### Inspiration
![Various tracking application mock-ups with annotations around them detailing features that could be taken inspiration from](README_assets\design_inspiration.png "Inspiration")

<br>

### Iteration #3 (Mid-Fidelity Wireframes)
These are the final mid-fidelity wireframes. All of the issues/suggestions listed above were addressed in this iteration.

Additional changes are annotated in the images below:
![Wireframes of 15 mobile screens annotated with blue and orange text, and arrows](README_assets\iteration_3_mobile_pg_1.png "Iteration #3, Mobile, Page 1")
![Wireframes of 10 mobile screens annotated with limited blue and orange text, and arrows](README_assets\iteration_3_mobile_pg_2.png "Iteration #3, Mobile, Page 2")
![Wireframes of 7 mobile screens with 7 correspondingn desktop screens illustrating responsive design considerations](README_assets\iteration_3_desktop.png "Iteration #3, Desktop")


#### Altered Data Model
The data model was also updated in this iteration as the 'natural features' object was removed and the user input for the wellbeing metrics was changed to 'range'.

Changes are marked below in orange.
![Green colour-coded table outlining the "natureSession" property](README_assets\data_model_pg_1.png "Updated Data Model, Page 1")
![Blue colour-coded table outlining the "wellbeing" property](README_assets\data_model_pg_2.png "Updated Data Model, Page 2")
![Greyed-out table with all of the text crossed out](README_assets\data_model_pg_3.png "Updated Data Model, Page 3")


#### Considerations moving forwards
##### Usability Testing Feedback
User testing revealed that the app was *"self-explanatory"* and *"easy to navigate"*. However, the user had difficulty exiting the 'log nature time' and wellbeing metrics modals, particularly in the desktop screens. They thought that the only way to exit the screen was to log data first as the singular 'Done' button on the page implied that they had enter input. Thus, an "X" button will be added to provide clearer navigation to users who wish exit the screen without logging anything.

Problematic screens:
![Wireframe of a singular desktop screen, prompting users to log their 'nature time', with a 'Done' button at the bottom](README_assets\nature_time_issue.png "Log nature time")
![Wireframe of a singular desktop screen, prompting users to log their 'self-esteem', with a 'Done' button at the bottom](README_assets\wellbeing_metric_issue.png "Log mood")

<br>

### Visual Identity - Experimentation 
To develop the app's visual identity, I began by experimenting with various colours and illustrations that I liked and thought may match the brand's identity. 

![A green-yellow and a green-blue UI colour palette with corresponding components and illustrations](README_assets\branding_experimentation.png "Branding - Experimentation")

<br>

### Iteration #4 (Hi-Fidelity Mockup)
After modifying the visual identity, I developed the initial high-fidelity mock-up. The main change from Iteration #3 was that the "Alternate Views" screens have been omitted due to time constraints.

![A hi-fidelity mockup of mobile and app screens with green boxes and black and white illustrations](README_assets\mockup_iteration_1_pg_1.png "Hi-Fidelity Mockup, Page 1")
![Another hi-fidelity mockup of mobile and app screens with green boxes and black and white illustrations](README_assets\mockup_iteration_1_pg_2.png "Hi-Fidelity Mockup, Page 2")

#### Considerations moving forwards
##### Self-evaluation
- I forgot to implement the usability testing feedback from earlier (add an "X" button in the logging modals). 
- I am happy with the app's visual identity, however, the nature illustrations on the home page are too jarring and don't match the rest of the application:

![Mockup of a desktop screen featuring a cat frolicking in the grass.](README_assets\jarring-illustration.png "Jarring Illustration")

- The contrast for the modal navigation buttons is slightly low. Although visible, the chevrons may be difficult to see for users with visual impairment:

![Mockup of a desktop screen with a modal prompting users to log their mood.](README_assets\low-contrast.png "Low Contrast")

<br>

### Iteration #5 (Final Mockup)
This is the final mockup. I implemented all considerations listed above by:
- adding an "X" button to the logging screens
- changing the hero illustration to a black and white nature doodle that matches the rest of the application
- increasing the blur behind the modal to make the chevrons stand out more

![Hi-fidelity mockups of a tracking application with corresponding mobile and desktop screens displayed next to each other.](README_assets\final_mockup_pg_1.png "Final Mockup, Page 1")
![Hi-fidelity mockups of a tracking application with corresponding mobile and desktop screens displayed next to each other.](README_assets\final_mockup_pg_2.png "Final Mockup, Page 2")

<br>

### Final Visual Identity
![A grid of various application colours, fonts and components, annotated with orange text](README_assets\final_vis_identity.png "Final Visual Identity")

<br>
<br>

## Limitations
The application uses localStorage for data persistence, which is limited to a specific browser and device. If you open the application on a different device, you won't see the same 'nature time'/wellbeing data.

<br>
<br>

## Recommendations
I couldn't implement the alternate (monthly/yearly) view screens due to time constraints. Implementing these in the future, would enhance the user experience, providing a powerful overview.

<br>
<br>

## Sources
11 Powerful Examples of Responsive Web Design. (n.d.). Retrieved 14 June 2024, from https://www.invisionapp.com/inside-design/examples-responsive-web-design/

CF Plants and Flowers Font | CloutierFontes | FontSpace. (n.d.). Retrieved 14 June 2024, from https://www.fontspace.com/cf-plants-and-flowers-font-f17467

Kuker house, Ognyan Zahariev. (2022, August 30). ArtStation. https://www.artstation.com/artwork/VyqYvX

Kuker house—Night relight, Ognyan Zahariev. (2022, September 15). ArtStation. https://www.artstation.com/artwork/g81YPE

Open Peeps, Hand-Drawn Illustration Library. (n.d.). Retrieved 14 June 2024, from https://www.openpeeps.com/

Premium Vector | Hand drawn wild grass and flowers black and white. (n.d.). Retrieved 14 June 2024, from https://www.freepik.com/premium-vector/hand-drawn-wild-grass-flowers-black-white_38648816.htm