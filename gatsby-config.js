module.exports = {
    siteMetadata: {
        title: `Anna Elde Codes`,
        description: `A blog about what I'm learning in software engineering, plus my portfolio.`,
        author: `Anna Elde`,
        icon: `${__dirname}/src/static/images/favicon.ico`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `static`,
                path: `${__dirname}/src/static`,
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`
    ],
}
