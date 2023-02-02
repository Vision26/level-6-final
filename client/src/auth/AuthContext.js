import React, { useState } from 'react'
import axios from 'axios'
const AuthContext = React.createContext()
const userAxios = axios.create()
//---INTERCEPTOR-----------------------------------
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem( "token" )
    config.headers.Authorization = `Bearer ${ token }`
    return config
})
//---INTERCEPTOR-----------------------------------

function AuthProvider(props) {
const [ initState, setInitState ] = useState({
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    errMsg: ''
})
const { user, token, errMsg } = initState
//sets signup ready for frnt end develop
const signup = credentials => {
    axios.post('/auth/signup', credentials)
    .then(res => {
        const { user, token } = res.data
        //save both token and user in localstorage
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setInitState(prev => ({
            ...prev,
            user,
            token
        }))
    })
    .catch(err => handleAuthErr(err.response.data.errMsg))
}

//set logins ready for front end
const login = credentials => {
    axios.post('/auth/login', credentials)
        .then(res => {
            const { user, token } = res.data
            //save both token and user in localstorage
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            // getUserTodos()
            setInitState(prev => ({
                ...prev,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
}
//logout -front end
const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setInitState({
        user: {},
        token: "",
        todos: []
    })
}
//handle auth errors 
const handleAuthErr = errMsg => {
    setInitState(prevState => ({
        ...prevState,
        errMsg
    }))
}
//reset Auth error
const resetAuthErr = () => {
    setInitState(prevState => ({
        ...prevState,
        errMsg: ""
    }))
}
// console.log(user)
// console.log()
    return (
<AuthContext.Provider value={{
    ...initState,
    user,
    signup,
    login,
    logout,
    resetAuthErr,
    // errMsg
}}>
    {props.children}
</AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }