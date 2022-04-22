import React from 'react';
import HeroSection from '../../components/HeroSection';
import './FavoriteRestaurants.css'
import background from "./img-home.jpg";


// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
// import Vid from "./Vid.mp4"


// function VideoPlayer() {

//   const videoSrc = Vid;
//   // const poster =
//     return (
//       <div>
//         <h1>INTRO VIDEO</h1>
//         <ReactPlayer />
//          src={videoSrc}
//          width="720"
//          height="420"
//       </div>
//     )

// };

// export default VideoPlayer;




// need to draw in favoriteRestaurants

function FavoritedRestaurants () {
  return (
    <div className ="favorites-container"  style={{ backgroundImage: `url(${background})`}}>
    <div>
    
      <h2 className="favorite-restaurants-head">FAVORITED RESTAURANTS!</h2>
      <table className="table" >
        <thead>
          <tr>
            
              <th>Restaurant</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      </div>
      </div>
       );
     }
     
     export default FavoritedRestaurants;
              
            
       
    
      