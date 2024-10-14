"use client"

import React from 'react'
import PostsPage from '../../pages/posts/page'
import { PostProvider } from '../../../../context/post-context'

const Posts = () => {
  return (
    <PostProvider>
      <PostsPage />
    </PostProvider>
  )
}

export default Posts