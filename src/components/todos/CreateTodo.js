import React, { Component } from 'react'
import { connect } from 'react-redux'
class CreateTodo extends Component {

  state = {
    texxt: ""
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  // using the alternate handleSubmit function below allows me to write connect() with no arguments given to it

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  // };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form> 
        {/* {this.state.text - this line of code visually checks to see if state is dynamically changning on the page} */}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};
 
export default connect(null, mapDispatchToProps)(CreateTodo);