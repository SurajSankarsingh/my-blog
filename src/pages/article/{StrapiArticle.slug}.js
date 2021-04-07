import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Moment from "react-moment"
import Layout from "../../components/Layout"
import Markdown from "react-markdown"
import SEO from "../../components/seo"

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt 
      image {
        publicURL
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
`

const Article = ({ data }) => {
  const article = data.strapiArticle
  const articleImage = getImage(article.image)
  const authurImage = getImage(article.author.picture)

  return (
    <Layout>
      <SEO title={article.title}/>
      <div className="container mx-auto">
        <div>
          <div className="flex justify-center">
            <h1 className="font-serif font-semibold p-2 uppercase text-3xl md:text-5xl mt-8 mb-8 text-gray-700 dark:text-gray-200">
              {article.title}
            </h1>
          </div>
          <div className="flex justify-center p-2">
            <GatsbyImage image={articleImage} className="max-w-6xl" />
          </div>
          
        </div>

        <div className="container mt-12 xl:w-3/4 3xl:w-3/5 mx-auto">
          <div className="text-gray-700 dark:text-gray-200">
            <article className="markdown">
              <Markdown source={article.content} escapeHtml={false} />
            </article>

            <div className="mt-4">
              <div className="mb-2 mx-2">
                {article.author.picture && (
                  <GatsbyImage
                    image={authurImage}
                    className="w-8 h-8 md:w-14 md:h-14 rounded-full"
                  />
                )}
              </div>
              <div className="mx-2">
                <p className="font-semibold text-gray-700 dark:text-gray-200">
                  By {article.author.name}
                </p>
                <p className="font-serif font-medium text-sm md:text-base text-gray-700 dark:text-gray-200">
                  <Moment format="MMM Do YYYY">{article.publishedAt}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
