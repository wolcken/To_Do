import React from 'react';
import gear from '../Utils/load1-256.gif';
import '../Styles/Button.css';

const Buttons = (props) => {

    const onClikButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <>
            <button
                className="Button"
                onClick={onClikButton}
            >
                +
            </button>
            <img className='gear' src={gear} alt="gear" />
        </>
    )
}

export default Buttons
