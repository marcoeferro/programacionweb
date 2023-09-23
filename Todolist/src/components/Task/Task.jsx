import { useState } from 'react'
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox'
import TextTask from '../TextTask/TextTask'
import TaskIcon from '../TaskIcon/TaskIcon'
import "./Task.css"
function Task({ name }) {
    return (
        <>
            <div className='left-Task'>
                <TaskCheckbox />
                <TextTask name={name} />
            </div>
            <TaskIcon />
        </>
    )
}

export default Task