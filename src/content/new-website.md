---
title: New website
date: 2021-01-23T16:32:34.487Z
type: writing
---
Welcome to my new website! I decided to rebuild and redesign for five reasons:

1. While I still liked the design I made in 2019, it was created using mostly plain HTML and CSS on top of a default [Bootstrap](https://getbootstrap.com) template. As a result some pages were slow and the code was messy — basically consisting of a lot of .html files and one long css stylesheet. I was looking to get organised.
2. I wanted my website to also include a place to share the ideas and thoughts that I have and the things that I've learned. Just like this post.
3. My older website didn't use HTTPS, which was starting to get problematic.
4. Because I was using basic HTML and CSS, the older website was harder to update. I missed a way to quickly edit the content of the website.
5. I thought this would be a good way to improve my skills in web development. Plus, it's always fun to learn a new skill.

### Trying out WordPress

Since I want to be able to quickly update the website and add a new post without having to deploy a new version, I decided I needed a CMS. At first I thought about [WordPress](https://wordpress.org), because it is the biggest one out there and supported by almost every hosting provider. However, while trying it out, I also found it a bit much. So many options. I could not find a theme fitting my taste in [the enormous ocean of Wordpress themes out there](https://wordpress.org/themes/). It also felt a bit bloated for the simple website that I wanted to make. It lacked the ‘less is more’ I was looking for. When I tried to create my own template, I was able to display what I wanted, but I wasn't always sure why it worked. Again, it got messy.

### Trying out Ghost CMS

Then I found [Ghost CMS](https://ghost.org). It seemed to be simpeler, faster and more focused compared to WordPress. On top of that I also found a theme that I really liked: the [Dawn theme](https://github.com/tryghost/dawn). I decided to buy the template (apparently now it's free 🤷) and to start from there . This way I could quickly get a website up and running and would slowly learn to understand it and to change the template to match my taste. Unfortunately deploying this Ghost website wasn't as easy as I had expected. I sought out a hosting provider that advertised with supporting Ghost and Node.js, but when I tried to get it up and running it apparently didn't support the newer versions of Ghost. I ended up buying a cloud server (droplet) on D[igital Ocean ](https://www.digitalocean.com)to get it to work. I took me two days, but in the end I managed to get it up and running!

Then I noticed I didn't really like this website. The structure and design of the website did not match the way I wanted them to be. I wanted control.

### Learning Gatsby

While browsing the interwebs again — looking for a new option — I ran into [Gatsby](https://www.gatsbyjs.com). And Gatsby seemed really awesome. I started reading the beginner tutorial and got inspired looking at the starters. I decided to dive in and learn. This was also an opportunity to learn the basics of React, something I already wanted to do.

I learned about [how React uses components](https://reactjs.org/docs/components-and-props.html), just like in [Figma](https://www.figma.com/), and how I can use [the CSS-in-JS framework Emotion](https://emotion.sh/docs/introduction). I learned about using [GraphQL](https://graphql.org) queries and [transforming markdown files into actual webpages](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/?=gatsby%20transformer). I got my footnotes to work (an issue I spent hours on back at Ghost). I learned about [using the gatsby-image plugin to optimize images](https://www.gatsbyjs.com/docs/working-with-images/). I learned about [css grids](https://www.youtube.com/watch?v=EFafSYg-PkI) and [flexbox](https://www.youtube.com/watch?v=FTlczfR82mQ). I learned how to upgrade my markdown with [mdx](https://mdxjs.com), so I can also include components into my markdown files. I learned about [optimizing for accessibility](https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/), about [progressive web apps](https://www.gatsbyjs.com/docs/progressive-web-app/#reach-skip-nav) and about [running lighthouse audits](https://www.gatsbyjs.com/docs/how-to/performance/audit-with-lighthouse/#reach-skip-nav).

It's safe to say that I learned a lot.

### Plans for the future

For the design of the website I decided to take an iterative approach. I wanted the have a clear and concise design and decided that I should start with a simple design and clear structure and then slowly refine the design. So that's what I'm doing.

I've started the first refinement by improving the project cards in the work section. Other parts will follow. :)
