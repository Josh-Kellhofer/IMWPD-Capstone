import React from "react";
import { Button } from "../Button";
import "./RestaurantApp.css";
import { randomArrayShuffle } from '../ArrayShuffler/ArrayShuffler'
import { Link } from "react-router-dom";

function RestaurantApp({ restaurants, favoriteRestaurants, RemoveFavoriteRestaurant, AddFavoriteRestaurant }) {

  const [selectedPriceLevel, setSelectedPriceLevel] = React.useState("-1")
  const [selectedOpenStatus, setSelectedOpenStatus] = React.useState("-1")
  const costOptions = React.useRef([])
  const [randomRestaurants, setRandomRestaurants] = React.useState([])
  const formatRestaurants = (ShuffledRestaurants) =>ShuffledRestaurants.filter(restaurant => 
    JSON.stringify(restaurant.price_level) === selectedPriceLevel || selectedPriceLevel === "-1").filter(restaurant => 
      JSON.stringify(restaurant.opening_hours?.open_now) === selectedOpenStatus || selectedOpenStatus === "-1").map((restaurant, index) => {
  const isFavorite = favoriteRestaurants.findIndex(favoriteRestaurant => favoriteRestaurant.place_id === restaurant.place_id) !== -1

    return (
      <tr key={index}>
        <td >{index +1 +")"}</td>
        <td>{restaurant.name}</td>
        <td>{restaurant.price_level}</td>
        <td>{restaurant.rating}</td>
        <td>{FormatOpenNow(restaurant.opening_hours?.open_now)}</td>
        <td>{restaurant.formatted_address}</td>
        <td className="links"><Link to={`/reviews/${restaurant.place_id}`}>Review </Link></td>
        <td className=""><a href={restaurant.url}>Click for Website</a></td>
        <td><input type="checkbox" checked={isFavorite} onChange={() => 
        isFavorite? RemoveFavoriteRestaurant(restaurant): AddFavoriteRestaurant(restaurant)
        }></input>
        </td>
      </tr>
    );
  });

  function FormatOpenNow (open_now){
    if (open_now === undefined){
      return "NA"
      }
    if (open_now){
      return "Yes"
    }
      return "No"
  }

  const ShuffleRestaurants= () => {
    console.log(randomArrayShuffle(randomRestaurants))
     setRandomRestaurants(randomArrayShuffle(restaurants).slice(0, 8))
  }

  // React.useEffect(() => {
  //   setRandomRestaurants
  // })

  React.useEffect(() => {
    if (restaurants) {
      setRandomRestaurants(randomArrayShuffle(restaurants).slice(0, 8))
      costOptions.current=Array.from(new Set(restaurants.map(restaurant => restaurant.price_level))).sort()
    }
  }, [restaurants]);


  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1>IMWPD</h1>
      <p>The food is where it's at!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          FOOD TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>

      <button className="activities-button" onClick={ShuffleRestaurants}>
        Click for Random Restaurants Nearby!
      </button>
    <div>
      <label for="Price Level Select" className="price-dropdown">Price</label>
    <select value={selectedPriceLevel}   className="view-all" onChange={(event) => setSelectedPriceLevel(event.target.value)}id="Price Level Select">
      <option  value={"-1"} >View All</option>
        {costOptions.current.map(costOption => 
          <option value={costOption} key={costOption}>{costOption}</option>) }
    </select>
    </div>
    <div >
    <label for="Open Select" className="open-dropdown">Open</label>
    <select value={selectedOpenStatus} className="view-all" onChange={(event) => setSelectedOpenStatus(event.target.value)}id="Open Select">
      <option  value={"-1"}>View All</option>
      <option  value={"true"}>Open</option>
      <option  value={"false"}>Closed</option>
        
    </select>
    </div>
      <div className="Restaurant-activities-box">
        <div>
          <h2 >YOUR RANDOM NEARBY RESTAURANTS!</h2>
          <table className="table" style={{borderSpacing:"0"}}>
            <thead>
              <tr>
                {/* <th>Line</th> */}
                
                  <th></th>
                  <th>Restaurant</th>
                  <th>Cost Level</th>
                  <th>Rating</th>
                  <th>Open</th>
                  <th>Address</th>
                  <th>Reviews</th>
                  <th>Website</th>
                  <th>Like</th>
                
              </tr>
            </thead>
            <tbody className="tbody">{formatRestaurants(randomRestaurants)}</tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  
  );
}

export default RestaurantApp;

