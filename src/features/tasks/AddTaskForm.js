import React, {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {taskAdded} from "./tasksSlice"

// fonction to dynamically change the focus
const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {
        htmlElRef.current && htmlElRef.current.focus()
    }
    return [htmlElRef, setFocus]
}

export const AddTaskForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")

    const [inputRef, setInputFocus] = useFocus()

    const handleAddTask = () => {
        dispatch(taskAdded(title))
        setTitle("")
        setInputFocus() //set the focus on the text input
    }

    const handleTitleChange = (e) => {
        const {value} = e.currentTarget
        setTitle(value)
    }

    return (
        <div className={"flex-center"}>
            <input className={"addTask-title-input"} type="text" id="task-title" name="task-title" value={title}
                   placeholder={"task name"} onChange={handleTitleChange}
                   ref={inputRef}
            />
            <input className={"add-button"} type="button" value="ADD" onClick={handleAddTask} disabled={!title}/>
        </div>
    )
}