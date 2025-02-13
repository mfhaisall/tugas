import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Siderbar from './components/Sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Siderbar/>
  </StrictMode>,
)
