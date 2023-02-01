import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { AuthContext } from './AuthContext'

function Auth() {
    //auth state
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    //toggle for button on/off
    const [toggle, setToggle] = useState(false)
    //accessing context from authcontext
    const {signup, login, errMsg, resetAuthErr} = useContext(AuthContext)
//handlechange
    const handleChange = e => {
        const { name, value } = e.target
        setInputs( prev => ({
            ...prev,
            [ name ] : value
        }) )
    }
//handle signup
const handleSignUp = e => {
    e.preventDefault()
    signup(inputs)
}
//handle login
const handleLogin = e => {
    e.preventDefault()
    login(inputs)
}
//toggle on/off function
const toggleForm = () => {
    setToggle( prev => !prev )
    resetAuthErr()
}
    return (
        <div className='auth-container'>
            <h1>Doggy Found</h1>
            { !toggle ?
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignUp}
            inputs={inputs}
            btnText="Sign up"
            errMsg={errMsg}
          />
          <p onClick={toggleForm}>Already a member?</p>
        </>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p onClick={toggleForm}>Not a member?</p>
        </>
      }
        </div>
    )
}

export default Auth