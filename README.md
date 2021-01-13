# Final_Project_ACC

## Final project for Albany Can Code

### Installation instructions

* You will need to have Node.js/Node Package Manager installed on your system to run/build this application.  Installation instructions for Node.js and Node Package Manager can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

* You will need an API key from The Movie Database for this project to work.  To get an API key click [here](https://www.themoviedb.org/signup) and sign up for an account.  Then after that go to your account settings page and click the "API" link from the lefthand sidebar.  One you obtain an API key create a folder in the app root directory called "keys" and in that folder create a file called "keys.js".   "keys.js" contents should be:

```javascript  
const apiKEY = "YOUR_API_KEY";

export {apiKEY};
```

* After the API key is installed, you can start/build the app by running one of the following commands from the root directory of the app in a terminal:
  * "npm install && npm run build && npm run start" for Linux/Mac
  * "npm install & npm run build & npm run start" for Windows

### Description

* This project was built with webpack.  
* I did not include my api key because I was taught not to do that at ACC for security resons.
* All HTML strings and user input are santized with DOMPurify.
* This app will display the top 20 most popular movies by genre and also allows the user to search for movies on TMDB via asynchronous calls to their API and displays information on each Movie to the user in containers.
* This app will also let you display new movies based on the current year that the browser knows about.