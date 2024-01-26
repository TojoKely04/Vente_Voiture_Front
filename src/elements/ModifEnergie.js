import React, { useState,useEffect } from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import Table from 'react-bootstrap/Table';

import './content.css';


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

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const energie = form.elements.energie.value;
        try{
            const formData = {
                "energie" : energie
            };
            console.log(JSON.stringify(formData));
            const response = await fetch('/energie' , {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            } ); 
            if (response.ok) {
                async function fetchData() {
                    const result = await fetch('energie');
                    const body = await result.json;
                    setGroups(body);
                }
                fetchData();
            } else {
                // La requête a échoué, gérer les erreurs si nécessaire
                console.error('Erreur lors de la modification de l\'objet')
            }
            }catch(error) {
                alert('Erreur reseau :' , error);
            }
        };

    return (
        <>
        <Header/> 
        <Container>
            <Form>    
            <div className="">
                <h2 className="ajout--title"> Modifier énérgie </h2>
                <p> Enérgies : <input type="text" name="InsertEnergie" id="" /> </p>
                <button type="submit" id="boutton">Modifier</button>
            </div>
            </Form>

        </Container>
        </>
    );

}    

export default ModifEnergie;