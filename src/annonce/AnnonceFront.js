import React from "react";
import HeaderFront from '../header/headerFront';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Annonce(){
    return(
        <div>
        <div>
            <HeaderFront />
        </div>
        <div  className="container">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="chemin/vers/votre/image.jpg" />
            <Card.Body>
              <Card.Title><p>Nom :</p></Card.Title>
              <Card.Text>
              <p>Categorie : </p>
              <p>Marque :</p>
              <p> Auteur : </p>
              </Card.Text>
              <Button variant="primary">Plus d'informations</Button>
              <Button variant="secondary">Ajouter favoris</Button>
            </Card.Body>
        </Card>
        </div>
        </div>
    );
}
export default Annonce; 