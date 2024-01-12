import './App.css';
import LoginSingUp from './Components/LoginSingUp';
import React from 'react';
import Head from './header/header';
import Liste from './header/annonce';
import Detail from './header/detail';
import Component from './Components/ContentCategorie';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContentBoiteVitesse from './Components/ContentBoiteVitesse';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/ContentCategorie';
import ContentCategorie from './Components/ContentCategorie';
import Statistque from './statistique/Statistiques';


function App(){
  return(
    <Router>
      <Routes>
          <Route exact path="/" element= {<Head/>} />
          <Route path="/Annonce" element= {<Liste/>} />
          <Route path ="/Detail" element={<Detail/>}/>
          <Route path="/Component" element={<ContentCategorie/>} />
          <Route path ="/Statistique" element={<Statistque/>}/>
      </Routes>
    </Router>
  );
}
export default App;

