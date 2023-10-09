import { useState } from 'react'
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox'
import TextTask from '../TextTask/TextTask'
import TaskIcon from '../TaskIcon/TaskIcon'
import "./Task.css"
function Task({ name, onDelete, id }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <div className='left-Task'>
                <TaskCheckbox onChange={handleCheckboxChange} />
                <TextTask name={name} isChecked={isChecked} />
            </div>
            <TaskIcon onDelete={onDelete} id={id} />
        </>
    )
}

export default Task