import React from 'react'

export default ({label, link, ...props}) => {
    return (
        <div className="intro__resume-button">
            <Link to={link}>{label}</Link>
        </div>
    )
}