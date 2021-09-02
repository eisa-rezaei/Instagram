import React from "react"
import { useLocation } from "@reach/router"
import { GlobalStyles, LayoutCt } from "./GlobalStyles"
import Navigation from "./components/Navigation"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <LayoutCt>
      <Helmet>
        <meta charSet="utf-8" />
        <title>instagram</title>
        <link rel="canonical" href="http://demo3.i3o.ir/instagram" />
      </Helmet>
      {children}
      {location.pathname === "/addstory" ||
        location.pathname === "/addpost" || <Navigation />}
      <GlobalStyles />
    </LayoutCt>
  )
}

export default Layout
