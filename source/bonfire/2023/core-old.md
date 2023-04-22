---
title: Bonfire Core
---

Bonfire core modules aim at providing the bare essentials so that pieces can be swapped in and out as desired. This also allows us to update otherwise fundemental parts of the specification with minimal disruption. 


Bonfire is a working (and temporary) name for a standard to allow for community-divided federated instant messaging. In laymans terms, its federated discord. 

<blockquote class="callout callout--info">
    <!-- <svg src="/_shared-content/lucide/alert-triangle.svg" color="red"></svg> -->
    <div class="callout__header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        <p>This specification is a draft!</p>
    </div>
    <p>it is not finished and is due for many, many revisions down the road. </p>
</blockquote>

<blockquote class="callout callout--warning">
    <!-- <svg src="/_shared-content/lucide/alert-triangle.svg" color="red"></svg> -->
    <div class="callout__header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v6h6"></path><path d="m3 12.5 5 5"></path><path d="m8 12.5-5 5"></path></svg>
        <p>Dependy Issue</p>
    </div>
    <p>This specification seems to refrence or cite 1 or more speicfications that appear to be missing. These issues must be resolved before 1.0. A list can be found below: </p>
    <ul style="margin-top: -1rem;">
        <li>Clean ID System</li>
    </ul>
</blockquote>

## Definitions

Let the keywords that follow be case insensitive unless otherwise specified. 

- Let the keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** (and lowercase equivalents) be defined as specified in [RFC:2119](https://www.rfc-editor.org/rfc/rfc2119)
- Let `incorrect` mean MUST NOT; as in, incorrect behaviour violates the standard.
- Let `i<int>` represent 2^int-1. Some examples (and the important ones) are as follows;
    - `i6` equals `63`
    - `i8` equals `255`
    - `i16` equals `65,535`
    - `i32` equals `2,147,483,647`
    - `i64` equals approximately `1.844674407×10¹⁹`
- Let `YAML`, or `Object` represent one YAML file (or "file" part of a stream), and any nested objects. Let this not exceed the maximum status characters of an i16. I validated my YAML with [This YAML validator](https://yamlchecker.com/)
- Let `packet` represent one YAML Object sent between a client-server, or server-server relationship. 
- Let `snake_case` and `snake case` mean the naming scheme where multiple words are written in all lowercase and are seperated with underscores.
- Let `GUID` and `UUID` represent a [Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier). 
- Let `snowflake` represent one GUID. 
- Let the character sets `reserved`, `escaped`, `delims`, `unwise`, `lowalpha`, `upalpha`, `alpha`, `digit`, `alphanum`, `mark` and `unreserved` are to be defined as in [RFC:2396](https://www.ietf.org/rfc/rfc2396.txt). This is only when these keywords are in reference to a **character set**.
- Let `inalpha` represent the character set including `upalpha` and `lowalpha`, where no distinction is made between uppercase and lowercase. ("A" is the same as "a").
- Let the character set `safe` be the culmination of `inalpha` and `digit` and the characters `_` and `-`. 
- Let **Edition** mean the anual revision to the specification.

## Design Philosophy 

*Some of the following definitions are from [ariadne.space's post on ActivityPub's design falings](https://ariadne.space/2019/01/07/activitypub-the-worse-is-better-approach-to-federated-social-networking/).

- **Simplicity**: The standard and protocol should be simple to implement.
- **Cleanliness**: The standard must be clean and easily usable from a end-user perspective. It is more important for it to be clean and simple for end-users than the backend implementation. 
- **Correctness**: All packets and URI's must be verifiably correct or incorrect. It is considered incorrect if it is ever unclear.
- **Safety**: The standard and protocol is designed in a way that is safe, any unsafe implementations are considered incorrect. 
- **Completeness**: The standard and protocol must cover all expected situations, including future reivions.
- **Privacy**: All content should be encrypted and sent through secure channels. It is considered incorrect to send unencrypted data with the exception of pre-written public HTML pages (which are only a should not). 
- **Prevent Consolidation**: We don't want this to end up like email, where you *can* self host and join a smaller provider, but good luck with all the limitations in place.

Other, smaller goals are to make it extensible so at no point will there ever be breaking changes (No "bonfire 2.0"). While we cannot guarantee this, a finished 1.0 spec should be backwards compatible for at least the next 30 years, while still being able to add support for new features. 

## Protocol

This section defines the way bonfire protocol communicates.

### Ports and process

The uri sceheme uses the ports `:9870` -- `:9879`. 

- Port `:9870` is responseable for coordinating session-level things such as encryption, and automated content delivery such as "there is a new message in this channel", but contains no information about the message itself. 
- Port `:9871` through `:9878` are reserved for sending text messages in multiple channels at a time, where a single port cannot recevie enough data simulataniously. 
- Port `:9879` is reserved for voice and video communications. 

Establishing communications, using (our current name: OpenChatProtocol) and contuning communications, follows the following steps in order.

1. Complete TLS Handshake
    - **CLIENT:** I would like an encerypted channel. Here are my TLS/SSL versions
    - **SERVER:** Thanks for the request, I would like to use this version of TLS, now heres my certificate with my public key.
    - **CLIENT:** Verifies certificate, extracts public key, and encrypts a new "pre-master key"
    - **SERVER:** Server decrypts pre-master key
    - **BOTH:** Computes a shared secret key, called a "shared secret"
    - **CLIENT:** Sends verification message that basically says "Hey this is encrypted with our shared secret, decrypt it and let me know if its correct!"
    - **CLIENT:** Sends verification message that basically says "Hey this is encrypted with our shared secret, decrypt it and let me know if its correct!"
    - **BOTH:** Now use shared secret to encrypt communications for the remainder of the session.
2. establish edition
    - Send a CSV document with the versions you are willing to use. See Edition Agreement in Objects for details
    - Server confirms they are able to use one of your versions, and says which ones they are able to use.
    - Now the client uses whatever version they want that the server can use.
3. Main Loop
    - Server/Peer sends desired data
    - Send back data
4. Close Channel

### URI Scheme

The `bonfire://` URI scheme is motivated by the desire to have a clean inter-instance and inter-client way to denote various locations. This does not need to denote actions as those are sent in **packets** instead. However, they can include links *to* actions like joining a hub or being an invite. 

As a general rule, it follows the sceme `bonfire://guid` scheme. 

Examples: 

```plaintext
View a users profile: 
bonfire://@username@instance.tld  -- Can change if they change thier username
bonfire://d1cp:e0fg:ms56:wf2a:ygkd:fveb:82  - Cannot change

View a channel: 
bonfire://d1cp:e0fg:ms56:wf2a:ygkd:fveb:82

View a specific message: 
bonfire://d1cp:e0fg:ms56:wf2a:ygkd:fveb:82
```

### Response Codes

Every response code has a 3-digit number (based off [https response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)), and a cleaner name. 

#### Information Responses 

information:information (100) - allows for returning of multiple status codes when appropriate. 
information:returning_list (101)
information:switching_protocols (102)
information:processing (103)

#### Success Responses

success:success (200) - Success with no further information given. We advise you use a more descritive response code where possible.
success:created (201)  - A resource was created in response. This can be a message, reaction, etc.
success:accepted (202) - The request has been accepted and is queued for action.
success:removed (203) - The requested content was removed. 
success:deleted (204) - the requested content was deleted.

#### Client Error Messages

failure:bad_request (400) - The request is invalid with no further information 
failure:unauthorised (401) - You are not logged in or we cannot verify you, preventing you from accessing this content. 
failure:forbidden (402) - we have verified you, but you may not access this content
failure:not_allowed (403) - you can access this, but you cannot do this action. For example, trying to delete someone elses message without manage messages.
failure:not_found (404) - We cannot find the requested content. 
failure:timeout (405) - indicates the server would like to end the session, often due to being idle. It can be restarted easily at request, and if often used for server restarts.
failure:gone (406) - the content was removed
failure:oversized_payload (407) - we refuse to process this request because the payload exeeded the servers byte limit, often 65,535 bytes for text packets and 2,147,483,647 bytes for images.
failure:too_many_requests (408) - you are sending too many requests so we refuse to process these. Generally this is 7200 requests over the past 60 minutes (2 requests per seccond for 1 continuous hour)
failure:better_authentication_needed (409) - you need to authenticate yourself by additional means to access this content. That may be 2 Factor Authentication, Proxy Authentication, or something else. More info should be provided after a `;` in the packet. Things like voice calls are peer to peer and therefore do not get ratelimited by this, if this happens the suggested behavour is to send it peer to peer to the destination and resend it to the server when you can.

#### Server Error Messages

failure:internal_server_error (500) - the server encountered a situation it didnt know how to handle with no additional information. 
failure:not_implemented (501) - the request type you send has no currently handling in the server side. 
failure:not_secure (502) - you send an unencrypted packet to the server which it refuses to process.
failure:no_storage (503) - the server dosen't have the space to process that request
failure:loop_request (504) - the request you sent put the server into an infanite loop and refuses to process it.

## Objects

Objects are just how we send data between clients. It can be stored in any format, or translated to other formats to allow for interoperability.

All objects MUST have a data header which specifies the edition which is required to handle the communication properly, and the type of communication.

```yaml
edition: 2023   # Not necesary if you have agreed to talk over only one edition.
type: message
operation: GET  # Not technechally needed, as it is the default operation. 
```

If an object fails the signature check, dosen't contain a heder or all needed data, or the user dosen't have permissions for that, you can either simply DROP the pakcet or send a an ERROR response.

### Verify encryption is working.

To ensure the server knows exactly what to expect, we send a near identical message every time. FOr the client and server, they are as follows. I know they are not very profesional, but they are fun and no end user ever sees them: but I hope they cheer up someone working on an implementation or someone carefully inspecting the packets!

CLIENT: 
```plaintext
Hello server, this is a message to confirm that the quick brown fox jumps over
 the lazy brown dog on your end too. If this is working, reply with my keyword
  "{PICKRANDOM}" so I know it worked!

--- BEGIN MESSAGE SIGNATURE ---

--- END MESSAGE SIGNATURE ---
```

The pickrandom words list is generally every dictionary word in the dictionary for your clients language. It is mostly just a confirmation to make sure the server can actually decrpt it, and can support your languages character set. This message also uses an english panogram to ensure the connection is working.

SERVER: 
```plaintext
Beep Boop, I am a server box. Server to User, please confirm this connection 
works. And yes I can confirm, the fox is jumping over the {keyword}. Over.

--- BEGIN MESSAGE SIGNATURE ---

--- END MESSAGE SIGNATURE ---
```

### Verify bonfire edition

Right after establishing secure channels, we send a CSV file containing all the editions we are willing to communicate using. We then compare, pick the most recent, and send confirmations.

(both) Send list:
```csv
editions
2023
2022-beta
```

Generally we reccommend using the most recent shared version.

### Account

An account stores critical data about a profile such as login and encryption details. An account can have multiple profiles.

### Profile

One account can have multiple profiles, and be switched between freely. The official client also allows you to set diffrent profiles to defult for certain people.

(This document can be minfiied a lot, using [] and {} to elimatye spaces, or minifying spaces and removing comments. And in transit: likely will.)
```yaml
edition: 2023
type: account

public_key: "999b9af08579802c4d1ca35070b179d610754abd2d601284819493a55e9ce760e1bc9b8adc6f9592311546f88f43237c65577ca7db95919945e63bfbb241b7b6"
---
edition: 2023
type: profile

profile: 
    guid: 0000000000000000000000000000000000
    display_name: "String"

    # We reccommend you store the following avatar scales.
    avatar_fullres: https://sub.domain.tld/file/960b70fb405047fd92425f1f3a4b341d.png # If supported by your instance.
    avatar_256: https://sub.domain.tld/file/960b70fb405047fd92425f1f3a4b341d@256.png 
    avatar_128: https://sub.domain.tld/file/960b70fb405047fd92425f1f3a4b341d@128.png 
    avatar_64: https://sub.domain.tld/file/960b70fb405047fd92425f1f3a4b341d@64.png 
    avatar_32: https://sub.domain.tld/file/960b70fb405047fd92425f1f3a4b341d@64.png   # We highly advise against downscaling avatars lower than this.

    pronouns: ["she/they", "she/her", "they/them"]
    # the frist one is shown, then seperated by slashes and when hovered it will show the one at that index
    # So if you have "she/they" and you hover "she" with the array above, it will show a tooltip saying "she/her"

    links: 
    - {
        rel: nofriend, # Unverified
        icon: mastodon,
        handle: "@username@instance.tld",
        link: https://instance.tld/@username,
        visibility: friends
    }
    - {
        rel: me, # Verified
        icon: peertube,
        handle: "@username@instance.tld",
        link: https://instance.tld/@username,
        visibility: everyone
    }

lists: 
    friends: 
        send_messages: true
        see_personal_statuses: true
        
    

    blocked: 
        send_messages: false

    best_friends: 
        display_name: "Best Friends"
        allow_important_messages: true

user_data: 
- { 
    guid: guid,
    group: "group",
    nickname: "nickname",
}

- { 
    guid: guid,
    group: "group",
    nickname: "nickname",
}
```

When mentioning users, any of the following structures can be used, as long as one would bring it down to just one user in the current hub. 

```plaintext
@username
@username@example.net
```

When an account is suspended, all mentions of them should display as `@suspended`. 

Deleted accounts should instead be removed from the database entirely, and their mentions should be replaced with `@unknown`. If they simply moved to another instance, their mentions should update accordingly.

- @**suspended** - A suspended user account. 
- @**unknown** - An unknown user account. 
- @**everyone** - Mentions everyone
- @**someone** - mentions a random person. 

### Messages

A status object can represent a reaction, message, creation, or anything else that is not a `person` or `bot` in nature.

Creation:
```yaml
edition: 2023
type: message
operation: CREATE

language: en # Helps screenreaders pronounce the content.
author: 0000000000000000000000000000000000
adressed: 0000000000000000000000000000000000 # ONE guid. If its a group chat or channel then it will handle more people receving it.
time: 09-04-2023@23:03:01
content: |
"this is the messages content. Some characters need to be escaped."

signature: 2346ad27d7568ba9896f1b7da6b5991251debdf2
```

Editing:
```yaml
edition: 2023
type: message
operation: EDIT

target: 0000000000000000000000000000000000   # What mwessage is being edited?
time: 09-04-2023@23:03:55
content: |
"this is the messages content. I have now edited it. It sends the new exact content, and the server deals with only storing the diffrence."

signature: 2346ad27d7568ba9896f1b7da6b5991251debdf2
```

Removing (HIDING from view, the server won't pass it on, NOT remvoing from servers):
```yaml
edition: 2023
type: message
operation: REMOVE

target: 0000000000000000000000000000000000   # What mwessage is being removed?

signature: 2346ad27d7568ba9896f1b7da6b5991251debdf2
```

Deleting (Removing from servers):
```yaml
edition: 2023
type: message
operation: DELETE

target: 0000000000000000000000000000000000   # What mwessage is being deleted?

signature: 2346ad27d7568ba9896f1b7da6b5991251debdf2
```

### Reactions

Reactions are little emoji counters below a message.

```yaml
edition: 2023
type: message
operation: CREATE # REMOVE removes YOUR reaction. DELETE clears all reactions of that type.

target: 0000000000000000000000000000000000   # Message ID
content: "emoji_shortcode" # No colons around them. If its not a valid emoji, simply drop the packet.

signature: 2346ad27d7568ba9896f1b7da6b5991251debdf2
```

## Formatting and Escapes

Various things need to be replaced for one reason or another. Most important, some characters need to be escaped. 

| Char | Sequence | Reason |
| ---- | -------- | ------ |
| `"`  | `\u0022` | String Closer, would interfere with interchange. |
| `<`  | `\u003c` | Would interfere with embedded objects and allow embedding of HTML. |
| `>`  | `\u003e` | Would interfere with embedded objects and allow embedding of HTML. |
| `&`  | `\u0026` | YAML Reserved Syntax |
| `:`  | `\u003a` | YAML Key Identifier |
| `\`  | `\u005c` | so that `\` can be included in messages without triggering an escape sequnce. |

Other objects, such as @mentions, #channel-mentions, etc must be wrapped in `<>`. This tells the program: "Hey, stop what your doing. I have special instructions for you."

| Type | Replacement | Reason |
| ---- | -------- | ------ |
| `@mention` | `<mention:"guid">` | Allows for refering account data directly, letting mentions get updated as people change usernames. |
| `#channel`  | `<channel:"guid">` | Allows for refering channel data directly, letting mentions get updated as channel names change or get deleted. |

Additionally, in rich status and wiki channels you are able to use the following elements

| Element | Pourpose |
| ---- | -------- |
| `<timer mode="since" start="10-04-2023 17:57:32">` | Often used in rich status to show the time since an action started. |
| `<button text="text" type="type" action="steam://joingame/440/JOIN_SECRET">` | Used for rich status, often for join game buttons. |
| `<duration mode="time" bar_start="0:00" bar_end="2:06" time_start="10-04-2023 17:57:32">` | Used for match duration, health, round completion, etc. |
| `<duration mode="number" bar_start="0" bar_end="300" value="299">` | Used for match duration, health, round completion, etc. |

## Federation

Federation occurs using the packet formats above. When a user wants data, they ask thier instance. Any data thier instance does not have, they ask the instance that will. The instnace that has it then forwards the data directly to the user. No data is stored redundently between instances this way. 

This also makes it possible to delete all messages directly. They MAY still be stored in someones cache, but that will likely be cleared out soon.

## Encryption

The encryption versions, standards, etc are defined by the edition. For this edition, and the forseeable future, we will be using AES with keys established over RSA for all communications. 

If a client or service cannot perform said end to end encryption, we highly reccommend you display a warning stating such.

## Commands
Bonfire has a lot of commands that must or should be built in and supported. Any action that is possible via the UI must be possible via a command. 

Therefore, every implenetation MUST have support for the following commands: 

| Command | Description | 
| ------- | ----------- |
| /invite <span class="violet-2">[duration]</span> <span class="blue-2">[uses]</span> | Invite a user to your hub! |
| /addbot <span class="violet-2">{URI}</span> | Integrate a bot into your hub! | 
| /kick <span class="violet-2">{user}</span> <span class="blue-2">[reason]</span> | Removes a user from your hub or group chat. |
| /ban {user} [reason] [duratation (default: permenent)] | Removes a user from your hub, and prevents them fron returning with a new invite for the specified time. |
| /mute {user} [reason] [duration (defult: 10m)] | Prevents a user in your hub from talking in voice or text chat for the specified time. |
| /quarintine {user} [reason] | prevents a user from seeing any main voice or text channels, and removes all permissions. They can only see rules, server info, and a help channel. Useful for if you believe an account has been compromised.  |
| /role {([add \| remove] {role} {user})| ([create | edit | delete] {role} {paramater} {new_value})} | Manages roles |
| /archive {channel} | Makes a channel read-only and be taken out of the standard channels list. Used for clearing up clutter without deleting history. |
| /nuke {channel} | Clears all messages in a channel. |
| /emote {add \| delete \| edit} {name} (specific cases) | Manages emojis |
| /nick (user) {nick} | Change your or someone elses nicknames. | 

## Permissions

THIS IS OUTDATED. See the rust script for a full list of permissions

| Permission | Description |
| ---------- | ----------- |
| view_channels | Allow members to view channels by defult. | 
| manage_channels | Allow this group to create, edit, and delete channels. | 
| manageRoles | Allow this group to manage all roles below them. | 
| manageEmoji | Allow users in this group to manage hub emoji | 
| viewAuditLog | Allow members to view a reccord of all changes to the hub |
| manageWebhooks | Allow members to create, edit, or delete webhooks, which can post messages in the hub. | 
| manageIntegrations | Allow members to add, remove, and edit integrated bots. | 
| manageGuild | Allow members to edit the hubs name, avatar, rules, and description | 
| createInvite | Allow users to create hub invites by defult. | 
| changeAlias | Allow users to change thier own nickname in the hub | 
| manageAlias | Allow users to change anyones nickname in the hub | 
| canKick | Allow users to kick members | 
| canBan | Allow users to ban members. | 
| canMute | Allow users to issue mutes | 
| sendMessages | Allow users to send messages in text channels. | 
| createThreads | |
| messageTreads | | 
| createPrivateThreads | |
| embedImages | Allows users to embed only image links | 
| embedLinks | Can embed links to make them look better. |
| canReact | Allows users to react to messages |
| useExternalEmoji | Allows users to use emoji  from other hubs, instnaces, or thier own in your hub. | 
| canPingAll | Allow users to mention @everyone | 
| canPingHere | Allow users to mention @here | 
| canPingOnline | Allow users to mention @online | 
| canPingRandom | Allow users to mention @someone | 
| canPingThis | Allow users to ping this role | 
| canPingRoles | Allow users to ping all roles raguardless of `canPingThis` | 
| manageMessages | Allow members to delete messages sent by other people. | 
| manageThreads | Allow users to delete or archive threads by other people | 
| viewMessageHistory | Allow users to view messgages sent before an hour ago | 
| blindMessages | Hide all messages in a channel to a user, except for replies to thier messages and messages sent by them. useful for verification channels | 
| useCommands | A blanket commands off button, Probably NOT what you are looking for. | 
| voiceConnect | Can connect to voice channels | 
| voiceSpeak | Can speak in voice channels | 
| voiceVideo | Can use video in voice channels | 
| voiceActivity | | 
| voicePriority | Determine if this user can speak over other people with a keybind | 
| voiceForceMute | Allow muting of other members | 
| voiceForceDeafen | Allow force deafing members | 
| voiceDeafenNoMute | Determine if a user can deafen without also muting. | 
| moveMembers | Determine if you can move members between channels |
| manageEvents | | 
| manageAll | Override all permissions given with yes, for all channels. Doing this will make someone have all the same powers as the hub owner, except for deleting it. |