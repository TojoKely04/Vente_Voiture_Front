import React, { useEffect, useState } from 'react';
import '../assets/Content.css'; 
import axios from 'axios';
import { useParams , useNavigate} from 'react-router';
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

      const {id} = useParams();
      const navigate = useNavigate();

      function update(event){
        event.preventDefault();
        const newItem = event.target.elements.categorie.value;
        const data = {
            "idCategorie": id, 
            "categorie": newItem
        }
        axios.put(`/categorie`, data)
        .then(response => {

            navigate('/categorie');
        })
        .catch(error => {
            console.error('Erreur lors de la suppression du post:', error);
        });
        event.target.reset();
    }
    
    return (
        <>
        <Header/>
        <Container>
            <Form onSubmit={update}>    
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