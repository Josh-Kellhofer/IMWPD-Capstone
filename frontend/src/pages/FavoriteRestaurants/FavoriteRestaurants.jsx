import React from 'react';
import HeroSection from '../../components/HeroSection';
import RestaurantTable from '../../components/RestaurantTable/RestaurantTable';
import './FavoriteRestaurants.css'
import background from "./img-home.jpg";



// need to draw in favoriteRestaurants

function FavoritedRestaurants (props) {
  return (
      
    <div className ="favorites-container"  style={{ backgroundImage: `url(${background})`}}>
    <div>
    </div>
      <h2 className="favorite-restaurants-head">FAVORITED RESTAURANTS!</h2>
      <RestaurantTable restaurants={props.favoriteRestaurants} showFavoritesToggle={false}/>
        
      </div>
     
       );
     }
     
     export default FavoritedRestaurants;
              
            
       
    
      