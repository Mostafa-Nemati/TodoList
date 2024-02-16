import Task from "./components/Task";
import { TaskProvider } from "./reducer/Todo";

const App = () => {
    return (
        <TaskProvider>
            <Task />
        </TaskProvider>
    )
}
export default App;
