"use client"

import React, { useState } from 'react'
import '../styles/contact.styles.css'
import Button from '../components/Button'

const Contact = () => {
    
    // Form data
    const [form, setForm] = useState(
        {
            name: '',
            email: '',
            message: ''
            
        }
    ); 

    const [submitted, setSubmitted] = useState(false);

    // This fires when there are changes in any of the inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from the event target

        setForm((prevForm) => ({
            ...prevForm,        // Spread the previous state
            [name]: value       // Update the property with the input's name (e.g. email, name, or message) with its value
        }));
    }

    const handleSubmit = () => {
        setSubmitted(true);

    }

    return (
        <div className="contactContainer">
            <h1>contact us</h1>
            
            {submitted ? (<p>Thank you for reaching out, {form.name}! We&apos;ll get back to you soon</p>
            ) : (
                <form className="contactForm" onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="name">name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="message">message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <Button>submit</Button>
                </form>
            )}
        </div>
    )
}

export default Contact