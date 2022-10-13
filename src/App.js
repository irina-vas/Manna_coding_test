import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NewsPage } from './pages/NewsPage';
import { getNewsIds } from './services';

export const App = () => {
  const [newsIds, setNewsIds] = useState([]);

  useEffect(() => {
    getNewsIds().then(data => setNewsIds(data));
  }, []);
  
  return (
    <div className="app">
      <Header />
      <NewsPage newsIds={newsIds} />
    </div>
  );
}
