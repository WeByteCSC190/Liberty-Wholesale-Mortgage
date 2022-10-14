import axios from 'axios';
import { useState, useEffect } from 'react';
import * as React from 'react';
import './AnnouncementsWidget.css'

const AnnouncementsWidget = () => {

  const [news, setNews] = useState([])

  // const createData = (date, content) => {
  //   return { date, content };
  // }

  // const fetchData = async () => {
  //   const response = await fetch("http://localhost:8000/api/ImportantAnnouncements")
  //   const data = await response.json()
  //   setNews(data)
  // }

  useEffect(() => {
    // fetchData()
    axios.get('http://localhost:8000/api/ImportantAnnoucements/')
      .then(response => setNews(response.data));
  }, [])

  // const rows = [
  //   createData('06/31/20', 'Buisness lunch happening in the quad today'),
  //   createData('06/31/20', 'Federal Holiday on the fifth of next month'),
  //   createData('06/31/20', 'Insurance plans have new benefits, make sure to \
  //   read your policy'),
  // ];
  return (
    < div className="AnnouncementsWidget">
      <div className="AnnouncementsTitle"> Announcements</div>
      {news.map((row) => (
        <ol className='AnnouncementStory'>
          <li id="ann-date">{row.date}</li>
          <li id="ann-content">{row.content}</li>
        </ol>
      ))}
    </div>
  );
}

export default AnnouncementsWidget;
