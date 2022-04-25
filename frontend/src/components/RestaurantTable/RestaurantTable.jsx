import react from 'react';
import './RestaurantTable.css';


function RestaurantTable({ restaurants, showFavoritesToggle, favoriteRestaurants, RemoveFavoriteRestaurant, AddFavoriteRestaurant }) {

   
  const formatRestaurants = () => restaurants.map((restaurant, index) => {
    let isFavorite=false
      if (showFavoritesToggle) {
      isFavorite = favoriteRestaurants.findIndex(favoriteRestaurant => favoriteRestaurant.place_id === restaurant.place_id) !== -1
      }
  

    return (
      <tr className="restaurantTable" key={index}>
        <td >{index +1 +")"}</td>
        <td>{restaurant.name}</td>
        <td>{restaurant.price_level}</td>
        <td>{restaurant.rating}</td>
        <td>{FormatOpenNow(restaurant.opening_hours?.open_now)}</td>
        <td>{restaurant.formatted_address}</td>
        <td className=""><a href={restaurant.url}>Click for Website</a></td>
        {showFavoritesToggle && <td><input type="checkbox" checked={isFavorite} onChange={() => 
        isFavorite? RemoveFavoriteRestaurant(restaurant): AddFavoriteRestaurant(restaurant)
        }></input>
        </td>}
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

 
 
  return (
       
          <table className="table" style={{borderSpacing:"0"}}>
            <thead>
              <tr>
                {/* <th>Line</th> */}
                  <th>Line</th>
                  <th>Restaurant</th>
                  <th>Cost Level</th>
                  <th>Rating</th>
                  <th>Open</th>
                  <th>Address</th>
                  <th>Website</th>
                  {showFavoritesToggle &&<th>Like</th>}
              </tr>
            </thead>
            <tbody className="tbody">{formatRestaurants()}</tbody>
          </table>
                
                
      
      
  
  
  );
}

export default RestaurantTable;

