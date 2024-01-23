import React, { useState } from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import Table from 'react-bootstrap/Table';

import './content.css';
import { setgroups } from "process";


const ContentEnergie = () => {
    
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
        const cat = form.elements.energie.value;
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
                    setgroups(body);
                }
                fetchData();
            } else {
                // La requête a échoué, gérer les erreurs si nécessaire
                console.error('Erreur lors de l\'insertion de l\'objet');
            }
            }catch(error) {
                alert('Erreur reseau :' , error);
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
            await fetch(`energie/${id}`, {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
                async function fetchData() {
                    const result = await fetch(`energie`);
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
            <Form>    
            <div className="">
                <h2 className="ajout--title"> Ajouter énérgie </h2>
                <p> Enérgies : <input type="text" name="InsertEnergie" id="" /> </p>
                <button type="submit" id="boutton">Ajouter</button>
            </div>
            </Form>

            <div className="">
            <h2 className="list--title">  Liste Energie </h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <tr>
                        <td> Diesel</td>
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

}    

export default ContentEnergie;