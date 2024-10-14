import { createContext, useState } from "react";

// Context for posts
export const PostContext = createContext();

// Provider for posts
export const PostProvider = ({children}) => {
    const[posts] = useState([
        { 
            id: 1, 
            title: 'Understanding JavaScript Closures', 
            content: 'JavaScript closures are a fundamental concept in the language. They allow functions to maintain access to their lexical scope, even when the function is executed outside that scope. This behavior is crucial for creating private variables and functions.' },
        {
            id: 2,
            title: "A Guide to CSS Flexbox",
            content: "CSS Flexbox is a layout model that provides an efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown. It is a powerful tool for creating responsive web designs.",
        },
        {
            id: 3,
            title: "Getting Started with React Hooks",
            content: "React Hooks are a feature that allows you to use state and other React features without writing a class. They make it easier to share logic between components and can help you write cleaner and more maintainable code.",
        },
    ]);

    return (
        <PostContext.Provider value={posts}>
            {children}
        </PostContext.Provider>
    )
}
