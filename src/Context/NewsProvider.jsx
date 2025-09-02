import React, { createContext, useEffect, useState } from 'react'

const NewsContext = createContext();

const NewsProvider = ({children}) => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us')
  const apiKey = '01b76e73e54e1c3917c7e7d7b915cc4f';
  
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try{
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?country=${country}&topic=${category}&lang=en&token=${apiKey}`);
        const data = await response.json();
        setNews(Array.isArray(data.articles) ? data.articles : []);
      } catch (err) {
        setError(err.message || 'Failed to fetch News');
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [category, country])

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

