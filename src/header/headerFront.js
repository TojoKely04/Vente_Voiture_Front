import { useState } from 'react';
import { Navbar, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Position from 'rsuite/esm/Overlay/Position';
import { Link } from 'react-router-dom';

const MyNavBar = ({ active, onSelect, ...props }) => {
    return (
     <Navbar {...props}>
       <Nav onSelect={onSelect} activeKey={active}>
         <Nav.Item eventKey="accueil"><Link to=""  style={{textDecoration:'none'}}>Annonces</Link></Nav.Item>
         <Nav.Item eventKey="2">Messages</Nav.Item>
         <Nav.Item eventKey="3">Historiques des annonces</Nav.Item>
         <Nav.Item eventKey="4">Favoris</Nav.Item>
         <Nav.Item eventKey="5">Déconnexion</Nav.Item>
       </Nav>
     </Navbar>
    );
   };
   
   export default function App() {
    const [activeTab, setActiveTab] = useState('accueil');
    return (
     <div>
       <div>
         <MyNavBar active={activeTab} onSelect={setActiveTab} />
       </div>
     </div>
    );}
