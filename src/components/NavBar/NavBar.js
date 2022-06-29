import React from 'react'
import './Navbar.css';
import { FiSearch } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';

function NavBar() {
  return (
    <div className='navbar'>
      <img className='netflix-logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix logo" />
      <ul className='nav-items'>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Recently Added</li>
        <li>My List</li>
        <div>

          <ul className='nav-items-2'>
            <li nav><FiSearch className='search-logo' /></li>
            <li>KIDS</li>
            <li>DVD</li>
            <li nav><FaBell className='notification-logo' /></li>
          </ul>
        </div>


      </ul>

      <img className='avatar-logo' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar logo" />

    </div>
  )
}

export default NavBar