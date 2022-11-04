import * as React from 'react';
import './DashboardCards.css'
import Dropdown from 'react-bootstrap/Dropdown';

const DashboardCards = () => {
  var cards = [{title: 'New Leads', value: '10'}, {title: "Applications Submitted", value: '20'},
    {title: "New Borrowers", value: "30"}, {title: "Officers Online", value: "7"}]

  return (
    <div className="DashboardCards">
      {cards.map((card) =>(
        <div className="dash-card" id={card.title}>
          <h1 className="dash-value">{card.value}</h1>
          <p className="dash-title">{card.title}</p>
        </div>
      ))}
      {/* <Card style={{width: '17rem'}}> */}
      {/*   <Card.Title>New Leads</Card.Title> */}
      {/*   <Card.Text>10</Card.Text> */}
      {/* </Card> */}
      {/* <Card style={{width: '17rem'}}> */}
      {/*   <Card.Title>Applications Submitted</Card.Title> */}
      {/*   <Card.Text>10</Card.Text> */}
      {/* </Card> */}
      {/* <Card style={{width: '17rem'}}> */}
      {/*   <Card.Title>New Borrowers</Card.Title> */}
      {/*   <Card.Text>10</Card.Text> */}
      {/* </Card> */}
      {/* <Card style={{width: '17rem'}}> */}
      {/*   <Card.Text>10</Card.Text> */}
      {/*   <Card.Title>Officers Online</Card.Title> */}
      {/* </Card> */}
    {/*   <div className='dashboard-card'> */}
    {/*     <div className='card-title'>New Leads</div> */}
    {/*     <div className='card-filter'> */}

    {/*       <Dropdown> */}
    {/*         <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
    {/*           Filter */}
    {/*         </Dropdown.Toggle> */}
    {/*         <Dropdown.Menu> */}
    {/*           <Dropdown.Item href="#/action-1">Last 7 Days</Dropdown.Item> */}
    {/*           <Dropdown.Item href="#/action-2">Last 14 Days</Dropdown.Item> */}
    {/*           <Dropdown.Item href="#/action-3">Last 30 Days</Dropdown.Item> */}
    {/*         </Dropdown.Menu> */}
    {/*       </Dropdown> */}
    {/*     </div> */}
    {/*     <div className='card-value'><p>10</p></div> */}
    {/*   </div> */}
    {/*   <div className='dashboard-card'> */}
    {/*     <div className='card-title'>Application<br />Submitted</div> */}
    {/*     <div className='card-filter'> */}
    {/*       <Dropdown> */}
    {/*         <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
    {/*           Filter */}
    {/*         </Dropdown.Toggle> */}
    {/*         <Dropdown.Menu> */}
    {/*           <Dropdown.Item href="#/action-1">Last 7 Days</Dropdown.Item> */}
    {/*           <Dropdown.Item href="#/action-2">Last 14 Days</Dropdown.Item> */}
    {/*           <Dropdown.Item href="#/action-3">Last 30 Days</Dropdown.Item> */}
    {/*         </Dropdown.Menu> */}
    {/*       </Dropdown> */}
    {/*     </div> */}
    {/*     <div className='card-value'><p>3</p></div> */}
    {/*   </div> */}
    {/*   <div className='dashboard-card'> */}
    {/*     <div className='card-title'>New Borrowers</div> */}
    {/*     <div className='card-filter'> */}
    {/*       <Dropdown> */}
    {/*         <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
    {/*           Filter */}
    {/*         </Dropdown.Toggle> */}
    {/*         <Dropdown.Menu> */}
    {/*           <Dropdown.Item href="#/action-1">Last 7 Days</Dropdown.Item> */}
    {/*           <Dropdown.Item href="#/action-2">Last 14 Days</Dropdown.Item> */}
    {/*           <Dropdown.Item href="#/action-3">Last 30 Days</Dropdown.Item> */}
    {/*         </Dropdown.Menu> */}
    {/*       </Dropdown> */}
    {/*     </div> */}
    {/*     <div className='card-value'><p>6</p></div> */}
    {/*   </div> */}
    {/*   <div className='dashboard-card'> */}
    {/*     <div className='card-title'>Officers Online</div> */}
    {/*     <div className='card-filter'> */}

    {/*       <Dropdown> */}
    {/*         <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
    {/*           Filter */}
    {/*         </Dropdown.Toggle> */}
    {/*         <Dropdown.Menu> */}
    {/*           <Dropdown.Item href="#/action-1">Last 7 Days</Dropdown.Item> */}
    {/*           <Dropdown.Item href="#/action-2">Last 14 Days</Dropdown.Item> */}
    {/*           <Dropdown.Item href="#/action-3">Last 30 Days</Dropdown.Item> */}
    {/*         </Dropdown.Menu> */}
    {/*       </Dropdown> */}
    {/*     </div> */}
    {/*     <div className='card-value'><p>5</p></div> */}
    {/*   </div> */}
    </div> 
  );
}

export default DashboardCards;


