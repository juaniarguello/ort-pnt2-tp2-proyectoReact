import { connect } from 'react-redux'
import React, { Component } from 'react'
import { addAlumno } from '../store/actions'


const mapStateToProps = (state) => {
    return {
        propiedadCurso: state.curso,
        propiedadMaterias: state.curso.alumnos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        propiedadAddAlumno: alumno => dispatch(addAlumno(alumno)),
        propiedadUpdateCurso: nombreCurso => dispatch(updateCurso(nombreCurso))
    }
}

class ListComponent extends Component {
    constructor() {
      super()
  
      this.idAlumno = React.createRef();
      this.nombreAlumno = React.createRef();
  
      this.nombreCurso = React.createRef();
  
      this.agregarAlumno = this.agregarAlumno.bind(this) //propiedad agregarAlumno
    }
    
    agregarAlumno(event) {
        this.props.agregarAlumno({
          id: this.idAlumno.current.value,
          nombre: this.nombreAlumno.current.value
        })
    }

    actualizarCurso(event) {
        if (event.key === 'Enter') {
          this.props.propiedadUpdateCurso(this.nombreCurso.current.value)
        }
    }
    render() {
        return (
          <div>
            <h3>{this.props.propiedadCurso}</h3>
            <input type="text" id="nombreInstituto" 
              ref={this.nombreInstituto} 
              onKeyPress={ (event) => this.actualizarCurso(event) }
            /> <br />
            <hr />
            <input type="text" id="id" ref={this.idMateria} /> <br />
            <input type="text" id="nombre" ref={this.nombreMateria} /> <br />
            <button id="agregarMateria" onKeyPress={ this.agregarMateria }>Agregar</button>
            <hr />
            <ul>
              {
                this.props.propiedadMaterias.map(el => (
                  <li key={el.id}>
                    {el.nombre}
                  </li>
                ))
              }
            </ul>
          </div>
        )
    }
    



}