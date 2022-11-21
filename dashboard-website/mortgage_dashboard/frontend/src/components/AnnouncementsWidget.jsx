import api from "../services/api";
import { useState, useEffect } from "react";
import * as React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import "./AnnouncementsWidget.css";

const AnnouncementsWidget = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:8000/api/ImportantAnnouncements/")
      .then((response) => setNews(response.data));
  }, []);

  return (
    <div className="AnnouncementsWidget">
      <div className="AnnouncementsTitle">
        <div>Announcements</div>
      </div>

      <div className="news-items">
        {news.map((row) => (
          <div className="news-item">
            <p id="news-date">{row.date.slice(0, 10)}</p>
            <div id="news-content">{row.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsWidget;
