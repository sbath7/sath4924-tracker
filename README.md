
# 'Touch Grass' - Tracking Application
[Insert in context, mock-up image of application]



## Overview
"Touch Grass" is a simple single-page application (SPA) that allows you to track the amount of time that you have spent in nature per week. It is built using basic HTML and JavaScript, and uses localStorage for data persistence. 



## Justification
### Chosen context
This app is designed for people who desire to reconnect with nature and improve their overall well-being.
### General purpose
Spending time in nature is essential for our physical health and cognitive function (Robbins, 2020). Exposure to nature has been linked to lowered blood pressure, enhanced immune system function, improved mood, increased self-esteem, and reduced stress and anxiety levels (Jimenez et. al, 2021). Spending two hours a week in nature is the threshold for these health benefits (White et. al, 2019), regardless of whether these two hours are spread out across the entire week (White et. al, 2019). Specifically, types of nature such as vegetation cover and bird communities, both of which are easily available in urban areas, have been linked to lower depression, anxiety and stress levels (Cox, et. al, 2017). 

However, rapid urbanisation coupled with an increase in technology-use and the duration of the average work day, has deprived us of nature. “Touch Grass” is an application that encourages playful exploration of nature. The app tracks users’ weekly time spent in nature, encouraging them to fulfil the baseline goal of two hours. This weekly goal can be customised, and daily reminders can be set to help users fulfil this. Furthermore, users can choose to record the specific types of nature that they encounter during a day. A playful homage to the app’s name, users can record what they touched, saw, smelled, and heard during the day. Additionally, they can also record subjective measures of well-being such as daily mood, self-esteem, stress levels and sleep quality. The goal is for users to observe the positive correlation between their exposure to nature and an overall improvement in their well-being.

With its simple directive of “Touch Grass”, the app hopes for users to integrate nature into their weekly routine. Its ultimate goal is for users to eventually uninstall the app, recognising the irony of it and more importantly, no longer having a need for it. By recording, first-hand, empirical evidence of its benefits, users will be motivated to seek nature themselves.

### Target Audience
The app targets young adults, particularly working professionals, as they spend extended periods of time indoors and using technology. It is for individuals who are interested in the benefits of nature and want to hold themselves more accountable. 
### Goals
1. Get users to reflect on the (lack of) time they spend in nature.
2. Help users increase the amount of time they spend in nature, at minimum achieving 2 hours per week.
3. Incentivise users to spend more time in nature by observing its positive correlation with an improvement in their well-being.  
4. Track users’ well-being over an extended period of time and display it in different, visually meaningful ways.
5. Help users take actionable steps towards having a healthier lifestyle, and overall, be a happier and more content individual.



## Features
- **Log 'Nature Time'** - there is a 'Log nature time' button which allows users to record how many hours/minutes they've spent in nature and during what times of the day (morning, evening, etc.)
- **Weekly Goal Display** - using the 'nature time' data, the app updates the weekly goal tracker, increasing the percentage accordingly. Throughout the week, it displays how close users are to reaching their goal.
- **Log Wellbeing Metrics** - there are four wellbeing metrics (mood, self-esteem, stress, and sleep) with corresponding buttons. These direct users to a modal where they can how they're feeling, how they slept, etc., each day and view this in reference to the amount of 'nature time' they had.
- **Delete buttons** - users can delete any 'nature time' session or wellbeing metric logged using the corresponding delete buttons.
- **Data Persistence** - the application uses localStorage to remember your nature time and wellbeing metrics, even if you refresh the page or close and reopen your browser.



## Instructions
### Setup
No setup is required.
### Usage
There are two options:
1. View the website online at the following URL: [link to github pages]
2. Open the index.html file through VS Code and Live Server to start using the application in your web browser.

Once the page is open, first click the 'Log nature time' to record data. Then, try using the '+' buttons next to each wellbeing metrics. Returning to the home page, click the corresponding delete buttons to reset individual features. 



## Configuration/Deployment



## Version Control
This project uses git and github for tracking changes and managing development. Please see the github repository here: [URL to github repo]



## Development Process
### Iteration #1 (Low-Fidelity Wireframes)
*key features, best practices

These were my initial, low-fidelity wireframes, submitted as part of DECO2017 A2. Annotations of features and design choices can be viewed in the image below.
![Wireframes of seven mobile screens annotated with blue and green text, and arrows](README_assets\iteration_1_mobile.png "Mobile Screens")
![Wireframes of three desktop screens annotated with blue text and arrows](README_assets\iteration_1_desktop.png "Desktop Screens")


*lessons learned
#### Considerations moving forwards
##### Marker's Feedback
##### Unimplemented User Feedback




### Iteration #2 (Mid-Fidelity Wireframes)
*key features, best practices
No changes were made to the desktop screens.
![Wireframes of eight mobile screens annotated with blue and orange text, and arrows](README_assets\iteration_2_mobile.png "Mobile Screens")
![Wireframes of seven mobile screens annotated with orange text and graphics, illustrating alternate user flows](README_assets\iteration_2_alt.png "Alternate User Flow Screens")

*lessons learned
#### Considerations moving forwards
##### Heuristic Evaluation
##### Responsive Design Research
##### Inspiration







### Iteration #3 (Mid-Fidelity Wireframes)
#### Altered Data Model

#### Considerations moving forwards
##### Usability Testing Feedback


### Branding/Moodboard


### Iteration #4 (Hi-Fidelity Mockup)


### Iteration #5 (Final Mockup)


## Limitations
The application uses localStorage for data persistence, which is  limited to the specific browser and device. If you open the application on a different device, you won't see the same 'nature time'/wellbeing data.

## Recommendations
- Could not implement the alternate monthly/yearly view screens due to time limitations. Implementing these in the future, would provide a beneficial overview for users. 


## Sources
### Design
### Research



----- README formatting tips: -----
*put blank lines before and after a heading*
## Heading level 2

### Heading level 3

#### Heading level 4

***
This is a paragraph.  
This is a line break (end a line with two or more spaces, then press return).

**bold text**

*italic text*

***bold and italic***
***


> blockquote

> blockquote
>
> with multiple paragraphs

> parent blockquote
>> nested blockquote
***


1. First item
2. Second item 
3. Third item

- First item
- Second item
- Third item
***


Code blocks are normally indented four spaces or one tab. When they’re in a list, indent them eight spaces or two tabs.


    Code block!



![Alt text for the image](/assets/images/tux.png "Optional Title")

[Duck Duck Go](https://duckduckgo.com)
