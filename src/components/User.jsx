import React from 'react'

const User = (props) => {
    const {data} = props
    console.log(data)
  return (
    <div>
    {
        data.map(item=>{
            return(
                <>
                <h1>{item.name}</h1>
                </>
            )
        })
    }
    </div>
  )
}

export default User
