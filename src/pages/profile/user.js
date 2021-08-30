import React from "react"
import Profile from "../../components/profile/Profile"
import { users } from "src/data/data"

const UserProfile = ({ params }) => {
  const selectedUser = users.filter(user => user.username === params.username)
  return <Profile user={selectedUser} />
}

export default UserProfile
