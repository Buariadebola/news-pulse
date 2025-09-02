import React, { useContext } from 'react'
import AIicon from '../assets/renova AI logo.png'
import botpic from '../assets/Renova profile pic.png'
import userpic from '../assets/profile icon.png'
import { IoSend } from 'react-icons/io5'
import { TiTimes } from 'react-icons/ti'
import { AISearchContext } from '../Context/AISearchProvider'

const AISearch = () => {

      const {onSent, recentPrompt, showResult, resultData, setInput, input, showSearch, setShowSearch, handleSearchBox} = useContext(AISearchContext)
      
  return (
    <>
      <div className="search">
        <div className={`search-box ${showSearch ? 'active' : ''}`}>
          <div className='search-display'>
          <div className="search-bar">
            <textarea type="text" placeholder='Send a message..' onChange={(e)=> setInput(e.target.value)} value={input} />
            <button><IoSend style={{scale: '2', color: 'black'}} onClick={()=> onSent()}/></button>
          </div>
          <div className="search-result">
            {showResult ? (
              <>
              <div className="chat">
                <img src={userpic} alt="" />
                <p className='input-text'>{recentPrompt}</p>
              </div>
              <div className="chat bot">
                <img src={botpic} alt="" />
                <p className='bot-text' dangerouslySetInnerHTML={{__html:resultData}}></p>
              </div>
              </>
            ) : (
              <div className="chat bot">
                <img src={botpic} alt="" />
                <p className='bot-text'>Hi, i am Renova AI, A text-based chatbot developed by Renova Codes. I'm designed to understand and generate human-like response based on the input i receive. You can ask me questions, seek information and even request assistance with various tasks. Let me know how i can help you!</p>
              </div>
            )
          }
          </div>
          <button className='remove-box' onClick={() => setShowSearch(false)}><TiTimes className='remove-icon'/></button>
          </div>
        </div>
          <button className='search-icon' onClick={handleSearchBox}><img src={AIicon} alt="" /></button>
          </div>
    </>
  )
}

export default AISearch
