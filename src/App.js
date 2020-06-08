import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from "reactstrap";
import moment from 'moment';
import sampleData from "./data/sample.json"
import SearchBar from "./components/SearchBar"
import DayDetails from "./components/DayDetails"
import DayCard from "./components/DayCard"

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


  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather Info for {location}</h1>
        </Col>
        <Col md={5}>
          <SearchBar/>
        </Col>
      </Row>
      <Row>
        {days.data.map(day => (
          <Col>
            <DayCard
            day= {moment(day.valid_date, "YYYY-MM-DD").format('dddd')}
            icon = {day.weather.icon}
            description={day.weather.description}
            temp={day.temp}
            high={day.max_temp}
            low={day.min_temp}
            precip={day.pop}
            />
          </Col>
        ))}
      </Row>
      <Row>
    <Col>
    <DayDetails></DayDetails>
    </Col>
  </Row>
    </Container>
  );
}

export default App;