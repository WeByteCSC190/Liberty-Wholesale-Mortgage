import * as React from 'react';
import './Milestone.css'

const Milestone = () => {
  return (
    <div className="Milestone">
      <div id='milestones-title'>
        <h1> Deals Closed</h1>
      </div>
      <ol className='timeline'>
        <li className='goal-1 done'></li>
        <li className='goal-2 done'></li>
      </ol>
      <p id='status-text'>15 out of 20 items completed</p>
    </div>
  );
}

export default Milestone;
