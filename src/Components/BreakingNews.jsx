import React, { useContext, useEffect, useState } from 'react'
import HomePostCard from './HomePostCard'
import { NewsContext } from '../Context/NewsProvider'
import { FaExclamationTriangle } from 'react-icons/fa';

const BreakingNews = () => {

  const { news, loading } = useContext(NewsContext);

  const [currentNews, setCurrentNews] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentNews((prevNews) => (prevNews + 1) % news.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [news]);


  return (
    <div className='breaking-news'>
        <h2 style={{marginLeft: '20px'}}>Breaking News</h2>
        {loading ? (
          <p>loading...</p>
        ) : news.length > 0 ? (
          <>
      <HomePostCard
      urlToImage={news[currentNews]?.image || "https://via.placeholder.com/150"}
    title={news[currentNews]?.title}
    publishedAt={new Date(news[currentNews]?.publishedAt).toLocaleString()}
    author={news[currentNews]?.author}
    source={news[currentNews]?.source?.name}
    description={
      news[currentNews]?.description?.length > 100
        ? news[currentNews].description.slice(0, 200) + "..."
        : news[currentNews]?.description
    }
    url={news[currentNews]?.url}
      />
        </>
        ) : (
          <div className='error-msg' style={{ width: '80%'}}>
            <p><FaExclamationTriangle/> Failed to fetch News</p>
          </div>
        )}
    </div>
  )
}

export default BreakingNews
