import React, { useEffect, useState  } from 'react';
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container } from 'reactstrap';
import './content.css'; 
import { useParams , useNavigate} from 'react-router';
import axios from 'axios';

const ModifBoiteVitesse = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const result = await fetch(`https://ventevoitureback-production.up.railway.app/vitesse`);
          const body = await result.json();
          setGroups(body);
        }
        fetchData();
      }, []);

    const {id} = useParams();
    const navigate = useNavigate();

    function update(event){
        event.preventDefault();
        const newItem = event.target.elements.vitesse.value;
        const data = {
            "idVitesse": id, 
            "vitesse": newItem
        }
        axios.put(`https://ventevoitureback-production.up.railway.app/vitesse`, data)
        .then(response => {
            navigate('/vitesse');
        })
        .catch(error => {
            console.error('Erreur lors de la suppression du post:', error);
        });
        event.target.reset();
    }
    
    return (
      <>
      <Header/>
      <Container>
            <div>
            <Form onSubmit={update}>    
            <div className="">
                <h2 className="ajout--title"> Modifier Boite de vitesse </h2>
                <p> Boite : <input type="text" name="vitesse" /> </p>
                <button type='submit' id='boutton'>Valider</button>
            </div>
            </Form>
            </div>
        </Container>
         </>
    );
};

export default ModifBoiteVitesse;


