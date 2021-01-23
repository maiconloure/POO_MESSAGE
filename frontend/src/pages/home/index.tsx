import React, { useEffect, useState } from 'react';
import HomeTemplate from './template';

const Home: React.FC = () => {
  const [signUp, setSignUp] = useState(false);
  const [message, setMessage] = useState(false)
  const [messageHistory, setMessageHistory] = useState(false)
  const [exit, setExit] = useState(false)

  // useEffect(() => {
  //   if (signUp) {
  //     setMessage(false)
  //     setMessageHistory(false)
  //   } 
  //   if (message) {
  //     setSignUp(false)
  //     setMessageHistory(false)
  //   }
  //   if (messageHistory) {
  //     setSignUp(false)
  //     setMessage(false)
  //   }
  //   if (exit) {
  //     setSignUp(false)
  //     setMessage(false)
  //     setMessageHistory(false)
  //   }
    
  // },[signUp, message, messageHistory, exit])

  return (
    <HomeTemplate signUp={signUp} setSignUp={setSignUp} 
    message={message} setMessage={setMessage} 
    messageHistory={messageHistory} setMessageHistory={setMessageHistory}/>
  )
}

export default Home;