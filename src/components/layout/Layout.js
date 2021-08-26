import React from "react"
import Navigation from "../navigation/Navigation"
import { GlobalStyles, LayoutCt } from "./GlobalStyles"

const Layout = ({ children }) => {
  const path = window.location.href.substring(22, 50)
  return (
    <LayoutCt>
      {children}
      {path === "addstory" || <Navigation />}
      <GlobalStyles />
    </LayoutCt>
  )
}

export default Layout
