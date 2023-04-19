---
title: OpenChatProtocol Extensions
---

OpenChatProtocol is designed to last, and that means being extensible. All packets contain a data-header that is designed for extensions. 

The data header includes the core edition, the type in the standard format (`module:item`), and the modules version explictly stringed. Any paramaters off the standard list (see "standard paramaters list" later in this document), MUST be prefixed with the extension. For example: `messages:special_property: value`. 

```yaml
core: 2021
type: messages:message
version: "1.0.0"

messages:special_property: value
```

## Standard Property List

| Property | Required  | Pourpose |
| -------- | --------- | -------- |
| `core`   | Yes       | To define which version of the core sped you are using |
| `type`   | Yes       | To define what type of packet you are sending, and what you intend to operate on. | 
| `version` | Yes      | To define what version of the module you are using is | 
| `operation` | No (default: GET) | Defines what the packet intends to do. |
| `guid`   | Sometimes | Stores an objects GUID. |
| `language` | No      | Defines the language of the conten you are sending. This does not affect its keys. | 
| `time`   | No        | Defines when an operation happned. This should be a time string in the ISO format of `DD-MM-YYYY HH:MM:SS`. ms are not allowed, and the year can expand if needed (e.g., to 12020). |
| `content_type` | if non-text | Defines the data type of the content is not text data. |
| `content` | Sometimes | Defines the content of a message. This could be a ban message, reaction, text message, or voice packet. |
| `target` | Sometimes  | GUID of the object you want to target with this operation. |
| `author` | Defines WHO created the content |
| 

### Content Type Values

Common/Wikipedia: 

#### binary/image

| Extension      | Type Code           |
| -------------- | ------------------- |
| .png           | `binary/image/png`  |
| .qoi           | `binary/image/qoi`  |
| .jpeg / .jpg   | `binary/image/jpeg` |
| .bmp           | `binary/image/bmp`  |
| .gif           | `binary/image/gif`  |
| .tiff / .tif   | `binary/image/tiff` |

#### binary/video 

| Extension      | Type Code           |
| -------------- | ------------------- |
| .gifv          | `binary/video/gifv` |
| .qif           | `binary/video/qif`  |
| .ogg           | `binary/video/ogg`  | 
| .mp4           | `binary/video/mp4`  | 
| .mp5           | `binary/video/mp5`  | 
| .mov           | `binary/video/mov`  |
| .avi           | `binary/video/avi`  | 
| .webm          | `binary/video/webm` |
| .mkv           | `binary/video/mkv`  |
| .mpeg          | `binary/video/mpeg` |

#### binary/audio

Often used for sending voice data in calls.

| Extension      | Type Code           |
| -------------- | ------------------- |
| .mp1           | `binary/audio/mp1`  |
| .mp2           | `binary/audio/mp2`  |
| .mp3           | `binary/audio/mp3`  |

#### binary/archive 

| Extension      | Type Code           |
| -------------- | ------------------- |
| .zip           | `binary/archive/zip` |
| .tar           | `binary/archive/tar` |
| .tar.xz        | `binary/archive/tar.xz` |
| .tar.gz        | `binary/archive/tar.gz` | 
| .xz            | `binary/archive/xz` |
| .gz            | `binary/archive/gz` |
| .zipx          | `binary/archive/zipx` | 
| .iso           | `binary/archive/iso` | 
| .rar           | `binary/archive/rar` | 
| .bak           | `text/archive/bak`  |
| .a             | `text/archive/generic` |

#### text/image 

| Extension      | Type Code           |
| -------------- | ------------------- |
| .svg           | `text/image/svg`    |

#### text/rich

Likely going to be split up further.

| Extension      | Type Code           |
| -------------- | ------------------- |
| .ods           | `text/rich/ods`     |
| .odt           | `text/rich/odt`     |
| .doc           | `text/rich/ms-doc`  | 
| .docx          | `text/rich/ms-docx` | 
| .ppt           | `text/rich/ms-ppt`  |

#### text/plain

| Extension      | Type Code           |
| -------------- | ------------------- |
| .txt           | `text/plain/generic` |
| .md            | `text/plain/markdown` |
| .yaml          | `text/plain/yaml`   |
| .json          | `text/plain/json`   |
| .csv           | `text/plain/csv`    |


(Skipped binary/executeable, text/code)