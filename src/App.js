import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from "reactstrap";
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


  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather Info for LOCATION</h1>
        </Col>
        <Col md={5}>
          <SearchBar/>
        </Col>
      </Row>
      <Row>
        {sampleData.data.map(day => (
          <Col>
            <DayCard/>
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