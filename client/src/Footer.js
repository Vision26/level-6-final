import React from 'react'
import './App.css'
function Footer() {

    return (
        <div className='footer-content'>
            <h2>Doggy Found</h2>
            <p>Foolish Developer —  source code.</p>
            <ul className="socials">
                <li><a href="#"><i className="fa fa-facebook">Facebook</i></a></li >
                <li><a href="#"><i className="fa fa-twitter">Twitter</i></a ></li>
                <li><a href="#"><i className="fa fa-google-plus">Google</i></a ></li >
                <li><a href="#"><i className="fa fa-youtube">Youtube</i></a ></li >
                <li><a href="#"><i className="fa fa-linkedin-square">Linkedin</i></a ></li >
            </ul >
            <div className="footer-bottom">
                <p>copyright &copy;2021 <a href="#">foolishdeveloper</a>  </p>

            </div>

            <div className="footer-menu">
 <ul className="f-menu">
    <li><a className="f-menu-a" href="#">Home</a></li>
    <li><a className="f-menu-a" href="#">About</a></li>
    <li><a className="f-menu-a" href="#">Contact</a></li>
    <li><a className="f-menu-a" href="#">Blog</a></li>
 </ul>
</div>
        </div >
    )
}
export default Footer