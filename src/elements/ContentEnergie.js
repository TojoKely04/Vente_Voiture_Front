import React from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';

const ContentEnergie = () => {
    return (
        <>
        <Header/>
        <Container>
        <div className="body--activity">
            <div className="">
                <h1 className="ajout--title"> Ajouter Energie </h1>
                <p> Energie : <input type="text" name="InsertMarque" id="" /> </p>
            </div>

            <div className="">
            <h1 className="list--title">  Liste Energie </h1>
                <table>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    <tr>
                        <td> Nom Energie </td>
                        <td> <a href="#">Modifier</a> </td>
                        <td> <a href="#">Supprimer</a> </td>
                    </tr>
                </table>  
            </div>
                
            </div>
        </Container>
        </>
    )
}

export default ContentEnergie;