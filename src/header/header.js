import { useState } from 'react';
import { Navbar, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Link } from 'react-router-dom';

const Example = ({ active, onSelect, ...props }) => {
  return (
   <Navbar {...props} >
     <Nav onSelect={onSelect} activeKey={active}>
       <Nav.Item eventKey="accueil">Annonces</Nav.Item>
       <Nav.Menu title="Elements necessaires">
         <Nav.Item eventKey="4"><Link to="/Categorie">Categorie</Link></Nav.Item>
         <Nav.Item eventKey="5"><Link to="/Marque">Marque</Link></Nav.Item>
         <Nav.Item eventKey="6"><Link to="/Energie">Energie</Link></Nav.Item>
         <Nav.Item eventKey="7"><Link to="/Vitesse">Vitesse</Link></Nav.Item>
       </Nav.Menu>
       <Nav.Menu title="Statistiques">
         <Nav.Item eventKey="4"><Link to="/Statistique/Date">Par Rapport au date</Link></Nav.Item>
         <Nav.Item eventKey="5"><Link to="/Statistique/Marque">Par rapport au marque</Link></Nav.Item>
         <Nav.Item eventKey="6"><Link to="/Statistique/Prix">par rapport au prix</Link></Nav.Item>
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

