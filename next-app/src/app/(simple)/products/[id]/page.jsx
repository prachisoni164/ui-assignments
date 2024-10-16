"use client"

import { useParams } from 'next/navigation';
import React from 'react';
import ProductById from '../../../../../views/products/product-by-id';


const Post = () => {
    
    const { id } = useParams(); // Access the dynamic route parameter
    
    return (
        <ProductById id={id} />
    );
};

export default Post;