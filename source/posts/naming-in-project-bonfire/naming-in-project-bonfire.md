---
title: Naming in project bonfire
---

So, for project bonfire we need to do a lot of design work. And a large part of said design work is what we allow in names. 

So in this post, I am going to go through all the naming design decisions we have made so far and why.

## Usernames

Usernames are how you are identified on a unique level, they are your `@`. Display names are how you are identified on a personal level, they can contain any characters with the excpeption of unicode control bytes.

Usernames are case insensative, and forced lowercase. You can have `@forest`, but not `@Forest` or `@forEst`. 

Usernames my only have alphanumerics (`a-z`), numbers (`0-9`), and the select special characters `.` and `_`. This is very standard for usernames. 

Usernames, display names, and account names must all also adhere to your instances rules. 
    
Some usernames are reserved for functions, they include: 
- `@everyone` (`@*` also works)
- `@someone`
- `@here`
- `@online`
- `@us`, `@mods`, `@moderators`, `@admin`, `@support`, `@contact`, and any other names reserved by your instance to easily distingush moderators and official accounts.

One account can have many profils, each with thier own username, display name, bio, profile picture, and, if desired, group and friends lists. Generally groups and friends these are inherited from the account, though.

Usernames are unique to each profile, and are `@[username]@[instance.tld]`. This format is still a work in progress, though. 

This works great, but one account can have many profiles. This creates an opportunity for abuse, where one account can create may profiles just to take OG usernames, such as `@forest`, `@dog`, etc. 

This issue is partially midigated by the federation aspect. There can be an `@forest@someinstance.social` and an `@forest@example.net` at the same time. 

This can be further midigated by allow you to prefix it with an account name (what you would use to sign in, and is displayed as a host to your profiles). Such as `@forest@nature.system@example.net`. If you include an account name, you must also include the instance. 

That's great and all, but elegance in design is a primary design goal, after all, so this just this won't cut it. 

You can also omit uneeded sections, if `@forest` identifies a unique user in the current context, even if multiple `@forest`'s exist in your federation. 

For example, your group or DM has only one `@forest`, then you can omit the instance!

