"use client";

import { PostProvider } from "../../../../context/post-context";
import PropTypes from 'prop-types'; 
import React from 'react';

export default function PostLayout({ children }) {
    return (
        <PostProvider>
            {children}
        </PostProvider>
    );
}

PostLayout.propTypes = { 
    children: PropTypes.node 
};