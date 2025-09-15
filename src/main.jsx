import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CountryDataProvider } from './context/CountryDataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountryDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountryDataProvider>
  </StrictMode>,
)
