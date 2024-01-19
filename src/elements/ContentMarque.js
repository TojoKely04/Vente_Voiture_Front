import React from "react";
import '../assets/Content.css';
import Header from '../header/header';
import Table from 'react-bootstrap/Table';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import './content.css'; 
const ContentMarque = () => {
    return (
        <>
        <Header/>
            <Container>
            <div>
            <Form>    
            <div className="">
                <h2 className="ajout--title"> Ajouter marque </h2>
                <p> Marque : <input type="text" name="InsertMarque" id="" /> </p>
                <button type="submit">Ajouter</button>
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
                    <tr>
                        <td> Audi </td>
                        <td> <a href="#">Modifier</a> </td>
                        <td> <a href="#">Supprimer</a> </td>
                    </tr>
                    </tbody>
                </Table>  
            </div> 
            </div>
        </Container>
        </>
    )
}

export default ContentMarque;