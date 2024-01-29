import React , { useState,useEffect } from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import './content.css'; 
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ModifMoteur = () => {

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
        const newItem = event.target.elements.moteur.value;
        const data = {
            "idMoteur":id,
            "moteur":newItem
        }
        axios.put('https://ventevoitureback-production.up.railway.app/moteur' , data)
        .then((response)=>{
            navigate('/moteur'); 
        })
        .catch(error => {
            console.log('Erreur lors de la modification :' , error);
        })
        event.target.reset();

    }

    return (
        <>
        <Header/>
        <Container>
            <form onSubmit={update}>
        <div className="body--activity">
                <h1 className="ajout--title"> Modifier moteur </h1>
                <p> Moteur : <input type="text" name="moteur" id="" /> </p>
                <button type="submit" id="boutton">Valider</button>   
            </div>
            </form>
            </Container>
            </>
    )
}

export default ModifMoteur;