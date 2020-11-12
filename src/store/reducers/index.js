//INITIAL STATE
import {ADD_ALUMNO, ADD_CURSO} from '../constants/action_types'

const initialState = {
    cursos: [
        {
            nombre: 'A',
            alumnos: []
        },
        {
            nombre: 'B',
            alumnos: []
        }
    ],
}

function rootReducer(state=initialState, action) {

    switch (action.type) {
      case ADD_ALUMNO:
        console.log('Agregar alumno: ' + action.data)
        // state.materias.push(action.data)
        state = Object.assign({}, state , {
          cursos: state.cursos.alumnos.concat(action.data)
        })
        break
    
       case UPDATE_CURSO:
        console.log('ACTUALIZAR curso: ' + action.data)
        // state.instituto = action.data
  
        state = Object.assign({}, state , {
          curso: action.data
        })
        break 
    }
  
    return state
  }
  
  export default rootReducer
  