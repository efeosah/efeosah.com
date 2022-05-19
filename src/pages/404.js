import React from 'react'
import { Link } from "gatsby"
import { Layout } from '../components/Layout'

import temp from '../assets/temp.png'


// markup
export default function NotFoundPage () {
  return (
    <>
      {/* <Helmet title={`404 | ${config.siteTitle}`} /> */}
      {/* <SEO /> */}

      <article>
        <header>
          <div className="container">
            <h1>404</h1>
            <p className="description">This was probably a mistake.</p>
          </div>
        </header>

        <section>
          <div className="container">
            <img src={temp} alt="404" className="not-found-image" />
          </div>
        </section>
      </article>
    </>
  )
}


NotFoundPage.Layout = Layout
// export default NotFoundPage
