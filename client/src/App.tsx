import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ToastProvider } from 'react-toast-notifications'
import { GlobalStyle } from './styled'
import Home from './pages/home'

const App: React.FC = () => {
  return (
    <HelmetProvider>
    <div>
      <Helmet>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="Tutorial for React Helmet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"rel="stylesheet"/>
        <title>OOP Message Test</title>
      </Helmet>
      <ToastProvider>
        <Home />
      </ToastProvider>
      <GlobalStyle />
      </div>
    </HelmetProvider>
  )
}

export default App
