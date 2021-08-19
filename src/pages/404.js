import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <div className="container ml-auto mr-auto grid justify-center">
      <div className="flex flex-row justify-center shadow-2xl">
        <StaticImage
          src="../images/404.jpg"
          width={1200}
          quality={100}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Sad Cat"
          className="rounded-md"
        />
      </div>
      <div className="container mx-auto p-4 grid mt-10 justify-center font-serif font-medium text-gray-800 dark:text-gray-300">
        <h1 className=" flex flex-row justify-center text-xl sm:text-2xl md:text-4xl lg:text-8xl mb-5">
          404: Not Found
        </h1>
        <p className="flex flex-row justify-center text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          Sad Cat is Sad!!
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
