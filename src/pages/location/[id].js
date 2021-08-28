import React from "react"
import Location from "../../components/location/Location"
import { posts } from "../../data/data"

const UserLocation = ({ params }) => {
  const id = parseInt(params.id)
  const selectedPost = posts.filter(post => post.id === id)
  return <Location post={selectedPost} />
}

export default UserLocation
