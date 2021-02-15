# FGLI-college-prep-resource-hub
Deployed Link: PENDING

## Project Description

The college preparation process can be daunting, especially if neither parents have attended college. This project, using React and Airtable, aims to provide first-generation, low-income (FGLI) high school students a hub of college prep resources — including but not limited to —  information on scholarships, summer program opportunites, etc. 

Visitors will be able to select resources based on specific categories. They will also be able to contribute to the hub by adding new resources, and updating/deleting existing ones.  

## Wireframes

PENDING -- Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

## Component Hierarchy
PENDING -- Show your component hierarchy here! Use [this](https://cms-assets.tutsplus.com/uploads/users/1795/posts/30352/image/GettingStartedWithReduxTutorial-React-Component-Structure.png) as an example.

## API and Data Sample

PENDING -- Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```json
{
    "records": [
        {
            "id": "recONRzIUTuZ5lXaF",
            "fields": {
                "author": "Liz Yrineo",
                "setup": "Why did the tomato turn red?",
                "punchline": "Because it saw the salad dressing!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "rec3oYZ5Tp0AIDsKe",
            "fields": {
                "author": "Rachel Moskowitz",
                "setup": "What did the green grape say to the red grape?",
                "punchline": "Breathe, idiot, breathe!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "recA34tOaoE1IVeC1",
            "fields": {
                "author": "Gary Grant",
                "setup": "How do you make holy water?",
                "punchline": "You boil the hell out of it!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        }
    ],
    "offset": "recA34tOaoE1IVeC1"
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
| General: Setting up core files: HTML, CSS, and JS files | H | 0.5hr|  |  |
| HTML: Writing out the HTML semantics | H | 2hrs|  |  |
| Complete Airtable initial database and app integration | H | 2hrs|  |  |
| Pseudocode React functionality for homepage (App.js) and category page | H | 1hr |  |  |
| Code out primary structure of App.js | H | 1hr |  |  |
| Code out GET request - for App.js and relevant components | H | 2hrs|  |  |
| Code out the X-NUMBER components and link to App.js | H | 4hrs|  |  |
| Code out the routes so that resources can only be seen in specific category pages | H | 2hrs|  |  |
| QA-ing and debugging for App.js and component files | H | 3hrs|  |  |
| Code out POST Request for the category pages | H | 2hrs|  |  |
| QA-ing and debugging for POST request | H | 2hrs|  |  |
| Code out Update Request for the category pages | H | 2hrs|  |  |
| QA-ing and debugging for POST request | H | 2hrs|  |  |
| Code out DELETE Request for the category pages | H | 2hrs|  |  |
| QA-ing and debugging for POST request | H | 2hrs|  |  |
| Text decoration: font style, font size, font colors | M | 3hrs|  |  |
| Using Flexbox/GRID: Elements (image, boxes) resizing and alignment | H | 4hrs|  |  |
| Non-text element decoration (submit box, etc) | L | 4hrs|  |  |
| Implementing responsive design | H | 3hrs|  |  |
| Final webapp QA | H | 2hrs|  |  |
| Total | H | |  |  |

## SWOT Analysis

### Strengths:
At this moment, I am proficient in CRUD and functional React. I also feel good about the planning and strategy of this project to steer me in the right direction.

### Weaknesses:
Based on my previous experience with P1, I spent much more time than I anticipated on the styling front. Since P1, I've found more resources to support me in styling, so I look forward to that part of the project.

### Opportunities:
I'm excited for the Post-MVP version of this app where I'll explore user authorization and authentication. This will prevent bots and trolls from sabotaging the primary purpose of this project.

### Threats:
I'm still a little shaky with class-based React. Especially given that we'll need to incorporate both class and functional React I may need to do a quick refresher on class class-based React.
