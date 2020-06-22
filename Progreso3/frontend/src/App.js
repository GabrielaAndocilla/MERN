import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button,NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Asignar from "./components/Asignar";
import Ver from "./components/Ver";
import Departamento from "./components/Departamento";



import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

          <Navbar bg="dark" variant="dark">

            <Navbar.Brand href="/">Progreso3</Navbar.Brand>
            <NavLink href="/Departamento" >CrearDepartamento</NavLink>
            <NavLink href="/Asignar" >Asignar trabajador a Departamento</NavLink>
            <NavLink href="/Ver" >Ver</NavLink>

          </Navbar>

          <Route exact path="/Asignar" component={Asignar} />
          <Route exact path="/Ver" component={Ver} />
          <Route exact path="/Departamento" component={Departamento} />




        </div>
      </Router> 
  );
}

export default App;
