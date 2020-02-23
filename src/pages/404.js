import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <h1>404 Page Not Found</h1>
      <p>Sorry that page doens't exist. Please check the URL for typos.</p>
    </Layout>
  )
}