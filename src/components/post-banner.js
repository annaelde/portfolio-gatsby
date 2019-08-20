import React from 'react'
import PropTypes from 'prop-types'

const PostBanner = ({banner, ...props}) => {
    return (
        <img src={banner.small.publicURL}
        alt ={banner.alt}
        title={banner.title} />
    )
}

PostBanner.propTypes = {

}

export default PostBanner

