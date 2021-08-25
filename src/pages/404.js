import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"

const Error = () => {
  return (
    <Layout>
      <h4>some thing went wrong !!!</h4>
      <Link to="/"> Back to home </Link>
    </Layout>
  )
}
export default Error
