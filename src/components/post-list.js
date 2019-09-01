import React from 'react'
import PostCard from './post-card'

export default ({ posts, size }) => {
    const isFullsize = size == 'full'
    const containerClass = `container ${isFullsize ? 'post-list--vert' : 'post-list--horiz'}`

    return (
        <div className={containerClass}>
            {posts.map(({ title, snippet, slug, date, banner, tags }) => (
                <PostCard key={slug} title={title} snippet={snippet} slug={slug} date={date} tags={tags} size={size} banner={banner} />
            ))}
        </div>
    )
}