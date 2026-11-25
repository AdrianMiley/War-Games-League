---
title: Games League Design
layout: default
nav_order: 9
---
#   Games League Design

```mermaid
---
config:
flowchart:
curve: stepBefore
---
flowchart LR
%%    Activities
    Start((Start))
    Define[Write Rules]
    Design[Create Design]
    Build[Create App]
%%    Verify[Verify App]
%%    Release
%%    Flows
    Start --> Define
    Define --> Design --> Build --> Release
    Build -->|iterate| Define
%%    Verify --> Release
```
