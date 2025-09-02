import React, { useContext } from 'react'
import LatestNewsCard from './LatestNewsCard'
import CategoryButton from './CategoryButton'
import NewsPageLoader from '../Loaders/NewsPageLoader'
import { NewsContext } from '../Context/NewsProvider'
import { FaExclamationTriangle } from 'react-icons/fa'

const LatestNews = () => {

    const {news, loading} = useContext(NewsContext);

  return (
    <div className='latest-news'>
        <h2 style={{marginLeft: '20px'}}>Latest News</h2>
        <CategoryButton/>
        {loading ? (
        <NewsPageLoader/>
      ) : news.length > 0 ? (
        <div className="latest-content">
          {news.slice(0, 6).map((article, index) => (
          <LatestNewsCard
                key={index}
                urlToImage={article.image}
                title={article.title}
                publishedAt={new Date(article.publishedAt).toLocaleString()}
                author={article.author}
                description={
                  article.description && article.description.length > 100
                      ? article.description.slice(0, 200) + "..."
                      : article.description
                  }
          />
          ))}
        </div>
      ) : (
        <div className='error-msg'>
          <p><FaExclamationTriangle/> Failed to fetch News</p>
        </div>
      )}
    </div>
  )
}

export default LatestNews
