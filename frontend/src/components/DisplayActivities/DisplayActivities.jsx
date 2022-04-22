import React, { useEffect, useState } from "react";
import RandomActivities from "../RandomActivities/RandomActivities";
// import { Button } from '../Button';
import "../HeroSection.css";
import "./DisplayActivities.css";
import Footer from "../Footer/Footer";

const DisplayActivities = (props) => {
  const [randomDay, setRandomDay] = useState(null);

  function randomizeActivities(entries) {
    let breakfastArray = entries.map((breakfast) => {
      return breakfast.breakfast;
    });

    let morningActivity = entries.map((mornactivity) => {
      return mornactivity.morning_activity;
    });

    let lunch = entries.map((lunch) => {
      return lunch.lunch;
    });

    let afternoonActivity = entries.map((afterActivity) => {
      return afterActivity.afternoon_activity;
    });

    let dinner = entries.map((dinner) => {
      return dinner.dinner;
    });

    let nightActivity = entries.map((nightTimeActivity) => {
      return nightTimeActivity.night_time_activity;
    });

    // create a new array with random items from each feature array

    let myBreakfast =
      breakfastArray[Math.floor(Math.random() * breakfastArray.length)];
    let myMorningActivity =
      morningActivity[Math.floor(Math.random() * morningActivity.length)];
    let myLunch = lunch[Math.floor(Math.random() * lunch.length)];
    let myAfternoonActivity =
      afternoonActivity[Math.floor(Math.random() * afternoonActivity.length)];
    let myDinner = dinner[Math.floor(Math.random() * dinner.length)];
    let myNightActivity =
      nightActivity[Math.floor(Math.random() * nightActivity.length)];

    return {
      myBreakfast,
      myMorningActivity,
      myLunch,
      myAfternoonActivity,
      myDinner,
      myNightActivity,
    };
  }

  function handleSetNewRandomDay() {
      const randomDay = randomizeActivities(props.parentEntries);
      setRandomDay(randomDay);
  }

  useEffect(() => {
    if(props.parentEntries.length > 0) {
      const randomDay = randomizeActivities(props.parentEntries);
      setRandomDay(randomDay);
    }
  }, [props.parentEntries]);

  if(randomDay === null) {
    return null
  }


  
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>IMWPD</h1>
      <p>Decisions made easy</p>
      <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
        <button className="activities-button" onClick={handleSetNewRandomDay}>
          Click for a Random Day!
        </button>

        <div className="activities-box">
          <div>
            <h2 style={{fontSize:"35px"}}>YOUR RANDOM DAY PLANNED FOR YOU!</h2>
            <table className="table">
              <thead>
                <tr>
                  {/* <th>Line</th> */}
                  
                    <th>Breakfast</th>
                    <th>Morning Activity</th>
                    <th>Lunch</th>
                    <th>Afternoon Activity</th>
                    <th>Dinner</th>
                    <th>Nighttime Activity</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td>{1}</td> */}
                  <td>{randomDay.myBreakfast}</td>
                  <td>{randomDay.myMorningActivity}</td>
                  <td>{randomDay.myLunch}</td>
                  <td>{randomDay.myAfternoonActivity}</td>
                  <td>{randomDay.myDinner}</td>
                  <td>{randomDay.myNightActivity}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DisplayActivities;
