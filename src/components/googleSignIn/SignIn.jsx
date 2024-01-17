import { useState } from "react";
import { auth, provider } from "./config";
import {signInWithPopup} from "firebase/auth";
import { useEffect } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar"
import { Button } from '@mui/material'

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    },[])
    return (
        <div>
            {value ? <ResponsiveAppBar /> :
            <Button onClick={handleClick} variant="contained">Sing in with google</Button>
    }
        </div>
    )
}

export default SignIn