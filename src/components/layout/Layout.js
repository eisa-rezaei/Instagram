import React from "react"
import Navigation from "../navigation/Navigation"
import { GlobalStyles, LayoutCt } from "./GlobalStyles"

const Layout = ({ children }) => {
  // const removingNavigation =
  //   window.location.href.includes("addpost") ||
  //   window.location.href.includes("addstory")

  return (
    <LayoutCt>
      {children}
      <Navigation />
      {/* {removingNavigation || <Navigation />} */}
      <GlobalStyles />
    </LayoutCt>
  )
}

export default Layout
