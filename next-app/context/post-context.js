import { createContext, useState } from "react";

// Context for posts
export const PostContext = createContext();

// Provider for posts
export const PostProvider = ({children}) => {
    const[posts] = useState([
        { id: 1, title: 'Post One', content: 'This is the content for post one.' },
        { id: 2, title: 'Post Two', content: 'This is the content for post two.' },
        { id: 3, title: 'Post Three', content: 'This is the content for post three.' },
        { id: 4, title: 'Post Four', content: 'This is the content for post four.' },
    ]);

    return (
        <PostContext.Provider value={posts}>
            {children}
        </PostContext.Provider>
    )
}
