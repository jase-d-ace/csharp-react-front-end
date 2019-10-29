import * as types from '../constants/types';
import _ from 'underscore';

const nameSearch = name => ({
  type: types.NAME_SEARCH,
  name
})

const nameResolved = nameRes => ({
  type: types.NAME_RESOLVED,
  nameRes
});

const nameRejected = nameErr => ({
  type: types.NAME_REJECTED,
  nameErr
})

const debouncedBuildName = _.debounce((query, dispatch) => {
  dispatch(nameSearch(query))
}, 100)

export const buildName = name => (dispatch, getState) => {
  debouncedBuildName(name, dispatch)
}


export const searchYourName = name => (dispatch, getState) => {
  fetch(`https://azuretodotests.azurewebsites.net/api/age/${getState().name.nameSearch}`)
  .then( res => res.json() )
  .then( jsonRes => {
    dispatch(nameResolved(jsonRes))
  })
  .catch( err => {
    dispatch(nameRejected(new Error(err || "nonononono")))
  })
}
