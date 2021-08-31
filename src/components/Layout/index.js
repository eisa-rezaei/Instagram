import React from "react"
import { useLocation } from "@reach/router"
import { GlobalStyles, LayoutCt } from "./GlobalStyles"
import Navigation from "./components/Navigation"

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
