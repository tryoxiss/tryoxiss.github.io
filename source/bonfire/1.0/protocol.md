---
title: DIM 1.0
---

MAX PACKET LENGTH: `u16::MAX` = 65,535 / 63.99 KiB

If you need more data, send it over in multiple packets. This soft limits message length as `50,000` characters, leaving `15,535` characters left for header flags and such.

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

- `encoding` (`StrictString`)
- `content_format` (`StrictString`). Default (and reccommended supported values) are: 
    - `plaintext`
    - `markdown`
    - `markdown_extended`
    - `wikitext`
    - `html`
    - `xml`
    - `yaml` (`yml` is NOT VALID)


## Response Codes

`100` Information
`101` Switching_Protocols
`102` Processing
`103` Request_Timeout

`200` Okay
`201` Created
`202` Accepted
`204` No_Content
`205` Reset_Content
`206` Partial_Content

`300` Security_Error
`301` Ssl_Handshake_Failed
`302` Ssl_Cirtificate_Expired
`303` Better_Encryption_Required (More details sent in the body)

`400` Client_Error
`401` Bad_Request
`402` Unauthorised
`403` Forbidden
`404` Not_Found
`405` Method_Not_Allowed
`406` Proxy_Authenication_Required
`407` Conflict
`410` Gone
`411` Payload_Too_Large
`412` Uri_Too_Long
`413` Too_Early
`414` Upgrade_Reccommended
`415` Upgrade_Required
`416` Too_Many_Requests
`417` Wrong_Instance
`418` Token_Required
`419` Token_Invalid

`500` Internal_Server_Error
`501` Not_Implemented
`502` Bad_Gateway
`503` Service_Unavalible
`504` Gateway_Timeout
`505` Dim_Edition_Not_Supported
`506` Insufficent_Storage
`507` Loop_Detected
`508` Netword_Authentication_Required
`509` Bandwidth_Limit_Exeeded
`510` Site_Overloaded
`511` Request_Timeout 

