import './App.css';
import React from 'react';
import AbmAlumnos from './components/AbmAlumnos';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h2>ORT-PNT2-TP2</h2>
        <AbmAlumnos />
      </div>
    )
  }
}

export default App;

