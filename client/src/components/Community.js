import React, { useContext } from 'react'
import { PostContext } from '../post/PostContext'
import PostGlobal from '../global/PostGlobal'
import { CommContext } from '../comments/CommContext'
import Footer from '../Footer'

function Community() {
    //grabbing postState data
    const { 
        globArr,
        updateHearts
    } = useContext(PostContext)
//comm context
const { commentState, addComment } = useContext( CommContext )
    return (
        <div className='global-container'>
            <h1>Community Forum</h1>
            <h4>Please be respectful and avoid using any profanity in the forum.</h4>
            <br/>
            <h5>**This is a safe space for those mourning or grieving for their lost pets**</h5>
            
            {globArr.map(glob => <PostGlobal
                key={glob._id}
                {...glob}
                updateHearts={updateHearts}
                   //comment data being passed as props
                commentState={commentState}
                addComment={addComment}
                btnTexts='Submit Comment'
            />)}
            <Footer />
        </div>
    )
}

export default Community