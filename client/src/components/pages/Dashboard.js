import React, { useState, useEffect } from 'react'
import Header from '../essentials/Header';
import Footer from '../essentials/Footer';
import Barrier from '../essentials/Barrier';
import JoinorCreateDashboard from './JoinorCreateDashboard';

const Dashboard = () => {
    //Codes are my management solution. This helps the client side decide what to display. This was the most effective solution I thought of for conditional rendering within React.
    const [code, setCode] = useState(null);

    //Part of the dashbaord includes either displaying team information or the ability to join or create a team. This state variabel is important for testing for a user's current team status.
    const [team, setTeam] = useState(null);
    useEffect(() => {
        // isMounted is going to be useful to avoid updating the basic barrier code every time this page is rendered. The useEffect function is only called to see if the user should have access to the dashboard or be required to sign in. 
        let isMounted = true;
        fetch('/api/dashboard')
            .then(res => res.json())
            .then(data => {
                if (isMounted) setCode(data.code);
                if (data.code === 801){
                    setTeam(data.team);
                }
            })
        return () => {
            isMounted = false;
        }
    })

    return (
        <>  
            <Header />
            <Barrier code = { code } />
            <JoinorCreateDashboard code = { code } />
            <h1> { team } </h1>
            <Footer />
        </>
    )
}

export default Dashboard;
