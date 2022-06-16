import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import LayoutNav from './layouts/LayoutNav'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Projects from './components/Projects/Projects'
import Review from './components/Review/Review'
import './App.sass'

function App() {
  return (
    <LayoutNav>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/about-us' element={<About/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/reviews' element={<Review/>} />
      </Routes>
    </LayoutNav>
  )
}

export default App