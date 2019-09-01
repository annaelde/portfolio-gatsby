import React from 'react'
import { Link } from 'gatsby'

export default () => (
    <footer className="column">
        <div className="container footer__row">
            <ul role="navigation" className="footer__nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>

            <div className="footer__twitter">
            </div>
        </div>
        <div className="footer__copyright">
            Copyright © 2019 Anna Elde. Built with <a href="https://www.gatsbyjs.org/">Gatsby ⚛</a>
        </div>
    </footer>
)