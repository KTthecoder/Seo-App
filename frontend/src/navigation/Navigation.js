import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage.js'
// import Home1 from '../pages/Home1'
// import HomePage from '../pages/HomePage/HomePage'

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
    </Routes>
  )
}

export default Navigation