'use client'
import PropTypes from 'prop-types'
import Footer from './Footer'
import Header from './Header'
import React from 'react'

export default function SimpleLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

SimpleLayout.propTypes = { children: PropTypes.node }