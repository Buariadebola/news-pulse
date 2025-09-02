import React, { useContext } from 'react'
import { NewsContext } from '../Context/NewsProvider'

const CategoryButton = () => {

  const {category, handleChangeCategory} = useContext(NewsContext);
  return (
    <>
        <div className="category-button">
          <button className={`category-btn ${category === 'general' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('general')}>General</button>
            <button className={`category-btn ${category === 'politics' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('politics')}>Politics</button>
            <button className={`category-btn ${category === 'business' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('business')}>Business</button>
            <button className={`category-btn ${category === 'sports' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('sports')}>Sport</button>
            <button className={`category-btn ${category === 'entertainment' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('entertainment')}>Entertainment</button>
            <button className={`category-btn ${category === 'technology' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('technology')}>Technology</button>
        </div> 
    </>
  )
}

export default CategoryButton
