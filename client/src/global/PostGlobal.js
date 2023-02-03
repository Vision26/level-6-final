import React, { useState } from 'react'
import CommentForm from '../comments/CommentForm'

function PostGlobal(props) {
    //grab props from Global.js
    const {
        _id,
        name,
        age,
        color,
        breed,
        description,
        imgUrl,
        hearts,
        //functions - postcontext
        updateHearts,
        //comment props beyond this point
        comments,
        addComment,
        btnTexts
    } = props
    //set toggle on/off
    const [toggle, setToggle] = useState(false)
const showComments = comments.map(com => <li className="removeDots" key={com._id}>{com.comment}</li>)
    return (
        <div className='postglobal-container'>
            {!toggle ?
                <>
                    <img src={imgUrl} alt='images' width={300} />
                    <br/>
                    name:<h2>{name}</h2>
                    age:<h3>{age}</h3>
                    age:<h3>{color}</h3>
                    breed:<h3>{breed}</h3>
                    description:<h3>{description}</h3>
                    Loves:<h3>{hearts}</h3>
                    <button className='hrt-btn' onClick={() => updateHearts(_id)}>Upvote</button>
                    <button className='edit-btn' onClick={() => setToggle(prev => !prev)}>Comment</button>
                </>
                :
                <>
                    <CommentForm
                        key={_id}
                        id={_id}
                        btn={btnTexts}
                        submitComment={addComment}
                    />
                    <button onClick={() => setToggle(prev => !prev)}>Close</button>
                </>
            }
            {showComments}
        </div>
    )
}

export default PostGlobal