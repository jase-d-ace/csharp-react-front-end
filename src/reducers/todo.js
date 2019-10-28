import {
  QUERY_TODOS_LIST,
  TODO_QUERY_REJECTED,
  TODO_QUERY_RESOLVED,
  PROMISE_PENDING
} from '../constants/types';

const initialState = {
  promisePending: false,
  todoQueryResult: null,
  todoErr: null
}

export const todo = (state = initialState, action) => {
  switch(action.type){
    case QUERY_TODOS_LIST:
      return state
    case PROMISE_PENDING:
      return {
        ...state,
        promisePending: true
      }
    case TODO_QUERY_RESOLVED:
      return {
        ...state,
        promisePending: false,
        todoQueryResult: action.res
      }
    case TODO_QUERY_REJECTED:
      return {
        ...state,
        promisePending: false,
        todoErr: action.err
      }
    default:
      return {
        ...state
      }
  }
}
