import React from 'react'

function Contact(){

    return(
        <div className="contact-container">
        <div style={{"textAlign":"center"}}>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div className="contact-row">
          <div className="contact-column">
            <img src="https://images.ctfassets.net/7ybtdzdgha5d/2Jp3xsME6sAfTQDt3J1C5H/75043a3e1e934443dcc1ce8cc905ca26/constipated_dog.png?w=599&h=599&q=65&fm=png" style={{"width":"100%", "height":"532px"}}/>
          </div>
          <div className="contact-column">
            <form action="/action_page.php">
              <label for="fname" >First Name</label>
              <input type="text" className="contact-inputs" id="fname" name="firstname" placeholder="Your name.."/>
              <label for="lname">Last Name</label>
              <input type="text" className="contact-inputs" id="lname" name="lastname" placeholder="Your last name.."/>
              <label for="country">Country</label>
              <select id="country" className="contact-inputs" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label for="subject">Subject</label>
              <textarea id="subject" className="contact-inputs" name="subject" placeholder="Write something.." style={{"height":"170px"}}/>
              <input type="submit" className="contact-input-submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Contact