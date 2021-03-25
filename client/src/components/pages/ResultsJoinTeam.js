import React from 'react'
import { Link } from 'react-router-dom';

const ResultsJoinTeam = ({ code, team, callbackFunc }) => {
    function joinTeamHandler(event) {
        callbackFunc(event);
    }

    if (code === 900){
        return(
            <>
                <h1> Query Result </h1>
                <h2> Team Name: { team.teamName } </h2>
                <h2> Created By: { team.createdBy } </h2>
                <h2> Amount of Members: { team.amtMembers } </h2>
                <h2> Unique Code: { team.uniqueCode }</h2>
                <button onClick = {joinTeamHandler}> Join this Team </button>
            </>
        )
    } else if (code === 901) {
        return (
            <>
                <h1> No team found with that code </h1> 
            </>
        )
    } else if (code === 905) {

        return (
            <>
                <h1> Joined Team: {team.teamName} </h1>
                <Link to="/dashboard">
                    <button>
                        View Bug Tracker
                    </button>
                </Link>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default ResultsJoinTeam;
