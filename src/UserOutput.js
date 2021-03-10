import React from 'react';
import './UserOutput.css';
const UserOutput=(props)=>{
    return(
        <div className="Output">
            <p>Hi Iam {props.userName}</p>
            <p>I love learning React</p>
        </div>
    )
}

export default UserOutput