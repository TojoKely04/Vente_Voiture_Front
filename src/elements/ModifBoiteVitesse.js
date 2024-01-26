import React, { useEffect, useState } from 'react';
import '../assets/Content.css';
import { Col, Row } from "reactstrap";
import SideNavigation from "../header/SideBar";
import Header from '../header/header';
import Table from 'react-bootstrap/Table';
import { Label , Input, Form, FormGroup, Container } from 'reactstrap';
import './content.css'; 

const ModifBoiteVitesse = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const result = await fetch(`vitesse`);
          const body = await result.json();
          setGroups(body);
        }
        fetchData();
      }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const vitesse = form.elements.vitesse.value;
        try{
            const formData = {
                "vitesse":vitesse
            };
            console.log(JSON.stringify(formData));
            const response = await fetch(`/vitesse`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                async function fetchData() {
                    const result = await fetch(`vitesse`);
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
            <div className="">
                <h2 className="ajout--title"> Modifier vitesse </h2>
                <p> Vitesse : <input type="text" id="vitesse" /> </p>
                <button type="submit" id="boutton">Modifier</button>
            </div>
            </Form>
        </Container>
         </>
    );
};

export default ModifBoiteVitesse;


