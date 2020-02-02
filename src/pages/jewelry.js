import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JewelryPage = ({data}) => (
  <Layout>
    <SEO title="Custom Jewelry" />
    <Img
        fixed={data.file.childImageSharp.fixed}
        alt="assortment of fine jewelry behind glass"
      />
    <h2>Custom Jewelry</h2>
    <p>Did you know I'm also an amateur silversmith?</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "jewelry.jpg" }) {
      childImageSharp {
        fixed(width:800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default JewelryPage
