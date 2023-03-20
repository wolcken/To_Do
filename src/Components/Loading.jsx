import React from 'react';
import load from '../Utils/cat-cute.gif'
import '../Styles/Loading.css';

const Loading = () => {
    return (
        <div className="Loading">
            <h2 className='Subtitle'>Loading</h2>
            <img className='Load' src={load} alt="load" />
        </div>
    )
}

export default Loading
