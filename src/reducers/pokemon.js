import {
  SEARCH_POKEMON,
  QUERY_REJECTED,
  QUERY_RESOLVED
} from '../constants/types';

const initialState = {
  searchQuery: null,
  queryResult: null,
  err: null
};

export const pokemon = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_POKEMON:
      return {
        ...state,
        searchQuery: action.query
      }
    case QUERY_RESOLVED:
      return {
        ...state,
        err: null,
        queryResult: action.res,
      }
    case QUERY_REJECTED:
      return {
        ...state,
        queryResult: null,
        err: action.err
      }
    default:
      return {
        ...state
      }
  }
}
