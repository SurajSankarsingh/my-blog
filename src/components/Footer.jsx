import React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="text-black font-serif">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <StaticImage
            src="../images/logo.png"
            width={100}
            quality={100}
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Suraj Sankarsingh Logo"
          />
          <p className="text-sm text-gray-900 dark:text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-900 sm:dark:border-yellow-500 sm:py-2 sm:mt-0 mt-4">
            © Suraj Sankarsingh {new Date().getFullYear()}
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
      </footer>
    </>
  )
}

export default Footer
