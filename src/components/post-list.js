import React from 'react'
import PostCard from './post-card'

export default ({posts, size, subdirectory, ...props}) => {
    const isFullsize = size == 'full'
    const containerClass = `container ${isFullsize ? 'post-list--vert' : 'post-list--horiz'}`

    return (
    <div className={containerClass}>
        {posts.map(({title, snippet, slug, date, banner}) => (
            <PostCard key={slug} title={title} snippet={snippet} slug={subdirectory ? `${subdirectory}${slug}` : slug} date={date} size={size} banner={banner} />
        ))}
    </div>
    )
}