import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import linkContent from '../../content/linkContent.yaml'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `680px`, marginBottom: `1.45rem`}}>  
      <div>{linkContent.title}</div>    
      <div>{linkContent.tagline}</div>
      <div style={{marginTop: '1.45rem'}}>
        {linkContent.links.map(link => 
          <div>
          <a href={link.url}>{link.name}</a>
          </div>
        )}
      </div>
    </div>
  </Layout>
)

export default IndexPage
