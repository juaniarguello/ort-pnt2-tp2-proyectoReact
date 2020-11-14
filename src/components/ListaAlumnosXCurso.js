import { connect } from 'react-redux'
import React, { Component } from 'react'
import { addAlumno, updateCurso} from '../store/actions'
import { Form, Button, Table } from 'react-bootstrap'

const mapStateToProps = (state) => {
    return {
        propiedadCurso: state.curso,
        propiedadAlumnos: state.alumnos
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
      this.apellidoAlumno = React.createRef();
  
      this.nombreCurso = React.createRef();
  
      this.agregarAlumno = this.agregarAlumno.bind(this) //propiedad agregarAlumno
    }
    
    agregarAlumno() {
        this.props.propiedadAddAlumno({
          id: this.props.propiedadAlumnos.length+1,
          nombre: this.nombreAlumno.current.value,
          apellido: this.apellidoAlumno.current.value
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
            <h3>Curso {this.props.propiedadCurso}</h3>
            <br />
            <hr />
            
            <Form>
{/*               <Form.Group>
                <Form.Label >N° de legajo del Alumno</Form.Label>
                <Form.Control type="text" id="id" ref={this.idAlumno} placeholder="Ingresar N° de legajo" />
              </Form.Group> */}
              <Form.Group>
                <Form.Label >Nombre del Alumno</Form.Label>
                <Form.Control type="text" id="nombre" ref={this.nombreAlumno} placeholder="Ingresar nombre" />
              </Form.Group>
              <Form.Group>
                <Form.Label >Apellido del Alumno</Form.Label>
                <Form.Control type="text" id="apellido" ref={this.apellidoAlumno} placeholder="Ingresar Apellido" />
              </Form.Group>
              <Button id="agregarAlumno" variant="success" onClick={ this.agregarAlumno }>
                Agregar
              </Button>
            </Form>

            <hr />

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                  {
                    this.props.propiedadAlumnos.map(el => (
                      <tr>
                          <td key={el.id}>
                            {el.id}
                          </td>
                          <td key={el.nombre}>
                            {el.nombre}
                          </td>
                          <td key={el.apellido}>
                            {el.apellido}
                          </td>
                          <td>
                            <Button id="editar" variant="primary">
                              Editar
                            </Button>
                            
                            <Button id="borrar" variant="danger">
                              Borrar
                            </Button>
                          </td>
                      </tr>
                    ))
                  }
              </tbody>
            </Table>
            {/* <ul>
              {
                this.props.propiedadAlumnos.map(el => (
                  <li key={el.id}>
                    {el.id},
                    {el.nombre},
                    {el.apellido}
                  </li>
                ))
              }
            </ul> */}
          </div>
        )
    }
}

const ListaAlumnosXCurso = connect(mapStateToProps, mapDispatchToProps)(ListComponent)

export default ListaAlumnosXCurso
