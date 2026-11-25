---
title:  Build Database
layout: default
parent: Master Builder
nav_order: 10
---
#   Build Database

include instructions defined in [GeneralBuildInstructions.md](GeneralBuildInstructions.md)

For each Business Entity there will be a matching Business Entity Manager taht is responsible for ensuring legal operations are performed on the Business Entity
This Business Entity Manager has the following standard operations...
- create(BusinessEntity) operation 
- delete(BusinessEntity) operation that removes a specific instance of the class from the
- save() operation that writes the database to file
 
For each Business Entity there will be...
- get() and set() functions for each Data Attribute
- for any composed classes the root business entity should have
  - an add(instance of Composed Class) function 
  - a remove(instance of Composed Class) function
- 
