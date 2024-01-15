import React from "react";
import '../Styles/Content.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import Button from 'react-bootstrap/Button';
const ContentCategorie = () => {
    return (
        <>
         {/* <div className="container"> */}
            <div className="">
                <h2 className="ajout--title"> Ajouter categorie </h2>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Catégorie
                    </Form.Label>
                    <Col sm="10" >
                        <Form.Control type="text" placeholder="Entrer le catégorie" style={{width:'700px'}}/>
                        <Button variant="primary" style={{marginLeft:'720px', position:'relative', top:'-45px', height:'35px'}}>Ajouter</Button>{' '}
                    </Col>
                </Form.Group>
            </div>

            <div className="">
            <h2 className="list--title">  Liste Categorie </h2>
                <Table className="striped bordered hover ">
                    <thead>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td> 12 places </td>
                        <td> <a href="#">Modifier</a> </td>
                        <td> <a href="#">Supprimer</a> </td>
                    </tr>
                    </tbody>
                </Table>  
            </div> 
             {/* </div> */}
            </>
    )
}

export default ContentCategorie;