# Smart Pulse Intern Evaluation Technical Interview Assignment

## Prerequisits

- node (v6 or v8) & npm (v3 or v5)
- git

## Setting up a project

- Firstly, clone this repository: ` git clone` https://github.com/Suleyman1406/smart-pulse-assessment.git

- Move into the project directory: ` cd PROJECT_NAME`

- First run the backend side

  - Move into the backend directory: ` cd server`
  - Install the dependencies: ` npm install`
  - Then run the server side: ` node src/app.js`

- Then run the frontend side
  - Move into the backend directory: ` cd client`
  - Install the dependencies: ` npm install`
  - Then run the server side:` npm run start`

## Development

#### Data is pulled with axios library from the URL given by the backend and then sent to the frontend.

<br/>

<image src="./images/projectImage1.png" alt="project image 1">

#### On the front end, the information sent using the Axios library is captured and transferred to a react state hook.

<br/>

<image src="./images/projectImage2.png" alt="project image 2">

#### Incoming data is transferred to a map after calculations are made.

<br/>

<image src="./images/projectImage3.png" alt="project image 3">

#### The data collected on the map is sent to the home page to be used in the table.

<br/>

<image src="./images/projectImage4.png" alt="project image 4">
