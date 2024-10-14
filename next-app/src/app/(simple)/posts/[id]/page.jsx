"use client"

import { useParams, useRouter } from 'next/navigation';
const Post = () => {
    const { id } = useParams(); // Access the dynamic route parameter


    return (
        <div>
            <h1>Post</h1>
            <p>Post ID: {id}</p>
        </div>
    );
};

export default Post;