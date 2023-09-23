import { useState } from 'react'
import "./App.css"
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='Container'>
                <h1>La lista de Marco</h1>
                <div className='UpperPart'>
                    <input type="text" placeholder='Ingrese Una tarea' id='input1' />
                    <button>Add</button>
                </div>
                <div className='LowerPart'>
                    <ul>
                        <li>
                            <div className='left-Task'>
                                <input className='left-Task' type="checkbox" />
                                <span className='text-Task'>Tarea 1</span>
                            </div>
                            <span class="material-symbols-outlined right-Task">delete</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App