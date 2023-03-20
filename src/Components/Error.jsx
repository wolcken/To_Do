import React from 'react';
import angry from '../Utils/angry256.gif';

const Error = ({ error }) => {
    return (
        <div className='Error'>
            <h2 className='Subtitle'>{error}</h2>
            <img className='Angry' src={angry} alt="angry" />
        </div>
    )
}

export default Error
