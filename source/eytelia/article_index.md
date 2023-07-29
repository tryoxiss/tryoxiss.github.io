---
title: special:Articles Index
eleventyExcludeFromCollections: true

# pagination:
#     data: collections.eytelia_wiki
#     size: 1
#     alias: article
#     reverse: true
---

<ul>
{% for article in collections.eytelia_wiki reversed %}
<li>
    <a class="card" href="{{article.url}}">{{ article.data.title }}</a>
</li>
{% endfor %}
</ul>