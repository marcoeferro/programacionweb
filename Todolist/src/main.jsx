import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Todolist from './components/Todolist.jsx'
import './sass/theme.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>,
)
