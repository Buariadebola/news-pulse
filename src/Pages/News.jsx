import React, { useContext } from 'react'
import NavWithSearch from '../Components/NavWithSearch'
import NewsPageLoader from '../Loaders/NewsPageLoader'
import CategoryButton from '../Components/CategoryButton'
import WeatherUpdate from '../Components/WeatherUpdate'
import NewsCard from '../Components/NewsCard'
import Subscribe from '../Components/Subscribe'
import Settings from '../Components/Settings'
import MenuBar from '../Components/MenuBar'
import AISearch from '../Components/AISearch'
import { NewsContext } from '../Context/NewsProvider'
import { NewsSearchContext } from '../Context/NewsSearchProvider'
import { FaExclamationTriangle } from 'react-icons/fa'

const News = () => {

  const {news, loading} = useContext(NewsContext);
  const {searchNews} = useContext(NewsSearchContext);

  return (
    <div className='news-page'>
      <MenuBar/>
      <NavWithSearch/>
      <AISearch/>
      <div className='home-left'>
        <h2 style={{margin: '20px 0 0 20px'}}>News Page</h2>
        <CategoryButton/>
            {loading ? (
          <NewsPageLoader/>
        ) : searchNews.length > 0 ? (
           <div className="newspage-content">
              {searchNews.map((article, index) => (
              <NewsCard
                key={index}
                urlToImage={article.urlToImage}
                title={article.title}
                publishedAt={new Date(article.publishedAt).toLocaleString()}
                author={article.author}
                source={article.source.name}
                description={
                  article.description && article.description.length > 100
                      ? article.description.slice(0, 200) + "..."
                      : article.description
                  }
                url={article.url}
              />
              ))}
              </div>
        ) : news.length > 0 ? (
            <div className="newspage-content">
              {news.slice(0, 100).map((article, index) => (
              <NewsCard
                key={index}
                urlToImage={article.image}
                title={article.title}
                publishedAt={new Date(article.publishedAt).toLocaleString()}
                author={article.author}
                source={article.source.name}
                description={
                  article.description && article.description.length > 100
                      ? article.description.slice(0, 200) + "..."
                      : article.description
                  }
                url={article.url}
              />
              ))}
              </div>
          ) : (
            <div className='error-msg'>
              <p><FaExclamationTriangle/> Failed to fetch News</p>
            </div>
          )}
        </div>
      <div className="home-right">
        <WeatherUpdate/>
        <Subscribe/>
        <Settings/>
      </div>
    </div>
  )
}

export default News
