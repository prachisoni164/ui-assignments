import React, { useContext } from "react"
import { PostContext } from "../../context/post-context"

const PostById = (id) => {
    const posts = useContext(PostContext); // Access the post data from context

    const postId = id.id; // Access the dynamic route parameter
    
    // Find the post with the specific id
    const post = posts.find((post) => post.id === parseInt(postId)); 


    return (
        <div className="full-container">
            <div>
                {post ? (
                    <>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                    </>
                ) : (
                    <p>Post not found.</p>
                )}
            </div>
        </div>
    );
};

export default PostById;