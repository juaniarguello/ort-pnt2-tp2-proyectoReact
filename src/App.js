import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import AbmAlumnos from './components/AbmAlumnos';
import AgregarTareas from './components/AgregarTareas'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h2>ORT-PNT2-TP2</h2>
        <AgregarTareas />
      </div>
    )
  }
}

export default App;

