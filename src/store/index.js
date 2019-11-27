import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";

function data( state = { dataRandom: [], isLoading: false}, action){
  switch (action.type){
    case 'FETCH':
      return { ...state, dataRandom : action.data }
    case 'SEARCH':
      return { ...state, dataRandom: action.data }
    case 'LOADING':
      console.log('masuuuk')
      return { ...state, isLoading: true }
    case 'LOADING_DONE':
      return { ...state, isLoading: false } 
    default: 
      return state
  }
}

let store = createStore(data, applyMiddleware(thunk))

export default store