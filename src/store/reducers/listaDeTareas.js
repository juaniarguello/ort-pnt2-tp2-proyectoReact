import {ADD_ITEMS, UPDATE_ITEM} from '../constants/listaDeTareas_action_types'

const items = (state = [
    {
        id: Math.random(),
        text: 'Trabajo práctico de VueJs',
        completed: true
    },
    {
        id: Math.random(),
        text: 'Trabajo práctico de ReactJs',
        completed: false
    }
], action) => {
    switch (action.type) {
        case ADD_ITEMS:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case UPDATE_ITEM:
            return state.map(item =>
                item.id === action.id ? { ...item, completed: !item.completed } : item
            )
        default:
            return state
    }
}

export default items;