import React, {useState, useEffect} from 'react'
import Barrier from '../essentials/Barrier';
import TeamCreationRequest from './TeamCreationRequest';
import {Link} from 'react-router-dom';

const TeamCreate = () => {
    const [code, setCode] = useState(null);
    const [teamName, setTeamName] = useState({
        name: ''
    })

    useEffect(() => {
        if (code === null){
            fetch('/api')
            .then(res => res.json())
            .then(data => {
                setCode(data.code);
            })
        }
    })

    function teamNameHandler(event) {
        setTeamName({
            name: event.target.value
        });
    }

    function teamSubmitHandler(event){
        fetch ('/api/team/create', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                teamName: teamName.name
            })
        })
            .then(res => res.json())
            .then(data => {
                setCode(data.code);
            })
    }

    if (code === 910){
        return (
            <>
                <TeamCreationRequest code = {code} teamName = {teamName.name} />
                <Link to = "/dashboard">
                    <button>
                        Return to Dashboard
                    </button>
                </Link>
            </>

        )
    } else {
        return (
            <>
                <Barrier code = { code } />
                <h1> Create a team </h1>
                <input onChange = { teamNameHandler } value = { teamName.name } type="text"/>
                <button onClick = { teamSubmitHandler } > Submit </button>
            </>
        )
    }

    
}

export default TeamCreate;
