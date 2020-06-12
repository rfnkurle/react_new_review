import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from "reactstrap";
import moment from 'moment';
import sampleData from "./data/sample.json"
import SearchBar from "./components/SearchBar"
import DayDetails from "./components/DayDetails"
import DayCard from "./components/DayCard"
import API from "./utils/API"

// import './App.css';

const App = () => {
//adding state to a dumb component happens above return
//at main level
//first array member is what you want to change, second is the method to change that thing

const [weatherInfo, setWeatherInfo] = useState({
  //initial values
  searchTerm: "",
  selectedDay: null,
  days: sampleData.data,
  location: "Denver, CO",
  // days: [],
  // location: ""
});

//destructure key value pairs for easier access to variables
const {searchTerm, selectedDay, days, location} = weatherInfo

//standard functions need to live in parent component and get passed down to children as props
//since searchterm lives here, we build here and pass down to searchbar
//
const handleInputChange = e => {
  console.log(e.target)
  //name => WHICH tells you which state you want to change in SearchBar Input
  //value => WHAT I want to set it to
  const { name, value} = e.target;
  //useState method
  setWeatherInfo({ ...weatherInfo, [name]: value})
}
return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather Info for {location}</h1>
        </Col>
        <Col md={5}>
          <SearchBar
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        {days.map(day => (
          <Col>
            <DayCard
            key={day.ts}
            day= {moment(day.valid_date, "YYYY-MM-DD").format('dddd')}
            icon = {day.weather.icon}
            description={day.weather.description}
            temp={day.temp}
            high={day.max_temp}
            low={day.min_temp}
            precip={day.pop}
            isSelected={day === selectedDay}
            //useState overwrites old value with new value, spreads in all values in and then puts in selected Day
            //so we don't lose any key value pairs from state when we want selectedDay
            selectDay={() => setWeatherInfo({...weatherInfo, selectedDay: day})}
            />
          </Col>
        ))}
      </Row>
      <Row>
    <Col>
    {selectedDay ? (
      <DayDetails
      day= {moment(selectedDay.valid_date, "YYYY-MM-DD").format("dddd, MMMM Do, YYYY")}
      icon = {selectedDay.weather.icon}
      description={selectedDay.weather.description}
      temp={selectedDay.temp}
      high={selectedDay.max_temp}
      low={selectedDay.min_temp}
      precip={selectedDay.pop}
     
     
     />
    ): (

      <h3>Click on an above day to get details</h3>
    )}
</Col>
  </Row>
    </Container>
  );
}

export default App;