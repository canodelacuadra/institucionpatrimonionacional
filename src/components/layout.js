

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)
  const styleLayout = {
    backgroundColor: 'whitesmoke',
    minHeight: '100vh',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1em'
  }

  return (
    <>
      <div style={styleLayout}>
        <Header siteTitle={data.site.siteMetadata?.title || `Sin determinar`} />

        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} &middot; Creado por
          {` `}
          <a href="https://canodelacuadra.github.io/curriculum">{data.site.siteMetadata?.author || `sin declarar`}</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
