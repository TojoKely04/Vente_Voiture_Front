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
import SideBar from './Components/Sidebar';
import { Col, Row } from "reactstrap";
import Header from "./header/header";
import SideNavigation from "./header/SideBar";

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
    <Row>
    <Col>
      <Header></Header>
    </Col>
  </Row>
  <div style={styles.contentDiv}>
    <SideNavigation></SideNavigation>
    <div style={styles.contentMargin}>
    <Router>
      <Routes>
          <Route exact path="/" element= {<Liste/>} />
          <Route path="/Annonce" element= {<Liste/>} />
          <Route path ="/Detail" element={<Detail/>}/>
          <Route path="/Component" element={<ContentCategorie/>} />
          <Route path ="/Statistique" element={<Statistque/>}/>
      </Routes>
    </Router>
    </div>
  </div>
  </>
  );
}
export default App;

