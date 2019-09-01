import React, { useState, useEffect, useRef } from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"


const Header = () => {
    const [open, setOpen] = useState(false)
    const nav = useRef()
    const handleOutsideClick = event => {
        const clickOut = !nav.current.contains(event.target)
        if (clickOut && open) setOpen(false)
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    })

    return (
        <header>
            <div className="container">
                <div id="title"><Link to="/" tabIndex="1">Anna Elde</Link></div>
                <nav ref={nav} role="navigation" className={open ? 'open' : ''}>
                    <button type="menu" className={open ? 'open' : ''} title="This menu requires JavaScript." id="menu-icon" tabIndex="2" onClick={() => setOpen(!open)}><span className="button__label">Toggle Navigation Menu</span></button>
                    <ul>
                        <li><Link to="/about" tabIndex="5">About</Link></li>
                        <li><Link to="/blog" tabIndex="4">Blog</Link></li>
                        <li><Link to="/projects" tabIndex="3">Projects</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
