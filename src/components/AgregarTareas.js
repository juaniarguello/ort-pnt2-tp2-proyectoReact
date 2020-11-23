import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addItems } from '../store/actions/listaDeTareas';
import ListadoDeTareas from './ListadoDeTareas'

const mapDispatchToProps = dispatch => ({
    addItems: item => dispatch(addItems(item))
})

class AgregarTareas extends Component {
    constructor(){
        super();
        this.input = React.createRef();
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.input.current.value.trim()) { return }
        const item = {
            text: this.input.current.value,
        }
        this.props.dispatch(addItems(item));
        this.input.current.value = '';
    }

    render(){
        return(
            <div className={'div-wrapper'}>
                <h1>LISTA DE TAREAS </h1>
                <form onSubmit={this.handleSubmit} >
                    <div className={'div-wrapper'}>
                    <label>Tarea: {'          '}</label>
                        <input type="text" name="name" ref={this.input} />
                    </div>
                    <div className={'div-wrapper'}>
                        <label>&nbsp;</label>
                        <input type="submit" value="Agregar Tarea" />
                    </div>
                </form>
                <ListadoDeTareas />
            </div>
        )
    }
}

export default connect(mapDispatchToProps)(AgregarTareas)