import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>I love <Link to="/speaking/">speaking at conferences</Link>!</p>
  </Layout>
)

export default IndexPage
