import React, { useState } from 'react'
import attach from '../../../Asset/attach.png';
import './shareFeedback.css'

const ShareFeedback = () => {
    const [issue, setIssue] = useState('');
    const handleSelect = (e) =>{
        console.log(e.target.value);
        setIssue(e.target.value);
    }
  return (
    <div className='shareFeed'>
        <span className='shareFeed_text'>Let us Know Your <b style={{color: 'black'}}>Feedback</b> about us</span>
        <hr/>
        <form>
           <label htmlFor='detail'>Describe the Issue in detail</label>
           <span id='detail' className='detail'>
             <textarea placeholder='Write here...'/>
             <label htmlFor="fileInput">
               <span className='file'>
                <img src={attach} alt='' className='file_img'/><span className='file_text'>Attach</span>
               </span>
             </label>
             <input id='fileInput' type='file' style={{display: 'none'}}/>
           </span>

           <label htmlFor='email'>Enter your email to recieve an update</label>
           <input type='email' id='email' placeholder="Enter your Email" className='email'/>

           <button> Submit </button>
        </form>
    </div>
  )
}

export default ShareFeedback;