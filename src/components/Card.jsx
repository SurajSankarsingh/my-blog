import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Moment from "react-moment"

const Card = ({ article }) => {
  const articleImage = getImage(article.node.image)
  const authurImage = getImage(article.node.author.picture)
  return (
    <div className="p-5">
      <div className="mb-5 max-w-7xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl bg-gray-300 dark:bg-gray-700">
        <Link to={`/article/${article.node.slug}`}>
          <div className="">
            <div className="">
              <GatsbyImage image={articleImage} />
            </div>
            <div className="p-6">
              <span className="text-sm font-medium uppercase text-blue-700 dark:text-blue-400">
                {article.node.category.name}
              </span>
              <p className="text-2xl font-medium text-blue-700 uppercase dark:text-blue-400">
                {article.node.title}
              </p>
              <div>
                <div className="mt-4">
                  <div className="mb-2 mx-2">
                    {article.node.author.picture && (
                      <GatsbyImage
                        image={authurImage}
                        className="w-8 h-8 md:w-14 md:h-14 rounded-full"
                      />
                    )}
                  </div>
                  <div className="mx-2">
                    <p className="font-semibold text-gray-700 dark:text-gray-200">{article.node.author.name}</p>
                    <p className="font-serif font-medium text-gray-700 dark:text-gray-200">
                      <Moment format="MMM Do YYYY">
                        {article.published_at}
                      </Moment>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Card
