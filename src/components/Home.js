import React from 'react';
import logo from '../logo.svg';
import '../App.css';


class Index extends React.Component{
  
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <h1>PROGRAMACIÓN EN NUEVAS TECNOLOGÍAS 2 - Curso 2-1-B</h1>
            <h2>Trabajo práctico n° 2: react</h2>
              <h3>Juan Ignacio Argüello</h3>
          <img src={logo} className="App-logo" alt="logo" />
        </header> 
        </div>

        
    );
  }
}
export default Index;
