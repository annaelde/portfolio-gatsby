import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" description="I'm a full-stack software engineer in the Orlando area. Check out my projects and read my blog here." />

        <div className="heading">
            <h1 className="container">Hello!</h1>
        </div>

        <div className="container center justify-between">

            <div className="intro">
                <div>
                </div>
                <img className="intro__pic" src="../static/images/me.jpg" alt="A portrait of myself." height="250" width="250" />
            </div>

            <div className="row intro__skill-set">
                <div className="card">
                    <div className="card__heading">
                        <h4 className="card__title">Front-End</h4>
                    </div>
                    <div className="card__content">
                        <p></p>
                    </div>
                </div>
            </div>

            <div className="intro__resume-button">
                <a href="/static/files/anna-elde-resume.pdf">Resumé</a>
            </div>

            <div className="intro__post-script">

            </div>
        </div>

        <div className="heading">
            <h1 className="container">Recent Posts</h1>
        </div>

        {/* <div className="container post-list--horiz">
    {% for post in post_list %}
    <div className="post-list__item post-list__item--small">

        <div className="post-list__heading">
            <a href="{% url 'blog:post_detail' post.slug %}">
                <h2 className="post-list__title">{{ post.title }}</h2>
            </a>
        </div>

        <div className="post-list__meta ">
            <span className="post-list__author"><span className="icon__label">Written by </span>{{ post.author.first_name }} {{ post.author.last_name }}</span>
            <time className="post-list__time"><span className="icon__label">Published on </span>{{ post.published_on|date:"F j Y" }}</time>
            <a className="post-list__comment-link" href="{% url 'blog:post_detail' post.slug %}#comments" title="View Comments"><span className="post-list__comment-count post-list__comment-count--small disqus-comment-count" data-disqus-identifier="{{ post.slug }}"></span><span className="button__label"> Comments</span></a>
        </div>

        <p className="post-list__summary">{{ post.snippet }}</p>

    </div>
    {% endfor %}
</div>
{% else %}
<p className="container">No posts are available.</p>
{% endif %} 

{% endblock main %} */}
    </Layout>
)

export default IndexPage
