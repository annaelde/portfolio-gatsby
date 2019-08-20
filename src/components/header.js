import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header>
        <div className="container">
            <div id="title"><a href="/" tabIndex="1">Anna Elde</a></div>
            <nav role="navigation">
                <button type="menu" title="This menu requires JavaScript." id="menu-icon" tabIndex="2"><span className="button__label">Toggle Navigation Menu</span></button>
                <ul>
                    <li><Link to="/about" tabIndex="5">About</Link></li>
                    <li><Link to="/projects" tabIndex="3">Projects</Link></li>
                    <li><Link to="/blog" tabIndex="4">Blog</Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
