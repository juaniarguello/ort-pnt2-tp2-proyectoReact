import { connect } from 'react-redux'
import React, { Component } from 'react'
import { addAlumno, deleteAlumno, editAlumno } from '../store/actions'
import { Form, Button, Table } from 'react-bootstrap'
import { Modal,ModalHeader,ModalBody,FormGroup, ModalFooter} from 'reactstrap'

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
      this.toggle = this.toggle.bind(this);

      this.state = {  //SIN ESTO NO FUNCIONA EL MODAL FORM
        modal: false
      };

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
    
    editarAlumno(el){
      this.toggle()
      this.returnStateObject(el)
      /*this.props.propiedadEditAlumno({
        id: el.id,
        nombre: el.nombre,
        apellido: el.apellido
      })  */
    }
    
    returnStateObject(el) {
      console.log('RETURNSTATEOBJECT')
      this.idAlumno = el.id
      this.nombreAlumno.current.value = el.nombre
      this.apellidoAlumno.current.value = el.apellido
    }
    toggle() {
      //HACE VISIBLE O INVISIBLE EL MODAL
      this.setState({modal: !this.state.modal})
    }
    resetFields(){
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
                          <td key={el.id}>{el.id}</td>
                          <td key={el.nombre}>{el.nombre}</td>
                          <td key={el.apellido}>{el.apellido}</td>
                          <td>
                            <Button id="editar" variant="primary" onClick={() => this.editarAlumno(el) }>Editar</Button>
                            {"  "}
                            <Button id="borrar" variant="danger" onClick={() => this.eliminarAlumno(el) }>Borrar</Button>
                          </td>
                      </tr>
                    ))
                  }
              </tbody>
            </Table>

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader ><div><h3>Editar Alumno</h3></div></ModalHeader>

              <ModalBody>
                <FormGroup>
                  <label>
                  Id:
                  </label>
                
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    ref={this.idAlumno}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Nombre: 
                  </label>
                  <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    ref={this.nombreAlumno}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Apellido: 
                  </label>
                  <input
                    className="form-control"
                    name="apellido"
                    type="text"
                    ref={this.apellidoAlumno}
                  />
                </FormGroup>
              </ModalBody>

              <ModalFooter>
                <Button
                  color="success"
                  onClick={this.toggle}
                >
                  Editar
                </Button>
                <Button
                  color="danger"
                  onClick={this.toggle}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>

          </div>
        )
    }
}

const ListaAlumnosXCurso = connect(mapStateToProps, mapDispatchToProps)(ListComponent)

export default ListaAlumnosXCurso