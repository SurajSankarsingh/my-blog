import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SocialLinks from "../components/SocialLinks"

const Header = () => {
  const [isDropDown, setisDropDown] = useState(false)
  const data = useStaticQuery(query)
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <StaticImage
            src="../images/logo.png"
            width={190}
            quality={100}
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Suraj Sankarsingh Logo"
          />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            className="mr-5 text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
          >
            Home
          </Link>
          <div className="relative">
            <button
              onClick={() => setisDropDown(!isDropDown)}
              className="mr-5 justify-items-center text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600 focus:outline-none"
            >
              Categories
            </button>
            <div
              className={`${
                isDropDown ? `flex` : `hidden`
              } flex flex-wrap z-100 p-2 m-2 bg-white `}
            >
              {data.allStrapiCategory.edges.map((category, i) => (
                <div
                  className="dark:bg-gray-700 rounded-md shadow-xl text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600 p-2"
                  key={`category__${category.node.slug}`}
                >
                  <Link
                    to={`/category/${category.node.slug}`}
                    className="font-medium text-md p-3 rounded-lg"
                  >
                    {category.node.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Link
            to="https://surajsankarsingh.dev"
            className="text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </Link>
        </nav>

        <SocialLinks />
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const query = graphql`
  query {
    allStrapiCategory {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`
export default Header
