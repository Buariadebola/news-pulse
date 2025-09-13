import React from 'react'
import WhatsappShareButton from './WhatsappShareButton'
import XShareButton from './XShareButton'

const LatestNewsCard = ({urlToImage, author, title, publishedAt, description, url}) => {
  return (
    <div className='latest-card'>
      <img src={urlToImage} alt="" />
      <div className="card-content">
        <XShareButton title={title} url={url} img={urlToImage}/>
        <WhatsappShareButton title={title} url={url} img={urlToImage}/>
        <p className='latest-title'>{title}</p>
        <p className='latest-desc'>{description}</p>
        <p className='latest-date'>{publishedAt}</p>
        <p className='latest-author'>{author}</p>
      </div>
    </div>
  )
}

export default LatestNewsCard
