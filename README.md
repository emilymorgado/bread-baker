This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

1. Clone the app
2. In your terminal, navigate to the project directory
2. Run `npm install` to install all node packages
3. Run `npm start` to start the project locally

This runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Some variables to know:
Need to add an unlockable dependency statuses to recipes
When a user completes a prerequisite, the subsequent recipes are "unlocked":
This means their recipe id and status of 0 is added to their `unlocked` object
Example: `user.unlocked["123"] = 0`
If the user starts the recipe (by clicking the button), the unlocked status increments: `{"123": 1}`

A recipe is unlocked if it is in the unlocked object
A recipe is active if its value >= 1
```
"user": {
  "unlocked": {recipeId:step},
  // object of recipes the user is qualified to start because they did the prerequisite recipes

  "projectStatuses": {recipeId:status}, //
  "activeProjects": {recipeId:step} // The recipe step/direction the user needs to do next.
  ```
