import { useState } from 'react'
import AddTask from './AddTask/AddTask'
import TaskList from './TasksList/TasksList'
import "./TodoList.scss"
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
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    };

    return (
        <>
            <div className="Todo">
                <button onClick={toggleMode} className="mode-toggle">
                    Cambiar Modo
                </button>
                <AddTask mode={isDarkMode} onAddTask={handleAddTask} title="Lista de Marco" inputplaceholder="Ingrese una Tarea Nueva" inputtype="text" buttontext="Add" />
                <TaskList mode={isDarkMode} onDelete={handleRemoveTask} tasks={tasks} />
            </div >
        </>
    )
}

export default TodoList