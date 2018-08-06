import React from 'react';
import './TaskCard.css'

// Card for a task 
// Card includes a check box, card details, and last completed date

const TaskCard = (props) => {
    return(
        <div className="TaskCard">
            <p>{props.task}</p>
            <p>{props.lastCompleted}</p>
        </div>
    );
}

export default TaskCard;