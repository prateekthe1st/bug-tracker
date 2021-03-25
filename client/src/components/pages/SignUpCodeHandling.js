import React from 'react'
import { Redirect } from 'react-router-dom'

export const SignUpCodeHandling = ({ code }) => {
    if (code === null){
        return (
            <>
            </>
        )
    } else if (code === 705){
        return(
            <h1> Please enter a username </h1>
        )
    } else if (code === 707){
        return(
            <h1> Please enter a First Name </h1>
        )
    } else if (code === 708) {
        return(
            <h1> Please enter a Last Name </h1>
        )
    } else if (code === 706){
        return(
            <h1> Please enter a password </h1>
        )
    } else if (code === 704){
        return(
            <h1> Please make sure that you enter the same password in both fields</h1>
        )
    } else if (code === 701){
        return(
            <h1> Sorry! Username taken. </h1>
        )
    } else if (code === 505) {
        return (
            <h1> Internal Server Error </h1>
        )
    }else {
        return(
            <Redirect to='/dashboard'/>
        )
    }
}

export default SignUpCodeHandling;

