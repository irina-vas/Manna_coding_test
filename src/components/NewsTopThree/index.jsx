/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { dateFormatter } from '../../helpers';
import { Text } from '../Text';

export const NewsTopThree = ({ id, getNews, index }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews(id).then(data => setNews(data));
  }, []);

  return (
    <li className="newsTopThree__item">
      <a className="newsTopThree__link" href={news.url} target="_blank" rel="noreferrer">
        <Text tag="span" size="lg" weight="w800" color="orange" className="newsTopThree__number">
          {index + 1}
        </Text>
        <Text tag="p" color="white" weight="w400" size="md">{news.title}</Text>
      </a>
      <div className="newsTopThree__author">
        <Text tag="p" color="opacity05" weight="w400">by {news.by || 'unkhnown author'}</Text>
        <Text tag="p" color="opacity05" weight="w400">{dateFormatter(news.time)}</Text>
      </div>
      <div className="newsTopThree__wrapper">
        {<Text tag="p" color="opacity05" weight="w400">score: {news.score || 0}</Text>}
        <a className="newsTopThree__comments" href={news.url} target="_blank" rel="noreferrer">
          <Text tag="p" color="opacity05" weight="w400">comments: {news.descendants || 0}</Text>
        </a>
      </div>
    </li>
  )
}