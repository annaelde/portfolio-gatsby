import React from 'react'
import PostBanner from './post-banner'

export default ({title, snippet, date, slug, banner = {}, size, ...props}) => {
    const isFullsize = size == 'full'
    const itemClass = `post-list__item ${isFullsize ? 'post-list__item--full' : 'post-list__item--small'}`
    const headingClass = `post-list__heading ${isFullsize ? 'post-list__heading--full' : ''}`

    return (
        <div className={itemClass}>
            <div className={headingClass}>
                <a href={slug}>
                    {isFullsize
                    ? <PostBanner banner={banner} />
                    : <h2 className="post-list__title">{title}</h2>}
                </a>
            </div>
            <div className="post-list__meta ">
                <span className="post-list__author"><span className="icon__label">Written by </span>Anna Elde</span>
                <time className="post-list__time"><span className="icon__label">Published on </span>{date}</time>
                <a className="post-list__comment-link" href={`${slug}#comments`} title="View Comments">
                    <span className="post-list__comment-count post-list__comment-count--small disqus-comment-count" data-disqus-identifier={slug}>0</span>
                    <span className="button__label"> Comments</span>
                </a>
            </div>
            <p className="post-list__summary">{snippet}</p>
        </div>
    )
}