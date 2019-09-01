import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash';

import PostBanner from './post-banner'

export default ({ title, snippet, date, tags, slug, banner = {}, size, ...props }) => {
    const isFullsize = size == 'full'
    const itemClass = `post-list__item ${isFullsize ? 'post-list__item--full' : 'post-list__item--small'}`
    const headingClass = `post-list__heading ${isFullsize ? 'post-list__heading--full' : ''}`

    const tagList = tags && (
        <span className="post-list__tags">
            <span className="icon__label">Tagged with </span>
            {tags.map(tag => (<Link to={`blog?tag=${kebabCase(tag)}`}>{tag}</Link>))
                .reduce((result, item) => <>{result}, {item}</>)}
        </span>
    )

    return (
        <div className={itemClass}>
            <div className={headingClass}>
                <Link to={slug}>
                    {isFullsize
                        ? <PostBanner banner={banner} />
                        : <h2 className="post-list__title">{title}</h2>}
                </Link>
            </div>
            <div className="post-list__meta ">
                <time className="post-list__time"><span className="icon__label">Published on </span>{date}</time>
                {tagList}
            </div>
            <p className="post-list__summary">{snippet}</p>
        </div>
    )
}