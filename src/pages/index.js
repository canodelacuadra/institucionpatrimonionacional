import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import MultiStepForm from "../components/formmultisteps/multistepform"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Link to="/generadorqr">Generador Qr Multisteps</Link>

    <Link to="/userprofile">Perfil de Usuario</Link>
    <h2>Multi-Step Form</h2>
    <MultiStepForm></MultiStepForm>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
