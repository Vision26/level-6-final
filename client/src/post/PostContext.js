import React, {useState, useEffect} from 'react'
import axios from 'axios'
const PostContext = React.createContext()
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function PostProvider(props){
    //where data being grabbed will be placed in
const [postState, setPostState] = useState([])
//get data from logged in user
const getPosts = id => {
    userAxios.get(`/final/postsbyuser/${id}`)
    .then(res => setPostState(res.data))
    .catch(err => console.log(err))
}
//useEffect to mount data into the array
useEffect( () => {
getPosts()
}, [] )
//post POSTS
const submitPost = newPost => {
    userAxios.post('/final/newpost', newPost)
    .then(res => setPostState(prev => [...prev, res.data]))
    .catch(err => console.log(err))
}
//updates post
const updatePost = (update, id) => {
    userAxios.put(`/final/update/${id}`, update)
    .then(res => setPostState(prev => prev.map(prevs => prevs._id !== id ? prevs : res.data)))
    .catch(err => console.log(err))
} 
//updates hearts(likes)
const updateHearts = (id) => {
    userAxios.put(`/final/hearts/${id}`)
    .then(res => setPostState(prev => prev.map(prevs => prevs._id !== id ? prevs : res.data)))
    .catch(err => console.log(err))
}
//deletes post
const delPost = id => {
    userAxios.delete(`/final/delete/${id}`)
    .then(res => setPostState(prev => prev.filter(prevs => {
        return prevs._id !== id
    })))
    .catch(err => console.log(err))
}
    return(
        <PostContext.Provider value={{
            postState,
            getPosts,
            submitPost,
            updatePost,
            updateHearts,
            delPost
        }}>
            {props.children}
        </PostContext.Provider>
    )
}

export {PostProvider, PostContext}