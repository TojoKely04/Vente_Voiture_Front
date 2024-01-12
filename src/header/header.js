import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='' style={{marginTop:'0px',  marginLeft:'0px'}}>
        <div>
            <Navbar bg="" data-bs-theme="">
                <Container  style={{marginLeft:'0px'}}>
                <a onClick={handleShow} style={{color:'white'}}>Menu</a>
                <Nav className="" style={{paddingLeft:'20px'}}>
                    <Nav.Link href="#pricing" style={{position:'relative',  left:'270px'}}>Déconnexion</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Example;