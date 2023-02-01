import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props){
const { logout, token } = props
    return(
        <div className='navbar'>
            <Link to="/profile">Profile</Link>
            <Link to="/global">Global</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default NavBar