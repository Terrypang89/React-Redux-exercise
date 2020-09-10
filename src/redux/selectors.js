import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = store => store.todos;

//returns the allIds list from the todos store
export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

//finds the todo in the store given by id
export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
// is slightly more complex. It takes all the ids from allIds, 
//finds each todo in byIds, and returns the final array of todos
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

// filters the todos according to the visibility filter
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
