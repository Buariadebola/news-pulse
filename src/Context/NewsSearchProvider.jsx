import React, { createContext, useState, useEffect } from 'react'

const NewsSearchContext = createContext();

const NewsSearchProvider = ({children}) => {

    const [searchNews, setSearchNews] = useState([]);
      const [keyword, setKeyword] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
    
        const BASE_URL =
    import.meta.env.MODE === 'development'
      ? 'http://localhost:3000'
      : 'https://news-pulse-backend.onrender.com';

      useEffect(() => {
        const fetchNews = async () => {
          setLoading(true);
          try {
            const response = await fetch(`${BASE_URL}/api/v4/search?q=${keyword}`);
          const data = await response.json();
          setSearchNews(Array.isArray(data.articles) ? data.articles : []);
          } catch (err) {
            setError(err.message || 'failed to fetch Articles');
          } finally {
            setLoading(false);
          }
        }
        fetchNews();
      }, [keyword, BASE_URL])
    
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
