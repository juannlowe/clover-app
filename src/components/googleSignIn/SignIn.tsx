import { useState } from "react";
import { auth, provider } from "./config.ts";
import {signInWithPopup} from "firebase/auth";
import { useEffect } from "react";
import { Button } from '@mui/material'
import * as R from 'ramda'

const getFirsName = R.pipe(R.split(" "),R.head)

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
          const firstName = getFirsName(data.user.displayName)
            setValue(firstName as string)
            localStorage.setItem("displayName", firstName as string)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('displayName') as string)
    },[])
    return (
        <div>
          {value ? `Welcome Back ${value}!` : <Button
            onClick={handleClick}
            variant="contained"
            sx={{ backgroundColor: 'white', color: 'black' }}
          >
            Sign in
          </Button>}
        </div>
    )
}

export default SignIn