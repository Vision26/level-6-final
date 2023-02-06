import React, { useContext } from 'react'
import Post from '../post/Post'
import PostForm from '../post/PostForm'
import { PostContext } from '../post/PostContext'
import { AuthContext } from '../auth/AuthContext'
import '../App.css'
import { CommContext } from '../comments/CommContext'
import Footer from '../Footer'

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
    const { user } = useContext(AuthContext)
    const { username } = user
    //get data from commentcontext
    // const { commentState, addComment } = useContext( CommContext )
    return (
        <div className='profile-container'>
            <h1>Profile</h1>
            <br/>
            <div className="profile-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqMQnsNeLqwFiWEsHUvrA5-S8i8vX34F7ag&usqp=CAU" alt="John" style={{"width":"50%"}}/>
                    <h1>{user.username}</h1>
                    <p className="profile-title">Profile Card Example</p>
                    <p>Costa Mesa, CA</p>
                    <p><button className='profile-button'>Contact</button></p>
            </div>
            
            <h4>Follow the inputs and add in your pets information to create a case.</h4>
            <br/>
            <h4>Add a CASE</h4>
            <PostForm
                key={submitPost}
                submit={submitPost}
                btnText='Submit'
            />
            {postState.map(post => <Post
                key={post.name}
                edit={updatePost}
                deletePost={delPost}
                {...post}
                getPosts={getPosts}
                updateHearts={updateHearts}
            //comment data being passed as props
            // commentState={commentState}
            // addComment={addComment}
            // btnTexts='Submit Comment'

            />)}
            <Footer />
        </div>
    )
}

export default Profile