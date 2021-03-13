import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-700">
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">

    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
      </nav>
  </footer>
  )
}

export default Footer
