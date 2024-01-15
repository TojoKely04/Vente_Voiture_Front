import React from 'react';
import Button from 'react-bootstrap/Button';
import Head from './header';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Liste = () => {
    return ( 
    <>    
    <Row xs={1} md={2} className="g-4" >
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
        {/* <div className='container'> */}
          <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Text>
                    <p>Nom :</p>
                    <p>Catégories : </p>
                    <p>Marque :</p>
                    <p>Date de publication :</p>
                    <p>Auteur : </p>
              </Card.Text>
              <Card.Link href="/Detail">Plus de détails</Card.Link>
            </Card.Body>
          </Card>
          {/* </div> */}
        </Col>
      ))}
    </Row>
    </>
    );
}
export default Liste; 
