import {createSlice} from "@reduxjs/toolkit"
import {nanoid} from "nanoid";

const initialState = [
    {
        id: '0',
        title: "Do laundry",
        done: false,
    },
    {
        id: '1',
        title: "Call dentist",
        done: true,
    },
    {
        id: '2',
        title: "Walk the dog",
        done: false,
    }
]

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

        taskToggled(state, action) {
            const {id, done} = action.payload
            const existingTask = state.find(task => task.id === id)
            if (existingTask) {
                existingTask.done = done
            }
        },

        taskAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title) {
                return {
                    payload: {
                        id: nanoid(),
                        title: title,
                        done: false,
                    }
                }
            }
        }
    }
})

export const {taskAdded, taskToggled} = tasksSlice.actions

export default tasksSlice.reducer

export const selectAllTasks = state => state.tasks