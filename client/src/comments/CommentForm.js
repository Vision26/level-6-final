import React, { useState, useContext } from 'react'
import { CommContext } from './CommContext'

function CommentForm(props) {
    //comment form State
    const [comState, setComState] = useState({
        inputComment: ""
    })
    //get commentState from context
    const { getComment } = useContext(CommContext)
    //destructure state
    const { inputComment } = comState
    //grab props from post.js
    const { id, submitComment, btn } = props
    //comhandleChange
    const comHandleChange = e => {
        const { name, value } = e.target
        setComState(prev => ({
            ...prev,
            [ name ]: value
        }))
    }
    //comhandleSubmit
    const comHandleSubmit = e => {
        e.preventDefault()
        //comeback to this
        submitComment(id, inputComment)
        // setComState({
        //     inputComment:''
        // })
    }
    // console.log(id)
    return (
        <div>
            <form onSubmit={comHandleSubmit}>
                <textarea
                    placeholder='Type Comment'
                    type='text'
                    name='inputComment'
                    value={inputComment}
                    onChange={comHandleChange}
                />
                <hr />
                <button>{btn}</button>
            </form>
        </div>
    )
}

export default CommentForm