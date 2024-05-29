import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <html lang="en">

      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LeetiFy</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>




    <App />
    <Home></Home>



  </React.StrictMode>,
)
