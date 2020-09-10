// is the component that renders a single todo item
//-> It renders the todo content, and shows that a todo is completed by crossing it out.
//-> It dispatches the action to toggle the todo's complete status upon onClick
import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

// todo is the props return by mapStateToProps when call at TodoList
const Todo = ({ todo, toggleTodo }) => ( 
    // when onClick toggleTodo(todo.id) is triggered, send action with todo.id to store
   <div> {console.log(todo)}
      <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : ":"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
  </div>
);

// read value from the store
export default connect(
  
    null,//mapStateToProps: 
  //called every time the store state changes. 
  //It receives the entire store state, and should 
  //return an object of data this component needs

  
  { toggleTodo } //mapDispatchToProps //action to be need to be dispatched

  //if it’s a function, it will be called once on component creation. 
  //It will receive dispatch as an argument, and should return an object 
  //full of functions that use dispatch to dispatch actions.

  //If it’s an object full of action creators, 
  //each action creator will be turned into a prop function that 
  //automatically dispatches its action when called. 
  //Note: We recommend using this “object shorthand” form.
)(Todo); //component
