import React, { useState } from 'react'
import attach from '../../../Asset/attach.png'
import './reportIssue.css'

const ReportIssue = () => {
    const [issue, setIssue] = useState('');
    const handleSelect = (e) =>{
        console.log(e.target.value);
        setIssue(e.target.value);
    }
  return (
    <div className='report'>
        <span className='report_text'>Let us Know about the <b style={{color: 'black'}}>Issue</b> you are facing right now!</span>
        <hr/>
        <form>
           <label htmlFor='options'>Choose a Section</label>
           <select id='options' onChange={handleSelect}>
             <option value="Interview Questions">Interview Questions</option>
             <option value="Concept cards">Concept cards</option>
             <option value="Practice Questions">Practice Questions</option>
             <option value="Quizzes">Quizzes</option>
           </select>

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

           <label htmlFor='email'>Enter your email to recieve an update</label>
           <input type='email' id='email' placeholder="Enter your Email" className='email'/>

           <button>Submit</button>
        </form>
    </div>
  )
}

export default ReportIssue