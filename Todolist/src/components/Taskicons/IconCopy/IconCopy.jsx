
import "./IconCopy.scss"
function IconCopy({ onDelete, id }) {
    const handleclicked = () => {
        onDelete(id)
    }
    return (
        <div class="material-symbols-outlined copy-icon">
            content_copy
        </div>
    )
}

export default IconCopy