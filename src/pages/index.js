import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Articles from "../components/Articles"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="font-sans text-3xl md:text-5xl mt-5 mb-3 text-gray-800 dark:text-gray-300">
          Welcome to My Blog
        </h1>
        <p className="font-serif text-base md:text-lg mt-6 text-gray-800 dark:text-gray-300">
          This is the place where I share my thoughts of various topics I find
          interesting. Feel free to contact me via my social links if you have
          any questions.{" "}
        </p>
      </div>

      <Articles articles={data.allStrapiArticle.edges} />
    </Layout>
  )
}

const query = graphql`
  query {
    allStrapiArticle(
      filter: { status: { eq: "published" }, featured: { eq: true } }
    ) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              gatsbyImageData(
                width: 1500
                height: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 95
              )
            }
          }
          author {
            name
            picture {
              childImageSharp {
                gatsbyImageData(
                  width: 50
                  height: 50
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 95
                )
              }
            }
          }
        }
      }
    }
  }
`
export default IndexPage
