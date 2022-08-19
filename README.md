  <a href="hoster-project">
      <img width="200px" src="https://github.com/kivanov22/Car-Dealership/blob/main/Project-photos/logo.png" alt="Car-Dealership Logo" />
  </a>
  <br />
  Car-Dealership
  <br />
</h1>

<h4 align="center">
   Car-Dealership created with React.JS.
</h4>

<p align="center">
<!-- after deploy -->
   <!-- <img src="https://airbnb-clone-krisko512-gmailcom.vercel.app" alt="Release" />
   <img src="https://airbnb-clone-krisko512-gmailcom.vercel.app" alt="Deployment" />
   <img src="https://img.shields.io/github/license/kivanov22/Airbnb-Clone" alt="License" /> -->
</p>

<p align="center">
  <a href="#demo">Demo</a> •
  <a href="#project-screenshots">Project Screenshots</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#key-technologies">Key Technologies</a> •
  <a href="#setup">Setup</a> •
  <!-- <a href="#future-improvements">Future Improvements</a> • -->
  <a href="#license">License</a>
</p>

## Demo

Here is a working live demo ..

---

## Project Screenshots

Here is some project screenshots ..

![](https://github.com/kivanov22/Car-Dealership/car-dealership-gif.gif)

---

## Project Architecture

-Components folder:
<br>
--cars folder containing everything connected with cars.
<br>
--layout holds everything on mainpage.
<br>
--user contains login,register.
<br>
--common folder holds files that can be reused by other components.

-Context folder:
<br>
--containing all contexts.

-Hooks folder:
<br>
--containing all custom hooks.

-Services folder:
<br>
--authService containing the login,register,logout requests.
<br>
--carService containing the requests about cars.

-Utils:
<br>
--containing some constants about social media.

-Assets:
<br>
--containing some pictures used by the app.

-Api:
<br>
--contains static data 

---

## Key Features

- Login/Register
- Create car
- Edit car
- Remove car
- User Collection of cars
- Details
- Real World map in Details showing location of the seller
- Paging
- Searching for a car by criteria
- Auto-Logout if not active on page for 5 mins


---

## Key Technologies

- React.JS
- Mapbox
- Font awesome
- Firebase
- Geolib
- ASP.NET Core Api
- Custom JWT Authorization

---

## Setup

Clone this repo to your desktop and run `npm install` to install all the dependencies.
Then run `npm dev` to start the application locally

Change the .env.example file to .env.local and fill the empty fields

---

<!-- ## Future improvements

-Responsiveness
-Add Trucks,Motorcycles category
-Admin role
-Google,Facebook sign in -->

## License



This project is licensed under the terms of the **MIT** license