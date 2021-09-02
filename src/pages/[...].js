import React from "react"
import { Router, Location } from "@reach/router"

import Home from "../components/Home"
import Likes from "../components/Likes"
import AddStory from "../components/AddStory"
import AddPost from "../components/AddPost"
import Explore from "../components/Explore"
import UserLocation from "../components/Location"
import Post from "../components/Posts"
import Profile from "../components/Profile"

const App = () => (
  <Location>
    {({ location }) => (
      <Router location={location}>
        <Home path="/" />
        <UserLocation path="/location/:id" />
        <Post path="/posts/:id" />
        <Profile path="/profile/" username="eisa.rez" exact />
        <Profile path="/profile/:username" />
        <Likes path="/likes" exact />
        <AddStory path="/addstory" exact />
        <AddPost path="/addpost" exact />
        <Explore path="/explore" exact />
      </Router>
    )}
  </Location>
)

export default App
