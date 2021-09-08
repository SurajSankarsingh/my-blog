import React from "react"
import { FaTwitter, FaEnvelope, FaLinkedinIn } from "react-icons/fa"

const SocialLinks = () => {
  return (
    <span className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
      <a
        href="https://twitter.com/suraj_dev_tt/"
        className="ml-3 text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/suraj-sankarsingh-51479a178/"
        className="ml-3 text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn className="w-6 h-6" />
      </a>
      <a
        href="mailto:hello@surajsankarsingh.dev"
        className="ml-3 text-gray-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-600"
        target="_blank"
        rel="noreferrer"
      >
        <FaEnvelope className="w-6 h-6" />
      </a>
    </span>
  )
}

export default SocialLinks
