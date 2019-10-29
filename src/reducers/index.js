import { combineReducers } from 'redux';
import { pokemon } from './pokemon';
import { todo } from './todo'
import { name } from './age'

export default combineReducers({
  pokemon,
  todo,
  name
})
