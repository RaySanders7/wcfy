import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import linkContent from '../../content/linkContent.yaml'
import avatar from '../../content/images/WeCominForYouCastCover.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `680px`, marginBottom: `1.45rem`, fontSize: `16px`}}>  
      <div>{linkContent.title}</div> 
      <div><img src={avatar} alt="" /></div>
      <div>{linkContent.tagline}</div>
      <div style={{marginTop: '1.45rem'}}>
        {linkContent.links.map(link =>   
          <div style={{
            display: `flex`, 
            flexDirection: `column`, 
            marginBottom: `1rem`
            }}
          >        
            <a href={link.url} style={{
              display: `block`,
              border: `2px solid black`, 
              borderRadius: `4px`,
              paddingTop: `1rem`,
              paddingBottom: `1rem`,
              paddingLeft: `1rem`,
              paddingRight: `1rem`,
              textDecoration: `none`,
              textAlign: `center`,
              color: `black`
              }}
            >            
              <div>{link.name}</div>
            </a>
          </div>      
        )}
      </div>
    </div>
  </Layout>
)

export default IndexPage
