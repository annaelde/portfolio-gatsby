import React from 'react'
import { Link } from 'gatsby'

export default () => (
    <footer className="column">
        <div className="container footer__row">
            <ul role="navigation" className="footer__nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="{% url 'portfolio:project_list' %}">Projects</Link></li>
                <li><Link to="{% url 'blog:post_list' %}">Blog</Link></li>
                <li><Link to="{% url 'contact:contact' %}">Contact</Link></li>
            </ul>

            <div className="footer__twitter">
            </div>
        </div>
        <div className="footer__copyright">
            Copyright © 2019 Anna Elde. Built with <Link to="https://www.gatsbyjs.org/">Gatsby ⚛</Link>
        </div>
    </footer>
)