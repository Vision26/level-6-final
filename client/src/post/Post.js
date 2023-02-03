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
                    <img src={imgUrl} alt='images' width={300} />
                    <hr />
                    <br />
                    name:<h2>{name}</h2>
                    <br />
                    age:<h3>{age}</h3>
                    <br />
                    color:<h3>{color}</h3>
                    <br />
                    breed:<h3>{breed}</h3>
                    <br />
                    description:<h3>{description}</h3>
                    <br />
                    Loves:<h3>{hearts}</h3>
                    <br />
                    {/* <button className='hrt-btn' onClick={() => updateHearts(user._id)}>Upvote</button> */}
                    <button className='delete-btn' onClick={() => deletePost(_id)}>Delete</button>
                    <button className='edit-btn' onClick={() => setPostToggle(prev => !prev)}>Edit</button>
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