import React, {useState, useEffect} from 'react'
import Barrier from '../essentials/Barrier';

const Tracker = () => {
    const [code, setCode] = useState(null);
    const [bugs, setBugs] = useState([])

    useEffect(() => {
        if (code === null){
            fetch('/api')
                .then(res => res.json())
                .then(data => {
                    setCode(data.code);
                })
        }

        fetch('/api/dashboard/tracker')
            .then(res => res.json())
            .then(data => {
                if (bugs.length !== data.bugs.length){
                    console.log(data.bugs);
                    setBugs(bugs => data.bugs)
                }
            })



        
    })

    //Features

    //View current bugs
    //Add Bugs
    //logout
    //View Invite code for team

    //Buttons
    //Add Bug
    //View Members
    //Share Join Code -> Pops up at the top.
    //Leave Team ------ Delete Team if you're the owner -> Redirect to dashboard
    //Log out -> redirect to landing page

    return (
        <>
            {// ButtonViewTracker
            // Either shows the join code
            // Add Bug form
            // Members
            }
            <h1> Welcome to the tracker </h1>
        </>
    )
}

export default Tracker;
