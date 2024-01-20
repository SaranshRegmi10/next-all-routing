import React from 'react'
import style from './Navbar.module.css'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
      <nav>
        {/* <a href="#" class="logo">Logo</a> */}
        <ul>
          <li><Link className="ali" href="./">Home</Link></li>
          <li> <Link className="ali" href="./users">Fetch</Link></li> 
          <li> <Link className='ali' href="./product">Services</Link></li>
            <li><Link className='ali' href="./register">About</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
