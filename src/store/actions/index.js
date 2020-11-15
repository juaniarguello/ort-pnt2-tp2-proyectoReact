import { ADD_ALUMNO, DELETE_ALUMNO, EDIT_ALUMNO } from '../constants/action_types'

export function addAlumno(data){
    return{
        type: ADD_ALUMNO,
        data
    }
}

export function deleteAlumno(data) {
  return {
    type: DELETE_ALUMNO,
    data
  }
}

export function editAlumno(data) {
  return {
    type: EDIT_ALUMNO,
    data
  }
}
