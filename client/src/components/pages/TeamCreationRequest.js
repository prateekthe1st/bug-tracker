import React from 'react'

const TeamCreationRequest = ({code, teamName}) => {
    if (code === 910){
        return(
            <>
                <h1> You have successfully created a team with name: { teamName } </h1>
            </>
        )
    } else if (code === 915){
        return (
            <>
                <h1> Code: 500. Internal Server Error. Please try again. </h1>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default TeamCreationRequest;
