import { useState } from 'react'
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox'
import TextTask from '../TextTask/TextTask'
import "./Task.css"
import Icons from '../Taskicons/Icons'
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
            <Icons onDelete={onDelete} id={id} />
        </>
    )
}

export default Task