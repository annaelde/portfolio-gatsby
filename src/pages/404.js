import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div class="heading">
            <h1 class="container">404 Page Not Found</h1>
        </div>
        <div class="container">
            <p>Looks like the page you requested doesn't exist.</p>
        </div>
    </Layout>
)

export default NotFoundPage
