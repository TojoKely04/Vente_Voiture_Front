import React from "react";
import '../assets/Content.css';
import { Col, Row } from "reactstrap";
import SideNavigation from "../header/SideBar";
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container } from 'reactstrap';

const ContentBoiteVitesse = () => {
    const styles = {
        contentDiv: {
          display: "flex",
        },
        contentMargin: {
          marginLeft: "10px",
          width: "100%",
        },
      };
    return (
      <>
      <Header/>
      <Container>
          <div style={styles.contentDiv}>
            <div style={styles.contentMargin}>
            <div className="body--activity">
                <div className="">
                    <h1 className="ajout--title"> Ajouter Boite de Vitesse </h1>
                    <p> Boite de vitesse : <input type="text" name="InsertMarque" id="" /> </p>
                </div>

                <div className="">
                <h1 className="list--title">  Liste Boite de vitesse </h1>
                    <table>
                        <tr>
                            <td> Nom </td>
                            <td> Action </td>
                        </tr>
                        <tr>
                            <td> Nom Boite de vitesse </td>
                            <td> <a href="#">Modifier</a> </td>
                            <td> <a href="#">Supprimer</a> </td>
                        </tr>
                    </table>  
                </div>
                    
                </div>
                </div>
      </div>
      </Container>
      </>
    )
}

export default ContentBoiteVitesse;