import React from 'react';
import wait from '../Utils/wait-no.gif';

const Empty = () => {
    return (
        <div className='Empty'>
            <h2 className='Subtitle'>Create your first To Do</h2>
            <img className='Wait' src={wait} alt="wait" />
        </div>
  )
}

export default Empty
