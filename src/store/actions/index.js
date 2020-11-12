import { ADD_ALUMNO, UPDATE_CURSO } from '../constants/action_types'

export function addAlumno(data){
    return{
        type: ADD_ALUMNO,
        data
    }
}

export function updateCurso(data) {
    return {
      type: UPDATE_CURSO,
      data
    }
  }
  