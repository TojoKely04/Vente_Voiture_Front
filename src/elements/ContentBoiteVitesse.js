import React from "react";
import '../assets/Content.css';
import { Col, Row } from "reactstrap";
import SideNavigation from "../header/SideBar";
import Header from '../header/header';
import Table from 'react-bootstrap/Table';
import { Label , Input, Form, FormGroup, Container } from 'reactstrap';
import './content.css'; 

const ContentBoiteVitesse = () => {
    return (
      <>
      <Header/>
      <Container>
            <div>
            <Form>    
            <div className="">
                <h2 className="ajout--title"> Ajouter vitesse </h2>
                <p> Vitesse : <input type="text" name="InsertEnergie" id="" /> </p>
                <button type="submit">Ajouter</button>
            </div>
            </Form>

            <div className="">
            <h2 className="list--title">  Liste vitesse </h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td> v1</td>
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

export default ContentBoiteVitesse;