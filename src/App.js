import React from 'react';
import './App.css';
import services from './services/services';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchPokemon, buildQuery } from './actions/pokemon';
import { getAllTodos } from './actions/todo';

function App({searchPokemon, buildQuery, getAllTodos}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>We made it, boiz</h1>
        <form onSubmit={(e) => services.submit(e, searchPokemon)}>
          <input onChange={(e) => services.inputChange(e.target.value, buildQuery)} type="text" name="pokemon" placeholder="search for a pokemon here!" />
          <input type="submit" value="search pokemon" />
        </form>
        <button onClick={getAllTodos}>Click me for todos</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  queryResult: state.pokemon.queryResult,
  err: state.pokemon.err,
  todoQueryResult: state.todo.todoQueryResult,
  todoErr: state.todo.todoErr
});

App.propTypes = {
  searchPokemon: PropTypes.func,
  buildQuery: PropTypes.func,
  queryResult: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    }))
  }),
  getAllTodos: PropTypes.func,
  todoQueryResult: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    complete: PropTypes.bool
  }))
};

export default connect(mapStateToProps, { searchPokemon, buildQuery, getAllTodos })(App);
