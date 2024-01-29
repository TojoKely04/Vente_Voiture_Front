import React , {useEffect , useState} from 'react';
import CanvasJsReact from '@canvasjs/react-charts';
import Header from '../header/header';
import {Label , Input, From , FormGroup, Container, Button } from 'reactstrap';
import axios from 'axios';

var CanvasJSChart = CanvasJsReact.CanvasJSChart;

const Stats = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get('https://ventevoitureback-production.up.railway.app/StatDate')
            .then(response => {
                setChartData(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des statistiques:', error);
            });
    }, []);

    const options = {
        title: {
            text: "Statistiques de voitures Vendu par dates "
        },
        axisX: {
            valueFormatString: "DD-MMM-YY"
        },
        axisY: {
            title: "Nombre de Voiture vendu",
            prefix: "Nbr de"
        },
        data: [{
            type: "spline",
            dataPoints: chartData.map(stat => ({
                x: new Date(stat.dates),
                y: stat.nombrennonces
            }))
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

