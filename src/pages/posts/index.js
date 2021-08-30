import React from "react"
import { Router } from "@reach/router"

import PostPage from "../../components/PostPage"
import UsePostsPage from "./[id]"

const Index = () => {
  return (
    <Router>
      <UsePostsPage path="/posts/:id" />
      <PostPage path="/posts" />
    </Router>
  )
}

export default Index
