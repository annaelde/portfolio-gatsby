const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
const { find } = require('lodash')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        devtool: "eval-source-map"
    });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
        posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/.*.md$/"}}) {
            edges {
                node {
                    frontmatter {
                        title,
                        snippet,
                        date,
                        tags
                    }
                    html
                    tableOfContents
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
                        },
                        medium {
                            publicURL
                        },
                        large {
                            publicURL
                        }
                        huge {
                            publicURL
                        }
                    }
                }
            }
        }
    }
  `)
    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }
    const posts = result.data.posts.edges
    const banners = result.data.banners.edges.map(({ node }) => node.banner)
    posts.forEach(({ node }, index) => {
        const post = { ...node.frontmatter, ...node.fields, html: node.html, tableOfContents: node.tableOfContents }
        const banner = find(banners, ({ small }) => small.publicURL.includes(post.slug.replace(/blog\/.*/g, '')))
        createPage({
            path: post.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: { post: { ...post, banner } }
        })
    })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` }).replace(/\//g, '')
        createNodeField({
            node,
            name: `slug`,
            value: `blog/${slug}`,
        })
    }
}