import React, { useEffect, useState } from "react";
import '../assets/Content.css';
import Header from '../header/header';
import Table from 'react-bootstrap/Table';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import './content.css'; 

const ModifMarque = () => {

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
        const marque = form.elements.marque.value;
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
            <Form>    
            <div className="">
                <h2 className="ajout--title"> Modifier marque </h2>
                <p> Marque : <input type="text" name="InsertMarque" id="" /> </p>
                <button type="submit" id="boutton">Modifier</button>
            </div>
            </Form>

           
        </Container>
        </>
    )
}

export default ModifMarque;