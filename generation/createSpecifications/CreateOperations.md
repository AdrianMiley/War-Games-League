---
title:  Create Operations
layout: default
parent: Master Builder
nav_order: 
---
#   Create Operations

The intent of this script is to generate specifications for each of the State Machine Transitions specified in the Integrated Domain Model.

From the State Machines defined in design/data files create MD files in design/operations folder for each transition message where file does not already exist. Create textual specification of what needs to be done to process input data to complete that operation.

Include in each file an example of input message as a structured text message and the resulting generated data assuming that the message is valid. 
Input messages should use names rather than ID values and part of the ingestion process would be to convert the name into an ID via a case insensitive lookup.

