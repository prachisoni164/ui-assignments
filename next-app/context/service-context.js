import React, { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const ServiceContext = createContext();

export const ServiceProvider = ({children}) => {
    const[services] = useState([
        { id: 1, title: 'Web Development', content: 'Our expert team creates responsive and user-friendly websites tailored to your business needs. We specialize in modern frameworks and technologies to ensure your site is both functional and visually appealing.' },
        { id: 2, title: 'Mobile App Development', content: 'We develop high-quality mobile applications for iOS and Android platforms. Our team ensures seamless user experiences and optimized performance for your mobile solutions.' },
        { id: 3, title: 'UI/UX Design', content: 'We create intuitive and visually stunning user interfaces that enhance user engagement and satisfaction. Our design team focuses on creating seamless and visually appealing experiences.' }
    ])

    return (
        <ServiceContext.Provider value={services}>
            {children}
        </ServiceContext.Provider>
    )
}

ServiceProvider.propTypes = {
    children: PropTypes.node.isRequired
};
