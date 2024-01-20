import {React , useEffect , useState} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../header/header';
import { Container , Button} from 'reactstrap';
import { Link } from 'react-router-dom';


const Liste = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const result = await fetch(`annonces`);
          const body = await result.json();
          setGroups(body);
        }
        fetchData();
      }, []);

    const groupList = groups.map(group => {
        return <Container>
        <Row xs={1} md={2} className="g-4" >
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
            {/* <div className='container'> */}
              <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Text>
                        <p>Nom : {group.nom}</p>
                        <p>Catégories : {group.categorie.categorie}</p>
                        <p>Marque :{group.marque.marque}</p>
                        <p>Date de publication :{group.datePublication}</p>
                        <p>Auteur : {group.utilisateur.nom}</p>
                  </Card.Text>
                  <Button variant="primary" tag={Link} to={"/Detail/" + group.idAnnonce}>Plus de détails</Button>
                  {/* <Card.Link href="/Detail/group.idAnnonce"></Card.Link> */}
                </Card.Body>
              </Card>
              {/* </div> */}
            </Col>
          ))}
        </Row>
        </Container>
        
    });
    return ( 
    <>    
      <Header/>
      {groupList}
    </>
    );
}
export default Liste; 
