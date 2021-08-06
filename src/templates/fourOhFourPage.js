import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

// markup
export default function NotFoundPageTemplate({ pageContext, data: { page } }) {
  const { title, header, img, linkText } = page.childMarkdownRemark.frontmatter

  return (
    <Layout noFooter={true} lang={pageContext.lang}>
      <FourOhFourStyles>
        <GatsbyImage
          image={img.image.childImageSharp.gatsbyImageData}
          alt={img.alt} />
        <h1>{header}</h1>
        <Link className="btn" to="/">{linkText}</Link>
      </FourOhFourStyles>
    </Layout>
  )
}

const FourOhFourStyles = styled.div`
  background: var(--linearGradient);
  padding: 20px;
  height: 100vh;
  text-align: center;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-gap: 40px;
  .btn {
    width: unset;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const query = graphql`
  query($regx: String) {
    page: file(relativeDirectory: {eq: "fourOhFour"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          header
          linkText
          img {
            alt
            image {
              childImageSharp {
                gatsbyImageData (
                  width: 200
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`