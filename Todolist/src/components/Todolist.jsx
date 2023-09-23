import { useState } from 'react'
import AddTask from './AddTask/AddTask'
import TaskList from './TasksList/TasksList'
import "./TodoList.css"
function TodoList() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <AddTask title="Lista de Marco" inputplaceholder="Ingrese una Tarea Nueva" inputtype="text" buttontext="Add" />
                <TaskList />
            </div>
        </>
    )
}

export default TodoList