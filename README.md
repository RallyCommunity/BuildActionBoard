Build Action Board
==================

## Value
Provides a single point of build health across all projects.
Improves CI cycle time by making visible build health and commit batch sizes.
Also facilitates collaboration by claiming and notifying ownership of who is fixing the build.

## Overview

Provide at-a-glance status of all builds configured for teams.  
Latest status includes both the health and identification of 
the current build and last good build.  To better describe nature
of broken health, the number of failed builds since last good build is 
also shown.

This app also provides cross-panel communcation to [CI Build Report](https://github.com/RallyCommunity/build-dashboard)
and [Build Breakdown](https://github.com/EddieGotherman/BuildBreakdown) apps to provide immediate drilldown into
changeset and test case failures.

<table>
<tr><td><a href="https://raw.github.com/skandl/BuildActionBoard/master/build_action_board-HUD.png"><img width="400"
src="https://raw.github.com/skandl/BuildActionBoard/master/build_action_board-HUD.png"></a></td>
<td><a href="https://raw.github.com/skandl/BuildActionBoard/master/build_action_board-Integrated.png"><img width="400"
src="https://raw.github.com/skandl/BuildActionBoard/master/build_action_board-Integrated.png"></a></td></tr>
<tr><td>Heads Up Display (HUD)</td><td>Integrated Build Apps</td></tr>
</table>

## Authors

<p>Stephen Kandl &lt;stephen.kandl@ge.com, GE Intelligent Platforms&gt;</p>
<p>David Thomas &lt;dthomas@rallydev.com, Rally Software&gt;</p>
