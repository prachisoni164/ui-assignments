"use client";

import PropTypes from 'prop-types'; 
import { ServiceProvider } from '../../../../context/service-context';

export default function ServicesLayout({ children }) {
    return (
        <ServiceProvider>
            {children}
        </ServiceProvider>
    );
}

ServicesLayout.propTypes = { 
    children: PropTypes.node 
};