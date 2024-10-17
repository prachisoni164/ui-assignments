import { useContext } from "react"
import { ServiceContext } from "../../context/service-context";
import React from 'react';

const ServiceById = (id) => {

    const services = useContext(ServiceContext);

    const serviceId = id.id;

    const service = services.find((service) => service.id === parseInt(serviceId));

    return (
        <div className="full-container">
            <div>
                {service ? (
                    <>
                        <h1>{service.title}</h1>
                        <p>{service.content}</p>
                    </>
                ) : (
                    <p>Service not found.</p>
                )}
            </div>
        </div>
)};

export default ServiceById