# DAS Coding Assessment - Nick Banks

## Installation

First, make sure you have the following things installed:

Visual Studio 2019

.NET Core SDK 3.1

Node.js Version 12 LTS, including NPM


## Launch API

1. Open api/CoinsAPI/CoinsAPI.sln from the repository in your copy of Visual Studio.

2. Trust any prompts asking for permission to run unknown code

3. Click the Play button near the top center of the window that says 'IIS Express' to bring up the dropdown menu. Select 'CoinsAPI' from the dropdown menu.

4. Once the play button has changed from 'IIS Express' to 'CoinsAPI,' click it to start running the API. Again, if it asks for network access or trusting a certificate, grant this to allow it to run. When finished, stop the API using the red stop button near where the start button was.

Note that this API is also hosted in Azure App Service - both Azure and localhost URLs are included in the React portion of the application.

## Launch React Front-end

1. Use your terminal to navigate to frontend/coin-counts in the repository.

2. Run the command 'npm i' to install the necessary packages to run the application. 

3. Once this command finishes, run 'npm start' to start the development server. The page localhost:3000 will launch in your browser and the site will load. Use Ctrl+C to stop the server in the terminal when you are finished.
