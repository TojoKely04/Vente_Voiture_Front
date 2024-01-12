import React from 'react';
import Head from './header/header';
import Liste from './header/annonce';
import Detail from './header/detail';
import Component from './Components/ContentCategorie';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContentBoiteVitesse from './Components/ContentBoiteVitesse';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/ContentCategorie';
import ContentCategorie from './Components/ContentCategorie';
import Statistque from './statistique/Statistiques';
import SideBar from './Components/Sidebar';

function App(){
  return(
    <div className="main">
    <SideBar/>
    <div className="container">
    <Router>
      <Routes>
          <Route exact path="/" element= {<Head/>} />
          <Route path="/Annonce" element= {<Liste/>} />
          <Route path ="/Detail" element={<Detail/>}/>
          <Route path="/Component" element={<ContentCategorie/>} />
          <Route path ="/Statistique" element={<Statistque/>}/>
      </Routes>
    </Router>
    </div>
    </div>
  );
}
export default App;

