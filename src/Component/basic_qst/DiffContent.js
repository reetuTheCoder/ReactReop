import React from 'react'

const DiffContent = ({userType}) => {
  return (
    <div>
        <h1>different content based user</h1>
        <div>
            {
                userType === "Admin" && (
                    <h4>Hello I am Admin</h4>
                )
            }
             {
                userType === "User" && (
                    <h4>Hello I am User</h4>
                )
            }
             {
                userType === "Guest" && (
                    <h4>Hello I am Guest</h4>
                )
            }
        </div>
    </div>
  )
}

export default DiffContent