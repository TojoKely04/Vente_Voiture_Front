import { useState } from 'react';
import { Navbar, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Link } from 'react-router-dom';

const Example = ({ active, onSelect, ...props }) => {
  return (
   <Navbar {...props} >
     <Nav onSelect={onSelect} activeKey={active}>
       <Nav.Item eventKey="accueil"><Link to="/Annonce"  style={{textDecoration:'none'}}>Annonces</Link></Nav.Item>
     
       <Nav.Menu title="Elements necessaires">
         <Nav.Item eventKey="4"><Link to="/Categorie" style={{textDecoration:'none'}}>Categorie</Link></Nav.Item>
         <Nav.Item eventKey="5"><Link to="/Marque" style={{textDecoration:'none'}}>Marque</Link></Nav.Item>
         <Nav.Item eventKey="6"><Link to="/Energie" style={{textDecoration:'none'}}>Energie</Link></Nav.Item>
         <Nav.Item eventKey="7"><Link to="/Vitesse"  style={{textDecoration:'none'}}>Vitesse</Link></Nav.Item>
       </Nav.Menu>
       <Nav.Menu title="Statistiques">
         <Nav.Item eventKey="4"><Link to="/Statistique/Date"  style={{textDecoration:'none'}}>Par Rapport au date</Link></Nav.Item>
         <Nav.Item eventKey="5"><Link to="/Statistique/Marque" style={{textDecoration:'none'}}>Par rapport au marque</Link></Nav.Item>
         <Nav.Item eventKey="6"><Link to="/Statistique/Prix" style={{textDecoration:'none'}}>par rapport au prix</Link></Nav.Item>
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
          <Example active={activeTab} onSelect={setActiveTab} />
        </div>
      </div>
    );
 }

