import * as types from '../constants/types';
import _ from 'underscore';

const searchPokemonUnsafe = query => ({
  type: types.SEARCH_POKEMON,
  query
});

const queryRejected = err => ({
  type: types.QUERY_REJECTED,
  err
});

const queryResolved = res => ({
  type: types.QUERY_RESOLVED,
  res
});

const debouncedBuildQuery = _.debounce((query, dispatch) => {
  dispatch(searchPokemonUnsafe(query));
}, 100);

export const buildQuery = query => (dispatch, getState) => {
  debouncedBuildQuery(query, dispatch);
};

export const searchPokemon = (pokemon) => (dispatch, getState) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${getState().pokemon.searchQuery}`)
  .then( res => new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("The API took too long to respond...")
    }, 3000)
    resolve(res.json());
  }))
    .then(({ name, id, types }) => {
      dispatch(queryResolved({name, id, types}));
  })
  .catch(e => {
    dispatch(queryRejected(new Error(e || "something went super wrong")));
  })
}
