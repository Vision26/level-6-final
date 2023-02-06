import React, { useState, useEffect } from 'react'
import axios from 'axios'
const CommContext = React.createContext()
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function CommentProvider(props){
//state for data from comments to be placed
const [ commentState, setCommentState ] = useState([])
//get comments
const getComment = id => {
    userAxios.get(`/final/comment/user/${id}`)
    .then(res => 
        setCommentState(res.data))
    .catch(err => console.log(err))
}
//useEffect to mount getComment
useEffect( () => {
getComment()
}, [] )
//add post
const addComment = ( id, newComment ) => {
    userAxios.post( `/final/comment/${id}`, { newComment } )
    .then( res => setCommentState(prev => [...prev, res.data]) )
    .catch(err => console.log(err))
}

    return(
        <CommContext.Provider value={{
            commentState,
            getComment,
            addComment
        }}>
            {props.children}
        </CommContext.Provider>
    )
}


export { CommentProvider, CommContext }