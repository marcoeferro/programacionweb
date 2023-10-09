
import "./TaskIcon.css"
function TaskIcon({ onDelete, id }) {
    const handleclicked = () => {
        onDelete(id)
    }
    return (
        <div class="material-symbols-outlined right-Task delete-icon" onClick={handleclicked}>delete</div>
    )
}

export default TaskIcon