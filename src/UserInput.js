import React from 'react'

const UserInput=(props)=>{
    const style={
       padding:'50px'
    }
    const input={
        height: '30px',
        outline: 'none',
        borderRadius: '5px'
    }
    return(
        <div style={style}>
            <input style={input} type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default UserInput