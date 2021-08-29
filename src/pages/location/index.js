import React from "react"
import { Router } from "@reach/router"
import UserLocation from "./[id]"
import Location from "../../components/location/Location"

const Index = () => {
  return (
    <Router>
      <UserLocation path="/location/:id" />
      <Location path="/location" />
    </Router>
  )
}

export default Index
