import React, {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {taskAdded} from "./tasksSlice"

export const AddTaskForm = () => {
    return (
        <div className={"flex-center"}>
            <input className={"addTask-title-input"} type="text" id="task-title" name="task-title" value={""}
                   placeholder={"task name"}
            />
            <input className={"add-button"} type="button" value="ADD"/>
        </div>
    )
}