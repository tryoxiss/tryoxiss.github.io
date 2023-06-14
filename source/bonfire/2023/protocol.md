---
title: Distributed Instant Messaging (DIM) Protocol
---

Distributed Instant Messaging protocol is an open standard used for our project codename Bonfire. It is secure (Checksumed and encrypted). It is a text-based protocol built on TCP.

## Definitions

1. The keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** MUST be interprited as specified in [RFC:2119](https://www.rfc-editor.org/rfc/rfc2119.html), and either UPPERCASE or Capitalised versions count, but lowercase does not. 
2. **SP** means a unicode space character.

## Requests

Every packet MUST start with a data header containing the version and the operation you wish to complete. 

```yaml
<Operation | Code_Number> <Type | Code_String_Id> "FROM" <Location> "WITH" <Version> [<And> <Encryption Algorithum>]
```

### Operation

The operation is an `UPPERCASE` identifier used to idefntify what the packet intends to do. These are equivlent to HTTP methods. 

The following operations are valid
- `CONNECT` establishes a connection.
- `CREATE` creates an object. 
- `NOTIFY` sends an object that does not need to be stored. 
- `EDIT` edits an existing object.
- `REMOVE` removes an object from public view, or removes your contribution. 
- `DELETE` deletes the object.
- `DESTROY` deletes an object and writes over it immeditely. Used for confidental data mostly (Such as accidently sending a password).
- `GET` gets content. 

#### Connect

Connect messages are sent to the server at port `8800`. 

```yaml
version: dim/2023
operation: CONNECT
target: [DIM Adress | GUID | IPv6 Address (IPv4 NOT ACCEPTED!)]
encryption: AES
priority: high
```

#### Create

sent to port 
```yaml
version: dim/2023
operation: CREATE
target: channel_guid
content: |
"""
This is my message content
"""
```

### Type

The type specifies the type you want to get. This can be modular and is extensible. The server SHOULD simply forward any requests where the destination when it does not understand or recignise the type. If the client does not undserstand it, it SHOULD return a `501 Not_Implemented` error.

Default types are: 

- `Messages` = Text Messages
- `Media` = Generic media type for any media. Also known as uploaded files. 
  - `Media/Image` = Images only
  - `Media/Video` = Videos only
  - `Media/Document` = text documents only. 
  - You can further spcify bu adding an extension, for example `Media/Image/Png`.
- `Stream` = Live streams of video or audio. 
  - Video uses `mpeg` since you can simply concatinate them without issue. 

### Location

Location is either a vector (unsized list) of IP addresses or DIM uri. IP Addresses will be routed by your client and bypass the server, but DIM addresses will go through the server. Optionally, you can set a flag for the server to drop packets routed with a DIM uri, or sent an IP packet to the server for it to store it. 

A dim uri is defined in the [URI Scheme](#uri-scheme) section.

### Version

### Encryption

The following rules also apply: 

## URI Scheme

`"dim:" [type] ":" {identifier} "/" [path] ["?" query (k1=v1;k2=v2;)] ["#" fragment]`

The type is a clear category. Generally `user` or `group`. A user represents one user, while a group represents an entire group. You use the path to specify where in the group you want the content delivered. 

The identifier is a GUID or a graphical ID. Graphical IDs are forced lowercase (`a-z`), and allow the special characters `_` and `.`. It is minimum 5 characters and maximum 32 characters. They must be completely unique for thier category. (You cannot have two "@username@domain.tld" but you can have "@username@domain.tld" (user) and "group@domain.tld" (group)). 

NTS: DEFINE GRAHICAL ID'S MORE STRICTLYYY!!!!

The path represents well, the path. This is generally comprised of local graphical ID's. A groups path behaves the same as a directory strucutre (and is actually generally how its stored). It is generally `/category/channel/room_or_thread/`

## Content

To the extent reasonable, we try and use the terms `parent`, `content`, and `target` in messages.

## Ports

As with any protocol, we need some ports used for this to avoid conflicts. Here are the ones we use with a brief explanation!

| Port | Purpose |
| ---- | ------- |
| `8800` | **DIM Master Network Thread and Priority Requests**. This handles encryption keys, session management, and any messages that need to get through immeditely like bans. |
| `8801` | **DIM Text Message Data Stream**. Only text data is loaded through this port, and it is often used for messages, but can be other things too such as role info, group descriptions, etc. | 
| `8802` | **DIM Media Loader Data Stream**. This handles loading media attachments, such as images, audio files, etc. | 
| `8803` | **DIM VoIP Audio Stream**. This handles loading any LIVE audio, such as for calls. | 
| `8804` | **DIM Live Video Stream**. This handles loading any LIVE video, such as a webcam or screen-share. | 
| `880X` | **Reserved** for any future uses we may have. This DOES include ports `8806` and `8809`. The next avalible port is `8810`. |

## Responses 

`100 Information`
`101 Switching_Protocols`
`102 Processing`
`103 Request_Timeout`

`200 Okay`
`201 Created`
`202 Accepted`
`204 No_Content`
`205 Reset_Content`
`206 Partial_Content`

`300 Security_Error`
`301 Ssl_Handshake_Failed`
`302 Ssl_Cirtificate_Expired`
`303 Better_Encryption_Required` (More details sent in the body)

`400 Client_Error`
`401 Bad_Request`
`402 Unauthorised`
`403 Forbidden`
`404 Not_Found`
`405 Method_Not_Allowed`
`406 Proxy_Authenication_Required`
`407 Conflict`
`410 Gone`
`411 Payload_Too_Large`
`412 Uri_Too_Long`
`413 Too_Early`
`414 Upgrade_Reccommended`
`415 Upgrade_Required`
`416 Too_Many_Requests`
`417 Wrong_Instance`
`418 Token_Required`
`419 Token_Invalid`

`500 Internal_Server_Error`
`501 Not_Implemented`
`502 Bad_Gateway`
`503 Service_Unavalible`
`504 Gateway_Timeout`
`505 Dim_Edition_Not_Supported`
`506 Insufficent_Storage`
`507 Loop_Detected`
`508 Netword_Authentication_Required`
`509 Bandwidth_Limit_Exeeded`
`510 Site_Overloaded`
`511 Request_Timeout`
