import React from "react";
import '../assets/Content.css';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';

const ContentCategorie = () => {
    return (
        <>
        <Header/>
        <Container>
            <div className="">
                <h2 className="ajout--title"> Ajouter categorie </h2>
                <p> Energie : <input type="text" name="InsertMarque" id="" /> </p>
            </div>

            <div className="">
            <h2 className="list--title">  Liste Categorie </h2>
                <Table className="striped bordered hover ">
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
        </Container>
        </>
    );
};

export default ContentCategorie;