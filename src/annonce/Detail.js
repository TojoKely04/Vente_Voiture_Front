import {React , useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container } from 'reactstrap';
import { useParams } from "react-router-dom";

// Get ID from URL
function Detail(){
    var {id} = useParams();
    console.log(id);
    const [annonce, setAnnonce] = useState([]);

    useEffect((id) => {
        fetch('/annonces/'+id)
          .then(response => response.json())
          .then(data => setAnnonce(data));
          console.log(annonce);
      }, []);
      
    return(
        <div>
            <Header/>
            <Container>
            <Row xs={1} md={1} className="g-4" >
            {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
                <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
                <div style={{float:'left'}}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                </div>
                
                <div style={{float:'left'}} >
                <Card.Body>
                <Card.Text>
                {/* <p>Nom : {annonce.nom}</p>
                <p>Catégories : {annonce.categorie.categorie} </p>
                <p>Marque : {annonce.marque.marque}</p>
                <p>Date de publication : {annonce.datePublication}</p>
                <p>Couleur : {annonce.couleur}</p>
                <p>Moteur : {annonce.moteur.moteur}</p>
                <p>Kilometrage : {annonce.anneeSortie}</p>
                <p>Année de sortie : {annonce.anneeSortie}</p>
                <p>Vitesse : {annonce.boiteVitesse.vitesse}</p>
                <p>Enérgie : {annonce.energie.energie}</p>
                <p>Prix de vente : {annonce.prix}</p>
                <p>Auteur: {annonce.utilisateur.nom}</p> */}
                    <Button variant="success">Accepter</Button>{' '}
                    <Button variant="danger">Refuser</Button>{' '}
                </Card.Text>
                </Card.Body>
                </div>
                </Card>
            </Col>
            ))}
            </Row>
            </Container>
        </div>
    );
};
export default Detail; 