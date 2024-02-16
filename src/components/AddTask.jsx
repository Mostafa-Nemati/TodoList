import { useState } from "react";
import { useDispatchTasks } from "../reducer/Todo";

const AddTask = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatchTasks();

    const formHandel = (e) => {
        e.preventDefault();
        if(input !== '') {
            dispatch({ type:'ADDED', input: input })
        }
        setInput('')
    }

    return (
        <form onSubmit={formHandel}>
            <div className="flex items-center gap-x-3">
                <input 
                    type="text" 
                    placeholder="Add Task ..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border rounded-md text-sm p-2 flex-1"
                />
                <button type="submit" className="py-2 px-3 bg-zinc-100 text-md hover:bg-zinc-200 rounded-md">Add</button>
            </div>
        </form>
    )
}
export default AddTask;
