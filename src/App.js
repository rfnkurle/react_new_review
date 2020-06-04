import React from 'react';
import { Container, Row, Col} from "reactstrap";
import SearchBar from "./components/SearchBar"
import DayDetails from "./components/DayDetails"
import DayCard from "./components/DayCard"

// import './App.css';

function App() {
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
      <Row></Row>
      <Row>
    <Col>
    <DayDetails></DayDetails>
    </Col>
  </Row>
    </Container>
  );
}

export default App;