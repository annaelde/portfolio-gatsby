---
title: 'Hello World Pt. 1: Choosing Your Stack'
slug: hello-world-pt-1
date: January 1 2019
snippet: Before making a site, you have to pick a language, framework, tools... the list goes on. Find out what I chose to use for my portfolio site and why.
---

> **Hello World** is a series covering the development of my online portfolio.
>This is the first part of the series. You can [follow me on Twitter](https://www.twitter.com/annaeldecodes) to get updates on future posts.

[TOC]

# Starting Out

Back in June 2017, I was a couple of months away from graduating with an A.S. in Computer Programming. I knew it was time to start working on pulling together all the projects I'd done over the past year into a portfolio.

I had in mind a few features I definitely wanted in a website: a project gallery, a blog, and a contact form. Pretty standard fare for a portfolio site, right? 

For the front-end, I envisioned a modern, bright design with interactivity and responsive, mobile-friendly layouts inspired by today's web applications. As for the back-end, I wanted to use a framework with a content management system for easy updates.

Ultimately, my goal was to apply all the concepts I learned in my degree program to make my best project yet. And that would start with making a plan.

# Planning the Back-End

## Choosing a Language and Framework

Before I could start development, I had to choose a back-end language and framework to use. Easier said than done when there are so many choices!

First, I ruled a few languages out. I am really not a fan of PHP, the complexity of its server-side configuration, and its syntax, so PHP was not considered. I also ruled out using JavaScript, because I wanted to try something totally new on the back-end.

I eventually narrowed it down to [Ruby](https://www.ruby-lang.org/en/)/[Ruby on Rails](http://rubyonrails.org/) and [Python](https://www.python.org/)/[Django](https://www.djangoproject.com/). Both pairs really appealed to me because of their ease-of-use. Doing some research on these, I saw many developers talking about how their development speed increased when using these high level languages. Also in my research, I frequently found the sentiment that using these languages made programming more *pleasant*.

> I believe that the purpose of life is, at least in part, to be happy. Based on this belief, Ruby is designed to make programming not only easy, but also fun. It allows you to concentrate on the creative side of programming, with less stress.
> <div class="citation">- [Yukihiro Matsumoto, Chief Designer of Ruby](http://www.linuxtopia.org/online_books/programming_books/ruby_tutorial/foreword.html)</div>

The main setback in using these languages is actual processing time. They are much slower than PHP, C#, JavaScript, etc. on all the benchmarks I looked at. However, for a simple portfolio website with caching enabled, this really makes no difference.

What tipped me towards using Python/Django was Python's popularity in many other disciplines, especially data science. Learning a language that I could use to dabble in machine learning is a huge plus! Python is also widely used in system administration and you'll find it pre-installed on most Linux distributions. This is a factor for me because I manage a couple of virtual private servers (which I recommend *so much* over shared hosting). 

**My Pick** : Python and Django

## Choosing a Server Stack

Once I chose a language and framework to use on the back-end, it was time to figure out my server configuration. 

Some devs might think it's a little early for that, because Django comes with its own development server built-in, but here's my reasoning: if I know how my server will be configured, I can create a development environment that more closely matches it, which will reduce surprises down the line. 

### Servers

For servers, I could use [Nginx](https://www.nginx.com/resources/wiki/) or [Apache](https://httpd.apache.org/) for my web server and [Gunicorn](http://gunicorn.org/), [CherryPy](http://cherrypy.org/), [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/) or [mod_wsgi](https://modwsgi.readthedocs.io/en/develop/) for my application server.

> **Web Server vs. Application Server**
>
> A web server takes requests, serves out *static* resources like images, and passes requests for *dynamic* resources to an application server (this is known as "reverse proxying").
>
>An application server receives requests from the web server, executes files to generate a response, and passes the response back to the web server, which then passes it to the client.

I've had some experience with Apache configuring WordPress installations and other PHP-based websites. I've also configured a simple static site with HTTPS using Nginx. I liked the organization of Nginx's server blocks. I also liked the lack of .htaccess files with Nginx. So, I decided to proceed with Nginx to try to expand my knowledge of that server.

I ended up choosing Gunicorn for my app server because it was simple to install. It performs admirably, although I've seen benchmarks where CherryPy and uWSGI are both much faster. I would perhaps reconsider my choice if the project was expecting more traffic.

**My Pick**: Nginx and Gunicorn

### Databases

*To SQL or NoSQL?* That is the question. 

When it was time for me to choose a database to use, I only had experience using traditional SQL relational databases. NoSQL databases seemed interesting and really *different* from the databases I learned about in my classes. I spent two semesters learning about how important ACID compliance, normalization, and relations are, and NoSQL databases are like, "You don't really all of need those." 

While they are used in some popular stacks right now (like the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle))), a couple of things led me to wanting to stick with a traditional relational database based on my research:

1. I have experience using relational databases
2. Most of the use cases for NoSQL databases are for big data
3. NoSQL databases seem to trade-off durability for performance

I heard a lot of great things about [PostgreSQL](https://www.postgresql.org/), from its wide variety of types, including JSON and date ranges, to its ACID compliance, so I decided to give it a try.

**My Pick**: PostgreSQL

# Planning the Front-End

HTML, CSS, and JavaScript are the three components of a website's front-end. While you can use preprocessors for HTML (e.g., [Pug](https://pugjs.org/api/getting-started.html)), I wasn't aware of this until after I started developing my site, so I'm only going to discuss options for CSS and JavaScript here.

## JavaScript

The only front-end scripting language we can really use is JavaScript ([at least, right now](https://en.wikipedia.org/wiki/WebAssembly "Web Assembly will open up front-end scripting to other languages.")). But there are so many JavaScript libraries and frameworks out there, how do you choose which one to use? 

### Libraries

When you think of JavaScript libraries, it's likely that the first one that pops into your mind is jQuery. For a long time, it was *the* JavaScript library. From what I've seen, [jQuery seems to be losing popularity](https://www.javascripting.com/) as more and more alternatives pop up.

I personally didn't want to use jQuery on my website because I felt like [vanilla JavaScript](http://vanilla-js.com/) can do 90% of the things jQuery can with ease and the other 10% can be filled in with smaller libraries if you decide you need that functionality.

**My Pick**: Vanilla JavaScript

### Frameworks

I have no experience using front-end frameworks, so my portfolio website seemed like the perfect opportunity to test one out. I had my eye on [Vue.js](https://vuejs.org/), touted as lightweight and super easy to work with.

Unfortunately, going through the basics of Vue, I had a tough time figuring out how I would integrate it into a Django-powered website with pre-written HTML templates. I know there probably *is* a way, since people are saying that Django and Vue go together well, but it's not for a beginner.

That being said, I still like the look and feel that SPAs have, especially the interactivity accomplished with AJAX, so I looked for frameworks I could use with push-state AJAX and basic views for JavaScript state-management. [Barba.js](http://barbajs.org/index.html) came up and it was really easy to just drop it into my source code.

I'm definitely going to learn Vue and perhaps I'll refactor my JavaScript code once I feel comfortable enough using it. But for now, I'm more than satisfied with Barba.js.

** My Pick**: Barba.js

### Transpilers

And beyond libraries and frameworks, there are languages that can be transpiled to JavaScript. So, you can write code using a language with totally different conventions and it can be processed into JavaScript. 

> **Transpile vs. Compile**
>
>  "Compile" is used to describe source code being transformed into source code with a *lower* level of abstraction, like Java into Java Bytecode.
> "Transpile" is used to describe source code being transformed into source code with a *similar* level of abstraction, like TypeScript into JavaScript.

Why use a language and transpile it? The reasons can be something as straightforward as adding [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) conventions that most JavaScript engines don't yet support. You'd use [Babel](https://babeljs.io/) to transpile your [ES6-standard JavaScript](http://es6-features.org/#Constants) down to ES5 for browser support (which is what I did).

Or if you're more comfortable with statically typed languages (e.g., Java, C#, C++), you can add types to JavaScript using [TypeScript](https://www.typescriptlang.org/). Or perhaps you want to write your JavaScript using purely functional programming—then you would write in [Elm](http://elm-lang.org/) and transpile to JavaScript.

**My Pick**: Babel for ES6

## CSS

CSS stylesheets have a few different development options as well. 

### Frameworks and Preprocessors

You can use a preprocessor, like [LESS](http://lesscss.org/), [Stylus](http://stylus-lang.com/), and [SASS/SCSS](http://sass-lang.com/). You could use a framework like [Bootstrap](http://getbootstrap.com/), [Foundation](https://foundation.zurb.com/), or [Bulma](http://bulma.io/) if you want a good base for your styling that you can easily build upon. You could even use both a framework and preprocessor, because many of these frameworks are available in a preprocessor file format.

> **Preprocessor?**
>
> CSS preprocessors are similar to JavaScript transpilers. They take stylesheets written using a scripting language and process them into CSS. 
>
> Preprocessor scripting languages often have features that CSS doesn't currently support, like functions and nesting. Also, they may use very different syntax.

Personally, for my portfolio, I really wanted the styling to have a personal touch, so I chose to not use a framework. However, for my next project, I'm hoping to use Bulma so I can start with a good baseline, because it was a little agonizing to have to redefine a grid system for the millionth time.

I also decided to use SCSS to give me access to very powerful features, like variables, [mixins](http://sass-lang.com/guide) and functions. I hadn't used mixins and functions extensively in any websites before, so this was an opportunity to really explore their strengths (and I had some great results—but that's a blog post for another time!). 

**My Pick**: SCSS

### Methodologies

There are also a few different ways to optimize CSS when writing it, known as CSS methodologies. I had been introduced to the idea of [Atomic CSS](https://acss.io/frequently-asked-questions.html#what-is-atomic-css-) during my web development courses. It made sense to define classes as small pieces that can be combined on an HTML element. The resuability of your classes will be very high in that case.

However, another methodology was popping up a lot in my research called [BEM (Block Element Modifier)](http://getbem.com/introduction/). You may have seen BEM classes before, they are very distinctive.

````css

/* The basics. */
.block{}
.block__element{}
.block__element--modifier{}

/* Now, with some semantic content... */
.button{}
.button__icon{}
.button__text{}
.button__icon--active{}
.button__text--disabled{}

````

I really liked the specificity of BEM, so I decided to try it out to see if it was more effective than Atomic CSS.

**My Pick**: BEM

# Choosing Development Tools

There are a lot of tools out there to use in a development environment. I'll go over the major ones I had to choose between and my reasoning.

## Local Server
 
To configure a local server for development, the major tools I've seen are [Docker](https://www.docker.com/), [XAMPP](https://www.apachefriends.org/index.html), and [Vagrant](https://www.vagrantup.com/). I've used two for development (Docker and XAMPP). In terms of getting started, Docker has a steeper learning curve. With XAMPP, you click a few times and you're done. With Docker, it took me a few days of reading and tweaking to write my first docker-compose file for a development environment. 

From what I've read, Vagrant is easier to understand than Docker. On Windows, Docker and Vagrant both use virtual machines. On Linux and Mac, however, Docker has the advantage, because it uses containers instead of an entire virtual machine. A container will share resources with its host. Both Docker and Vagrant have features that make it easy to deploy websites to a live server.

Compared to XAMPP, both Vagrant and Docker offer an extra layer of separation between the development environment and your computer. XAMPP installs its software directly onto your machine. This can cause issues when the software performs differently on another machine, i.e., your remote server. With properly configured containers and virtual machines, software should perform predictably the same in the development and production environment.

Another benefit of using Docker and Vagrant is that your configuration is stored in a file (your Dockerfile or Vagrantfile), so it can be version-controlled. This means that you can track the changes you've made and, when it comes to deploy, it's super easy to figure out whatever versions you need, what ports need to be open, what user/password info is necessary, etc.

When it came down to choosing how to configure my development environment, I decided to use Docker. I did try out Vagrant, but I found that the documentation was a lot more sparse than Docker's. I also had some issues getting it to work with Hyper-V on Windows 10, but Docker worked pretty flawlessly with that setup.

**My Pick**: Docker

## Task Running

If you ever find yourself doing something over and over and over again, it's time to automate it.

When I first started learning web development, my workflow was something like this: tweak CSS in the browser inspector, copy the values over to my stylesheet, save the stylesheet, click on FileZilla, drag the file over to the server window, and refresh my browser after the upload was complete.

Yikes, right? 

Then I discovered the beauty of task runners and now I can tweak my CSS in the file, save, and the browser automatically reloads. Same with my JavaScript, HTML and any other files that I set to be "watched."

Yes, setting up a task runner requires a time investment in learning how to write the configuration. But once you do it, you're done. 

Back when I had to choose my first task runner, the two big choices were [Gulp](https://gulpjs.com/) and [Grunt](https://gruntjs.com/). I went with Grunt because it seemed *slightly* more active in terms of releases, but really, they both seemed pretty similar. I also saw [Webpack](https://webpack.js.org/) pop up in searches for task runners as a "module bundler," but I had no idea what that meant, so I decided to stick with Grunt.

I revisited Webpack when I had to decide which task runner to use for my portfolio and, this time, I had more background in JavaScript to be able to understand its purpose.

A module bundler takes JavaScript modules (i.e., files) and their dependencies (defined by [```require()```](https://nodejs.org/api/modules.html#modules_modules) or [```import```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statements) and bundles them together into a single file. However, it can *also* take care of task running with a wide variety of plugins. In fact, many of the plugins I saw available for Webpack were also available as plugins for Grunt, like PostCSS. So, I decided this was a good opportunity to test out Webpack and see what it can do!

**My Pick**: Webpack

## Package Management

Package managers make dealing with your project's dependencies really easy. You don't have to download, update or uninstall them manually—there are commands that can take care of all that for you.

Using a package manager will also result in file with a list of your dependencies, which allows you to version-control your dependency configuration. So, if you clone your project onto another computer or a server, you just have to run a command and your package manager will automatically install all of your project's dependencies.

Currently, the two main package managers for web development are [Npm](https://www.npmjs.com/) and [Yarn](https://yarnpkg.com/en/). You may have heard of [Bower](https://bower.io/), but apparently the project is now deprecated. Npm started as the default package manager for Node.js, but it's now the world's largest software registry (according to their website). As for Yarn, it's a package manager released by Facebook that's meant to be an improvement over Npm, fixing several issues that Npm has, like lack of offline package installations and license management.

I had already used Npm for previous projects, so I also went with it for my portfolio project. However, looking into Yarn, it seems like a good alternative. A cool feature that caught my eye is that you can export all the necessary licenses for project packages using a "generate disclaimer" command. 

**My Pick**: Npm

## Version Control

I wanted to have a private remote repository somewhere to store my project. I had a [GitHub](https://github.com/) student license, but I wasn't interested in paying $7/month after the license was up to keep my repository private.

I found several alternatives including [BitBucket](https://bitbucket.org/) and [GitLab](https://gitlab.com/). GitLab's features and UI really won me over, so I decided to go with them for unlimited free private repositories. 

**My Pick**: GitLab

# Next Steps

After choosing what I wanted to use for my project, it was time to actually set up my development environment. The next post in this series will go over configuring Docker, configuring Webpack, organizing SCSS files, and more.