import './App.css';
import React from 'react';
import Liste from './annonce/Annonce';
import Detail from './annonce/Detail';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categorie from './elements/ContentCategorie';
import Moteur from './elements/ContentMoteur';
import Energie from './elements/ContentEnergie';
import Marque from './elements/ContentMarque';
import BoiteVitesse from './elements/ContentBoiteVitesse';
import Statistque from './statistique/Statistiques';
import SideBar from './header/SideBar';
import { Col, Row } from "reactstrap";
import Header from "./header/header";
// import SideNavigation from "./header/SideBar";
import Sidebar from './header/headerFront';
import Annonce from './annonce/AnnonceFront';

function App(){
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return(
    <>
  {/* <div style={styles.contentDiv}>
    <div style={styles.contentMargin}>
    <Router>
      <Routes>
          <Route exact path="/" element= {<Liste/>} />
          <Route path="/Annonce" element= {<Liste/>} />
          <Route path ="/Detail" element={<Detail/>}/>

          <Route path="/Categorie" element={<Categorie/>} />
          <Route path="/Energie" element={<Energie/>} />
          <Route path="/Marque" element={<Marque/>} />
          <Route path="/Vitesse" element={<BoiteVitesse/>} />
          <Route path="/Moteur" element={<Moteur/>} />
          <Route path ="/Statistique" element={<Statistque/>}/>
      </Routes>
    </Router>
    </div>
  </div> */}

  <div>
  <Router>
      <Routes>
          <Route exact path="/" element= {<Annonce/>} />
      </Routes>
    </Router>
  </div>  
  </>
  );
}
export default App;

