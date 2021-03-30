import React from "react"
import { Link } from "gatsby"
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa"

const SocialLinks = () => {
  return (
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
        to="https://www.linkedin.com/in/suraj-sankarsingh-51479a178/"
        className="ml-3 text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </Link>
      <a
        href="mailto:sankarsinghsuraj@gmail.com"
        className="ml-3 text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
        target="_blank"
        rel="noreferrer"
      >
        <FaEnvelope />
      </a>
    </span>
  )
}

export default SocialLinks
