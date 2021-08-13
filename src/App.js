import React from 'react';
import './App.css';
import {TasksList} from "./features/tasks/TasksList";
import {TaskCounter} from "./features/tasks/TaskCounter";
import {AddTaskForm} from "./features/tasks/AddTaskForm";

function App() {
    return (
        <div className="App">
            <div className={"body"}>
                <div className={"content"}>
                    <div className={"nav flex-center h1"}><span className={"title"}>TO DO LIST</span></div>
                    <TaskCounter />
                    <TasksList/>
                    <AddTaskForm />
                </div>
            </div>

        </div>
    );
}

export default App;
