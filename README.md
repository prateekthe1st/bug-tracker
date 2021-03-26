# bug-tracker
A work in progress project that uses Express, Node JS, Mongo DB, and React to create an internal bug tracking tool for software developers to manage, view, and update known bugs in their software collaboratively.



Commit 001:

Backend: 

Most of the backend is completed. 
The API can handle:
  - Logging in / Signing up users for the webapp
  - Functions before every core route to test for a valid cookie sent from client side and the right prerequesties to access certian functionality
  - Create Team / Join Team
  -   - Teams are assigned a six character identifier that allows users to easily locate teams.
  -   Leave Team / Join Team
  -   - Removes prescence from the team members list and also changes the teamid field for the user schema into an empty string
  -   Adding / Removing bugs
  -   All models are set up
  -   - Users
  -   - Teams
  -   - Bugs

Front End
  - All of the following routes have been developed. However, none of them have styling or animation elements yet
  -   - Landing Page
  -   - Signup
  -   - Log In
  -   - Dashboard
  -   - Create Team
  -   - Join Team
  -   - Bug Tracker Screen (if you're alreay a part of a team)

Overall: Most of the logic is complete for this app. Certian edge cases need to be rounded out, and the bug tracker screen needs to have certain elements added to it. Furtehrmore, log out functionality needs to be added and the web application needs to be styled so that it looks professional and user friendly.

Modules Used:

- Express
- Mongoose
- BCrypt
- Nodemon
- dotenv
- React
- cookie-parser
- universal-cookie
- jsonwebtoken
- react-router

  
