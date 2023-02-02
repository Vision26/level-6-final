import React, { useState, useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

function PostForm(props) {
    //grabbing data from authcontext
    const { user } = useContext(AuthContext)
    //destructure username from user
    const { username } = user
    //grabbing props from either PostForms from profile and Post
    const {
        name,
        age,
        color,
        breed,
        description,
        imgUrl,
        hearts,
        id,
        btnText,
        submit
    } = props
    //setPostfrm state
    const [pstFrmState, setPstFrmState] = useState({
        name: name || '',
        age: age || 0,
        color: color || '',
        breed: breed || '',
        description: description || '',
        imgUrl: imgUrl || '',
        //come back if hearts value comesback irrelevant
        hearts: hearts || 0
    })
    //handleChnge
    const handleChange = e => {
        const { name, value } = e.target
        setPstFrmState(prev => ({
            ...prev,
            [name]: value
        }))
    }
    //handleSubmit function
    const handleSubmit = e => {
        e.preventDefault()
        submit(pstFrmState, id)
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={pstFrmState.name}
                    onChange={handleChange}
                    placeholder="Name" />
                <input
                    type="number"
                    name="age"
                    value={pstFrmState.age}
                    onChange={handleChange}
                    placeholder="age" />
                <input
                    type="text"
                    name="color"
                    value={pstFrmState.color}
                    onChange={handleChange}
                    placeholder="Color" />
                <input
                    type="text"
                    name="breed"
                    value={pstFrmState.breed}
                    onChange={handleChange}
                    placeholder="Breed" />
                <input
                    type="text"
                    name="description"
                    value={pstFrmState.description}
                    onChange={handleChange}
                    placeholder="Description" />
                <input
                    type="text"
                    name="imgUrl"
                    value={pstFrmState.imgUrl}
                    onChange={handleChange}
                    placeholder="Image" />
                <button className='add-btn'>{btnText}</button>
            </form>


        </div>
    )
}

export default PostForm