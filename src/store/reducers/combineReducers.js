import { combineReducers } from 'redux';
import items from './listaDeTareas';
import alumnos from './index'

export default combineReducers({
    alumnos,
    items
});
