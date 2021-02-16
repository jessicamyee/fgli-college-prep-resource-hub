# FGLI-college-prep-resource-hub
Deployed Link: PENDING

## Project Description

The college preparation process can be daunting, especially if neither parents have attended college. This project, using React and Airtable, aims to provide first-generation, low-income (FGLI) high school students a hub of college prep resources — including but not limited to —  information on scholarships, summer program opportunites, etc. 

Visitors will be able to select resources based on specific categories. They will also be able to contribute to the hub by adding new resources, and updating/deleting existing ones.  

## Wireframes

![Homepage-Web](https://github.com/jessicamyee/fgli-college-prep-resource-hub/blob/main/assets/homepage-web.png)

<br />

![Homepage-Mobile](https://github.com/jessicamyee/fgli-college-prep-resource-hub/blob/main/assets/homepage-mobile.png)

<br />

![Category-Web](https://github.com/jessicamyee/fgli-college-prep-resource-hub/blob/main/assets/category-web.png)

<br />

![Category-Mobile-1](https://github.com/jessicamyee/fgli-college-prep-resource-hub/blob/main/assets/category-mobile-1.png)

<br />

![Category-Mobile-2](https://github.com/jessicamyee/fgli-college-prep-resource-hub/blob/main/assets/category-mobile-2.png)





## Component Hierarchy
PENDING -- Show your component hierarchy here! Use [this](https://cms-assets.tutsplus.com/uploads/users/1795/posts/30352/image/GettingStartedWithReduxTutorial-React-Component-Structure.png) as an example.

## API and Data Sample
```json
{
    "records": [
        {
            "id": "recuT7hsRpQ2BN5UD",
            "fields": {
                "title": "Khan Academy Study Guides",
                "category": "SAT/ACT",
                "description": "Free SAT study guides and sample exams with Khan Academy.",
                "link": "https://www.khanacademy.org/test-prep/sat"
            },
            "createdTime": "2021-02-15T19:18:47.000Z"
        },
        {
            "id": "recYlJsEEPS6zla9B",
            "fields": {
                "category": "SAT/ACT",
                "title": "ACT Test Prep by ACT",
                "description": "Free ACT test prep created by the ACT",
                "link": "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html"
            },
            "createdTime": "2021-02-15T19:18:47.000Z"
        },
        {
            "id": "recedKQnDHN9IwY7D",
            "fields": {
                "category": "SAT/ACT",
                "title": "SAT Question of the Day",
                "link": "https://www.number2.com/sat-question-of-the-day/",
                "description": "Practice by answering the SAT question of the day in various subjects."
            },
            "createdTime": "2021-02-15T19:18:47.000Z"
        }
    ],
    "offset": "recedKQnDHN9IwY7D"
}
```

### MVP/PostMVP

#### MVP 

- User to be able to view college prep resources by selecting the corresponding categories. 
- User can add new resources by entering the category-specific page and contributing there.
- User can edit existing resources.
- User can delete existing resources.
- Styling: clean, sleek, organized, and responsive


#### PostMVP  

- Utilize two data tables instead of one to accomodate for categories that would have different fields such as "deadline", "compensation", etc. 
- Implement user authorization and user authentication so that contributors can only update and delete their own contributions — and not all the resources.
- Utilize user authorization so that contributors can be screened first before making contributions (to avoid bots and internet trolls). 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|February 16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|February 16| Project Approval | Incomplete
|February 17| Core Application Structure (HTML, CSS, etc.) & Pseudocode | Incomplete
|February 18| Initial Clickable Model  | Incomplete
|February 19| MVP | Incomplete
|February 23| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| General: Set up React app and install relevant tools | H | 0.5hr|  |  |
| General: Clean up App.js and set up directory structure | H | 0.5hr|  |  |
| Airtable: Ensure all initial data is complete (4 resources per category) | H | 1hr|  |  |
| Airtable: Complete Airtable initial database and app integration | H | 1hr|  |  |
| Pseudocode: React functionality for all components | M | 2hrs |  |  |
| Code out primary structure of App.js (setting up Routes) | H | 1hr |  |  |
| Code out Nav.jsx, Footer,jsx, Home.jsx (for the Important Dates section) | H | 2.5hrs |  |  |
| GET request: React coding on Home.jsx, ResourceCategory.jsx, ResourceCategoryDetails.jsx | H | 3hrs|  |  |
| QA-ing and debugging for App.js and component files | H | 2hrs|  |  |
| POST request: Set up the form and React coding for the category pages | H | 2hrs|  |  |
| POST request: Implement a character limit for the Textarea  | M | 2hrs|  |  |
| QA-ing and debugging for POST request | H | 2hrs|  |  |
| UPDATE request: React coding for the category pages | H | 2hrs|  |  |
| QA-ing and debugging for UPDATE request | H | 2hrs|  |  |
| DELETE request: React coding for the category pages | H | 2hrs|  |  |
| QA-ing and debugging for DELETE request | H | 2hrs|  |  |
| Add conditional logic that disables update/delete for the first 2 resources in every category | H | 1hr|  |  |
| Text decoration: font style, font size, font colors | M | 3hrs|  |  |
| Using Flexbox/GRID Pt 1: Elements resizing and alignment | H | 2hrs|  |  |
| Using Flexbox/GRID Pt 2: Elements resizing and alignment | H | 2hrs|  |  |
| Implementing responsive design | H | 3hrs|  |  |
| Final webapp QA | H | 1hr|  |  |
| Total | H |38.5hrs |  |  |

## SWOT Analysis

### Strengths:
At this moment, I am proficient in CRUD and functional React. I also feel good about the planning and strategy of this project to steer me in the right direction.

### Weaknesses:
Based on my previous experience with P1, I spent much more time than I anticipated on the styling front. Since P1, I've found more resources to support me in styling, so I look forward to that part of the project.

### Opportunities:
I'm excited for the Post-MVP version of this app where I'll explore user authorization and authentication. This will prevent bots and trolls from sabotaging the primary purpose of this project.

### Threats:
I'm still a little shaky with class-based React. Especially given that we'll need to incorporate both class and functional React I may need to do a quick refresher on class class-based React.
