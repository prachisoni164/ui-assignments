import PropTypes from 'prop-types'
import React from 'react'
import SimpleLayout from '../../../layout/SimpleLayout'

export default function Layout({ children }) {
    return (
        <SimpleLayout>{children}</SimpleLayout>
    )
}

Layout.propTypes = { children: PropTypes.node }
