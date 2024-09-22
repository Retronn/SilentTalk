import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { fetchTranslatedText as fetchFromApi, resetText, setStableTime } from '../services/apiService';
import { Snippet } from '@nextui-org/snippet';

function CommandDisplay({setIsLightBulbOn,setIsFanOn,setIsLockOn}:any) {
    const [translatedText, setTranslatedText] = useState('');

    useEffect(() => {
        console.log("iM SAMI");
        
        const fetchText = () => {
          console.log("iM SAMI");
          fetch('http://localhost:5000/get_text')
            .then(response => response.json())
            .then(data => setTranslatedText(data.text))
            .catch(error => console.error('Error fetching translated text:', error));
        };

        const intervalId = setInterval(fetchText, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(()=>{
        if(translatedText=="lights on"){
            setIsLightBulbOn(true)
        }
        else if(translatedText=="lights off"){
            setIsLightBulbOn(false)
        }
        else if(translatedText=="fan on"){
            setIsFanOn(true)
        }
        else if(translatedText=="fan off"){
            setIsFanOn(false)
        }
        else if(translatedText=="lock on"){
            setIsLockOn(true)
        }
        else if(translatedText=="lock off"){
            setIsLockOn(false)
        }
    },[translatedText])

    return (
        <Snippet hideCopyButton color="success">
            <span>Smart Command: {translatedText}</span>
        </Snippet>
    );
};


const ResetTextButton = () => {
return(
    <>
    <button onClick={resetText}>Reset Text</button>
                <input
                    type="number"
                    step="0.1"
                    min="0"
                    defaultValue="1.5"
                    onChange={(e) => setStableTime(parseFloat(e.target.value))}
                />
    </>
)
}

export default CommandDisplay;
