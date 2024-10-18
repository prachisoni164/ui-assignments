import React from 'react'
import '../styles/footer.styles.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const FooterBar = () => {

  const pathname = usePathname(); // Get current route

  return (
    <footer>
        <div className="footer-content">
            <p>all rights reserved.</p>
            <ul className="footer-links mt-4">
              <li className={`nav-item ${pathname.includes('/products') ? 'active' : ''}`}>
                <Link href="/products">products</Link>
              </li>
              <li className={`nav-item ${pathname.includes('/quotes') ? 'active' : ''}`}>
                <Link href="/quotes">quotes</Link>
              </li>
              <li className={`nav-item ${pathname.includes('/services') ? 'active' : ''}`}>
                <Link href="/services">services</Link>
              </li>
              <li className={`nav-item ${pathname.includes('/posts') ? 'active' : ''}`}>
                <Link href="/posts">posts</Link>
              </li>
              <li className={`nav-item ${pathname.includes('/about') ? 'active' : ''}`}>
                <Link href="/about">about</Link>
              </li>
              <li className={`nav-item ${pathname.includes('/contact') ? 'active' : ''}`}>
                <Link href="/contact">contact</Link>
              </li>
            </ul>
        </div>
    </footer>   
  )
}

export default FooterBar