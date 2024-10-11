import React from 'react'
import '../styles/contact.styles.css'
import Button from '../components/Button'

const Contact = () => {
  return (
    <div className="contactContainer">
        <h1>contact us</h1>
        <form className="contactForm">
            <div className="formGroup">
                <label htmlFor="name">name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="message">message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                />
            </div>
            <Button>submit</Button>
        </form>
    </div>
  )
}

export default Contact