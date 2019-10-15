# Valhalla - Your D&D characters at the tip of your fingers

### Value proposition

Valhalla is a mobile app that allows the user instant access to all their D&D characters on a moblile enabled interface. Campagne, convention, meetup - no matter where, you can share and play all your characters with other D&D players.

### Investors

Valhalla is able to capture a clear picture user preferences trough voluntary data inputs for targeted advertising in a hard to reach nitch market. Due to the creation of very personal characters the app and its content can be experienced on an emotional level drivng product loyalty. A rapid incrase of Valhalla's popularity under D&D players is anthizipated because the app is mostly used in a social context. Moreover, the app has great potential to be developed and to offer more functionality to the user opening even broader opportunities for monetization.  

### Frontend / UI

Valhalla's frontend it mostly realized with HTML and Javascript supported by Bootstrap and jQuery. For dynamik content the templating package EJS was used.

The user will enter the app through a login screen to log in or create a new account with his/her email address. Once loged in, a dashboard with a list of all characters is displayed and the option to create a new character is given.
On click on an existing character all stats ard displayed in a well organized one-page layout. Upon click on "Creat Character" the user is guided to a from page where he / she can add all stats of the character. If available a picture can be uploaded. Additionally, the user can crate a random for his / her character.

### Backend / Code structure

The app uses an express server in connection with a SQL database supported by Sequelize to define tables and object relational mapping. The server accepts routes to display the frontend as well as routes to authenticate users, to get and calculate character data. The database is sturctured in 8 tables representing all character information.

### File sturcture

.
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

### Technologie List

* Node.js

* Express Server

* EJS

* SQL Database

* Sequelize

* Bootstrap Frontend