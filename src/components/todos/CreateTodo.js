import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor(){
    super(),
    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit= (event) => {
    event.preventDefault() // prevent a refresh to occur 
    const formData = {...this.state}
    this.props.addTodo(formData)
    this.setState({
      text: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label>add Todo</label>
            <input type="text"  onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData }) // taking the action
  }
}


export default connect(null, mapDispatchToProps)(CreateTodo);
