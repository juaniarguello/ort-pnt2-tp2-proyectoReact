import React from 'react';
import { connect } from 'react-redux';
import { addItems } from '../store/actions/listaDeTareas';
import ListaDeTareas from './ListadoDeTareas'
const App = ({ qty, dispatch }) => {
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
            <h1>TODOS</h1>
            <form onSubmit={handleSubmit} >
                <div className={'div-wrapper'}>
                    <label>Todo: </label>
                    <input type="text" name="name" ref={node => (input = node)} />
                </div>
                <div className={'div-wrapper'}>
                    <label>&nbsp;</label>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <ListaDeTareas></ListaDeTareas>
        </div>
    )
}

export default connect()(App)