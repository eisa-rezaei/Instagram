import React from "react"
import { Router } from "@reach/router"
import Profile from "../../components/profile/Profile"
import UserProfile from "./user"

const Index = () => {
  return (
    <Router>
      <UserProfile path="/profile/username" exact />
      <Profile path="/profile" exact />
    </Router>
  )
}

export default Index
