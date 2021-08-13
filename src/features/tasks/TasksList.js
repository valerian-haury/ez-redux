import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {selectAllTasks, taskToggled} from "./tasksSlice";


export const TasksList = () => {

    return (
        <div className={"tasks-list-container flex-center"}>
            <table>

            </table>
        </div>
    )
}