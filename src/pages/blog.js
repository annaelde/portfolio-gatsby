import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { slice, find, kebabCase } from 'lodash'
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
                        snippet,
                        date
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        banners: allImagesJson {
            edges {
                node {
                    banner {
                        title,
                        alt,
                        small {
                            publicURL
                        }
                    }
                }
            }
        },
        tags: allMarkdownRemark {
            distinct(field: frontmatter___tags)
        }
    }
`
const BlogPage = ({ data: { posts: queriedPosts, banners: queriedBanners, tags: queriedTags }, location }) => {
    // Check for querystrings
    const { page: currentPage = 0, tag: searchTag } = queryString.parse(location.search)
    // Set post limit
    const limit = 5
    // Transform queried data to pass into child components
    const banners = queriedBanners.edges.map(({ node }) => node.banner)
    const posts = slice(queriedPosts.edges.map(({ node }) => {
        const post = { ...node.frontmatter, ...node.fields }
        const slug = post.slug.replace(/blog\/.*/g, '')
        const banner = find(banners, ({ small }) => small.publicURL.includes(slug))
        return { ...post, banner }
    }), currentPage * limit, (currentPage + 1) * limit)
    const count = posts.length;
    const tags = queriedTags.distinct ? queriedTags.distinct.map(tag => ({ name: tag, slug: kebabCase(tag) })) : []
    const tag = find(tags, ({ slug }) => slug === searchTag)
    return (
        <Layout>
            <SEO title="Blog" description="Posts about web development, programming, and technology." />
            {tag && (
                <div className="heading">
                    {searchTag && !tag
                        ? <h1 className="container">Tag Not Found!</h1>
                        : <h1 className="container">Tagged with {tag.name}</h1>}
                </div>
            ) || (
                    <div className="heading">
                        <h1 className="container">Blog</h1>
                    </div>
                )}
            {posts && posts.length > 0
                ? <PostList posts={posts} size="full" />
                : <p className="container">No posts are available.</p>}
            <Pagination params={{ page: currentPage, tag: searchTag }} count={count} limit={limit} />
            <TagCloud tags={tags} />
        </Layout>
    )
}

export default BlogPage
