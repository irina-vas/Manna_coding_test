/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { dateFormatter } from '../../helpers';

export const News = ({ id, getNews, index }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews(id).then(data => setNews(data))
  }, []);

  return (
    <li className='news__item'>
      <a className="news__link" href={news.url} target="_blank" rel="noreferrer">
        <span className="news__number">{index + 4}.</span>
        <p className="news__title">{news.title}</p>
      </a>
      <div className="news__description">
        <div className="news__author">
          <p>by {news.by}</p>
          <p>{dateFormatter(news.time)}</p>
        </div>
        <div className="news__wrapper">
          <p className="news__score">score: {news.score}</p>
          <a className="news__comments" href={news.url} target="_blank" rel="noreferrer">
            comments: {news.descendants}
          </a>
      </div>
      </div>
    </li>
  )
}