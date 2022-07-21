import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackButton = ({ username }) => {

    return (
        <div>
            <div className="back-button flex">
                <AiOutlineArrowLeft className="left-arrow-icon" />
                <h3 className="username-text">{username}</h3>
            </div>
        </div>
    )

}

export default BackButton;