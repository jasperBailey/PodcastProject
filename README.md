# Prerequisites
Before running the application, make sure you have the following installed on your machine:

Node.js: Download and Install Node.js
MongoDB: Download and Install MongoDB

# Getting Started
Follow the steps below to run the application:

Clone the repository:

git clone git@github.com:TobyKeech/PodcastProject.git
cd PodcastProject
Set up the back-end server:

Start MongoDB: Open a terminal window and run the following command:

mongod
  
# Configure the back-end:
Navigate to the back-end folder:
cd server
  
Install dependencies:

npm install
  
Create a .env file in the backend folder and provide the necessary environment variables. For example:
  
MONGODB_URI=mongodb://localhost:27017/podcast_project
# Start the back-end server:
npm start
  
# Set up the front-end:

Open a new terminal window/tab.
Navigate to the front-end folder:

cd client
Install dependencies:
npm install
Start the front-end development server:
npm start
The application should now be running on your local machine. Open your web browser and visit http://localhost:3000 to access the front-end.

Folder Structure
/server - Contains the MongoDB JavaScript back-end code.
/client - Contains the JavaScript React front-end code.
Configuration
If you need to configure any additional settings or environment variables, please refer to the relevant files in the repository.

Troubleshooting
If you encounter any issues during the installation or running of the application, try the following steps:

Make sure you have all the prerequisites installed and set up correctly.
Check that MongoDB is running properly.
Clear the cache and reinstall dependencies for both the front-end and back-end:
bash
Copy code
npm cache clean --force
rm -rf node_modules
npm install
Make sure the back-end server is running correctly.
Ensure that the front-end development server is running and accessible on http://localhost:3000.


# PodcastProject

Podcast App
Create an app where users can browse podcasts, subscribe to podcasts and play podcasts.

# MVP

A user should be able to:
* Browse podcasts
* Subscribe to podcasts
* View a list of episodes for a podcast

# Extensions

* Add a filter search bar to the application to find specific podcasts 
* Add a favourites/your subscription list to display on the app
* Functionality to play the selected podcast


