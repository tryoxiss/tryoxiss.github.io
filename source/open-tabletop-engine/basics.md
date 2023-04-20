---
title: DnD Remade Framework
layout: "dndr-framework.njk"
---

This document defines the basic framework and definitions for the rest of the ruleset, which defines spells, mechanics, and more. This is more of a framework that the rest is built on. The other parts can be modified much more easily, but modifying this may break things as it is foundational. 

All of the systems provided by Open Tabletop Engine, while interacting in many ways, can be replaced with your own systems fairly easily. Don't like the potion system? Make your own! Magic system dosen't fit in your world? Make or find one that does!

## Dice

Dice will be defined as `d<sides>` in this document. 

| Dice | Role |
| ---- | ---- |
| d20  | Skill checks, most everything. If in doubt: This is what you probably want |
| d12  | Heavy weapons damage, mostly. Often used to generate times of day, or simillar things. | 
| d10  | Percentile dice, can be used to get a number between 1 and 10 or 1 and 100. | 
| d6   | Commonly used for healing and health related actions | 
| d4   | Aside from being worse to step on than a lego piece, is often used for very light weapons or potion effects. | 

## Calculating Values

Negative values are instead set to 0. So for example, a creature that deals 1d4-3 damage has an attack array of [0, 0, 0, 1] making it a very low threat. 

With damage and ranges, if attacking closer than the specified minimum, damage is lowered by 1d4 for every tile closer than the minimum. You can attempt to atack farther aswell if using a ranged or magic weapon, but damage is also reduced by 1dN for every tile beyond its range where N is the number of tiles you are attemping to attack past, rounding up to the nearest dice value. 

For example, attempting to shoot a bow 2 tiles past its maximum range will reduce its damage by 2d4, and attempting to shoot it 5 tiles past its max range will reduce its damage by 5d6. 

With damage, random citcical hits are not a thing unless specified. 

## Item Rarity

The following table has a list of all raritys you are the main tier system. All open for change, in both name color and description. 
| Rarity | Description |
| ---- | ---- |
| <span class="pink-2">Mythical</span>  | A one-of-a-kind item or artifcat with one-of-a-kind abbilities and craftsmanship, almost always with magical properties. Often The lifes work of a master craftsperson  |
| <span class="violet-2">Exeedingly Rare</span>  | An incredibly rare item or artifcat with one-of-a-kind abbilities or craftsmanship. Often The lifes work of a master craftsperson  |
| <span class="blueviolet-2">Very Rare</span>  | Can be quite hard to find even with a large amount of buying power to your name, your lucky to have these! |
| <span class="blue-2">Rare</span>  | Somewhat rare, but still often stocked by larger cities if you have the cash for them.  |
| <span class="green-2">Uncommon</span>  | Notable items, but still very common and quite easy to find.   |
| Common | Very common items of little note.  |
| <span class="muted">Junk</span> | Not to say "no use", but these items are rarely useful for much of anything |

These additional raritys also exist for special pourposes, and all combine with it, often taking its color. 

| Rarity | Description |
| ---- | ---- |
| <span class="orange-2">Artifact</span>  | A relic of an ancient time, often cursed or highly protected. They have no inherent use, but can often be sold for a very large sum or quest items for high level quests!  |
| Self-Made  | An item your character crated themselves, combined with another rarity and takes its color. For example <span class="blueviolet-2">Self-Made Very Rare</span> |
| <span class="blue-2">Unusual</span>  | Rarer versions of other items, that often have specia lcrafting uses. |

<!-- | <span class="orange-2">Legendary</span>  | An incredibly rare item or artifcat with one-of-a-kind abbilities or craftsmanship. Often The lifes work of a master craftsperson  | -- between mythical and seccond highest-->

The framework is also designed to be mostly or fully compatible with most if not all Dungeons and Dragons homebrew and pre-made campeigns. 