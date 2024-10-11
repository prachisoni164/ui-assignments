import Link from 'next/link'
import React from 'react'
import '../styles/nav.styles.css'; 

const NavBar = () => {
  return (
    <nav>
      <h1 className="logo cursor-pointer">
        <Link href="/">next-app</Link>
      </h1>
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/services">services</Link>
        </li>
        <li className="nav-item">
          <Link href="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">contact</Link>
        </li>
      </ul>
  </nav>
  )
}

export default NavBar