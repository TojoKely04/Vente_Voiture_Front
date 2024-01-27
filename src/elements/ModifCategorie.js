import React, { useEffect, useState } from 'react';
import '../assets/Content.css';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import Header from '../header/header';
import './content.css'; 

import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';

const ModifCategorie = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const result = await fetch(`categorie`);
          const body = await result.json();
          setGroups(body);
        }
        fetchData();
      }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const cat = form.elements.categorie.value;
        try{
            const formData = {
                "categorie":cat
            };
            console.log(JSON.stringify(formData));
            const response = await fetch(`/categorie`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                async function fetchData() {
                    const result = await fetch(`categorie`);
                    const body = await result.json();
                    setGroups(body);
                }
                fetchData();

            } else {
                // La requête a échoué, gérer les erreurs si nécessaire
                console.error('Erreur lors de la modification de l\'objet')
            }
        } catch (error) {
            alert('Erreur réseau :', error);
        }
    };
    
    return (
        <>
        <Header/>
        <Container>
            <Form onSubmit={onSubmit}>    
            <div className="body--activity">
                <h2 className="ajout--title"> Modifier categorie </h2>
                <p> Catégories : <input type="text"  id="categorie" /> </p>
                <button type="submit" id="boutton">Valider</button>
            </div>
            </Form>
        </Container>
        </>
    );
};

export default ModifCategorie;