"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import ServiceById from '../../../../../views/service-by-id';

const Service = () => {

    const { id } = useParams(); // Access the dynamic route parameter

    return (
        <ServiceById id={id} />
    )
}

export default Service