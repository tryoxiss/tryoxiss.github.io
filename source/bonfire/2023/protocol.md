---
title: Distributed Instant Messaging (DIM)
---

Distributed Instant Messaging protocol is an open standard used for our project codename Bonfire. It is secure (Checksumed and encrypted). It is a text-based protocol built on TCP.

## Definitions

1. The keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** MUST be interprited as specified in [RFC:2119](https://www.rfc-editor.org/rfc/rfc2119.html), and either UPPERCASE or Capitalised versions count, but lowercase does not. 
2. **SP** means a unicode space character.

## Requests

Every packet MUST start with a data header containing the version and the operation you wish to complete. 

```yaml
version: dim/2023
operation: CONNECT
```

The following actions are valid
- `CONNECT` establishes a connection.
- `CREATE` creates an object. 
- `NOTIFY` sends an object that does not need to be stored. 
- `EDIT` edits an existing object.
- `REMOVE` removes an object from public view, or removes your contribution. 
- `DELETE` deletes the object.
- `DESTROY` deletes an object and writes over it immeditely. 
- `GET` gets content. 

The following rules also apply: 

- The action is UPPERCASE. 

To the extent reasonable, we try and use the terms `parent`, `content`, and `target` in messages.

### Ports

As with any protocol, we need some ports used for this to avoid conflicts. Here are the ones we use with a brief explanation!

| Port | Purpose |
| ---- | ------- |
| `8800` | **DIM Master Network Thread and Priority Requests**. This handles encryption keys, session management, and any messages that need to get through immeditely like bans. |
| `8801` | **DIM Text Message Data Stream**. Only text data is loaded through this port, and it is often used for messages, but can be other things too such as role info, group descriptions, etc. | 
| `8802` | **DIM Media Loader Data Stream**. This handles loading media attachments, such as images, audio files, etc. | 
| `8803` | **DIM VoIP Audio Stream**. This handles loading any LIVE audio, such as for calls. | 
| `8804` | **DIM Live Video Stream**. This handles loading any LIVE video, such as a webcam or screen-share. | 
| `880X` | **Reserved** for any future uses we may have. This DOES include ports `8806` and `8809`. The next avalible port is `8810`. |

### Connect

Connect messages are sent to the server at port `8800`. 

```yaml
version: dim/2023
operation: CONNECT
target: [DIM Adress | GUID | IPv6 Address (IPv4 NOT ACCEPTED!)]
encryption: AES
priority: high
```

### Create

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
