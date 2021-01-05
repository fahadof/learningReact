import React , { Component } from 'react';

function Task(props){
    const index = props.index;
    const todo = props.todo;
    const CompleteTask = props.CompleteTask;

    return (<li>
            {todo.text}
            <button onClick={() => {CompleteTask(index)}}> Done </button>
            </li>)
}

function CreateTask(props){
    // const newTask = props.newTask ;//this.state.newTask;
    // const UpdateNewTask = props.UpdateNewTask ;//this.UpdateNewTask;
    // const AddTask = props.AddTask ;//this.AddTask;
    const {newTask , UpdateNewTask , AddTask} = props;
    return (
        <div>
            <input value={newTask} onChange={UpdateNewTask} style={{width : 250}}/>
            <button onClick={AddTask}>Add New Task</button>
        </div>
        )
}
class Todo extends Component{

    state = {
        newTask : "",
        todos : [
            {text : 'Learn ReactJs'},
            {text : 'Learn React Native'},
            {text : 'Go to coffee'},
        ]
    }

    /*
    *
    * This Function To remove completes task
    * */
    CompleteTask = (index) => {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
        todos
    });
    }

    /*
    *
    * This function to Add new task
    *
    * */
    AddTask = () =>{
        // to save all state in variable
        const todos = this.state.todos;

        if (this.state.newTask.length > 0){
            // To Save new value in state
            todos.push({text : this.state.newTask});
        }

        // Update todos and clear element of new tasks
        this.setState({todos, newTask : ""});
    }

    /*
    *
    * This function to Update state and add new task
    *
    * */
    UpdateNewTask = (event) =>{
        this.setState({
            newTask :  event.target.value
        });
    }
    render() {
        return <div className="App">
            {this.state.todos.map((todo , index) => <Task todo={todo} CompleteTask={this.CompleteTask} index={index} key={index}/>)}
            <hr/>
            <CreateTask newTask={this.state.newTask} UpdateNewTask={this.UpdateNewTask} AddTask={this.AddTask}/>
        </div>
    }
}

export default Todo ;
