import React from 'react'
import '../App.css'

function About() {

    return (
        <div className='about'>
            <div class="about-section">
                <h1>About Us</h1>
                <p>Hello fellow pet parents! We are Doggy Found!</p>
                <p>We do, what we do for our pets.</p>
            </div>

            <h2 style={{"text-align":"center"}}>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        {/* <img src="/w3images/team1.jpg" alt="Jane" style={{width:"100%"}} /> */}
                        <div class="container">
                            <h2>Jose</h2>
                            <p class="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    {/* <img src="/w3images/team2.jpg" alt="Mike" style={{"width":"100%"}} /> */}
                    <div class="container">
                        <h2>Jennifer</h2>
                        <p class="title">Art Director</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>mike@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    {/* <img src="/w3images/team3.jpg" alt="John" style={{"width":"100%"}} /> */}
                    <div class="container">
                        <h2>Baden</h2>
                        <p class="title">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>
            </div>
     
    )
}

export default About

{/* <div className='about-img-container'>
<img className='about-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97CmBcwjJTZv40NDoT9UxoKTcsato4XL4Rw&usqp=CAU" />
<br/>
</div>
<div className='about-p'>
<p>Hello fellow pet parents! We are Doggy Found!</p>
<p> This app was built in 2023. The purpose of this </p>
<p>app is to help pet parents like yourself in time of </p>
<p>emergencies. Our furry little family members tend to be  </p>
<p>curious creatures of what's out there in the world and </p>
<p> sometimes they wonder off in the wrong direction. In which </p>
<p>leads to our furry little friends being lost now a days. </p>
<p>That's what this app is for. Doggy Found allows you to create</p>
<p>a case for your dog and its posted online for other people</p>
<p>to see. It creates a wider possibility for your furry member to</p>
<p>come home safe and sound. </p>
<br />
<p>It's a parents worst fear to loose a love one but dont worry!</p>
<p>Doggy Found is HERE!</p>
</div> */}