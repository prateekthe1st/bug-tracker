import React, {useState} from 'react'
import SignUpCodeHandling from './SignUpCodeHandling';
import './SignupPage.css'

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        cPassword: ''
    });
    const [code, setCode] = useState(null);

    function submitData(event) {
        event.preventDefault();
        if (userInfo.username === ''){
            setCode(705);
        }
        else if(userInfo.firstName === ''){
            setCode(707);
        }
        else if(userInfo.lastName === ''){
            setCode(708);
        }
        else if(userInfo.password === ''){
            setCode(706);
        }
        else if (userInfo.password !== userInfo.cPassword){
            setCode(704);
        } 
        else{
            fetch('/api/account/signup', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    setCode(data.code);
                })
        }

    }

    function usernameHandler(event) {
        setUserInfo({
            username: event.target.value,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            password: userInfo.password,
            cPassword: userInfo.cPassword
        })
    }

    function firstNameHandler(event) {
        setUserInfo({
            username: userInfo.username,
            firstName: event.target.value,
            lastName: userInfo.lastName,
            password: userInfo.password,
            cPassword: userInfo.cPassword
        })
    }

    function lastNameHandler(event) {
        setUserInfo({
            username: userInfo.username,
            firstName: userInfo.firstName,
            lastName: event.target.value,
            password: userInfo.password,
            cPassword: userInfo.cPassword
        })
    }

    function passwordHandler(event) {
        setUserInfo({
            username: userInfo.username,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            password: event.target.value,
            cPassword: userInfo.cPassword
        })
    }

    function cpassHandler(event) {
        setUserInfo({
            username: userInfo.username,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            password: userInfo.password,
            cPassword: event.target.value
        })
    }

    return (
        <>
            <SignUpCodeHandling code = { code } />
            <form className = "signup-form" action = "/api/account/signup" method = "POST" >
                <input className = "userNameSignup" type="text" onChange = { usernameHandler } value = { userInfo.username } placeholder="Username"/>
                <br/>
                <input className = "firstNameSignup" type="text" onChange = { firstNameHandler } value = { userInfo.firstName } placeholder= "First Name" />
                <input className = "lastNameSignup" type="text" onChange = { lastNameHandler } value = { userInfo.lastName } placeholder = "Last Name" />
                <br/>
                <input className = "passwordSignup" type="password" onChange = { passwordHandler } value = { userInfo.password } placeholder = "Password" />
                <br/>
                <input className = "confirmPasswordSignup" type="password" onChange = { cpassHandler } value = { userInfo.cPassword } placeholder = "Repeat Password" />
                <br/>
                <input onClick = { submitData } type="submit" value = "Sign Up" />
            </form>
        </>
    )
}

export default Signup;
