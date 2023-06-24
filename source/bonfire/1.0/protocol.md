---
title: DIM 1.0
---

```
<Version> SP <Request> LF
<Header Flags> LF
"---"
<Content>
"---"
```

```
<Version> <Request>
---
Message. Anything except the control sequences of 3 hyphens (end of transmission), and 3 dots (more transmissions in this packet, for network efficentcy), is allowed! This block ends with either 3 dots or 3 hyphens
...
```

```
request = <Action> + SP + <DIM URI Locator>
header flag = <Key> "=" <Value> ";" (key=value;key2=value2;)
```

```
dim/1.0 GET dim:channel:group_id@instance.domain.tld/channel
encryption="aes"; do_not_track=true;
---
Message. Anything except the control sequences of 3 hyphens (deliminator), and 3 dots (more transmissions in this packet, for network efficentcy), is allowed! This block ends with either 3 dots or 3 hyphens
...
dim/1.0 GET dim:channel:group_id@instance.domain.tld/rules
---
Message. Anything except the control sequences of 3 hyphens (end of transmission), and 3 dots (more transmissions in this packet, for network efficentcy), is allowed! This block ends with either 3 dots or 3 hyphens
...
```

`---` = `&hr;`
`...` = `&cont;`
`&`      = `&amp;`

## Header Flags

Bool header flags are either `t` or `f`, for true or false. 

`is_binary` (`Bool`)