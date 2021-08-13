import React from "react";
import {useSelector} from "react-redux";
import {selectAllTasks} from "./tasksSlice";


export const TaskCounter = () => {

    return (
        <div className={"task-counter-container flex-center h2"}>
            <span className={"title"}>Tasks to do : <span className={"second-title"}>0</span></span>
        </div>

    )
}