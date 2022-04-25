import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Rating
              </th>
              <th>
                Text
              </th>
            </tr>
          </thead>
            <tbody>
              {reviewData.map((review, idx) =>
              <tr key={idx}>
                <td>{review.name}</td>
                <td>{review.rating}</td>
                <td>{review.text}</td>
              </tr>)}
            </tbody>
        </table>
      )
};

export default RestaurantReviews;