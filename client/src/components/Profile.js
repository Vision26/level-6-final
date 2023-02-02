import React, { useContext } from 'react'
import Post from '../post/Post'
import PostForm from '../post/PostForm'
import { PostContext } from '../post/PostContext'
import { AuthContext } from '../auth/AuthContext'
import '../App.css'

function Profile() {
    //postcontext
    const {
        postState,
        getPosts,
        submitPost,
        updatePost,
        updateHearts,
        delPost
    } = useContext(PostContext)
//authcontext
const {user} = useContext(AuthContext)
const { username } = user
    return (
        <div className='profile-container'>
            <h1>Welcome @{username}!</h1>
            <h1>**Follow the inputs and add in your dogs information to create a case.</h1>
            <h4>Add a CASE</h4>
            <PostForm
                key={submitPost}
                submit={submitPost}
                btnText='Submit'
            />

            {postState.map(post => <Post
                key={post._id}
                edit={updatePost}
                deletePost={delPost}
                {...post}
                getPosts={getPosts}
                updateHearts={updateHearts}
            />)}
        </div>
    )
}

export default Profile