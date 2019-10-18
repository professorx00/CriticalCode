# Valhalla - Your D&D characters at the tip of your fingers

### Value proposition

Valhalla is a mobile app that allows the user instant access to all their D&D characters in a mobile-friendly  interface. Campaign, convention, meetup - no matter where, you can share and play all your characters with other D&D players.

### Investors

Valhalla is able to capture a clear picture of user preferences through voluntary data inputs for targeted advertising in a hard to reach niche market. Due to the creation of very personal characters the app and its content can be experienced on an emotional level drivng product loyalty. A rapid incrase of Valhalla's popularity under D&D players is anticipated because the app is mostly used in a social context. Moreover, the app has great potential to be developed and to offer more functionality to the user opening even broader opportunities for monetization.  

### Frontend / UI

Valhalla's frontend is made with HTML and Javascript supported by Bootstrap and jQuery. For dynamic content the templating package EJS was used.

The user will enters app through a login screen to log in or create a new account with their email address. Once logged in, a dashboard with a list of all characters is displayed and the option to create a new character is given.
On click on an existing character all stats are displayed in a well organized one-page layout. Upon click on "Create Character" the user is guided to a page where they can create a character with randomized stats or create a character with custom stats. If available a picture can be uploaded.

### Backend / Code structure

The app uses an express server in connection with a SQL database supported by Sequelize to define tables and object relational mapping. The server accepts routes to display the frontend as well as routes to authenticate users, to get and calculate character data. The database is structured into 8 tables representing all character information.

### File Structure

    ├── README.md
    ├── config
    │   ├── auth.js
    │   ├── config.json
    │   └── passport.js
    ├── dbSeeds
    │   └── seeds.sql
    ├── models
    │   ├── armor.js
    │   ├── characterNames.js
    │   ├── characters.js
    │   ├── class.js
    │   ├── index.js
    │   ├── race.js
    │   ├── schema.sql
    │   ├── user.js
    │   └── weapons.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── assets
    │       ├── css
    │       │   ├── character.css
    │       │   └── styles.css
    │       ├── images
    │       │   ├── checkboxCheck.png
    │       │   ├── checkboxUncheck.png
    │       │   ├── copper.jpg
    │       │   ├── default.png
    │       │   ├── logo.png
    │       │   ├── paper.jpg
    │       │   ├── paper2.jpg
    │       │   ├── stone.jpg
    │       │   └── wood.jpg
    │       └── javascript
    │           ├── calculator.js
    │           ├── characterAdd.js
    │           ├── characterVIew.js
    │           ├── dashboard.js
    │           ├── frontend.js
    │           ├── javascript.js
    │           └── login.js
    ├── routes
    │   ├── apiRoutes.js
    │   ├── calculator.js
    │   ├── getData.js
    │   ├── htmlRoutes.js
    │   ├── index.js
    │   └── user.js
    ├── server.js
    ├── test
    │   └── canary.test.js
    └── views
        ├── characterAdd.ejs
        ├── characterUpdate.ejs
        ├── characterView.ejs
        ├── dashboard.ejs
        ├── layout.ejs
        ├── login.ejs
        ├── partials
        │   └── messages.ejs
        ├── register.ejs
        └── welcome.ejs

### Technologies Used

* [AWS](https://aws.amazon.com/)

* [Passport](https://www.passportjs.org/)

* [Bootstrap](https://getbootstrap.com/)

* [EJS](https://ejs.co/)

* [Express.js](https://expressjs.com/)

* [MySQL](https://www.mysql.com/)

* [Node.js](https://nodejs.org/en/)

* [Sequelize](https://sequelize.org/)
  
  ____________________

### The CriticalCode Team:

* [Markus Markowich](https://github.com/markus902)
  
* [Jeremy Muniak](https://github.com/Jmuniak)
  
* [Elias Roussos](https://github.com/EliasIsaiah)
  
* [Dave Ward](https://github.com/professorx00)
