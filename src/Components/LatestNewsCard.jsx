import React from 'react'
import { BsShareFill } from 'react-icons/bs'

const LatestNewsCard = ({urlToImage, author, title, publishedAt, description}) => {
  return (
    <div className='latest-card'>
      <img src={urlToImage} alt="" />
      <div className="card-content">
        <button><BsShareFill/></button>
        <p className='latest-title'>{title}</p>
        <p className='latest-desc'>{description}</p>
        <p className='latest-date'>{publishedAt}</p>
        <p className='latest-author'>{author}</p>
      </div>
    </div>
  )
}

export default LatestNewsCard
