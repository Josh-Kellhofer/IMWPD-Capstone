import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Indecisive Marital Weekend Planner, Definitive</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            {/* <CardItem 
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path='/services'
            /> */}
             {/* <CardItem 
            src="images/img-2.jpg"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path='/services'
            />
          </ul>
          <ul className="cards_items">
            <CardItem 
            src="images/img-3.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path='/services'
            />
             <CardItem 
            src="images/img-4.jpg"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path='/services'
            />
                <CardItem 
            src="images/img-8.jpg"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path='/services' */}
            {/* /> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;