import { React, Component} from 'react'
import { connect } from 'react-redux'
import { updateItem } from '../store/actions/listaDeTareas'
import Item from './Tarea';

import items from '../store/reducers/listaDeTareas'


const mapStateToProps = (items) => {
    return {
        propiedadItems: items.state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateItem: id => dispatch(updateItem(id))
    }
}

class ListadoDeTareas extends Component{
    constructor(){
        super()
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(id){
        this.props.updateItem(id)
    }

    render(){
        return(
            <div>
                <ul className={'item-list'}>
                    {
                        this.props.propiedadItems.map(item => {
                            return(
                                <div>
                                    <Item key={ item.id } {...item} text={item.text} onClick={()=>this.handleOnClick(item.id)}  />
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListadoDeTareas)