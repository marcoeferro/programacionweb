
import "./IconShare.scss"
function IconShare({ onDelete, id }) {
    const handleclicked = () => {
        onDelete(id)
    }
    return (
        <div class="material-symbols-outlined share-icon">
            share
        </div>
    )
}

export default IconShare