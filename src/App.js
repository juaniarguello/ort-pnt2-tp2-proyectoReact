import './App.css';
import React from 'react';
import ListaAlumnosXCurso from './components/ListaAlumnosXCurso';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h2>ORT-PNT2-TP2</h2>
        <ListaAlumnosXCurso />
      </div>
    )
  }
}

export default App;

