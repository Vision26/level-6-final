import React, { useState, useContext } from 'react'
import PostForm from './PostForm'
import '../App.css'
import { AuthContext } from '../auth/AuthContext'
import { PostContext } from './PostContext'

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
        updateHearts
    } = props
    //toggle on/off for buttons
    const [postToggle, setPostToggle] = useState(false)
    //grabbing data from auth context
    const { user } = useContext(AuthContext)
    //its passing the _id from 'user'as an argument into getPosts
    const passId = () => { getPosts(user._id) }
    return (
        <div className='post'>
            {/* this adds an open and close feature to posts */}
            {!postToggle ?
                <>
                    <img src={imgUrl} alt='images' width={300} />
                    <h2>{name}</h2>
                    <h3>{age}</h3>
                    <h3>{color}</h3>
                    <h3>{breed}</h3>
                    <h3>{description}</h3>
                    <h3>{hearts}</h3>
                    <button className='hrt-btn' onClick={() => updateHearts(_id)}>Upvote</button>
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
                    />
                    <button onClick={() => setPostToggle(prev => !prev)}>Close</button>

                </>
            }
        </div>
    )
}

export default Post