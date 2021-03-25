import React from 'react'
import { Link } from 'react-router-dom';

const JoinorCreateDashboard = ({ code }) => {
    if (code === 802){
        return(
            <>
                <Link className = "link" to = "/team/join">
                    <button> Join an existing team </button>
                </Link>
                <Link className = "link" to = "/team/create">
                    <button> Create your own team </button>
                </Link>
                
            </>
        )
    }else{
        return(
            <>
            </>
        )
    }
}

export default JoinorCreateDashboard;
