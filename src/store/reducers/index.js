//INITIAL STATE
import {ADD_ALUMNO, UPDATE_CURSO} from '../constants/action_types'

const initialState = {
  curso: '2-1-B',
  alumnos: [
    {
      id: 1,
      nombre: "Jorge",
      apellido: "Perez"
    }
  ]
}

function rootReducer(state=initialState, action) {

    switch (action.type) {
      case ADD_ALUMNO:
        console.log('Agregar alumno: ' + action.data)
        // state.materias.push(action.data)
        state = Object.assign({}, state , {
          alumnos: state.alumnos.concat(action.data)
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
  