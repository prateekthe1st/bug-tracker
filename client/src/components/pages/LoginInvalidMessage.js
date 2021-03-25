import React from 'react'
import { Redirect } from 'react-router-dom'

const LoginInvalidMessage = ({ code }) => {
    if (code === 303){
        return (
            <>
                <h1> Username not found </h1> 
            </>
        )}
    else if (code === 302){
        return(
            <>
                <h1> Password Incorrect </h1>
            </>
        )
    }else if(code === 301){
        return (
            <Redirect to='/dashboard'/>
        )
    }
    else{
        return (
            <>
            </>
        )
    }
    
}

export default LoginInvalidMessage;
