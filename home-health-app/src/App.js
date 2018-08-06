import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskCard from './TaskCard/TaskCard';

class App extends Component {

  state = {
    summerTasks: [
      {task: "Clean the carpet.", lastCompleted: "07/28/17"},
      {task: "Clean the blinds.", lastCompleted: "07/28/17"},
      {task: "Aerate the grass.", lastCompleted: "07/28/17"},
      {task: "Wash the driveway.", lastCompleted: "07/28/17"},
      {task: "Cut the grass.", lastCompleted: "07/28/17"},
      {task: "Take out spiders.", lastCompleted: "07/28/17"}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Home Health</h1>
        </header>
        {
          this.state.summerTasks.map(task => {
            return(
              <TaskCard key={task.task} task={task.task} lastCompleted={task.lastCompleted} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
