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
import car from '../assets/image/car.jpg'

// Get ID from URL
function Detail(){
    const [details, setDetails] = useState([]);
    const[cat,setCat] = useState([]);
    const[user,setUser] = useState([]);
    const[energie,setEnergie] = useState([]);
    const[vitesse,setVitesse] = useState([]);
    const[moteur,setMoteur] = useState([]);
    const[marque,setMarque] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`/annonces/${id}`)
        .then(response => {
            const donnee = response.data
            setDetails(donnee);
            setCat(donnee.categorie);
            setUser(donnee.utilisateur);
            setEnergie(donnee.energie.energie);
            setMarque(donnee.marque.marque);
            setMoteur(donnee.moteur.moteur);
            setVitesse(donnee.boiteVitesse.vitesse);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des posts:', error);
        });
    }, []);


    const navigate = useNavigate();

    function refuser(id) {
        const data = {
            "annonces": {
                "idAnnonce": id
            }            
        };
       axios.post(`/annoncesRefuser`,data)
       .then(response => {
           navigate('/Annonce');
       })
       .catch(error => {
         console.error('Erreur lors de la suppression du post:', error);
       });
    };

    
    function accepter(id) {
        const data = {
            "annonces": {
                "idAnnonce": id
            }            
        };
        axios.post('/annoncesAccepter',data)
        .then(response => {
            navigate('/Annonce');
        })
        .catch(error => {
          console.error('Erreur lors de la suppression du post:', error);
        });
     };

    
    

    const apropos = () => {
        return <>
            <Card.Text>
                <p>Nom : {details.nom}</p>
            </Card.Text>
             <Card.Text>
                <p>Date de publication : {details.datePublication}</p>
            </Card.Text>
            <Card.Text>
                <p>Catégories : {cat.categorie} </p> 
            </Card.Text>
           <Card.Text>
                <p>Marque : {marque.marque}</p>
            </Card.Text>
            <Card.Text>
                <p>Couleur : {details.couleur}</p>
            </Card.Text>
            <Card.Text>
                    <p>Moteur : {moteur.moteur}</p>
            </Card.Text>
            <Card.Text>
                <p>Kilometrage : {details.kilometrage}</p>
            </Card.Text>
            <Card.Text>
                <p>Année de sortie : {details.anneeSortie}</p>
            </Card.Text>
            <Card.Text>
                    <p>Vitesse : {vitesse.vitesse}</p>
            </Card.Text>
            <Card.Text>
                    <p>Enérgie : {energie.energie}</p>
            </Card.Text>
            <Card.Text>
                <p>Prix de vente : {details.prix}</p>
            </Card.Text> 
            <Card.Text>
                    <p>Auteur: {user.nom}</p>
            </Card.Text>
        </>
    };

    return(
        <div>
            {console.log(details.categorie)}
            <Header/>
                <Container>
                    <Card className="horizontal-card">
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img src={car} alt="Card image"/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Details De L'Annonce</Card.Title>
                                    {apropos()}
                                    <Card.Text>
                                        <Button variant="success" onClick={() => accepter(details.idAnnonce)}>Accepter</Button>{' '}
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