import React , {useEffect , useState} from 'react';
import CanvasJsReact from '@canvasjs/react-charts';
import Header from '../header/header';
import {Label , Input, From , FormGroup, Container, Button } from 'reactstrap';
import axios from 'axios';

var CanvasJSChart = CanvasJsReact.CanvasJSChart;


const Stats = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get('https://ventevoitureback-production.up.railway.app/StatMarque')
            .then(response => {
                setChartData(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des statistiques Prix :', error);
            });
    }, []);

    const options = {
        title: {
            text: "Statistiques de voitures par rapport au Marque  "
        },
        axisX: {
            interval:1
            // valueFormatString: ""
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Nombre de voiture de marque" 
    },
        data: [{
            type: "bar",
            name: "companies",
		    color: "#014D65",
		    axisYType: "secondary",
            
            dataPoints: chartData.map(stat => ({
                x: stat.idMarque,
                y: stat.countMarque,
                label: stat.marque
            })),
            toolTipContent: "{label}: {y} - Marque: {o}"
        }]
    };
    return (
      
        <div>
        {console.log(chartData)}
          <Header/>
          <Container>
            <CanvasJSChart options = {options}/>
          </Container>
        </div> 
    );
      }
    
    export default Stats;
    