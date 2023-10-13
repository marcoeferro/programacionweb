import "./AddTitle.scss"
function AddTitle({ title, isDarkMode, toggleMode }) {

    return (
        <div className="header">

            <h1>{title}</h1>
            <div class="material-symbols-outlined mode-icon" onClick={toggleMode}>
                {isDarkMode ? 'dark_mode' : 'light_mode'}
            </div>
        </div>
    )
}

export default AddTitle