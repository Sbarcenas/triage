import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { _GET_CURRENT_DOCTOR } from "./redux/actions/actions";
import Doctors from "./screens/Doctor/Doctors";
import Hospitals from "./screens/Hospital/Hospitals";
import Patient from "./screens/Patient/Patient";
import Triage from "./screens/Triage/Triage";
import Companion from "./screens/Companion/Companion";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(_GET_CURRENT_DOCTOR(1));
  }, []);
  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">TriageApp</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Doctores</Nav.Link>
            <Nav.Link href="/hospitals">Hospitales</Nav.Link>
            <Nav.Link href="/patient">Pacientes</Nav.Link>
            <Nav.Link href="/triage">Triage</Nav.Link>
            <Nav.Link href="/companion">Acompañantes</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/hospitals">
            <Hospitals />
          </Route>
          <Route path="/patient">
            <Patient />
          </Route>
          <Route path="/triage">
            <Triage />
          </Route>
          <Route path="/companion">
            <Companion />
          </Route>
          <Route path="/">
            <Doctors />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
