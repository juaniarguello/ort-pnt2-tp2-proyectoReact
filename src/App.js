import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AbmAlumnos from './components/AbmAlumnos';
import AgregarTareas from './components/AgregarTareas'
import Home from './components/Home'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/" component={ Home }></Route>
              <Route path="/ABMalumnos" component={ AbmAlumnos }></Route>
              <Route path="/ListaDeTareas" component={ AgregarTareas }></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;

