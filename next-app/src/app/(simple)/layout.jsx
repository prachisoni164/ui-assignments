'use client'

import PropTypes from 'prop-types'
import React from 'react'
import SimpleLayout from '../../../layout/SimpleLayout'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '../../lib/queryClient'

export default function Layout({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <SimpleLayout>{children}</SimpleLayout>
        </QueryClientProvider>
    )
}

Layout.propTypes = { children: PropTypes.node }
