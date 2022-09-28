import React, { useReducer } from 'react'

function formReducer(state, action) {
  switch (action.type) {
    case 'field':{
      return{
        ...state,
        [action.field]: action.value,
      }
    }  
    case 'error':{
      return{
        ...state,
        error: "El espacio es muy corto"
      }
    }  
    case 'noError':{
      return{
        ...state,
        error: ""
      }
    }  
    default:
      break;
  }
  return state
}

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  error: "",
}

export const Form = () => {

  const [state, dispatch] = useReducer(formReducer, initialState)

  const { firstName, lastName, email, error } = state

  function handleNombre(e) {
    const { value } = e.target;
    dispatch({
      type: 'field',
      field: 'firstName',
      value: value
    })
    if (value.length<2) {
      dispatch({type: 'error'})
    }
    if (value.length>2) {
      dispatch({type: 'noError'})
    }
  }
  function handleApellido(e) {
    const { value } = e.target;
    dispatch({
      type: 'field',
      field: 'lastName',
      value: value
    })
    if (value.length<2) {
      dispatch({type: 'error'})
    }
    if (value.length>2) {
      dispatch({type: 'noError'})
    }
  }
  function handleEmail(e) {
    const { value } = e.target;
    dispatch({
      type: 'field',
      field: 'email',
      value: value
    })
    if (value.length<2) {
      dispatch({type: 'error'})
    }
    if (value.length>2) {
      dispatch({type: 'noError'})
    }
  }

  return (
    <div className='form-container'>
      {JSON.stringify(state)}
      <form>
        {error && <p className='error'>{error}</p>}
        <div className='form-group'>
          <label>Primer nombre: </label>
          <input 
            type="text"
            placeholder='nombre'
            value={firstName}
            onChange={handleNombre}
          />
        </div>
        <div className='form-group'>
          <label>Apellido: </label>
          <input 
            type="text"
            placeholder='apellido'
            value={lastName}
            onChange={handleApellido}
          />
        </div>
        <div className='form-group'>
          <label>Email: </label>
          <input 
            type="email"
            placeholder='correo electrónico'
            value={email}
            onChange={handleEmail}
          />
        </div>
        <button type='submit'>Ingresar</button>
      </form>
    </div>
  )
}

