import React, { createContext, useState } from 'react'
import main from '../Components/OpenAi'

const AISearchContext = createContext();

const AISearchProvider = (props) => {

    const [showSearch, setShowSearch] = useState(false);

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if (prompt !== undefined) {
            response = await main(prompt);
            setRecentPrompt(prompt) 
        }
        else 
        {
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await main(input)
        }

        let responseArray = response.split("**");
        let newResponse="" ;
        for(let i = 0 ; i < responseArray.length; i++)
        {
            if (i === 0 || i%2 !== 1) {
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        setResultData(newResponse2)
        setLoading(false)
        setInput("")
    }

    const handleSearchBox = () => {
        setShowSearch(! showSearch)
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
        showSearch,
        setShowSearch,
        handleSearchBox
    }

  return (
    <AISearchContext.Provider value={contextValue}>
        {props.children}
    </AISearchContext.Provider>
  )
}

export { AISearchProvider, AISearchContext }

