import {React, Component} from 'react';
import { Table, Button } from 'react-bootstrap'

class ListadoDeAlumnos extends Component{

    render(){
        return(
            <div>
                <Table>
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
                            this.props.alumnos.map(el => {
                                    return(
                                        <tr>
                                            <td key={el.id}>{el.id}</td>
                                            <td key={el.nombre}>{el.nombre}</td>
                                            <td key={el.apellido}>{el.apellido}</td>
                                            <td>
                                                <Button id="editar" variant="primary" onClick={() => this.props.returnStateObject(el) }>Editar</Button>
                                                {"  "}
                                                <Button id="borrar" variant="danger" onClick={() => this.props.eliminarAlumno(el) }>Borrar</Button>
                                            </td>
                                        </tr>
                                    )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ListadoDeAlumnos