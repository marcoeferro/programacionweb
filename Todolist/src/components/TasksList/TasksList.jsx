import Task from '../Task/Task'
import "./TasksList.scss"
function TaskList({ tasks, onDelete }) {
    return (
        <>
            <ul>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <li key={index}><Task name={task} onDelete={onDelete} id={index} /></li>
                    ))) : (<li className='Cartel'>NO HAY TAREAS </li>)}
                { }
            </ul>
        </>
    )
}

export default TaskList