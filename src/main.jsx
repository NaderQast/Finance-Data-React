import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Analytics from './components/Analytics.jsx'
import NewsLetter from './components/NewsLetter.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero />
    <Analytics /> 
    <NewsLetter />
    <Cards />
    <Footer />
  </React.StrictMode>
)
