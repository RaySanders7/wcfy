import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import linkContent from '../../content/linkContent.yaml'
import avatar from '../../content/images/WeCominForYouCastCover.jpg'

// TODO: style color changes on hover over the links
// TODO: refactor styling out in css or scss files
// TODO: refactor out link component
// TODO: use gatsby-image Img for the avatar - probably need to use GraphQL
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ 
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      maxWidth: `680px`, 
      marginBottom: `1.45rem`, 
      fontSize: `16px`
      }}
    >  
      <div style={{display: `block`}}>
        <h1 style={{ textAlign: `center`, fontSize: `24px`}}>{linkContent.title}</h1>
      </div> 
      <div><img src={avatar} alt="" /></div>
      <div style={{display: `block`}}>
        <div style={{textAlign: `center`}}>{linkContent.tagline}</div>
      </div>
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
