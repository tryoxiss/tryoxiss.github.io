---
title: Markdown
---

We reccommend all front ends support markdown. The specific markdown you allow may vary, but your markdown parser should be able to handle all of the following. 

```markdown
# Inline
*italics* 
_italics_ 
**bold**
__underline__

# Heading
## Levels
### One
#### Through 
##### Heading
##### Level 
###### six

#tags
:emojis: 
\*escape sequences\*
[inline links](LINK)
![images](source)

> Blockquotes

`inline code blocks`
``inline code blocks``
(multi line code blocks, with language support)
```

Additionallyt, we reccommend it supports the following: 

```markdown
---
frontmater: keys
---

[id links][id]

[id]: URL
```

```markdown
> [!type] callouts
> with cudstom titles and full markdown supported inside. 

horisontal rules
---
```

and the abbility to add custom stuff for

```
@user@instance.tld chips 
#channel@groupid@instance.tld chips
```

For messages, we reccommend you only allow inline, links, images, code, tags, and emojis, but other channel types will likely want more advanced markdown such as [wiki channels](../wiki-channels/)