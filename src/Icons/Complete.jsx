import React from 'react'
import Icon from '../Components/Icon'

const Complete = ({ completed, onComplete }) => {
  return (
    <Icon
        type='check'
        color={completed ? '#e9ecef' : '#495057'}
        onClick={onComplete}
    />
  )
}

export default Complete
