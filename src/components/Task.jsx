import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { useTasks } from "../reducer/Todo";

const Task = () => {
    const tasks = useTasks();
   
    return (
        <div className="w-[500px] mx-auto mt-10">
            <AddTask />

            <ul className="mt-5">
                {
                    tasks.map(task => (
                        <TaskList key={task.id} task={task} />
                    ))
                }
            </ul>
        </div>

    )
}
export default Task;
