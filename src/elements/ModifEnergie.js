import React, { useState,useEffect } from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import Table from 'react-bootstrap/Table';

import './content.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const ModifEnergie = () => {
    
    const [groups , setGroups] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const result = await fetch(`energie`);
          const body = await result.json();
          setGroups(body);
        }
        fetchData();
      }, []);

    const {id} = useParams();
    const navigate = useNavigate();

    function update(event) {
        event.preventDefault();
        const newItem = event.target.elements.energie.value;
        const data = {
            "idEnergie":id,
            "energie": newItem
        }
        axios.put(`/energie` , data)
        .then((response)=>{
            navigate('/energie');
        })
        .catch(error => {
            console.error('Erreur lors de la modification :' , error);
        });
        event.target.reset();
    }

    return (
        <>
        <Header/> 
        <Container>
            <Form onSubmit={update}>    
            <div className="body--activity">
                <h2 className="ajout--title"> Modifier énérgie </h2>
                <p> Enérgies : <input type="text" name="energie" id="" /> </p>
                <button type="submit" id="boutton">Valider</button>
            </div>
            </Form>

        </Container>
        </>
    );

}    

export default ModifEnergie;