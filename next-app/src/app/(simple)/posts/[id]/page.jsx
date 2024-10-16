"use client"

import { useParams } from 'next/navigation';

import React from 'react';
import PostById from '../../../../../views/posts/post-by-id';

const Post = () => {
    
    const { id } = useParams(); // Access the dynamic route parameter
    
    return (
        <PostById id={id} />
    );
};

export default Post;