import React from 'react'

const List = ({users}) => {
  return (
    <div>
        <ul>
            {
                users.map((user, id)=> (
                    <li key={id}>{user}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default List