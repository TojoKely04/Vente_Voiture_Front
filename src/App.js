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
import Login from './login/LoginSingUp';

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
   <div style={styles.contentDiv}>
    <div style={styles.contentMargin}>
    <Router>
      <Routes>
          <Route exact path="/" element= {<Login/>} />
          <Route path="/Annonce" element= {<Liste/>} />
          <Route path ="/Detail/:id" element={<Detail/>}/>

          <Route path="/Categorie" element={<Categorie/>} />
          <Route path="/Energie" element={<Energie/>} />
          <Route path="/Marque" element={<Marque/>} />
          <Route path="/Vitesse" element={<BoiteVitesse/>} />
          <Route path="/Moteur" element={<Moteur/>} />
          <Route path ="/Statistique" element={<Statistque/>}/>
      </Routes>
    </Router>
    </div>
    </div>
  </>
  );
}
export default App;

