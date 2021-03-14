import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa"

const Header = () => {
  const [isDropDown, setisDropDown] = useState(false)

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
              className="mr-5 text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600 focus:outline-none"
            >
              Categories
            </button>
            <div
              className={`${
                isDropDown ? `block` : `hidden`
              } absolute right-0 z-100 w-48 py-2 mt-2 bg-white dark:bg-gray-700 rounded-md shadow-xl text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600`}
            >
              <Link
                to="/"
                className="block px-4 py-2 text-sm capitalize transition-colors duration-200 transform text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
              >
                your profile
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 text-sm capitalize transition-colors duration-200 transform text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
              >
                Your projects
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 text-sm capitalize transition-colors duration-200 transform text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
              >
                Help
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 text-sm capitalize transition-colors duration-200 transform text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
              >
                Settings
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 text-sm capitalize transition-colors duration-200 transform text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
              >
                Sign Out
              </Link>
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

        <span className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          <Link
            to="https://facebook.com/surajsankarsingh/"
            className="text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://twitter.com/suraj_dev_tt/"
            className="ml-3 text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </Link>
          <Link
            to="mailto:sankarsinghsuraj@gmail.com"
            className="ml-3 text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </Link>
          <Link
            to="https://www.linkedin.com/in/suraj-sankarsingh-51479a178/"
            className="ml-3 text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </Link>
        </span>
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

export default Header
