import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <Link className="main-link" to="/">
        <i className="fas fa-headphones-alt mr-2" /> 

        <span className="navbar-brand mb-0 h1 mx-auto"> Lyrical </span>
      </Link>
    </nav>
  )
}

export default Navbar
