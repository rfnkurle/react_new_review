import React from "react";
import { Card } from "reactstrap";


const DayDetails = props => {
    return(
        <Card>
        <h3>{props.temp}°</h3> 
        <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description}/>
     <p><strong>High:</strong> {props.high}°</p>
     <p><strong>Low:</strong> {props.low}°</p>
     <p><strong>Precip:</strong> {props.precip}%</p>
        </Card>
  )
}


export default DayDetails;