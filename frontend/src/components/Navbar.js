import React from 'react'
import './navbar.css'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div class='notify-bar-container'>
        <marquee behavior='' direction=''>
          📚 Book Recommendation System📚
        </marquee>
      </div>
      <div class='navbar-container'>
        <div class='navbar-container-section'>
          <Link to='/'>Home</Link>
        </div>
        <div class='navbar-container-section'>
          <Link to='/recommend'>Recommend Books</Link>
        </div>
        <div class='navbar-container-section'>
          <Link to='/contact'>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
export default Navbar
