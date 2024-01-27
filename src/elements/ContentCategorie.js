import React, { useEffect, useState } from 'react';
import '../assets/Content.css';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import Header from '../header/header';
import './content.css'; 
import axios from 'axios';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';

const ContentCategorie = () => {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios.get('categorie')
           .then(response => {
                setGroups(response.data);
           })
           .catch(error => {
             console.error('Erreur lors de la récupération des posts:', error);
           });
    }, []);

    function addItem(newItem) {
        axios.post('categorie', { categorie: newItem })
           .then(response => {
                setGroups([...groups, response.data]);
           })
           .catch(error => {
             console.error('Erreur lors de l\'ajout du post:', error);
           });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newItem = event.target.elements.categorie.value;
        addItem(newItem);
        event.target.reset();
    }

    function remove(id) {
        axios.delete(`categorie/${id}`)
           .then(response => {
             const newItems = groups.filter(group => group.idCategorie !== id);
             setGroups(newItems);
           })
           .catch(error => {
             console.error('Erreur lors de la suppression du post:', error);
           });
    }



    const groupList = groups.map(group => {
        return <tr>
            <td> {group.categorie}{console.log(group)}</td>
            <td> <a href={`/ModifCategorie/${group.idCategorie}`}> Modifier</a> </td>
            <td> <button onClick={() => remove(group.idCategorie)}>Supprimer</button> </td>
        </tr>
        
    });
    
    return (
        <>
        <Header/>
        <Container>
            <div>
            <Form onSubmit={handleSubmit}>    
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