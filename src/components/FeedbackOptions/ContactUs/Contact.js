import React, { useState } from 'react'
import attach from '../../../Asset/attach.png'
import './contact.css'

const Contact = () => {
    const [issue, setIssue] = useState('');
    const handleSelect = (e) =>{
        console.log(e.target.value);
        setIssue(e.target.value);
    }
  return (
    <div className='contact'>
        <span className='contact_text'>Get in <b>Contact with us</b> for our queries!</span>
        <hr/>
        <form>
        
           <label htmlFor='name' >Your Name</label>
           <input type='text' id='name' placeholder='Enter your name' className='name'/>
           <label htmlFor='email'>Your Email</label>
           <input type='email' id='email' placeholder='Enter your email' className='email'/>
           <label htmlFor='mobile' >Your Mobile number</label>
           <input type='tel' id='mobile' placeholder='Enter your number' className='mobile'/>

           <label htmlFor='detail'>Describe the Issue in detail</label>
           <span id='detail' className='detail'>
             <textarea placeholder='Write here...'/>
             <label htmlFor="fileInput">
              <span className='file'>
                <img src={attach} alt="" className='file_img'/> <span className='file_text'>Attach</span>
              </span>
             </label>
             <input id="fileInput" type="file" style={{ display: "none" }}/>
           </span>

           <button>Submit</button>

        </form>
    </div>
  )
}

export default Contact;