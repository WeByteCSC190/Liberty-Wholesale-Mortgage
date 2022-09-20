import * as React from 'react';
import './Milestone.css'

const Milestone = () => {
  return (
    <div className="Milestone">
      <div id='milestones-title'>
        <h1> Deals Closed</h1>
      </div>
      <ol className='progress-meter'>
        <li className='goal-1 done'>Task 1</li>
        <li className='goal-2 done'>Task 2</li>
      </ol>
      <p id='status-text'>15 out of 20 items completed</p>
    </div>
  );
}

export default Milestone;
