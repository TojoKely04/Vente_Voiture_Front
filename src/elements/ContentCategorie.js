import React, { useEffect, useState } from 'react';
import '../assets/Content.css';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import Header from '../header/header';
import './content.css'; 

import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';

const ContentCategorie = () => {
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
                console.error('Erreur lors de l\'insertion de l\'objet');
            }
        } catch (error) {
            alert('Erreur réseau :', error);
        }
    };

    const groupList = groups.map(group => {
        return <tr>
            <td> {group.categorie}{console.log(group)}</td>
            <td> <a href="#">Modifier</a> </td>
            <td> <button onClick={() => remove(group.idCategorie)}>Supprimer</button> </td>
        </tr>
        
    });

    const remove = async (id) => {
        await fetch(`categorie/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
            async function fetchData() {
                const result = await fetch(`categorie`);
                const body = await result.json();
                setGroups(body);
            }
            fetchData();
        });
    }
    return (
        <>
        <Header/>
        <Container>
            <div>
            <Form onSubmit={onSubmit}>    
            <div className="">
                <h2 className="ajout--title"> Ajouter categorie </h2>
                <p> Catégories : <input type="text"  id="categorie" /> </p>
                <button type="submit" id="boutton">Ajouter</button>
            </div>
            </Form>

            <div className="">
            <h2 className="list--title">  Liste Categorie </h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <tr>
                        <td> 12 places </td>
                        <td> <a href="#">Modifier</a> </td>
                        <td> <a href="#">Supprimer</a> </td>
                    </tr> */}
                    {groupList}
                    </tbody>
                </Table>  
            </div> 
            </div>
        </Container>
        </>
    );
};

export default ContentCategorie;