import React, {useEffect, useState } from "react";
import randomArrayShuffle from "../ArrayShuffler/ArrayShuffler";
import { Chart } from "react-google-charts";

const RandomActivities = ({entries}) => {
  

// How can you break apart entries into individual arrays for each feature (breakfast, morning_activity, etc)
    let breakfastArray = entries.map(breakfast => {
        return breakfast.breakfast;
    });
       
   let morningActivity = entries.map(mornactivity => {
        return mornactivity.morning_activity
    });
        
   let lunch = entries.map(lunch => {
         return lunch.lunch
      });
       
   let afternoonActivity = entries.map(afterActivity => {
          return afterActivity.afternoon_activity
        });
         
   let dinner = entries.map(dinner => {
          return dinner.dinner
         });
         
   let nightActivity = entries.map(nightTimeActivity => {
          return nightTimeActivity.night_time_activity
        });
         
  // create a new array with random items from each feature array

    let myBreakfast = breakfastArray[Math.floor(Math.random() * breakfastArray.length)];
    
    let myMorningActivity = morningActivity[Math.floor(Math.random() * morningActivity.length)];
    
    let myLunch = lunch[Math.floor(Math.random() * lunch.length)];
    
    let myAfternoonActivity = afternoonActivity[Math.floor(Math.random() * afternoonActivity.length)];
    
    let myDinner = dinner[Math.floor(Math.random() * dinner.length)];
    
    let myNightActivity = nightActivity[Math.floor(Math.random() * nightActivity .length)];
    
  // then return that random plan in the JSX below

  return(<>{myBreakfast}, {myMorningActivity}, {myLunch}, {myAfternoonActivity}, {myDinner}, {myNightActivity}</>)

  }

function randomizeActivities(entries) {
  let breakfastArray = entries.map(breakfast => {
    return breakfast.breakfast;
});
   
let morningActivity = entries.map(mornactivity => {
    return mornactivity.morning_activity
});
    
let lunch = entries.map(lunch => {
     return lunch.lunch
  });
   
let afternoonActivity = entries.map(afterActivity => {
      return afterActivity.afternoon_activity
    });
     
let dinner = entries.map(dinner => {
      return dinner.dinner
     });
     
let nightActivity = entries.map(nightTimeActivity => {
      return nightTimeActivity.night_time_activity
    });
     
// create a new array with random items from each feature array

let myBreakfast = breakfastArray[Math.floor(Math.random() * breakfastArray.length)];
let myMorningActivity = morningActivity[Math.floor(Math.random() * morningActivity.length)];
let myLunch = lunch[Math.floor(Math.random() * lunch.length)];
let myAfternoonActivity = afternoonActivity[Math.floor(Math.random() * afternoonActivity.length)];
let myDinner = dinner[Math.floor(Math.random() * dinner.length)];
let myNightActivity = nightActivity[Math.floor(Math.random() * nightActivity .length)];

return {myBreakfast, myMorningActivity, myLunch, myAfternoonActivity, myDinner, myNightActivity}
}

export default RandomActivities;



 