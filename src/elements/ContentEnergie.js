import React from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import Table from 'react-bootstrap/Table';


const ContentEnergie = () => {
    return (
        <>
        <Header/> 
        <Container>
            <div>
            <Form>    
            <div className="">
                <h2 className="ajout--title"> Ajouter énérgie </h2>
                <p> Enérgies : <input type="text" name="InsertEnergie" id="" /> </p>
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
                    <tr>
                        <td> Diesel</td>
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

export default ContentEnergie;