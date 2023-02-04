import React, { useState, useContext } from 'react'
import PostForm from './PostForm'
// import CommentForm from '../comments/CommentForm'
import '../App.css'
import { AuthContext } from '../auth/AuthContext'
// import { PostContext } from './PostContext'

function Post(props) {
    //these props are coming from profile.js - <Post /> 
    const {
        //list from state value from API-----
        _id,
        name,
        age,
        color,
        breed,
        description,
        imgUrl,
        hearts,
        //list from state value from API-----
        getPosts,
        edit,
        deletePost,
        updateHearts,
        //comment props beyond this point
        // comments,
        // addComment,
        // btnTexts
    } = props
    // console.log(comments)
    //toggle on/off for buttons
    const [postToggle, setPostToggle] = useState(false)
    //grabbing data from auth context
    const { user } = useContext(AuthContext)
    //its passing the _id from 'user'as an argument into getPosts
    const passId = () => { getPosts(user._id) }
    // const showComments = comments.map(com => <li className="removeDots" key={com._id}>{com.comment}</li>)
    return (
        <div className='post'>
            {/* this adds an open and close feature to posts */}
            {/* <h1>Edit Case</h1> */}
            {!postToggle ?
                <>
                    <div className="profile-card">
                    <img src={imgUrl} alt='images' style={{"width":"50%"}} />
                    <h1>{name}</h1>
                    <h6>age:</h6><p>{age}</p>
                    color:<p>{color}</p>
                    breed:<p>{breed}</p>
                    description:<p>{description}</p>
                    Loves:<h3>{hearts}</h3>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                    <button className='post-button' onClick={() => updateHearts(user._id)}>Upvote</button>
                    <button className='post-button' onClick={() => deletePost(_id)}>Delete</button>
                    <button className='post-button' onClick={() => setPostToggle(prev => !prev)}>Edit</button>
                    </div>

                </>
                :
                <>
                    <PostForm
                        key={name}
                        name={name}
                        age={age}
                        color={color}
                        breed={breed}
                        description={description}
                        imgUrl={imgUrl}
                        hearts={hearts}
                        id={_id}
                        submit={edit}
                        btnText='Submit'
                    />
                    <button onClick={() => setPostToggle(prev => !prev)}>Close</button>

                </>
            }
            {/* <CommentForm 
            key={_id}
            id={_id}
            btn={btnTexts}
            submitComment={addComment}
            /> */}
            {/* {showComments} */}
        </div>
    )
}

export default Post