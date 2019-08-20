import React from 'react'

export default ({label, link, ...props}) => {
    return (
        <div className="intro__resume-button">
            <a href={link}>{label}</a>
        </div>
    )
}