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
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-serif ">To-do List</h1> 
        <input value={this.state.input} onChange={this.handleChange} className='outline rounded m-5 p-3'
        placeholder="Add Your Task"/>
        <button onClick={this.submitTask} className="italic font-serif bg-purple-300 py-4  px-10 rounded-full hover:bg-purple-200">Add Task</button>
        <br/>
        <ul className="border-2  flex flex-col items-start pl-7 py-3
         m-2 list-disc" >
          {this.props.tasks.map((task,idx)=>{
            return ( <li key={idx} className="pr-40 items-start ">{task}</li> );
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

