import React, { createContext, useEffect, useState } from 'react'

const NewsContext = createContext();

const NewsProvider = ({children}) => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us')

  const BASE_URL =
    import.meta.env.MODE === 'development'
      ? 'http://localhost:3001'
      : 'https://news-pulse-backend.onrender.com';
  
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try{
        const response = await fetch(`${BASE_URL}/api/news?country=${country}&topic=${category}`);
        const data = await response.json();
        setNews(Array.isArray(data.articles) ? data.articles : []);
      } catch (err) {
        setError(err.message || 'Failed to fetch News');
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [category, country, BASE_URL])

    const handleChangeCategory = (newCategory) => {
    setCategory(newCategory);
  }

const handleCountry = (newCountry) => {
  setCountry(newCountry);
};

  return (
    <NewsContext.Provider value={{ error, loading, news, handleChangeCategory, category, setCategory, handleCountry, country, setCountry}}>
      {children}
    </NewsContext.Provider>
  )
}

export { NewsProvider, NewsContext }

