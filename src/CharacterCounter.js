import React,{useState} from 'react';
import './CharacterCounter.css'

const CharacterCounter = () => {
    const [text, setText] = useState('');
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    const characterCount = text.length;
  
    return (
      <div className="CharacterCounter">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
        />
        <p>Character count: {characterCount}</p>
      </div>
    );
  };export default CharacterCounter;