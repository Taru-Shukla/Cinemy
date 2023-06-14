# React-Based Movie Recommendation Web Application - Cinemy

## Overview

This web application has been designed to provide movie recommendations to users based on various movie attributes such as genre, language, and actors. The app allows both users and administrators to create accounts, with verified login authorization. The administrative users can also add, update, or delete movie entries.

## Features

- User and Admin account creation and verified login authorization.
- View all movie listings for User and Admin.
- Creation, updating, and deletion of a movie by Admin.
- Search movie by various attributes like name, actors.
- User's ability to like or dislike a movie recommended by the application.

## Technology Stack

The following technologies were chosen for this project:

- React: This project is built on React due to its scalability, performance and its component-based architecture which allows for reusability and simplicity of complex UIs.

- Node.js: This is used in our backend due to its non-blocking, event-driven architecture, which allows handling multiple connections simultaneously, making it suitable for the project's potentially high I/O workload.

- SCSS: SCSS, a CSS preprocessor, was used for styles due to its variable and nesting functionality, making CSS more maintainable and themable.

- Mongoose: Mongoose provides a simple, schema-based approach to model our application data with MongoDB, offering out-of-the-box validation and type casting.

- Cors: Cross-Origin Resource Sharing (CORS) is a method that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.

- MongoDB Atlas: As a cloud-based NoSQL database, MongoDB Atlas provides scalability and flexibility, as well as powerful querying and indexing functionality for managing the data.

## How to run the project

1. Clone the repository: `git clone [repository URL]`
2. Navigate to the api-backend directory: `cd api-backend`
3. Install all the dependencies: `npm install`
4. Start the api-backend in dev mode: `node index.js`
5. Navigate to the web app directory: `cd movierecommendation-ui`
6. Install all the dependencies: `npm install`
7. Start the application: `npm start`

The application will run directly in the browser on `localhost:3000`

## Dependencies

- express: `npm i express`
- mongoose: `npm i mongoose`
- cors: `npm i cors`
- node-sass: `npm i node-sass@4.14.1`

Initial project setup with: `npm init -y`

Remember to run `npm install` in both the root and `movierecommendation-ui` directories to install all necessary dependencies. 

If you encounter any issues during setup or have any improvements to suggest, please feel free to submit an issue or a pull request.


