import React , { useState,useEffect } from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import './content.css'; 

const ModifMoteur = () => {

    const [groups , setGroups] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const result = await fetch('moteur');
        const body = await result.json();
        setGroups(body);
      }
      fetchData();
    }, [])

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const moteur = form.elements.moteur.value;
        try{
            const formData = {
                "moteur" : moteur
            };
            console.log(JSON.stringify(formData));
            const response = await fetch('/moteur' , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            } );
            if (response.ok) {
                async function fetchData() {
                    const result = await fetch('moteur');
                    const body = await result.json;
                    setGroups(body);
                }
                fetchData();
            }else{
                console.error('Erreur lors de la modification de l\'objet')
            }
        }catch(error){
            alert('Erreur reseau :' , error);
        }
    };

    return (
        <>
        <Header/>
        <Container>
        <div className="body--activity">
                <h1 className="ajout--title"> Modifier moteur </h1>
                <p> Moteur : <input type="text" name="InsertMoteur" id="" /> </p>
                <button type="submit" id="boutton">Valider</button>   
            </div>
            </Container>
            </>
    )
}

export default ModifMoteur;