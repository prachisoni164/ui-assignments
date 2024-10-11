import React from 'react'
import '../styles/home.styles.css'
import Link from 'next/link'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className="container">
        <h1>welcome to next-app</h1>
        <p>your one-stop solution for all your needs</p>
        <Link href="/contact">
            <Button>get started</Button>
        </Link>
    </div>
  )
}

export default Home