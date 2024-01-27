import React , {useEffect , useState} from 'react';
import CanvasJsReact from '@canvasjs/react-charts';
import Header from '../header/header';
import {Label , Input, From , FormGroup, Container, Button } from 'reactstrap';
import axios from 'axios';

var CanvasJSChart = CanvasJsReact.CanvasJSChart;

const Stats = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get('/StatPrix')
            .then(response => {
                setChartData(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des statistiques Prix :', error);
            });
    }, []);

    const options = {
        title: {
            text: "Statistiques de voitures par rapport au prix  "
        },
        axisX: {
            valueFormatString: ""
        },
        axisY: {
            title: "Nombre de Voiture vendu",
            prefix: ""
        },
        data: [{
            type: "column",
            dataPoints: chartData.map(stat => ({
                y: stat.countannoncevendu,
                x: stat.prix
                
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
    