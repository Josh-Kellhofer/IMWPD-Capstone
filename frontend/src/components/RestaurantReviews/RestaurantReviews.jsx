import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./RestaurantReviews.css"

function RestaurantReviews ({restaurants}) {
  const {place_id}=useParams()

  const [reviewData, setReviewData] = useState([])

  React.useEffect(( ) => {
    const restaurant=restaurants.find((restaurant) =>
    restaurant.place_id === place_id)
      if(restaurant){
        setReviewData(restaurant.reviews.map((review) => ({
          name: review.author_name,
          rating: review.rating, 
          text: review.text,
        })
          ))
      }
  }, [place_id])
      return (
        <table className="overall-div">
          <thead className="header-container">
            <tr>
              <th >
                Name
              </th>
              <th>
                Rating
              </th>
              <th>
                Review
              </th>
            </tr>
          </thead>
            <tbody className="review-box">
              {reviewData.map((review, idx) =>
              <tr key={idx}>
                <td>{review.name}</td>
                
                <td>{review.rating}</td>
                <td style={{textAlign: "justify"}}>{review.text}</td>
              </tr>)}
            </tbody>
        </table>
      )
};

export default RestaurantReviews;