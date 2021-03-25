import React, {useState, useEffect} from 'react'
import { Redirect, Link } from 'react-router-dom';
import Footer from '../essentials/Footer';
import './LandingPage.css';

const LandingPage = () => {
    const [code, setCode] = useState(null);
    
    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(data => {
                setCode(data.code);
            })

    })

    if (code === 102){
        return (
            <h1> Redirect to Login Page </h1>
            //Invalid cookie
            //Eventual redirect to login page
        )
    }
    if (code === 103){
        return (
            <Redirect to='/dashboard'/>
        )
    }
    

    return (
        <>  
            <Link className = "link" to='/signup'>
                <button className = "signup">
                    Signup 
                </button>
            </Link>
            <Link className = "link" to='/login'>
                <button className = "login">
                    Login
                </button>
            </Link>
            <Footer />
        </>
    )
    
    

}

export default LandingPage;
