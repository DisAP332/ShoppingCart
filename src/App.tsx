import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import { Auth } from './Components/Auth'

import { NavBar } from './Components/NavBar'

import { Home } from './Pages/Home'

function App() {

  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Container>
  )
}

export default App
