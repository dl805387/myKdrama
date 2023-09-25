# MyK-Drama
https://mykdrama.netlify.app

## About
This is a full stack website that allows users to look for K-dramas and keep track of K-dramas that they already watched or K-dramas that they will watch later. This website is a good way for users to get into K-dramas and explore new shows. My motivation with creating this project is that I wanted to create a full stack project with something that I'm interested in and to learn new technologies. I also wanted to learn more about web development, using external APIs, and utilizing a database.


## Features
* Displays the current popular K-dramas using The Movie Database API's TV Discover
* Users can search for over 1,000 K-dramas
* K-dramas can be added to watched or watch later categories, each associated with the user's account
* Each K-drama can be viewed to obtain more detailed information such as the synopsis and also a list of recommended K-dramas
* Implemented user login authentication with firebase
* User account and watched/watch later K-dramas are stored in a MySQL database


## Technologies
* React.js
* Node.js
* Express.js
* MySQL
* Firebase


## Development

### Frontend
The frontend is hosted on Netlify\
Frontend is built with React.js
* React Router - website navigation
* Axios - HTTP requests to fetch data from API and from server
* Login authentification is implemented with Firebase
* The Movie Database API - used for getting K-drama data
* CSS Media Queries for responsiveness
* Font Awesome - icon toolkit

### Backend
The backend is hosted on Heroku\
This is free hosting so the server will go to sleep if there are no traffic for 1 hour\
It will take about 5-10 seconds for server to wake up\
The website will display a loading screen until server wakes up\
\
Backend is built with Node.js and Express.js\
The backend connects to the MySQL database
* Node.js - executes Javascript code on the server
* Express.js - backend framework that handles HTTP requests
* MySQL - database to hold user account information
* Cors - enable scripts running on the client to interact with resources from a different origin

### Database
MySQL database is managed with ClearDB through Heroku

### API
K-drama data from The Movie Database API\
The Movie database API contains many movies and tv shows but this project only use the API for K-dramas\
https://developers.themoviedb.org/3/getting-started/introduction