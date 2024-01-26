import {React , useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container } from 'reactstrap';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Get ID from URL
function Detail(){
    const { id } = useParams();
    const navigate = useNavigate();

    function refuser(id) {
       axios.delete(`/annonces/${id}`)
       .then(response => {
           navigate('/Annonce');
       })
       .catch(error => {
         console.error('Erreur lors de la suppression du post:', error);
       });
    };

    
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
                    <Card className="horizontal-card">
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img src="https://via.placeholder.com/200" alt="Card image"/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Details De L'Annonce</Card.Title>
                                    <Card.Text>
                                        <p>Nom : {details.nom}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        <p>Date de publication : {details.datePublication}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        {/* <p>Catégories : {details.categorie.categorie} </p> */}
                                    </Card.Text>
                                    <Card.Text>
                                        {/* <p>Marque : {details.marque.marque}</p> */}
                                    </Card.Text>
                                    <Card.Text>
                                        <p>Couleur : {details.couleur}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        {/* <p>Moteur : {details.moteur.moteur}</p> */}
                                    </Card.Text>
                                    <Card.Text>
                                        <p>Kilometrage : {details.anneeSortie}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        <p>Année de sortie : {details.anneeSortie}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        {/* <p>Vitesse : {details.boiteVitesse.vitesse}</p> */}
                                    </Card.Text>
                                    <Card.Text>
                                        {/* <p>Enérgie : {details.energie.energie}</p> */}
                                    </Card.Text>
                                    <Card.Text>
                                        <p>Prix de vente : {details.prix}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        {/* <p>Auteur: {details.utilisateur.nom}</p> */}
                                    </Card.Text>
                                    <Card.Text>
                                        <Button variant="success">Accepter</Button>{' '}
                                        <Button variant="danger" onClick={() => refuser(details.idAnnonce)}>Refuser</Button>{' '}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Container>
        </div>
    );
};
export default Detail; 