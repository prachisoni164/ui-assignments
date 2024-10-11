import React from 'react'
import '../styles/footer.styles.css'
import Link from 'next/link'

const FooterBar = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>all rights reserved.</p>
            <ul className="footer-links mt-4">
                <li><Link href="/services">services</Link></li>
                <li><Link href="/about">about</Link></li>
                <li><Link href="/contact">contact</Link></li>
            </ul>
        </div>
    </footer>   
  )
}

export default FooterBar