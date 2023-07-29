---
title: Posts Index
eleventyExcludeFromCollections: true
layout: "timeline.njk"

pagination:
    data: collections.posts
    size: 1
    alias: posts
    reverse: true
---


<!-- { for post in collections.posts reversed } -->

<div class="timeline">
<div class="outer">
{% for post in pagination.items reversed %}
<a class="card" href="{{post.url}}">
    <h2 class="title">{{ post.data.title }}</h2>
    <p class="subtitle">{{ post.date | asPostDate }}</p>
    <p>{{ post.data.description }}</p>
</a>
{% endfor %}
</div>
</div>