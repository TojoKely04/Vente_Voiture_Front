import React, {useState , useEffect} from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import './content.css'; 
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const ContentMoteur = () => {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios.get('moteur')
           .then(response => {
                setGroups(response.data);
           })
           .catch(error => {
             console.error('Erreur lors de la récupération des posts:', error);
           });
    }, []);

    function addItem(newItem) {
        axios.post('moteur', { moteur: newItem })
           .then(response => {
                setGroups([...groups, response.data]);
           })
           .catch(error => {
             console.error('Erreur lors de l\'ajout du post:', error);
           });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newItem = event.target.elements.moteur.value;
        addItem(newItem);
        event.target.reset();
    }

    function remove(id) {
        axios.delete(`moteur/${id}`)
           .then(response => {
             const newItems = groups.filter(group => group.idMoteur !== id);
             setGroups(newItems);
           })
           .catch(error => {
             console.error('Erreur lors de la suppression du post:', error);
           });
    }



    const groupList = groups.map(group => {
        return <tr>
            <td> {group.moteur}{console.log(group)}</td>
            <td> <a href="#">Modifier</a> </td>
            <td> <button onClick={() => remove(group.idMoteur)}>Supprimer</button> </td>
        </tr>
        
    });


    return (
        <>
        <Header/> 
        <Container>
            <div>
            <Form onSubmit={handleSubmit}>    
            <div className="">
                <h2 className="ajout--title"> Ajouter Moteur </h2>
                <p> Enérgies : <input type="text" name="moteur" id="" /> </p>
                <button type="submit" id="boutton">Ajouter</button>
            </div>
            </Form>

            <div className="">
            <h2 className="list--title">  Liste Moteur </h2>
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

export default ContentMoteur;