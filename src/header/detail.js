import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Head from './header';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Detail(){
    return(
        <>
            <Row xs={1} md={1} className="g-4" >
            {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
            {/* <div className='container'>    */}
                <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
                <div style={{float:'left'}}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                </div>
                
                <div style={{float:'left'}} >
                <Card.Body>
                <Card.Text>
                        <p>Nom :</p>
                        <p>Catégories : </p>
                        <p>Marque :</p>
                        <p>Date de publication :</p>
                        <p>Couleur : </p>
                        <p>Moteur :</p>
                        <p>Kilometrage :</p>
                        <p>Année de sortie :</p>
                        <p>Vitesse :</p>
                        <p>Enérgie :</p>
                        <p>Prix de vente :</p>
                        <p>Auteur: </p>
                        <Button variant="success">Accepter</Button>{' '}
                        <Button variant="danger">Refuser</Button>{' '}
                </Card.Text>
                </Card.Body>
                </div>
                </Card>
          {/* </div> */}
        </Col>
      ))}
    </Row>
        </>
    )
}
export default Detail; 