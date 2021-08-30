import React from "react"
import PostPage from "../../components/PostPage"
import { posts } from "../../data/data"

const UsePostsPage = ({ params }) => {
  const id = parseInt(params.id)
  const selectedPost = posts.filter(post => post.id === id)
  return <PostPage post={selectedPost} />
}

export default UsePostsPage
