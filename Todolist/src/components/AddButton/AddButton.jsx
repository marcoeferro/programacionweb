import "./AddButton.scss"
function AddButton({ text, onClick, isDarkMode }) {
    return (
        <>
            <button className={`button-task ${isDarkMode ? 'light-mode' : 'dark-mode'}`} onClick={onClick} >
                <span class="material-symbols-outlined">
                    done
                </span>
            </button>
        </>
    )
}

export default AddButton