import React from 'react'
import '../css/nav.css'

const Nav = () => {
  return (
    <header className="navbar">
      <h1 className="brand">Travel Planner</h1>
      <nav className="menu">
        <div className="nav-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#discover">Discover</a>
          <a href="#place">Place</a>
          <a href="#registration">Registration</a>
        </div>
        <div className="nav-right">
          <a href="#login">Login/Signup</a>
        </div>
      </nav>
    </header>
  )
}

export default Nav
