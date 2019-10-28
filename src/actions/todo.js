import * as types from '../constants/types';

const indexTodoList = () => ({
  type: types.QUERY_TODOS_LIST
});

const queryPending = () => ({
  type: types.PROMISE_PENDING
})

const queryResolved = res => ({
  type: types.TODO_QUERY_RESOLVED,
  res 
}) 
const queryRejected = err => ({
  type: types.TODO_QUERY_REJECTED,
  err
})

export const getAllTodos = () => (dispatch, getState) => {
  dispatch(queryPending());
  fetch('https://azuretodotests.azurewebsites.net/api/todo')
  .then( res => res.json() )
  .then(jsonArr => {
    dispatch(queryResolved(jsonArr))
  })
  .catch(e => {
    dispatch(queryRejected(new Error(e || 'nonononono')))
  })
}
