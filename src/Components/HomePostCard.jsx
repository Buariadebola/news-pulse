import React from 'react'

const HomePostCard = ({ title, urlToImage, publishedAt, author, source, description, url}) => {
  return (
    <div className='homepostcard'>
      <div className='post'>
      <img src={urlToImage} alt="" />
      <div className="post-content">
        <div className='post-title'>
            <h2>{title}</h2>
            <p>{description} <a href={url}><button>Read More</button></a></p>
        </div>
        <p className='post-time'>{publishedAt}</p>
        <p className='post-author'>{source}</p>
        <p className='post-source'>{author}</p>
      </div>
    </div>
    </div>
    
  )
}

export default HomePostCard
