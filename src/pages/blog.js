import React, {useState} from 'react'
import { graphql } from 'gatsby'
import {slice} from 'lodash'
import queryString from 'query-string'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from '../components/post-list'
import Pagination from '../components/pagination'
import TagCloud from '../components/tag-cloud'

export const query = graphql`
    query {
        posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/.*.md$/"}}) {
            edges {
                node {
                    frontmatter {
                        title,
                        slug,
                        snippet,
                        date
                    }
                }
            }
        }
    }
`

const tags = [
    {name: 'Django', slug: 'django'}
]

const BlogPage = ({ data: {posts : queriedPosts}, location, ...props }) => {
    const posts = slice(queriedPosts.edges.map(({node}) => node.frontmatter), currentPage * limit, (currentPage + 1) * limit)
    const count = posts.length;
    const limit = 5
    const {page: currentPage = 1, tag} = queryString.parse(location.search)
    const showTagError = tag && !tags.includes(tag)

    return (
    <Layout>
        <SEO title="Blog" description="Posts about web development, programming, and technology." />
        {tag && (
            <div className="heading">
                {showTagError
                    ? <h1 className="container">Tag Not Found!</h1>
                    : <h1 className="container">Tagged with {{ tag }}</h1>}
            </div>
        ) || (
            <div className="heading">
                <h1 className="container">Blog</h1>
            </div>
        )}


        { posts
            ? <PostList posts={posts} size="full" />
            : <p className="container">No posts are available.</p> }

    <Pagination params={{page: currentPage, tag}} count={count} limit={limit} />
    <TagCloud tags={tags} />
    </Layout>
)}

export default BlogPage
