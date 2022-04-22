// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar2 from "./components/Navbar2";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DisplayActivities from "./components/DisplayActivities/DisplayActivities";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";
import Home from "./components/DisplayPages/Home";
import RestaurantApp from "./components/DisplayPages/RestaurantApp";
import Randomizer from "./components/DisplayPages/Randomizer";
import FavoritedRestaurants from "./pages/FavoriteRestaurants/FavoriteRestaurants";

// Component Imports
// import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ArrayShuffler from "./components/ArrayShuffler/ArrayShuffler";
import RandomActivities from "./components/RandomActivities/RandomActivities";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import GoogleMaps from "./components/DisplayPages/GoogleMaps";

function App() {
  const [entries, setEntries] = useState([]);

  const [geolocation, setGeolocation] = useState(null);
  const [locationReceived, setLocationReceived] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

  function AddFavoriteRestaurant(restaurant) {
    setFavoriteRestaurants([...favoriteRestaurants, restaurant]);
    console.log("Favorite Rest", favoriteRestaurants)
  }

  function RemoveFavoriteRestaurant(restaurant) {
    const restaurantidx = favoriteRestaurants.findIndex(
      (favoriteRestaurant) =>
        favoriteRestaurant.place_id === restaurant.place_id
    );
    setFavoriteRestaurants([
      ...favoriteRestaurants.slice(0, restaurantidx),
      ...favoriteRestaurants.slice(restaurantidx + 1),
    ]);
  }

  useEffect(() => {
    if (geolocation) {
      getRestaurants();
    }
  }, [locationReceived]);

  navigator.geolocation.getCurrentPosition(
    function (position) {
      setGeolocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      if (locationReceived == false) {
        setLocationReceived(true);
      }
    },
    function (error) {
      console.log(error);
    },
    { timeout: 500 }
  );

  async function getRestaurants() {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geolocation.lat}%2C${geolocation.lng}&radius=12000&type=restaurant&open_now=true&reviews&key=AIzaSyBNOyOJG_-g7kNxQ8_3Ku4eyTE-RSVsR60`
    );
    console.log("Nearby Restaurants", response.data);

    const restaurantDetailsItems = [];
    const restaurantSummaries = response.data.results;
    for (let i = 0; i < restaurantSummaries.length; i++) {
      const restaurantDetailsItem = await getRestaurantDetails(
        restaurantSummaries[i].place_id
      );
      restaurantDetailsItems.push(restaurantDetailsItem.data.result);
    }

    setRestaurants(restaurantDetailsItems);
  }

  async function getRestaurantDetails(placeID) {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=AIzaSyBNOyOJG_-g7kNxQ8_3Ku4eyTE-RSVsR60`
    );
    console.log("Black Bear Diner", response);
    return response;
  }

  async function getAllActivities() {
    let response = await axios.get("http://127.0.0.1:8000/api/activities/");
    setEntries(response.data);
  }

  useEffect(() => {
    getAllActivities();
  }, []);

  return (
    <div>
      <Router>
        <Navbar2 />

        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/restaurantDistance" element={<RestaurantDistance />} /> */}
          <Route exact path="/googleMaps" element={<GoogleMaps />} />
          <Route
            exact
            path="/restApp"
            element={
              <RestaurantApp
                favoriteRestaurants={favoriteRestaurants}
                AddFavoriteRestaurant={AddFavoriteRestaurant}
                RemoveFavoriteRestaurant={RemoveFavoriteRestaurant}
                restaurants={restaurants}
              />
            }
          />
          <Route
            exact
            path="/randomizer"
            element={<DisplayActivities parentEntries={entries} />}
          />
          <Route
            path="/FavoriteRestaurants"
            element={<FavoritedRestaurants />}
          />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route
            path="/addcar"
            element={
              <PrivateRoute>
                <AddCarPage />{" "}
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
