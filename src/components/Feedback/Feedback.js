import React, { useState } from 'react'
import Images from '../../Images';
import ReportIssue from '../FeedbackOptions/ReportIssue/ReportIssue';
import ShareFeedback from '../FeedbackOptions/ShareFeedback/ShareFeedback';
import Suggestion from '../FeedbackOptions/ShareSuggestion/Suggestion';
import Contact from '../FeedbackOptions/ContactUs/Contact';

import './feedback.css';

const Feedback = () => {
    const [page, setPage] = useState('Home');
    const [feedback, setFeedback] = useState(false);
    const [options, setOptions] = useState('');
    
    const handleOption = (item) =>{
      if(item === options)
        setOptions('');
      else
        setOptions(item);
    }
    const handleClose = () =>{
      setFeedback(false);
      setOptions('');
    }
  return (
    <div className={`feedback ${options ? 'active' : ''}`}>
      <div className='feedback_input'>
        {options === 'Issue' ? <ReportIssue/> : ''}
        {options === 'Feedback' ? <ShareFeedback/>:''}
        {options === 'Suggestion' ? <Suggestion/>:''}
        {options === 'Contact' ? <Contact/>:''}
      </div>
      <div className={`feedback_open ${options ? 'active' : ''}`}>
        {feedback && <div className={`feedback_options ${options ? 'active' : ''}`}>
            {(page === 'Home') ? <div className='option'><span className='option_img'><img src={Images.reportIssue} alt='' onClick={() => handleOption('Issue')} className={`feedback_select ${options === 'Issue' ? 'active' : ''}`} /></span>{options ? '' : <span className='option_text'>Report an Issue</span>}</div>:''}
            {(page === 'Home') ? <div className='option'><span className='option_img'><img src={Images.shareFeedback} alt='' onClick={() => handleOption('Feedback')} className={`feedback_select ${options === 'Feedback' ? 'active' : ''}`}/></span>{options ? '' : <span className='option_text'>Share Feedback</span>}</div>:''}
            {(page === 'Home') ? <div className='option'><span className='option_img'><img src={Images.giveSuggestion} alt='' onClick={() => handleOption('Suggestion')} className={`feedback_select ${options === 'Suggestion' ? 'active' : ''}`}/></span>{options ? '' : <span className='option_text'>Give Suggestion</span>}</div>:''}
            {(page === 'Home') ? <div className='option'><span className='option_img'><img src={Images.contactUs} alt='' onClick={() => handleOption('Contact')} className={`feedback_select ${options === 'Contact' ? 'active' : ''}`}/></span>{options ? '' : <span className='option_text'>Contact Us</span>}</div>:''}
        </div>}
        <div className={`feedback_butn ${options ? 'active' : ''}`}>
           {feedback ? <span className='option'><img src={Images.feedbackClose} alt='' onClick={() => handleClose()}/></span> : <span className='option'><img src={Images.feedbackOpen} alt='' onClick={() => setFeedback(true)}/></span>}
        </div>
      </div>
    </div>
  )
}

export default Feedback;