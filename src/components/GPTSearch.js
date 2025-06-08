import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACK_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
       <div className="absolute -z-10">
        <img  
        src={BACK_URL}
        alt='background'
        />
        </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GPTSearch
