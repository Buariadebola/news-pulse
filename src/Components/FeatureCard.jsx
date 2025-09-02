import React from 'react'

const FeatureCard = ({text, image, isActive}) => {
  return (
    <div className={`feature-card${isActive ? 'active' : ''}`}>
      <img src={image} alt="" className='feature-image'/>
      <span className='cover-bg'></span>
      <p>{text}</p>
    </div>
  )
}

export default FeatureCard
