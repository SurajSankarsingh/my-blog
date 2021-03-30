import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SocialLinks from "../components/SocialLinks"

const Footer = () => {
  return (
    <>
      <footer className="text-black font-serif">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <div >
            <StaticImage
              src="../images/logo.png"
              width={130}
              quality={100}
              placeholder="blurred"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Suraj Sankarsingh Logo"
            />
          </div>
          <p className="text-sm text-gray-900 dark:text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-900 sm:dark:border-yellow-500 sm:py-2 sm:mt-0 mt-4">
            © Suraj Sankarsingh {new Date().getFullYear()}
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <SocialLinks />
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer
