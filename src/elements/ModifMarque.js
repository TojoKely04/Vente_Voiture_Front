import React, { useEffect, useState } from "react";
import '../assets/Content.css';
import Header from '../header/header';
import Table from 'react-bootstrap/Table';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import './content.css'; 
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ModifMarque = () => {

    const [groups , setGroups] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const result = await fetch('https://ventevoitureback-production.up.railway.app/moteur');
        const body = await result.json();
        setGroups(body);
      }
      fetchData();
    }, [])

    const {id} = useParams();
    const navigate = useNavigate();

    function update(event) {
        event.preventDefault();
        const newItem  = event.target.elements.marque.value;
        const data = {
            "idMarque": id,
            "marque" : newItem
        }
        axios.put('https://ventevoitureback-production.up.railway.app/marque' , data)
        .then((response)=>{
            navigate('/marque');
        })
        .catch(error =>{
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
                <h2 className="ajout--title"> Modifier marque </h2>
                <p> Marque : <input type="text" name="marque" id="" /> </p>
                <button type="submit" id="boutton">Valider</button>
            </div>
            </Form>

           
        </Container>
        </>
    )
}

export default ModifMarque;