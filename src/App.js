import React from 'react';
import Head from './header/header';
import Liste from './header/annonce';
import Detail from './header/detail';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element= {<Head/>} />
          <Route path="/Annonce" element= {<Liste/>} />
          <Route path ="/Detail" element={<Detail/>}/>
      </Routes>
    </Router>
  );
}
export default App;

