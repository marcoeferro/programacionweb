import "./AddInput.scss"
function AddInput({ placeholder, type, handleInputChange, value, isDarkMode }) {
    return (
        <>
            <input className={`input-task ${isDarkMode ? 'light-mode' : 'dark-mode'}`} type={type} placeholder={placeholder} onChange={handleInputChange} value={value} />
        </>
    )
}

export default AddInput