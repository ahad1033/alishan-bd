import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Layout/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <Main />
    </div>
  </React.StrictMode>,
)
