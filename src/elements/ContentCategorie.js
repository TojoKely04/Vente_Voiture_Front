import React from "react";
import '../assets/Content.css';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import Header from '../header/header';
import './content.css'; 

import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';

const ContentCategorie = () => {
    return (
        <>
        <Header/>
        <Container>
            <div>
            <Form>    
            <div className="">
                <h2 className="ajout--title"> Ajouter categorie </h2>
                <p> Catégories : <input type="text" name="InsertCategorie" id="" /> </p>
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
                    <tr>
                        <td> 12 places </td>
                        <td> <a href="#">Modifier</a> </td>
                        <td> <a href="#">Supprimer</a> </td>
                    </tr>
                    </tbody>
                </Table>  
            </div> 
            </div>
        </Container>
        </>
    );
};

export default ContentCategorie;