import React from "react"
import Card from "./Card"

const Articles = ({ articles }) => {
  return (
    <div>
      <div className="">
        <div>
          {articles.map((article) => {
            return <Card article={article} key={article.node.slug} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Articles
