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
            {/* <h1>Edit Case</h1> */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={pstFrmState.name}
                    onChange={handleChange}
                    placeholder="Name" />
            <br />
                <input
                    type="number"
                    name="age"
                    value={pstFrmState.age}
                    onChange={handleChange}
                    placeholder="age" />
                      <br />
                <input
                    type="text"
                    name="color"
                    value={pstFrmState.color}
                    onChange={handleChange}
                    placeholder="Color" />
                      <br />
                <input
                    type="text"
                    name="breed"
                    value={pstFrmState.breed}
                    onChange={handleChange}
                    placeholder="Breed" />
                      <br />
                <input
                    type="text"
                    name="description"
                    value={pstFrmState.description}
                    onChange={handleChange}
                    placeholder="Description" />
                      <br />
                <input
                    type="text"
                    name="imgUrl"
                    value={pstFrmState.imgUrl}
                    onChange={handleChange}
                    placeholder="Image" />
                      <br />
                <button className='add-btn'>{btnText}</button>
            </form>


        </div>
    )
}

export default PostForm