import React from 'react'
import PropTypes from 'prop-types'

function RelatedPosts({relatedPosts, ...props}) {
    return (
        <div class="post__related-posts">
        <h3 class="related-posts_heading">
            <span>Related Posts</span>
        </h3>
        <div class="related-posts">
            {relatedPosts.map(post => (
                <Link class="related-post" to={`blog${post.slug}`}>
                    <img class="related-post__thumbnail" src={post.banner.thumbnail} alt={post.banner.alt}/>
                    <div class="related-post__title"><span>{post.title}</span></div>
                </Link>
            ))}

        </div>
    </div>
    )
}

export default RelatedPosts

