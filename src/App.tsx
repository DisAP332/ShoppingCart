import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import { Auth } from './Components/Auth'

import { NavBar } from './Components/NavBar'

function App() {

  return (
    <Container>
      <NavBar />
    </Container>
  )
}

export default App
