import React from "react";
import '../assets/Content.css';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container , Button } from 'reactstrap';
import './content.css'; 
const ContentMoteur = () => {

    const [groups , setGroups] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const result = await fetch('moteur');
        const body = await result.json();
        setGroups(body);
      }
      fetchData();
    }, [])

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const cat = form.elements.moteur.value;
        try{
            const formData = {
                "moteur" : moteur
            };
            console.log(JSON.stringify(formData));
            const response = await fetch('/moteur' , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            } );
            if (response.ok) {
                async function fetchData() {
                    const result = await fetch('moteur');
                    const body = await result.json;
                    setGroups(body);
                }
                fetchData();
            }else{
                console.error('Erreur lors de l\'insertion de l\'objet')
            }
        }catch(error){
            alert('Erreur reseau :' , error);
        }
    };

    const groupList = groups.map(group => {
        return <tr>
            <td> {group.moteur}{console.log(group)}</td>
            <td> <a href="#">Modifier</a> </td>
            <td> <button onClick={() => remove(group.idMoteur)}>Supprimer</button> </td>
        </tr>
        
    });

    const remove = async (id) => {
        await fetch(`moteur/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
            async function fetchData() {
                const result = await fetch(`moteur`);
                const body = await result.json();
                setGroups(body);
            }
            fetchData();
        });
    }

    return (
        <>
        <Header/>
        <Container>
        <div className="body--activity">
            <div className="">
                <h1 className="ajout--title"> Ajouter moteur </h1>
                <p> Moteur : <input type="text" name="InsertMoteur" id="" /> </p>
                <button type="submit" id="boutton">Ajouter</button>
            </div>

            <div className="">
            <h1 className="list--title">  Liste Moteur </h1>
                <table>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    {groupList}
                </table>  
            </div>
                
            </div>
            </Container>
            </>
    )
}

export default ContentMoteur;