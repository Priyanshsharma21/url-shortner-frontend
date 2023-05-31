import { useState } from 'react'
import './App.css'
import { Navbar } from './components'
import {Home, UrlShortner} from './pages'


function App() {

  return (
    <div className="app">
      <Navbar />
      <UrlShortner />
    </div>
  )
}

export default App
