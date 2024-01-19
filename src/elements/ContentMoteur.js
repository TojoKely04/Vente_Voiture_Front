import React from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import './content.css'; 
const ContentMoteur = () => {
    return (
        <>
        <Header/>
        <Container>
        <div className="body--activity">
            <div className="">
                <h1 className="ajout--title"> Ajouter Marque </h1>
                <p> Moteur : <input type="text" name="InsertMoteur" id="" /> </p>
                <button type="submit" id="boutton">Ajouter</button>
            </div>

            <div className="">
            <h1 className="list--title">  Liste Moteur </h1>
                <table>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    <tr>
                        <td> Nom Moteur </td>
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

export default ContentMoteur;