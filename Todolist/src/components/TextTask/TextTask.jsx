import { useState } from 'react'
import "./TextTask.css"
function TextTask({ name }) {
    return (
        <>
            <div className='text-Task'>{name}</div>
        </>
    )
}

export default TextTask