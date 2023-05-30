---
title: special:Articles Index
eleventyExcludeFromCollections: true

pagination:
    data: collections.eytelia_wiki
    size: 1
    alias: article
    reverse: true
---

<!-- { for post in collections.posts reversed } -->

<ul>
{% for article in pagination.items reversed %}
<li>
    <a class="card" href="{{article.url}}">{{ article.data.title }}</a>
</li>
{% endfor %}
</ul>