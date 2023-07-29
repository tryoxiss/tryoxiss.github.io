---
title: Bonfire Core
---



## Accounts

Transition data header

```yaml
edition: 2023
module: accounts
```

And an example

```yaml
edition: 2023
module: accounts

account_guid: { 

    profiles: [
        {
            guid: guid,
            # authorisation: token # Only needed if its NOT owned by YOUR account.
        },
        {
            guid: guid,
            authorisation: token
        }
    ]
}
---
edition: 2023
module: profiles

profile_1_guid: {
    display_name: "String",
    handle: "String",
    owner: "account_guid",

}
```