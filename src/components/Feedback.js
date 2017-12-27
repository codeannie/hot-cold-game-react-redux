import React from 'react';

const Feedback = (props) => {
    return (
      <div className="feedbackContainer">
        <p className="feedback"> {props.currentFeedback} </p>
      </div>   
    )
}

export default Feedback;