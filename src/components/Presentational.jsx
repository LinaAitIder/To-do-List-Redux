import React, { Component } from 'react'
import { connect } from 'react-redux';
import addTask from '../actions/addTask';


class Presentational extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input:'',
    }
    this.handleChange= this.handleChange.bind(this);
    this.submitTask=this.submitTask.bind(this);
  }
  handleChange(event) {
    this.setState({input: event.target.value});
  }
  submitTask(){
    this.props.addNewTask(this.state.input);
    this.setState({input:''});
  }
  render() {
    return (
      <div>
        <h1>To-do List</h1>
        <input value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.submitTask}>Add to-do</button>
        <br/>
        <ul>
          {this.props.tasks.map((task,idx)=>{
            return ( <li key={idx}>{task}</li> );
          })}
        </ul>
      </div>
      
    )
  }
}

let mapStateToProps = (state) => {
  return {
    tasks : state
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addNewTask : (task) => dispatch(addTask(task))
  }
}

const PresentationalContainer = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default PresentationalContainer;

