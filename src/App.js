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
import { Col, Row } from "reactstrap";
import Header from "./header/header";
import SideNavigation from "./header/SideBar";
import ReactDOM from "react-dom/client";
import LoginSingUp from './login/LoginSingUp';

export default function App(){
  
  return(
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

          <Route path="/Login" element={<LoginSingUp/>}/>
      </Routes>
    </Router>
  );
}
