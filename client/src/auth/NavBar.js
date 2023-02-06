import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
    const { logout, token } = props
    return (
        <div className='navbar'>
            <div className='logo'>DoFo</div>
            <ul className='nav-links'>
                <input type='checkbox' id='checkbox_toggle' />
                <label for='checkbox_toggle' className='hamburger'>&#9776;</label>
                <div className='menu'>
                    <li><Link className='navbar-Links' to="/profile">Profile</Link></li>
                    <li><Link className='navbar-Links' to="/community">Community</Link></li>
                    <li><Link className='navbar-Links' to="/about">About</Link></li>
                    <li><Link className='navbar-Links' to="/contact">Contact</Link></li>
                    <li>
                        <button className='navbar-button-logout' onClick={logout}>Logout</button>
                    </li>
                </div>
            </ul>

        </div>
    )
}

export default NavBar
{/* <div className='navbar'>
<Link className='navbar-Links-profile' to="/profile">Profile</Link>
<Link className='navbar-Links-community' to="/community">Community</Link>
<Link className='navbar-Links-about' to="/about">About</Link>
<Link className='navbar-Links-contact' to="/contact">Contact</Link>
<button className='navbar-button-logout' onClick={logout}>Logout</button>
</div> */}