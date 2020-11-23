import {ADD_ITEMS, UPDATE_ITEM} from '../constants/listaDeTareas_action_types'
let incrementId = 0;

export function addItems (item){
    return{
        type: ADD_ITEMS,
        id: incrementId++,
        text: item.text
    }
}

export function updateItem (id)  {
    return{
        type: UPDATE_ITEM,
        id
    }
}