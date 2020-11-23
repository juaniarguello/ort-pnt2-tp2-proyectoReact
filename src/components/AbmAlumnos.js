import { connect } from 'react-redux'
import React, { Component } from 'react'
import { addAlumno, deleteAlumno, editAlumno } from '../store/actions'
import { Form, Button } from 'react-bootstrap'
import ListadoDeAlumnos from './ListadoDeAlumnos'

const mapStateToProps = (state) => {
    return {
        propiedadCurso: state.alumnos.curso,
        propiedadAlumnos: state.alumnos.alumnos,
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
      if(this.prevenirVacio()){
        this.props.propiedadAddAlumno({
          id: this.props.propiedadAlumnos.length + 1,
          nombre: this.nombreAlumno.current.value,
          apellido: this.apellidoAlumno.current.value
        })
        this.resetFields()
      }
    }
    
    eliminarAlumno(el) {
      let opcion = window.confirm("Está seguro de eliminar a " +  el.nombre + " " + el.apellido + " ?")
      if(opcion===true){
        this.props.propiedadDeleteAlumno({id: el.id})
      }
    }
    

    editarAlumno(){
      if(this.prevenirVacio()){
        this.props.propiedadEditAlumno({
          id: this.idAlumno.current.value,
          nombre: this.nombreAlumno.current.value,
          apellido: this.apellidoAlumno.current.value
        })  
        this.resetFields()
      }
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
    prevenirVacio(){
      const nombre = this.nombreAlumno.current.value;
      const apellido = this.apellidoAlumno.current.value;
      let enviar=true;
      if(nombre===null || nombre==='' || apellido===null || apellido===''){
        alert('El nombre o el apellido del alumno no pueden estar vacíos.')
        enviar=false;
      }
      return enviar;
    }

    render() {
        return (
          <div>
            <h3 style={{marginTop: '10px', marginBottom:'-30px'}}>Curso {this.props.propiedadCurso}</h3>
            <br />
            <hr />
            
            <Form>
              <Form.Group>
                <Form.Label >ID</Form.Label>
                <Form.Control type="text" id="nombre" ref={this.idAlumno} readOnly="1" style={{width: '300px', margin: 'auto'}}/>
              </Form.Group>
              <Form.Group>
                <Form.Label >Nombre del Alumno</Form.Label>
                <Form.Control type="text" id="nombre" ref={this.nombreAlumno} placeholder="Ingresar nombre" required="1"  style={{width: '300px', margin: 'auto'}}/>
              </Form.Group>
              <Form.Group>
                <Form.Label >Apellido del Alumno</Form.Label>
                <Form.Control type="text" id="apellido" ref={this.apellidoAlumno} placeholder="Ingresar Apellido" required="1" style={{width: '300px', margin: 'auto'}}/>
              </Form.Group>
              <Button id="agregarAlumno" variant="success" type="submit" onClick={ this.agregarAlumno }>
                Agregar
              </Button> {'        '}
              <Button id="btnEditarAlumno" variant="primary" onClick={this.editarAlumno }>
                Editar
              </Button>
            </Form>

            <hr />

            <ListadoDeAlumnos alumnos={this.props.propiedadAlumnos} eliminarAlumno={(el)=>this.eliminarAlumno(el)} returnStateObject={(el)=>this.returnStateObject(el)}/>

          </div>
        )
    }
}

const AbmAlumnos = connect(mapStateToProps, mapDispatchToProps)(ListComponent)

export default AbmAlumnos