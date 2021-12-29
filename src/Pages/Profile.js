import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
export default function Profile() {
    let navigate = useNavigate();
    let {username}= useParams();
    return (
        <div>
           This is the profile page for {username}
         <button onClick={()=>{navigate('/about')}}>
             {""}
             Change to About Page</button>
        </div>
    )
}
