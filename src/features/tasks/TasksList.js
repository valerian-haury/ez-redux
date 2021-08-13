import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {selectAllTasks, taskToggled} from "./tasksSlice";


export const TasksList = () => {

    const dispatch = useDispatch()

    const tasks = useSelector(selectAllTasks)
    const orderedTasks = tasks.slice().sort((a) => (a.done) ? -1 : 1) // makes the done tasks to go up

    const handleTaskChanged = (e) => {
        const {id, checked} = e.currentTarget
        dispatch(taskToggled({id: id, done: checked}))
    }

    const renderTasks = orderedTasks.map(task => (
        <tr key={"tr-task-" + task.id}>
            <td>
                <input type="checkbox" id={task.id} name={task.id} checked={task.done} onChange={handleTaskChanged}/>
            </td>
            <td>
                <label className={task.done ? "checked" : ""} htmlFor={task.id}>{task.title}</label>
            </td>
        </tr>
    ))

    return (
        <div className={"tasks-list-container flex-center"}>
            <table>
                {renderTasks}
            </table>
        </div>
    )
}