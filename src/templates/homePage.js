import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import LocalizedLink from '../components/LocalizedLink';
import Seo from '../components/Seo';
import LogoGarden from '../components/LogoGarden';
import Carousel from '../components/Carousel';
import {
  SectionOneStyles, SectionThreeStyles, SectionFourStyles, SectionTwoStyles,
} from '../styles/HomePageStyles';

export default function HomePageTemplate({ pageContext, data }) {
  // Prepare Content
  const {
    title,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  const collabs = data.logos.childMarkdownRemark.frontmatter.sectionOne.collaborators;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />

      {/* Hero */}
      <SectionOneStyles>
        <GatsbyImage
          image={sectionOne.backgroundImage.image.childImageSharp.gatsbyImageData}
          alt={sectionOne.backgroundImage.alt}
          className="background"
        />

        <div className="hero-wrapper">
          <h1>{sectionOne.header}</h1>
          <div>
            <p>{sectionOne.description}</p>
            <div className="hero-buttons">
              {sectionOne.buttons.map(({ linkText, url }) => (
                <LocalizedLink
                  className="btn"
                  key={url}
                  to={url}
                  lang={pageContext.lang}
                >
                  {linkText}
                </LocalizedLink>
              ))}
            </div>
          </div>
        </div>

      </SectionOneStyles>

      <SectionTwoStyles>
        <GatsbyImage
          image={sectionTwo.backgroundImage.image.childImageSharp.gatsbyImageData}
          alt={sectionTwo.backgroundImage.alt}
          className="background"
        />

        <Carousel
          items={sectionTwo.carouselItems}
          lang={pageContext.lang}
          buttonLabel={sectionTwo.buttonLabel}
        />
      </SectionTwoStyles>
      {/* Carousel */}

      {/* Survey */}
      <SectionThreeStyles>
        <div className="text__left">
          <h2>{sectionThree.header}</h2>
          <p>{sectionThree.descriptionPrimary}</p>
          <LocalizedLink
            className="btn"
            to={sectionThree.button.url}
            lang={pageContext.lang}
          >
            {sectionThree.button.linkText}
          </LocalizedLink>
          <p>{sectionThree.descriptionSecondary}</p>
        </div>

        <GatsbyImage
          image={sectionThree.backgroundImage.image.childImageSharp.gatsbyImageData}
          alt={sectionThree.backgroundImage.alt}
          imgStyle={{ objectFit: 'contain', width: 'unset', left: 'unset' }}
          className="bg-image__right"
        />
      </SectionThreeStyles>

      {/* Newsletter */}
      <SectionFourStyles>
        <h2>{sectionFour.header}</h2>
        <p>{sectionFour.description}</p>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input type="name" name="name" id="name" placeholder={sectionFour.form.inputPlaceholderName} />
          <input type="email" name="email" id="email" placeholder={sectionFour.form.inputPlaceholderEmail} />
          <button type="submit" className="btn">{sectionFour.form.buttonText}</button>
          {/* <input type="reset" value="Clear" /> */}
        </form>
      </SectionFourStyles>

      {/* Logo Garden */}
      <LogoGarden logos={collabs} />

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
            navItemsSecondary {
              linkAddress
              linkText
            }
            menuAuth {
              labelLogin
              labelLogout
              labelMenu
              navItemsAuth {
                linkAddress
                linkText
              }
            }
            buttonDiscord {
              linkText
              url
            }
            labelPhases {
              labelPhaseOne
              labelPhaseTwo
              labelPhaseThree
            }
          }
        }
      }
    }
    page: file(relativeDirectory: {eq: "home"}, base: {regex: $regx}) {
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
                    quality: 100
                  )
                }
              }
              alt
            }
            description
            buttons {
              linkText
              url
            }
          }
          sectionTwo {
            buttonLabel
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG,
                    layout: FULL_WIDTH,
                    quality: 100
                  )
                }
              }
              alt
            }
            carouselItems {
              name
              type
              nameAlt
              description
              img {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 500,
                      height: 500,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                      transformOptions: {fit: COVER},
                      quality: 100
                    )
                  }
                }
                alt
              }
              button {
                linkText
                url
              }
            }
          }
          sectionThree {
            header
            descriptionPrimary
            button {
              linkText
              url
            }
            descriptionSecondary
            backgroundImage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 500,
                    placeholder: TRACED_SVG,
                    layout: CONSTRAINED,
                    quality: 100
                  )
                }
              }
            }
          }
          sectionFour {
            header
            description
            form {
              inputPlaceholderName
              inputPlaceholderEmail
              buttonText
            }
          }
        }
      }
    }
    logos: file(relativeDirectory: {eq: "team"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          sectionOne {
            collaborators {
              name
              url
              logo {
                alt
                image {
                  childImageSharp {
                    gatsbyImageData(
                      height: 80,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                      transformOptions: {fit: CONTAIN},
                      quality: 100
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
