import React from 'react'
import Icon from '../Components/Icon'

const Delete = ({ onDelete }) => {
  return (
    <Icon
        type='delete'
        color='#495057'
        onClick={onDelete}
    />
  )
}

export default Delete
