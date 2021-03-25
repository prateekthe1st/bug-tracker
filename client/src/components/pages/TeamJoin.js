import React, {useEffect, useState} from 'react'
import Barrier from '../essentials/Barrier';
import ResultsJoinTeam from './ResultsJoinTeam';

const TeamJoin = () => {
    const [code, setCode] = useState(null);
    const [team, setTeam] = useState({
        teamName: '',
        createdBy: '',
        amtMembers: 0,
        uniqueCode: ''
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

    async function joinCodeHandler (event) {
        if (event.target.value.length === 6){
            fetch ('/api/team/join/results', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    joinCode: event.target.value
                })
            })
                .then(res => res.json())
                .then(data => {
                    setCode(data.code);
                    if (data.code === 900) {
                        setTeam({
                            teamName: data.teamName,
                            createdBy: data.createdBy,
                            amtMembers: data.amtMembers,
                            uniqueCode: data.uniqueCode
                        })
                    }
                })
        }
    }
    
    function resultsJoinTeamClick (event) {
        fetch ('/api/team/join', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                joinCode: team.uniqueCode
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.code === 905){
                    setCode(905);
                }
            })
    }


    return (
        <>
            <Barrier code = { code }/>
            <input maxLength = "6" placeholder = "Join Code" onChange = { joinCodeHandler } type="text"/>
            <ResultsJoinTeam callbackFunc = { resultsJoinTeamClick } code = { code } team = { team } />
        </>
    )
}

export default TeamJoin;
