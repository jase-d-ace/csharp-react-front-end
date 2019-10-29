import {
  NAME_SEARCH,
  NAME_RESOLVED,
  NAME_REJECTED
} from '../constants/types';

const initialState = {
  nameSearch: null,
  nameFound: false,
  nameRes: null,
  nameError: null
};

export const name = (state = initialState, action) => {
  switch(action.type) {
    case NAME_SEARCH:
      return {
        ...state,
        nameSearch: action.name
      }
    case NAME_RESOLVED:
      return {
        ...state,
        nameRes: action.nameRes,
        nameFound: true
      }
    case NAME_REJECTED:
      return {
        ...state,
        nameFound: false,
        nameErr: action.nameErr
      }
    default:
      return state
  }
}
