import React, { useEffect, useState } from 'react';
import {Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastProvider } from 'react-toast-notifications'
import { GlobalStyle } from './styled';
import API from './services/api'
import Home from './pages/home';


interface IUser {
  name: string
  code: string
}

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    API.get<IUser[]>('/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  return (
    <HelmetProvider>
    <div>
      <Helmet>
        <title>POO MESSAGE</title>
        <meta name="description" content="Tutorial for React Helmet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"rel="stylesheet"/>
      </Helmet>
      <ToastProvider>
        <Home users={users} />
      </ToastProvider>
      <GlobalStyle />
      </div>
    </HelmetProvider>
  );
}

export default App;
