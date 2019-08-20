import React from 'react'

export default ({title, content,...props}) => {
    return (
        <div className="card">
            <div className="card__heading">
                <h4 className="card__title">{title}</h4>
            </div>
            <div className="card__content">
                <p>{content}</p>
            </div>
        </div>
    )
}