import Task from '../Task/Task'
import "./TasksList.css"
function TaskList() {

    return (
        <>
            <div>
                <ul>
                    <li>
                        <Task name="Tarea 1" />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TaskList