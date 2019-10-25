import {
  QUERY_TODOS_LIST,
  TODO_QUERY_REJECTED,
  TODO_QUERY_RESOLVED 
} from '../constants/types';

const initialState = {
  todoQueryResult: null,
  todoErr: null
}

export const todo = (state = initialState, action) => {
  switch(action.type){
    case QUERY_TODOS_LIST:
      return state
    case TODO_QUERY_RESOLVED:
      return {
        ...state,
        todoQueryResult: action.res
      }
    case TODO_QUERY_REJECTED:
      return {
        ...state,
        todoErr: action.err
      }
    default:
      return {
        ...state
      }
  }
}
