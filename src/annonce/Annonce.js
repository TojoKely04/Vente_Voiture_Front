import {React , useEffect , useState} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../header/header';
import { Container , Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import car from '../assets/image/car.jpg'

const Liste = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
      axios.get('https://ventevoitureback-production.up.railway.app/annonces/nonLus')
      .then(response => {
          setGroups(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des posts:', error);
      });
    }, []);

    const groupList = groups.map(group => {
        return <>
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
                <Card.Img variant="top" src={car} />
                <Card.Body>
                  <Card.Text>
                  <p>Nom : {group.nom}</p>
                  <p>Catégories : {group.categorie.categorie}</p>
                  <p>Marque :{group.marque.marque}</p>
                  <p>Date de publication :{group.datePublication}</p>
                  <p>Auteur : {group.utilisateur.nom}</p>
                  </Card.Text>
                  <Button variant="primary" tag={Link} to={"/Detail/" + group.idAnnonce}>Plus de détails</Button>
                  </Card.Body>
              </Card>
            </Col>
          ))}
        </>
    });
    return ( 
    <>    
      <Header/>
      <Container  style={{marginLeft:'90px'}}>
      <h2 className="ajout--title"> Annonces non validées</h2>
      <br></br>
        <Row xs={1} md={3} className="g-4" >
          {groupList}     
        </Row>
      </Container>
    </>
    );
}
export default Liste; 
