function AddInput({ placeholder, type, handleInputChange, value }) {
    return (
        <>
            <input type={type} placeholder={placeholder} onChange={handleInputChange} value={value} />
        </>
    )
}

export default AddInput