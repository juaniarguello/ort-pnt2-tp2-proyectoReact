import { connect } from 'react-redux'
import React, { Component } from 'react'
import { addAlumno, deleteAlumno, editAlumno } from '../store/actions'
import { Form, Button, Table } from 'react-bootstrap'
import { Modal,ModalHeader,ModalBody,FormGroup, ModalFooter} from 'reactstrap'

const mapStateToProps = (state) => {
    return {
        propiedadCurso: state.curso,
        propiedadAlumnos: state.alumnos
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

      this.form = {
        modalActualizar: false
      }
    }

    mostrarModalActualizar = (dato) => {
      this.form.modalActualizar = true
    };   

    agregarAlumno() {
        this.props.propiedadAddAlumno({
          id: this.props.propiedadAlumnos.length + 1,
          nombre: this.nombreAlumno.current.value,
          apellido: this.apellidoAlumno.current.value
        })
    }

    eliminarAlumno(el) {
      let opcion = window.confirm("Está seguro de eliminar a " +  el.nombre + " " + el.apellido + " ?")
      if(opcion===true){
        this.props.propiedadDeleteAlumno({
          id: el.id,
        })
      }
    }

    editarAlumno(el){
      this.props.propiedadEditAlumno({
        id: el.id,
        nombre: el.nombre,
        apellido: el.apellido
      })
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
                            <Button id="editar" variant="primary" onClick={() => this.editarAlumno(el) }>
                              Editar
                            </Button>
                            {"  "}
                            <Button id="borrar" variant="danger" onClick={() => this.eliminarAlumno(el) }>
                              Borrar
                            </Button>
                          </td>
                      </tr>
                    ))
                  }
              </tbody>
            </Table>

            <Modal isOpen={this.form.modalActualizar}>
              <ModalHeader><div><h3>Editar Registro</h3></div></ModalHeader>

              <ModalBody>
                <FormGroup>
                  <label>
                  Id:
                  </label>
                
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value='NULL'
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
                    onChange={this.handleChange}
                    value=''
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
                    onChange={this.handleChange}
                    value=''
                  />
                </FormGroup>
              </ModalBody>

              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.editar(this.form)}
                >
                  Editar
                </Button>
                <Button
                  color="danger"
                  onClick={() => this.cerrarModalActualizar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>



{/*             <Modal isOpen={this.state.modalInsertar}>
              <ModalHeader>
              <div><h3>Insertar Personaje</h3></div>
              </ModalHeader>

              <ModalBody>
                <FormGroup>
                  <label>
                    Id: 
                  </label>
                  
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length+1}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Personaje: 
                  </label>
                  <input
                    className="form-control"
                    name="personaje"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Anime: 
                  </label>
                  <input
                    className="form-control"
                    name="anime"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </ModalBody>

              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.insertar()}
                >
                  Insertar
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => this.cerrarModalInsertar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal> */}
          </div>
        )
    }
}

const ListaAlumnosXCurso = connect(mapStateToProps, mapDispatchToProps)(ListComponent)

export default ListaAlumnosXCurso
