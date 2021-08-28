import React from "react"
import Navigation from "../navigation/Navigation"
import { GlobalStyles, LayoutCt } from "./GlobalStyles"
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <LayoutCt>
      {children}
      {location.pathname === "/addstory" ||
        location.pathname === "/addpost" || <Navigation />}
      <GlobalStyles />
    </LayoutCt>
  )
}

export default Layout
