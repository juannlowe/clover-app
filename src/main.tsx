import React from 'react'
import SignIn from './components/googleSignIn/SignIn'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
)
