import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import LoginInvalidMessage from './LoginInvalidMessage';

const cookies = new Cookies();

const Login = () => {
    const [code, setCode] = useState(null);
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        cookies.set('token', '');
    })

    function submitData(event) {
        event.preventDefault();
        fetch('/api/account/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(data => {
                setCode(data.code);
                if (data.code === 301){
                    cookies.set('token', data.token)
                }
            })
    }
      
    function usernameHandler(event) {
        setLoginData({
            username: event.target.value,
            password: loginData.password
        })
    }

    function passwordHandler(event) {
        setLoginData({
            username: loginData.username,
            password: event.target.value
        })
    }


    return (
        <>
            <LoginInvalidMessage code = {code}/>
            <form className = "login-form" method = "POST" action = "/api/account/login">
                <input type="text" value = { loginData.username } onChange = { usernameHandler }placeholder = "Username" />
                <br/>
                <input type="password" value = { loginData.password } onChange = { passwordHandler } placeholder = "Password"/>
                <br/>
                <input value = "Log In" onClick = {submitData} type="submit"/>
            </form>
        </>
    )
}

export default Login;
