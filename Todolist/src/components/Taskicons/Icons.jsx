import IconDelete from "./IconDelete/IconDelete"
import IconShare from "./IconShare/IconShare"
import IconCopy from "./Iconcopy/IconCopy"

function Icons({ onDelete, id }) {
    return (
        <div className="icons">
            <IconCopy id={id} />
            <IconShare id={id} />
            <IconDelete onDelete={onDelete} id={id} />
        </div>
    )
}

export default Icons