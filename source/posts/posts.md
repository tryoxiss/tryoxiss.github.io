---
title: Posts Index
eleventyExcludeFromCollections: true
--- 

{% for posts in collections.posts reversed %}

<!-- <div class="code-toolbar"> -->
<a class="postcard" href="{{posts.url}}"> 
    <h2>{{ posts.data.title }}</h2>
    <p>(IDK how to have a preview yet)</p>
</a>
<!-- </div> -->

{% endfor %}