---
title:  Build Reporting
layout: default
parent: Application Master Builder
nav_order: 90
---
#   Build Reporting

include instructions defined in [GeneralBuildInstructions.md](GeneralBuildInstructions.md)
depends on [BuildResultsDatabase.md](BuildDataAccessLayer.md)

each report can be persisted as HTML, CSV or Markdown

##  League Table

select Position, Player.Name ,
from LeagueTable
   , LeaguePosition
   , Player
   , LeagueTable.won,drawn,lost,proficiencyPoints,handicapPoints,totalPoints 
where LeaguePosition.PlayerID = Player.ID
order by LeaguePosition ascending

