import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import Seo from '../components/Seo';
import CardsArtist from '../components/CardsArtist';
import Hero from '../components/Hero';

// markup
export default function MusiciansPageTemplate({ pageContext, data }) {
  // Prepare Content
  const {
    title,
    sectionOne,
    sectionTwo,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />

      <Hero header={sectionOne.header} backgroundImage={sectionOne.backgroundImage} />

      <CardsArtist artists={sectionTwo.members} />
    </Layout>
  );
}

export const query = graphql`
  query($regx: String) {
    settings: file(relativeDirectory: {eq: "siteSetting"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          logo {
            image {
              childImageSharp {
                gatsbyImageData(width: 180, placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
            alt
          }
          nav {
            navItems {
              linkAddress
              linkText
              show
              childNavItems {
                linkAddress
                linkText
              }
            }
          }
        }
      }
    }
    page: file(relativeDirectory: {eq: "musicians"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            header
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG,
                    layout: FULL_WIDTH,
                    transformOptions: {fit: COVER},
                    quality: 100
                  )
                }
              }
              alt
            }
          }
          sectionTwo {
            header
            members {
              artistName
              name
              pronouns
              portrait {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 320,
                      height: 240,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                      transformOptions: {fit: COVER},
                      quality: 100
                    )
                  }
                }
                alt
              }
            }
          }
        }
      }
    }
  }
`;