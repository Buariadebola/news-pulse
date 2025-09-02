import React, { createContext, useState, useEffect } from 'react'

const NewsSearchContext = createContext();

const NewsSearchProvider = ({children}) => {

    const [searchNews, setSearchNews] = useState([]);
      const [keyword, setKeyword] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const apiKey = '01b76e73e54e1c3917c7e7d7b915cc4f';
    
      useEffect(() => {
        const fetchNews = async () => {
          setLoading(true);
          try {
            const response = await fetch(`https://gnews.io/api/v4/search?q=${keyword}&lang=en&token=${apiKey}`);
          const data = await response.json();
          setSearchNews(Array.isArray(data.articles) ? data.articles : []);
          } catch (err) {
            setError(err.message || 'failed to fetch Articles');
          } finally {
            setLoading(false);
          }
        }
        fetchNews();
      }, [keyword])
    
      const handleKeywordChange = (newKeyword) => {
        setKeyword(newKeyword);
      }

  return (
    <NewsSearchContext.Provider value={{error, searchNews, loading, handleKeywordChange, keyword}}>
        {children}
    </NewsSearchContext.Provider>
  )
}

export { NewsSearchProvider, NewsSearchContext }
