import React, { useEffect, useState } from "react";
import '../assets/Content.css';
import Header from '../header/header';
import Table from 'react-bootstrap/Table';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import './content.css'; 
const ContentMarque = () => {

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
        const cat = form.elements.marque.value;
        try{
            const formData = {
                "marque" : marque
            };
            console.log(JSON.stringify(formData));
            const response = await fetch('/marque' , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            } );
            if (response.ok) {
                async function fetchData() {
                    const result = await fetch('marque');
                    const body = await result.json;
                    setGroups(body);
                }
                fetchData();
            }else{
                console.error('Erreur lors de l\'insertion de l\'objet')
            }
        }catch(error){
            alert('Erreur reseau :' , error);
        }
    };

    const groupList = groups.map(group => {
        return <tr>
            <td> {group.marque}{console.log(group)}</td>
            <td> <a href="#">Modifier</a> </td>
            <td> <button onClick={() => remove(group.idMarque)}>Supprimer</button> </td>
        </tr>
        
    });

    const remove = async (id) => {
        await fetch(`marque/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
            async function fetchData() {
                const result = await fetch(`marque`);
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
                <h2 className="ajout--title"> Ajouter marque </h2>
                <p> Marque : <input type="text" name="InsertMarque" id="" /> </p>
                <button type="submit" id="boutton">Ajouter</button>
            </div>
            </Form>

            <div className="">
            <h2 className="list--title">  Liste Marques </h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <tr>
                        <td> Audi </td>
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
    )
}

export default ContentMarque;