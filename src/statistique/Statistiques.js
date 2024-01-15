import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';

//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
    animationEnabled: true,
    title:{
      text: "Monthly Sales - 2017"
    },
    axisX: {
      valueFormatString: "MMM"
    },
    axisY: {
      title: "Sales (in USD)",
      prefix: "$"
    },
    data: [{
      yValueFormatString: "$#,###",
      xValueFormatString: "MMMM",
      type: "spline",
      dataPoints: [
        { x: new Date(2017, 0), y: 25060 },
        { x: new Date(2017, 1), y: 27980 },
        { x: new Date(2017, 2), y: 42800 },
        { x: new Date(2017, 3), y: 32400 },
        { x: new Date(2017, 4), y: 35260 },
        { x: new Date(2017, 5), y: 33900 },
        { x: new Date(2017, 6), y: 40000 },
        { x: new Date(2017, 7), y: 52500 },
        { x: new Date(2017, 8), y: 32300 },
        { x: new Date(2017, 9), y: 42000 },
        { x: new Date(2017, 10), y: 37160 },
        { x: new Date(2017, 11), y: 38400 }
      ]
    }]
  }

  const Stat = () => {
    return (
    <div>
      <Header/>
      <Container>
        <CanvasJSChart options = {options}/>
      </Container>
    </div> 
);
  }

export default Stat;