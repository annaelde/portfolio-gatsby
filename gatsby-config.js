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
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`
    ],
}
