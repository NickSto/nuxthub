---
title: My first Blog Post
description: Learning how to use @nuxt/content to create a blog
img: first-blog-post.jpg
alt: my first blog post
author:
  name: Benjamin
  bio: All about Benjamin
  image: https://galaxyproject.org/galaxy-team/Vahid.jpg
---

Welcome to my first blog post using content module

<div class="bg-blue-500 text-white p-4 mb-4">
  This is HTML inside markdown that has a class of note
</div>

<info-box>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</info-box>


## This is a heading

This is some more info

### This is a sub heading

This is some more info

### This is another sub heading

This is some more info

## This is another heading

This is some more info

# Image tests

![alt text](bwa_059.png)

![alt text](./bwa_059.png)

<img src="bwa_059.png"/>

<img src="./bwa_059.png"/>

<v-img src="/articles/bwa_059.png" alt="md image"/>
