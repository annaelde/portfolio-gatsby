import React, {useState, useEffect, useRef} from 'react'

const TagCloud = ({ tags }) => {
    const [open, setOpen] = useState(true)
    const [height, setHeight] = useState(0)
    const innerPadding = 34
    const tagList = useRef(null)
    useEffect(() => {
        if (!tagList.current) return
        const {style, scrollHeight} = tagList.current
        if (scrollHeight && scrollHeight !== height) {
            setHeight(scrollHeight)
        }
        Object.assign(style, open ? {
            maxHeight: height + innerPadding + 'px',
            paddingTop:  innerPadding / 2 + 'px',
            paddingBottom:  innerPadding / 2 + 'px'
        } : {
            maxHeight: '0',
            paddingTop: '0',
            paddingBottom: '0'
        })
    }, [open, tagList.current])

    return (
        <div id="tag-cloud" className="container card-holder">
            <div className="card">
                <div className="tag-cloud__heading card__heading">
                    <h3 className="card__title">Browse by Tag</h3>
                    <button onClick={() => setOpen(!open)} role="button" className="toggle" title="Toggle Tags"                       aria-label="Toggle Tag List">
                        <svg className="toggle__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="transparent" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
                            <circle className="toggle__switch" cx="8" cy="12" r="3" transform={`translate(${open ? '8' : '0'} 0)`}></circle>
                        </svg>
                        <span className="button__label">Toggle Tag List</span>
                    </button>
                </div>
                <div ref={tagList} className="card__content tag-list" style={{transition: 'max-height .3s ease-in-out, padding .3s ease-in-out'}}>
                    {tags.map(tag => (
                        <a key={tag.slug} className="tag-list__tag" href={`?tag=${tag.slug}`}>{tag.name}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TagCloud
