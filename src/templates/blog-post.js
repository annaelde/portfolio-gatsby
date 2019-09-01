import React from "react"
import { Link } from "gatsby"
import { kebabCase } from 'lodash'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { post } }) => {
    return (
        <Layout>
            <SEO title={post.title} description={post.snippet}></SEO>
            <div className="heading">
                <h1 className="container">{post.title}</h1>
                <h4 className="subheading container">Anna Elde / {post.date}</h4>
            </div>

            <div className="post__banner">
                <img src={post.banner.medium.publicURL}
                    srcSet={`
                    ${post.banner.small.publicURL} 800w,
                    ${post.banner.medium.publicURL} 1200w,
                    ${post.banner.large.publicURL} 1600w,
                    ${post.banner.huge.publicURL} 1920w
                    `}
                    sizes="100vw"
                    alt={post.banner.alt}
                    title={post.banner.title} />
            </div>

            <article role="article" className="post">
                <div className="toc">
                    <h2 className="toc__heading">Table of Contents</h2>
                    <div className="toc__list" dangerouslySetInnerHTML={{__html: post.tableOfContents}} />
                </div>
                <div className="post__content" dangerouslySetInnerHTML={{__html: post.html}} />
                <div className="tag-list">
                    <h4>Tags:</h4>
                    {post.tags.map(tag => (
                        <Link key={tag} className="tag-list__tag" to={`/blog?tag=${kebabCase(tag)}`}>{tag}</Link>
                    ))}
                </div>

                <div className="social social--horizontal">
                    <h4 className="social__title">Share<span>:</span></h4>
                    <ul className="social__icons">
                        <li className="social__icon social__icon--facebook"><Link role="link" to={`https://www.facebook.com/sharer.php?u=${window.location.href}&t=${encodeURI(post.title)}`} title="Share via Facebook"></Link></li>
                        <li className="social__icon social__icon--twitter"><Link role="link" to={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURI(post.title)}&via=annaeldecodes`} title="Share via Twitter"></Link></li>
                        <li className="social__icon social__icon--tumblr"><Link role="link" to={`http://tumblr.com/widgets/share/tool?canonicalUrl=${window.location.href}&?data-title=${encodeURI(post.title)}`} title="Share via Tumblr"></Link></li>
                        <li className="social__icon social__icon--reddit"><Link role="link" to={`https://reddit.com/submit?url=${window.location.href}&title=${encodeURI(post.title)}`} title="Share via Reddit"></Link></li>
                        <li className="social__icon social__icon--email"><Link role="link" to={`mailto:?&subject=Anna Elde Codes | ${encodeURI(post.title)}&body=${window.location.href}`} title="Share via Email"></Link></li>
                        <li className="social__icon social__icon--print"><Link role="link" to="javascript:window.print()" title="Print/Save as PDF"></Link></li>
                    </ul>
                </div>
            </article>
        </Layout>
    )
}