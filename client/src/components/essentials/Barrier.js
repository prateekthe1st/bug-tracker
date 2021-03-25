import { Redirect } from 'react-router-dom'

//Created a seperate entity that checked if a request is valid based off of whether a user is logged in. This saved lines of code becasue I don't have to write the same "barrier to entry" for every route that requires it.

const Barrier = ({ code }) => {
    if (code === 101 || code === 102){
        return(
            <Redirect to='/'/>
        )
    }else{
        return(
            <>
            </>
        )
    }
}

export default Barrier;
