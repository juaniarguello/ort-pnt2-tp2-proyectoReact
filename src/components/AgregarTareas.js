import React from 'react';
import { connect } from 'react-redux';
import { addItems } from '../store/actions/listaDeTareas';
import ListaDeTareas from './ListadoDeTareas'
import { Button } from 'react-bootstrap';

const App = ({ dispatch }) => {
    let input, item;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) { return }
        item = {
            text: input.value
        }
        dispatch(addItems(item));
        console.log(item)
        input.value = '';
    };

    return (
        <div className={'wrapper'}>
            <h1>Lista de Tareas</h1>
            <form onSubmit={handleSubmit} >
                <div className={'div-wrapper'}>
                    <label>Tarea: </label>
                    <input type="text" name="name" ref={node => (input = node)} />
                </div>
                <div className={'div-wrapper'}>
                </div>
                    <label>&nbsp;</label>
                    <Button type="submit" variant="primary">Agregar Tarea</Button>
            </form>
            <p style={{color: 'red'}}>Hace click en alguna tarea para marcarla como finalizada</p>
            
            <ListaDeTareas />
        </div>
    )
}

export default connect()(App)