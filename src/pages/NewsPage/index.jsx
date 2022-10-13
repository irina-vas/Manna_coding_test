import React from 'react';
import { News } from '../../components/News';
import { getNews } from '../../services';
import { NewsTopThree } from '../../components/NewsTopThree';

export const NewsPage = ({ newsIds }) => {

  return (
    <div className="newsPage">
      <ul className="newsTopThree">
        {newsIds.slice(0,3).map((id, index) => (
          <NewsTopThree id={id} getNews={getNews} key={index} index={index} />
        ))}
      </ul>
      <ul className="news">
        {newsIds.slice(3,30).map((id, index) => (
          <News id={id} getNews={getNews} key={index} index={index} />
        ))}
      </ul>
    </div>
  )
}