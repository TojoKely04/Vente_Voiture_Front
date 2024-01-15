import React from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';

const ContentMarque = () => {
    return (
        <>
        <Header/>
        <Container>
        <div className="body--activity">
            <div className="">
                <h1 className="ajout--title"> Ajouter Marque </h1>
                <p> Marque : <input type="text" name="InsertMarque" id="" /> </p>
            </div>

            <div className="">
            <h1 className="list--title">  Liste Marque </h1>
                <table>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    <tr>
                        <td> Nom Marque </td>
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

export default ContentMarque;