import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Todo</label>
            <br></br>
            <input type='text' onChange={this.handleChange} value={this.state.text}></input>
          </p>
          <input type="submit"></input>
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: FormData => dispatch({type: 'ADD_TODO', payload: FormData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
