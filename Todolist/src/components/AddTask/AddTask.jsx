import "./AddTask.scss"
import "./../Todolist.scss"
import AddInput from '../AddInput/AddInput'
import AddButton from "../AddButton/AddButton"
import { useState, useEffect } from "react"

function AddTask({ onAddTask, inputplaceholder, inputtype, buttontext, isDarkMode }) {
    const [newTask, setNewTask] = useState('')
    const [isUpperPartFixed, setIsUpperPartFixed] = useState(false);

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleAddTask = () => {
        newTask != '' ? onAddTask(newTask) : pass;
        setNewTask('')
    }

    useEffect(() => {
        const upperPart = document.querySelector('.UpperPart');
        const container = document.querySelector('h1');
        const handleScroll = () => {
            const inputRect = upperPart.getBoundingClientRect();
            const contentRect = container.getBoundingClientRect();

            if (!isUpperPartFixed && inputRect.top <= 0) {
                upperPart.style.position = 'fixed';
                upperPart.style.top = '0';
                setIsUpperPartFixed(true);
            } else if (isUpperPartFixed && contentRect.bottom > -34) {
                upperPart.style.position = 'relative';
                setIsUpperPartFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isUpperPartFixed]);

    return (
        <>
            <div className="add-tast-contenedor">

                <div className='UpperPart'>
                    <AddInput isDarkMode={isDarkMode} value={newTask} handleInputChange={handleInputChange} placeholder={inputplaceholder} type={inputtype} />
                    <AddButton isDarkMode={isDarkMode} text={buttontext} onClick={handleAddTask} />
                </div>
            </div>
        </>
    )
}

export default AddTask