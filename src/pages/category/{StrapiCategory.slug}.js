import React from "react"
import { graphql } from "gatsby"
import Articles from "../../components/Articles"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiArticle(
      filter: { status: { eq: "published" }, category: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          slug
          title
          publishedAt
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
    category: strapiCategory(slug: { eq: $slug }) {
      name
    }
  }
`

const Category = ({ data }) => {
  const articles = data.articles.edges
  const category = data.category.name

  return (
    <Layout>
      <SEO title={category.toUpperCase()}/>
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="font-sans text-3xl uppercase md:text-5xl mt-5 mb-3 text-gray-800 dark:text-gray-300">
          {category}
        </h1>
        <Articles articles={articles} />
      </div>
    </Layout>
  )
}

export default Category
