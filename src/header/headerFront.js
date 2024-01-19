import { useState } from 'react';
import { Navbar, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const MyNavBar = ({ active, onSelect, ...props }) => {
    return (
     <Navbar {...props}>
       <Navbar.Brand href="#">MonSite</Navbar.Brand>
       <Nav onSelect={onSelect} activeKey={active}>
         <Nav.Item eventKey="accueil">Accueil</Nav.Item>
         <Nav.Item eventKey="2">Tutoriels</Nav.Item>
         <Nav.Item eventKey="3">GBlog</Nav.Item>
         <Nav.Menu title="Pratiques">
           <Nav.Item eventKey="4">Structures de données</Nav.Item>
           <Nav.Item eventKey="5">Algorithmes</Nav.Item>
           <Nav.Item eventKey="6">Langages de programmation</Nav.Item>
         </Nav.Menu>
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
