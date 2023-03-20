import React from 'react';
import { ReactComponent as DeleteSVG } from '../Icons/trash.svg';
import { ReactComponent as CheckSVG } from '../Icons/pencil.svg';
import '../Styles/Icon.css';

const iconTypes = {
    "check": color => (
        <CheckSVG className='Icon-svg Icon-svg--check' fill={color} />
    ),

    "delete": color => (
        <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
    ),
}

const Icon = ({ type, color = '#8428da', onClick }) => {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export default Icon
