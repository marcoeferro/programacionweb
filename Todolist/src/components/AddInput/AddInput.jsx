import { useState } from 'react'
import "./AddInput.css"
function AddInput({ placeholder, type }) {

    return (
        <>
            <input type={type} placeholder={placeholder} />
        </>
    )
}

export default AddInput