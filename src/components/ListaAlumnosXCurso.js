import { connect } from 'react-redux'
import React, { Component } from 'react'
import { addAlumno, deleteAlumno, editAlumno } from '../store/actions'
import { Form, Button, Table } from 'react-bootstrap'

const mapStateToProps = (state) => {
    return {
        propiedadCurso: state.curso,
        propiedadAlumnos: state.alumnos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        propiedadAddAlumno: alumno => dispatch(addAlumno(alumno)),
        propiedadDeleteAlumno: id => dispatch(deleteAlumno(id)),
        propiedadEditAlumno: alumno => dispatch(editAlumno(alumno))
    }
}

class ListComponent extends Component {
    constructor() {
      super()
      this.idAlumno = React.createRef();
      this.nombreAlumno = React.createRef();
      this.apellidoAlumno = React.createRef();
  
      this.agregarAlumno = this.agregarAlumno.bind(this) 
      this.editarAlumno = this.editarAlumno.bind(this)
    }

    agregarAlumno() {
      this.props.propiedadAddAlumno({
        id: this.props.propiedadAlumnos.length + 1,
        nombre: this.nombreAlumno.current.value,
        apellido: this.apellidoAlumno.current.value
      })
      this.resetFields()
    }
    
    eliminarAlumno(el) {
      let opcion = window.confirm("Está seguro de eliminar a " +  el.nombre + " " + el.apellido + " ?")
      if(opcion===true){
        this.props.propiedadDeleteAlumno({id: el.id})
      }
    }
    

    editarAlumno(){
      this.props.propiedadEditAlumno({
        id: this.idAlumno.current.value,
        nombre: this.nombreAlumno.current.value,
        apellido: this.apellidoAlumno.current.value
      })  
      this.resetFields()
    }
    
    returnStateObject(el) {
      this.idAlumno.current.value = el.id
      this.nombreAlumno.current.value = el.nombre
      this.apellidoAlumno.current.value = el.apellido
    }

    resetFields(){
      this.idAlumno.current.value = ''
      this.nombreAlumno.current.value = ''
      this.apellidoAlumno.current.value = ''
    }


    render() {
        return (
          <div>
            <h3>Curso {this.props.propiedadCurso}</h3>
            <br />
            <hr />
            
            <Form>
            <Form.Group>
                <Form.Label >ID</Form.Label>
                <Form.Control type="text" id="nombre" ref={this.idAlumno} readOnly="1" />
              </Form.Group>
              <Form.Group>
                <Form.Label >Nombre del Alumno</Form.Label>
                <Form.Control type="text" id="nombre" ref={this.nombreAlumno} placeholder="Ingresar nombre" required='1' />
              </Form.Group>
              <Form.Group>
                <Form.Label >Apellido del Alumno</Form.Label>
                <Form.Control type="text" id="apellido" ref={this.apellidoAlumno} placeholder="Ingresar Apellido" required="1" />
              </Form.Group>
              <Button id="agregarAlumno" variant="success" onClick={ this.agregarAlumno }>
                Agregar
              </Button> {'        '}
              <Button id="btnEditarAlumno" variant="primary" onClick={this.editarAlumno }>
                Editar
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
                          <td key={el.id}>{el.id}</td>
                          <td key={el.nombre}>{el.nombre}</td>
                          <td key={el.apellido}>{el.apellido}</td>
                          <td>
                            <Button id="editar" variant="primary" onClick={() => this.returnStateObject(el) }>Editar</Button>
                            {"  "}
                            <Button id="borrar" variant="danger" onClick={() => this.eliminarAlumno(el) }>Borrar</Button>
                          </td>
                      </tr>
                    ))
                  }
              </tbody>
            </Table>

          </div>
        )
    }
}

const ListaAlumnosXCurso = connect(mapStateToProps, mapDispatchToProps)(ListComponent)

export default ListaAlumnosXCurso