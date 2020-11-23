import {React, Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from '@material-ui/core'

class NavBar extends Component{
    render() {
        return(
            <div>
                <Navbar bg="primary" variant="dark">
                    <Link to='/'>
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                    </Link>
                    <Nav className="mr-auto">
                        <Link to="/ABMalunos">
                            <Nav.Link href="ABMalumnos">Agregar Alumnos</Nav.Link>
                        </Link>
                        <Link to="/ListaDeTareas">
                            <Nav.Link href="ListaDeTareas">Lista de tareas</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar