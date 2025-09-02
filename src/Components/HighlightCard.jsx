import React from 'react'

const HighlightCard = ({urlToImage, title, publishedAt, url }) => {
  return (
    <a href={url}>
      <div className="highlight-card" style={{cursor: 'pointer'}}>
        <img src={urlToImage} alt="" />
        <p className='highlight-title'>{title}</p>
        <p className='highlight-date'>{publishedAt}</p>
    </div>
    </a>
  )
}

export default HighlightCard
