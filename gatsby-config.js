module.exports = {
    siteMetadata: {
        title: `Anna Elde Codes`,
        description: `A blog about what I'm learning in software engineering, plus my portfolio.`,
        author: `Anna Elde`,
        icon: `/images/favicon.ico`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                postCssPlugins: [
                    require('autoprefixer')(),
                    require('postcss-base64')({
                        pattern: /<svg.*<\/svg>/i,
                        prepend:
                            'data:image/svg+xml;base64,'
                    }),
                    require('postcss-clean')()
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `static`,
                path: `${__dirname}/static`,
            }
        },
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: `https://anna.elde.codes`,
                stripQueryString: true,
            }
        },
        {
            resolve: "gatsby-remark-custom-blocks",
            options: {
                blocks: {
                    citation: {
                        classes: "citation",
                    }
                },
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                    resolve: `gatsby-remark-autolink-headers`,
                    options: {
                        icon: `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>`
                    }
                }],
            }
        },
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        `gatsby-plugin-sharp`
    ],
}
