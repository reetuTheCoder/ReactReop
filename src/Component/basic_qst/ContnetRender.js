import React from 'react'

const ContnetRender = ({isLogin}) => {
  return (
    <div>
{
  isLogin ? <h4>Welcome to our page</h4> : <h4>Please login </h4>
}
    </div>
  )
}

export default ContnetRender