import React from 'react'

const User = ({id, email, name}) => {
  return (
    <div className='userlist'>
      <span>{name}</span>
      <span>{email}</span>
    </div>
  )
}

export default User;