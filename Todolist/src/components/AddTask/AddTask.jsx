import "./AddTask.css"
import AddTitle from "../AddTitle/AddTitle"
import AddInput from '../AddInput/AddInput'
import AddButton from "../AddButton/AddButton"
import { useState } from "react"

function AddTask({ onAddTask, title, inputplaceholder, inputtype, buttontext }) {
    const [newTask, setNewTask] = useState('')

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleAddTask = () => {
        newTask != '' ? onAddTask(newTask) : pass;
        setNewTask('')
        // Llama a la función del padre pasando el nombre de la tarea
        // Limpia el campo de entrada
    }
    return (
        <>
            <div>
                <AddTitle title={title} />
                <div className='UpperPart'>
                    <AddInput value={newTask} handleInputChange={handleInputChange} placeholder={inputplaceholder} type={inputtype} />
                    <AddButton text={buttontext} onClick={handleAddTask} />
                </div>
            </div>
        </>
    )
}

export default AddTask