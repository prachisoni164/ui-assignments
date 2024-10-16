"use client"

import React, { useState, useEffect } from 'react';
import '../../styles/home.styles.css'
import Link from 'next/link'
import Button from '../../components/Button'

const Home = () => {

  const [greeting, setGreeting] = useState(''); // Initialize state for greeting

  useEffect(() => {
    const hour = new Date().getHours();

    // Set the greeting based on the time of day
    if(hour < 12) setGreeting('good morning')
    else if (hour < 18) setGreeting('good afternoon');
    else setGreeting('good evening');
    
  }, []); // Run only once when the component mounts

  return (
    <div className="full-container">
        <h1>{greeting}</h1>
        <h1>welcome to next-app</h1>
        <p>your one-stop solution for all your needs</p>
        <Link href="/contact">
            <Button>get started</Button>
        </Link>
    </div>
  )
}

export default Home