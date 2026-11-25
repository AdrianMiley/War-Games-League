---
title: Application Master Builder
layout: default
parent: Games League Generation
nav_order: 1
---
#   Master Builder

The Master Builder provides the instructions for building the entire application from the component build files in the correct dependency order.

- [BuildResultsDatabase.md](BuildDataAccessLayer.md)
- [CreateOperations.md](../createSpecifications/CreateOperations.md)
- [BuildPlayerRegistration.md](BuildPlayerRegistration.md)
- [BuildReporting.md](BuildReporting.md)
- [BuildUserInterface.md](BuildUserInterface.md)

It follows a standard pattern of building the central database first based on the definition in the Integrated Domain Model and then building the input and output components to integrate with that.

The User Interface is always built last because that pulls together all the other components into a presentation layer so needs those components implemented (and tested) first.
