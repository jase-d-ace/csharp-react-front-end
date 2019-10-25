import { combineReducers } from 'redux';
import { pokemon } from './pokemon';
import { todo } from './todo'

export default combineReducers({
  pokemon,
  todo
})
