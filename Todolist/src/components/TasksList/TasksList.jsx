import Task from '../Task/Task'
import "./TasksList.css"
function TaskList({ tasks, onDelete }) {
    return (
        <>
            <div>
                <ul>
                    {tasks.length > 0 ? (
                        tasks.map((task, index) => (
                            <li key={index}><Task name={task} onDelete={onDelete} id={index} /></li>
                        ))) : (<li className='Cartel'>NO HAY TAREAS </li>)}
                    { }
                </ul>
            </div>
        </>
    )
}

export default TaskList