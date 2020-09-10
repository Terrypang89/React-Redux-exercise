// is the component that allows a user to input a todo item and add to the list 
// upon clicking its “Add Todo” button
//-> It uses a controlled input that sets state upon onChange.
//-> When the user clicks on the “Add Todo” button, it dispatches the action 
//      (that we will provide using React Redux) to add the todo to the store
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input }); //set input value
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input); // set the state to addTodo action
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo } //sent action payload to store
)(AddTodo);
// export default AddTodo;
