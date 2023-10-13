import "./TodoList.scss"
import { useState } from 'react'
import AddTask from './AddTask/AddTask'
import TaskList from './TasksList/TasksList'
import AddTitle from "./AddTitle/AddTitle"
import Divider from "./Divider/Divider"

function TodoList() {
    const [tasks, setTasks] = useState([])
    const [isDarkMode, setIsDarkMode] = useState(false);


    const handleAddTask = (newTask) => {
        setTasks([newTask, ...tasks]); // Agrega la nueva tarea al array de tareas
    }
    const handleRemoveTask = (taskId) => {
        // Create a new array without the deleted task
        const updatedTasks = tasks.filter((task, index) => index !== taskId);
        setTasks(updatedTasks)
    }

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    };

    return (
        <>
            <div className="app">
                <AddTitle title="Lista de Marc" isDarkMode={isDarkMode} toggleMode={toggleMode} />
                <AddTask isDarkMode={isDarkMode} onAddTask={handleAddTask} title="Lista de Marc" inputplaceholder="Ingrese una Tarea Nueva" inputtype="text" buttontext="Add" />
                <Divider isDarkMode={isDarkMode} />
                <TaskList isDarkMode={isDarkMode} onDelete={handleRemoveTask} tasks={tasks} />
            </div >
        </>
    )
}

export default TodoList