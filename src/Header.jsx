import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
          <Link to="/">Home</Link>
          <Link to="/about"  className='ml-3'>About</Link>
          <Link to="/review"  className='ml-3'>Review</Link>
          <Link to="/contact" className='ml-3'>Contact</Link>
          <Link to="/service" className='ml-3'>Service</Link>
    </nav>
  )
}

export default Header
