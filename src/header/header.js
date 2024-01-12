import React from 'react';
import './header.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Search, Person, Menu } from 'react-bootstrap-icons';


function Head(){
    return(
        <nav className="navbar">
        <div className="menu">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
        <a href="/logout">Logout</a>
    </nav>
    );
}
export default Head;

