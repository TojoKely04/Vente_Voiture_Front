import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='' style={{marginTop:'0px',  marginLeft:'-43px', position:'relative', top:'-120px'}}>
        <div>
            <Navbar bg="" data-bs-theme="">
                <Container  style={{marginLeft:'0px'}}>
                {<a onClick={handleShow} style={{color:'white'}}>Menu</a>}
                <Nav className="" style={{paddingLeft:'20px'}}>
                    <Nav.Link href="#pricing" style={{position:'relative',  left:'300px'}}>Déconnexion</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
      </div>

      {<Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="#">Annonces</Nav.Link>
                    <Nav.Link eventKey="#">Statistiques</Nav.Link>
                    <Nav.Link eventKey="#">Gestion éléments nécessaires</Nav.Link>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
            </Nav>
          </Offcanvas.Body>
      </Offcanvas> }
    </div>
  );
}

export default Example;