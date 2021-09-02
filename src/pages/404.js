import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Error = () => {
  return (
    <Layout>
      <h2> wait a minute !! </h2>
      <h4>Oh!, It seems something went wrong!</h4>
      <Link to="/">Back to home</Link>
    </Layout>
  )
}
export default Error
