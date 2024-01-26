import {React , useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container } from 'reactstrap';
import { useParams } from "react-router-dom";
import axios from 'axios';
// Get ID from URL
function Detail(){
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
       fetch(`/annonces/${id}`)
         .then(res => res.json())
         .then(data => setDetails(data));
    }, [id]);

    return(
        <div>
            {console.log(details)}
            <Header/>
            <Container>
            <Row xs={1} md={1} className="md-4" >
            {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
                <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
                <div style={{float:'left'}}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                </div>
                
                <div style={{float:'left'}} >
                <Card.Body>
                <Card.Text>
                <p>Nom : {details.nom}</p>
                <p>Catégories : {details.categorie.categorie} </p>
                <p>Marque : {details.marque.marque}</p>
                <p>Date de publication : {details.datePublication}</p>
                <p>Couleur : {details.couleur}</p>
                <p>Moteur : {details.moteur.moteur}</p>
                <p>Kilometrage : {details.anneeSortie}</p>
                <p>Année de sortie : {details.anneeSortie}</p>
                <p>Vitesse : {details.boiteVitesse.vitesse}</p>
                <p>Enérgie : {details.energie.energie}</p>
                <p>Prix de vente : {details.prix}</p>
                <p>Auteur: {details.utilisateur.nom}</p>
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