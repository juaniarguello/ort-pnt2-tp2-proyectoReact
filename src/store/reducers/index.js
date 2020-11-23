import {ADD_ALUMNO, DELETE_ALUMNO, EDIT_ALUMNO} from '../constants/action_types'

const initialState = {
  curso: '2-1-B',
  alumnos: [
    //Array hardcodeado para pruebas
    {
      id: 1,
      nombre: "Jorge",
      apellido: "Perez"
    },
    {
      id: 2,
      nombre: "Gustavo",
      apellido: "González"
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellido: 'Barrios'
    }
  ],
}

function getIndexAlumno(id){
  let i=0;
  let encontrado=false;
  let alumno
  while(!encontrado && i<initialState.alumnos.length){
    alumno = initialState.alumnos[i];
    if(alumno.id == id){  // Si comparo con === siempre el resultado va a ser falso. No se por qué
      encontrado = true;
    } else {
       i++  
    }  
  }
  return i;
}


function rootReducer(state=initialState, action) {

    switch (action.type) {
      case ADD_ALUMNO:
        state = Object.assign({}, state , {
          alumnos: state.alumnos.concat(action.data)
        })
        break

      case DELETE_ALUMNO:
        const aux = state.alumnos.filter(element => element.id !== action.data.id)  //Obtengo nuevo array SIN el alumno eliminado
        state = Object.assign({}, state , {
         alumnos: aux
        }) 
        break

      case EDIT_ALUMNO:
        // La función editar no la pude hacer renderizar en el DOM,
        // Sí actualiza dentro del state, pero no lo renderiza al instante.
        const index = getIndexAlumno(action.data.id)
        let auxx = state.alumnos
        auxx[index] = action.data
        state = Object.assign({}, state , {
          alumnos: auxx
         })  
         break
      default:
        
        break
    }
    return state
  }
  
  export default rootReducer
  