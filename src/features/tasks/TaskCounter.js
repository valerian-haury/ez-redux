import React from "react";
import {useSelector} from "react-redux";
import {selectAllTasks} from "./tasksSlice";


export const TaskCounter = () => {

    const tasksToDo = useSelector(selectAllTasks).filter(task => !task.done)

    return (
        <div className={"task-counter-container flex-center h2"}>
            <span className={"title"}>Tasks to do : <span className={"second-title"}>{tasksToDo.length}</span></span>
        </div>

    )
}