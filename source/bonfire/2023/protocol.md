---
title: Distributed Instant Messaiging (DIM)
---

Distributed Instant Messaiging protocol is an open standard used for our project codename Bonfire. It is secure (Checksumed and encrypted). It is a text-based protocol built on TCP.

## Interpritation of requirement

1. The keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** MUST be interprited as specified in [RFC:2119](https://www.rfc-editor.org/rfc/rfc2119.html), and either UPPERCASE or Capitalised versions count, but lowercase does not. 

## Requests

In this we will explore a few diffrent requests, but first lets show what a request generally looks like. We will explain and break down each section as we go along. 

```yaml
GET recent_100_messages FROM @username@instance.tld WITH DIM/2023
```

### Ports

As with any protocol, we need some ports used for this to avoid conflicts. Here are the ones we use with a brief explanation!

| Port | Pourpose |
| ---- | -------- |
| `8800` | **DIM Master Network Thread and Priority Requests**. This handles encryption keys, session management, and any messages that need to get through immeditely like bans. |
| `8801` | **DIM Text Message Data Stream**. Only text data is loaded through this port, and it is often used for messages, but can be other things too such as role info, group descriptions, etc. | 
| `8802` | **DIM Media Loader Data Stram**. This handles loading media attachments, such as images, audio files, etc. | 
| `8803` | **DIM VoIP Audio Stream**. This handles loading any LIVE audio, such as for calls. | 
| `8804` | **DIM Live Video Stream**. This handles loading any LIVE video, such as a webcam or screenshare. | 
| `880X` | **Reserved** for any future uses we may have. This DOES include ports `8806` and `8809`. The next avalible port is `8810`. |

### Specific Types

```yaml
CONNECT 192.168.0.1 DIM/2023

priority: low
allow_encryption: [AES, RSA]
```