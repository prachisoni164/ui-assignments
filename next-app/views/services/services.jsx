import React, { useContext } from 'react'
import '../../styles/services.styles.css'
import { ServiceContext } from '../../context/service-context'
import Link from "next/link";

const Services = () => {

    const services = useContext(ServiceContext) // Access the services data from context

    return (
        <div className="container">
            <h1>our services</h1>
            <ul className="cardList">
                {services.map(service => (
                    <Link href={`/services/${service.id}`} key={service.id}>
                        <li key={service.id} className="card pointer">
                            <h2 className='text-bold'>{service.title}</h2>
                            <p>{service.content}</p>
                        </li>
                    </Link>
                ))}
            </ul>
    </div>
)}

export default Services