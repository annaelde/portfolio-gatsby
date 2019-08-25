import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from '../components/post-list'

export const query = graphql`
    query {
        intro: markdownRemark(frontmatter: {title: {eq: "index"}}) {
            html
        }
        posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/.*.md$/"}}) {
            edges {
                node {
                    frontmatter {
                        title,
                        snippet,
                        date
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

const IndexPage = ({ data: {intro, posts} }) => (
    <Layout>
        <SEO title="Home" description="I'm a full-stack software engineer in the Orlando area. Check out my projects and read my blog here." />

        <div className="heading">
            <h1 className="container">Hello!</h1>
        </div>

        <div className="container center justify-between">
            <div className="intro">
                <div dangerouslySetInnerHTML={{ __html: intro.html }} />
                <img className="intro__pic" src="/images/me.jpg" alt="A portrait of myself." height="250" width="250" />
            </div>
        </div>

        <div className="heading">
            <h1 className="container">Recent Posts</h1>
        </div>
        {
            posts
                ? <PostList posts={posts.edges.map(({node}) => ({...node.frontmatter, ...node.fields}))} size="small" subdirectory="blog" />
                : <p className="container">No posts are available.</p>
        }
    </Layout>
)

export default IndexPage
