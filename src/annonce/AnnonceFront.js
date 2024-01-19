import React from "react";
import HeaderFront from '../header/headerFront';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Annonce(){
    return(
        <div>
        <div>
            <HeaderFront />
        </div>
        <div  className="container">
              <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 2 }).map((_, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title><p>Nom :</p></Card.Title>
                      <Card.Text>
                      <p>Categorie : </p>
                      <p>Marque :</p>
                      <p>Auteur : </p>
                      </Card.Text>
                      <Button variant="primary">Plus d'informations</Button>
                      <Button variant="success"style={{marginLeft:"15px"}}>Ajouter favoris</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        </div>
        </div>
    );
}
export default Annonce; 