import "./AddButton.css"
function AddButton({ text, onClick }) {
    return (
        <>
            <button className="button-task" onClick={onClick} >
                <span class="material-symbols-outlined">
                    done
                </span>
            </button>
        </>
    )
}

export default AddButton