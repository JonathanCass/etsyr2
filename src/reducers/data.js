const initialState = {
  data:[]
}

export default function(state=initialState, action) {
  switch (action.type) {
    case 'GET_DATA':
      return {...state, data:[...action.data]}
    default:
      return state
  }
}