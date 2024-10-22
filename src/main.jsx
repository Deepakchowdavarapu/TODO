import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todo2 from './Todo2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo2/>
  </StrictMode>,
)
