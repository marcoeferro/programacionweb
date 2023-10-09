import "./TextTask.css"
function TextTask({ name, isChecked }) {
    const textStyle = isChecked ? { textDecoration: 'line-through' } : {};

    return (
        <>
            <div className='text-Task' style={textStyle}>{name}</div>
        </>
    )
}

export default TextTask