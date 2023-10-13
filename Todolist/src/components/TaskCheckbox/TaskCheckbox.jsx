
import "./TaskCheckbox.scss"
function TaskCheckbox({ onChange }) {
    return (
        <>
            <input className='left-Task' type="checkbox" onChange={onChange} />
        </>
    )
}

export default TaskCheckbox