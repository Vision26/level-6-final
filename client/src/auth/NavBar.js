import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props){
const { logout, token } = props
    return(
        <div className='navbar'>
            <Link className='navbar-Links' to="/profile">Profile</Link>
            <Link className='navbar-Links' to="/community">Community</Link>
            <Link className='navbar-Links' to="/about">About</Link>
            <Link className='navbar-Links' to="/contact">Contact</Link>
            <button className='navbar-button-logout' onClick={logout}>Logout</button>
        </div>
    )
}

export default NavBar