import { createContext, useReducer } from "react";
import appReducer from './AppReducer'
import {v4} from 'uuid'

const initialState = {
    tasks : [
        {
            id: "1",
            title:  "One",
            description: "First task",
            done: false
        },
        {
            id: "2",
            title:  "Two",
            description: "Second task",
            done: false
        }
    ]
}

export const GloblaContext = createContext(initialState)

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const addTask = (task) => dispatch({type:'ADD_TASK', payload: {...task, id: v4() } })
    
    const deleteTask = (id) => dispatch({type:'DELETE_TASK', payload: id})

    const updateTask = (task) => dispatch({type:'UPDATE_TASK', payload: task })

    const doneTask = (id) => dispatch({type:'DONE_TASK', payload: id })

    return (
        <GloblaContext.Provider value={{ ...state,addTask,deleteTask,updateTask,doneTask }}>
            {children}
        </GloblaContext.Provider>
    )
}