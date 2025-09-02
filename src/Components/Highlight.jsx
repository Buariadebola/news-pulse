import React, { useContext } from 'react'
import HighlightCard from './HighlightCard'
import HighlightLoader from '../Loaders/HighlightLoader'
import { NewsContext } from '../Context/NewsProvider';
import { FaExclamationTriangle } from 'react-icons/fa';

const Highlight = () => {

      const {news, loading} = useContext(NewsContext);

  return (
    <div className='highlights'>
      <h3>Highlights</h3>
      {loading ? (
        <HighlightLoader/>
      ) : news.length > 0 ? (
        <div className="highlight-content">
          {news.map((article, index) => (
        <HighlightCard
        key={index}
        urlToImage={article.image}
        title={article.title}
        publishedAt={new Date(article.publishedAt).toLocaleString()}
        url={article.url}
        />
          ))}
      </div>
      ) : (
        <div className='error-msg' style={{ width: '80%'}}>
          <p><FaExclamationTriangle/> Failed to fetch News</p>
        </div>
      )}
    </div>
  )
}

export default Highlight
