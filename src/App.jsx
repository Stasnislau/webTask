import React from 'react'
import './App.css'
import TopBar from './components/topBar'
import Intro from './sections/intro'
import Features from './sections/features'
import Technology from './sections/technology'
import CTA from './sections/CTA'
import Contact from './sections/contact'

function App() {

  return (
    <div className="App">
      <TopBar />
      <Intro />
      <Features />
      <Technology />
      <CTA />
      <Contact />
    </div>
  )
}

export default App
