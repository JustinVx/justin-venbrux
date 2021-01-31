---
title: New website
date: 2021-01-23T16:32:34.487Z
type: writing
---
Welcome to my new website!🤯 I decided to rebuild and redesign for five reasons:


1. While I still liked the design I made in 2019, it was created using mostly plain HTML and CSS on top of a default [Bootstrap](https://getbootstrap.com) template. As a result, some pages were slow and the code was messy — consisting of a lot of .html files and one long CSS stylesheet. I was looking to get organized.
2. I wanted my website to include a place to share my ideas and thoughts and what I have learned. Just like this post.
3. My older website did not use HTTPS, which was starting to get problematic.
4. Because I was using basic HTML and CSS, the older website was harder to update. I missed a way of quickly editing the content.
5. I thought this would be a good way to improve my skills in web development. Plus, it is always fun to learn a new skill.

Since I want to quickly update the website and add a new post without deploying a new version, I decided I needed a CMS. At first, I thought about [WordPress](https://wordpress.org), because it is the biggest one out there and supported by almost every hosting provider. However, while trying it out, I also found it a bit much. There are so many options! I could not find a theme fitting my taste in the enormous ocean of WordPress themes out there. It also felt a bit bloated for the simple website that I wanted to make. It lacked the *less is more* I was looking for. When I tried to create a template, I made it display what I wanted, but I wasn't always sure why it worked. Again, it got messy.

Then I found [Ghost CMS](https://ghost.org). It seemed to be simpler, faster, and more focused compared to WordPress. On top of that, I also found a theme that I liked: the [Dawn theme](https://github.com/tryghost/dawn). I decided to buy the template (apparently now it's free 🤷) and to start from there. My idea was to quickly get a website up and running and then slowly change the template to match my taste. Unfortunately deploying this Ghost website wasn't as easy as I had expected. I sought out a hosting provider that advertised with supporting Ghost and Node.js, but when I tried to get it up and running it didn't support the newer versions of Ghost. I ended up buying a cloud server (droplet) on Digital Ocean to get it to work. It took me two days, but in the end, I managed to make it work!

Then I noticed I didn't really like this website. The structure and design of the website did not match the way I wanted them to be. I wanted control.

While browsing the interwebs again — looking for a new option — I ran into [Gatsby](https://www.gatsbyjs.com). And Gatsby seemed wonderful. I started reading the beginner tutorial and got inspired looking at the starters. I decided to dive in and learn. This was also an opportunity to learn the basics of React, something I already wanted to do.

I learned [how React uses components](https://reactjs.org/docs/components-and-props.html), just like in [Figma](https://www.figma.com/), and how I can use [the CSS-in-JS framework Emotion](https://emotion.sh/docs/introduction). I learned about using [GraphQL](https://graphql.org) queries and [transforming markdown files into actual webpages](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/?=gatsby%20transformer). I got my footnotes to work (an issue I spent hours on back at Ghost). I learned about [using the gatsby-image plugin to optimize images](https://www.gatsbyjs.com/docs/working-with-images/). I learned about [CSS grids](https://www.youtube.com/watch?v=EFafSYg-PkI) and [flexbox](https://www.youtube.com/watch?v=FTlczfR82mQ). I learned how to upgrade my markdown with [MDX](https://mdxjs.com), so I can also include components into my markdown files. I learned about [optimizing for accessibility](https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/), about [progressive web apps](https://www.gatsbyjs.com/docs/progressive-web-app/#reach-skip-nav) and about [running lighthouse audits](https://www.gatsbyjs.com/docs/how-to/performance/audit-with-lighthouse/#reach-skip-nav).

It's safe to say that I learned a lot.

For the design of the website, I decided to take an iterative approach. I wanted the have a clear and concise design and decided that I should start with a simple design and clear structure and then slowly refine the design. So that's what I'm doing.

I've started the first refinement by improving the project cards in the work section. Other parts will follow.







