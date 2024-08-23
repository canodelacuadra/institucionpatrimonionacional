import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import GenMultiStepForm from "../components/generadorqrmulisteps/genmultistepform"
import Seo from "../components/seo"

const GeneradorQr = () => (
  <Layout>
    <h1>Generador de Códigos QR</h1>
    <GenMultiStepForm></GenMultiStepForm>

  </Layout>
)

export const Head = () => <Seo title="Generador de Códigos QR" />

export default GeneradorQr
