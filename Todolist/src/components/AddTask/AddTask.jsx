import "./AddTask.css"
import AddTitle from "../AddTitle/AddTitle"
import AddInput from '../AddInput/AddInput'
import AddButton from "../AddButton/AddButton"
function AddTask({ title, inputplaceholder, inputtype, buttontext }) {
    return (
        <>
            <div>
                <AddTitle title={title} />
                <div className='UpperPart'>
                    <AddInput placeholder={inputplaceholder} type={inputtype} />
                    <span ><AddButton text={buttontext} /></span>
                </div>
            </div>
        </>
    )
}

export default AddTask