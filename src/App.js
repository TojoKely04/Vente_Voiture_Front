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
import StatistiqueDate from './statistique/StatistiqueDate';
import StatistiquePrix from './statistique/StatistiquePrix';
import StatistiqueMarque from './statistique/StatistiqueMarque';
import ModifCategorie from './elements/ModifCategorie';
import ModifEnergie from './elements/ModifEnergie';
import ModifMarque from './elements/ModifMarque';
import ModifBoiteVitesse from './elements/ModifBoiteVitesse';
import ModifMoteur from './elements/ModifMoteur';
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
          <Route path ="/Statistique/Date" element={<StatistiqueDate />}/>
          <Route path ="/Statistique/Prix" element={<StatistiquePrix />}/>
          <Route path ="/Statistique/Marque" element={<StatistiqueMarque />}/>
          <Route path="/ModifCategorie/:id" element={<ModifCategorie/>} />
          <Route path="/ModifEnergie/:id" element={<ModifEnergie/>} />
          <Route path="/ModifMarque/:id" element={<ModifMarque/>} />
          <Route path="/ModifBoiteVitesse/:id" element={<ModifBoiteVitesse/>} />
          <Route path="/ModifMoteur/:id" element={<ModifMoteur/>} />
      </Routes>
    </Router>
    </div>
    </div>
  </>
  );
}
export default App;

