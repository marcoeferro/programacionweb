import Task from '../Task/Task'
import "./TasksList.scss"
function TaskList({ tasks, onDelete, isDarkMode }) {
    return (
        <>
            <ul className={`lista-items ${isDarkMode ? 'light-mode' : 'dark-mode'}`}>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <li className={`items ${isDarkMode ? 'light-mode' : 'dark-mode'}`} key={index}><Task name={task} onDelete={onDelete} id={index} /></li>
                    ))) : (<li className={`cartel ${isDarkMode ? 'light-mode' : 'dark-mode'}`}>NO HAY TAREAS </li>)}
                { }
            </ul>
        </>
    )
}

export default TaskList