import { useState } from "react";
import { useDispatchTasks } from "../reducer/Todo";

const TaskList = ({task}) => {
    const [edit, setEdit] = useState(false);
    const [inputEdit, setInputEdit] = useState(task.text);
    const dispatch = useDispatchTasks();

    const editHandler = () => {
        dispatch({ type: 'EDIT', task:{ id:task.id, text:inputEdit } })
        setEdit(false)
    } 
   
    return (
        <li className="flex gap-x-5 my-3">
            <label>
                <input type="checkbox" checked={task.done} onChange={() => { dispatch({ type: 'TOGGLE', id: task.id }) }} className="w-4 h-4"/>
                    {
                        ! edit
                        ?   <>
                                <span className="text-sm mx-2">{task.text}</span>
                                <button type="submit" className="p-2 bg-zinc-100 text-xs hover:bg-zinc-200 rounded-md" onClick={() => setEdit(true)}>Edit</button>
                            </>
                        :   <>
                                <input type="text" value={inputEdit} onChange={(e) => setInputEdit(e.target.value)} className="border mx-2"/>
                                <button type="button" className="p-2 bg-zinc-100 text-xs hover:bg-zinc-200 rounded-md" onClick={editHandler}>Save</button>
                            </>    
                    }
                <button type="submit" className="p-2 bg-zinc-100 text-xs hover:bg-zinc-200 rounded-md mx-2" onClick={() => { dispatch({ type:'DELETED', id: task.id })} }>Delete</button>
            </label>
        </li>
    )
}

export default TaskList