import React from 'react'
import { connect } from 'react-redux'
import { updateItem } from '../store/actions/listaDeTareas';
import Item from './Tarea';

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    updateItem: id => dispatch(updateItem(id))
})

const ItemsList = ({ items, updateItem }) => (
    <ul className={'item-list'}>
        {items.map(item => (
            <Item key={ item.id } {...item} onClick={() => updateItem(item.id)}/>
        ))}
    </ul>
)


export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)