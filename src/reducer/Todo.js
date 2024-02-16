import { createContext, useContext, useReducer } from "react";
import { initialTodo } from "../constants/Todos";

const TaskContext = createContext(null);
const DispatchContext = createContext(null);

export function TaskProvider ({children}) {
    const [tasks, dispatch] = useReducer(reducer, initialTodo);

    return (
        <TaskContext.Provider value={tasks}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </TaskContext.Provider>
    )
}

export function useTasks() {
    return useContext(TaskContext)
}
export function useDispatchTasks() {
    return useContext(DispatchContext)
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADDED": {
            return [...state, {
                id: Date.now(),
                text: action.input,
                done:false
            }];
        }
        case 'DELETED' :{
            return state.filter(task => task.id !== action.id)
        }
        case 'EDIT' : {
            return state.map(task => {
                if(task.id === action.task.id) {
                    return {
                        ...task,
                        text : action.task.text
                    }
                }else {
                    return task
                }
            })
        }
        case 'TOGGLE' : {
            return state.map(task => {
                if(task.id === action.id) {
                    return {
                        ...task,
                        done : !task.done
                    }
                }else {
                    return task
                }
            })
        }
        default : {
            throw Error('Unknown action:' + action.type)
        }
         
    }
}

export default reducer;