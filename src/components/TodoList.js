//is the component that renders the list of todos:
//-> It renders the filtered list of todos 
//  when one of the VisibilityFilters is selected.
import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";


//parameter as todos components 
const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
          //set todo 
        })
      : "No todos, yay!"}
  </ul>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

// The <TodoList /> component is responsible for rendering the list of todos. 
// Therefore, it needs to read data from the store using mapStateToProps
// Our <Todo /> component takes the todo item as props. 
// We have this information from the byIds field of the todos. 
// However, we also need the information from the allIds field of the store 
// indicating which todos and in what order they should be rendered.
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  console.log(state);
  const todos = getTodosByVisibilityFilter(state, visibilityFilter); // do filtering
  return { todos };
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
///mapStateToProps: 
  //called every time the store state changes. 
  //It receives the entire store state, and should 
  //return an object of data this component needs

/*
                                Do Not Subscribe to the Store	                Subscribe to the Store
Do Not Inject Action Creators	connect()(Component)	                        connect(mapStateToProps)(Component)
Inject Action Creators	        connect(null, mapDispatchToProps)(Component)	connect(mapStateToProps, mapDispatchToProps)(Component)
*/