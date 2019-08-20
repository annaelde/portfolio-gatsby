import React from 'react'

export default () => (
    <footer className="column">
        <div className="container footer__row">
            <ul role="navigation" className="footer__nav">
                <li><a href="/">Home</a></li>
                <li><a href="{% url 'portfolio:project_list' %}">Projects</a></li>
                <li><a href="{% url 'blog:post_list' %}">Blog</a></li>
                <li><a href="{% url 'contact:contact' %}">Contact</a></li>
            </ul>

            <div className="footer__twitter">
            </div>
        </div>
        <div className="footer__copyright">
            Copyright © 2019 Anna Elde. Built with <a href="https://www.gatsbyjs.org/">Gatsby ⚛</a>
        </div>
    </footer>
)