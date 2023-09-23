import { useState } from 'react'
import AddTask from './AddTask/AddTask'
import TaskList from './TasksList/TasksList'
import "./TodoList.css"
function TodoList() {
    const [tasks, setTasks] = useState([])

    const handleAddTask = (newTask) => {
        setTasks([newTask, ...tasks]); // Agrega la nueva tarea al array de tareas
    }
    const handleRemoveTask = (taskId) => {
        // Create a new array without the deleted task
        const updatedTasks = tasks.filter((task, index) => index !== taskId);
        setTasks(updatedTasks)
    }

    return (
        <>
            <div>
                <AddTask onAddTask={handleAddTask} title="Lista de Marco" inputplaceholder="Ingrese una Tarea Nueva" inputtype="text" buttontext="Add" />
                <TaskList onDelete={handleRemoveTask} tasks={tasks} />
            </div>
        </>
    )
}

export default TodoList