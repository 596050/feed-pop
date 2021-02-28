import React from 'react'

import PostsList from './PostsList'
import { usePosts } from './usePosts'

const PostsBoard = () => {
  const { posts } = usePosts()

  return (
    <section className="posts-container">
      <PostsList data={posts || []} />
    </section>
  )
}

export default PostsBoard
