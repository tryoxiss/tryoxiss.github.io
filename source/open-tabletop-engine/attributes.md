---
title: DnD Remade Attributes
layout: "dndr-framework.njk"
---

Attributes are simple tag-based modifiers you can add to any item to modify how it works. If you are looking for stats, or these don't seem what your looking for, see [stats](../stats/).

- ~~Mini crits can be gaurnteed. Crits are random. They do the same damage modifer. It's just to prevent cheese builds.~~
- Struckthrough (~~Struckthrough~~) items are **Marked For Death** and will be **removed or reworked** in a future revision. 
- Some effects have paramaters, denoted with brackets `()` around them. These are additional information about it, for example, where you are burned. 
- **TODO**: These categories make no sense. Just... clean it up? - Mads
- Weapons can only strike physical enemies by defult. 
- 1 Unit is 1m centimeters. 
    - We reccommend 3x3cm tiles, if using a board IRL 
    - In game, 1 square tile is 1m<sup>2</sup>
    - In game, 1 hex tile is 1x1m. 
    - It is designed to be played with either square *or* hex tiles. But hex is more fun fight me.
    <!-- - Convert from meters to tiles: `(tiles * 100) / 75` -->
- **Khaim**: yeah, but i also feel like the characters get to much hp to fast, like having them start out at 8 and at max only getting to like 50 would be better than starting at 10 and getting to 300
- Levels run from 1 (defult) to 20 (max). Characters cannot exeed level 20, but should not *reach* level 20 in the first place. 

Basic item design: 

<div class="postcard postcard-50">
<p class="h2">Item Name</p>
<p><span class="muted">{Rarity} {Type}</span></p>
<p>Item description. This can be as long as you want.</p>

<ul>
<li>Attribute</b>: Description</li>
</ul>

<p class="muted" style="margin-bottom: 0px;">List, Of Attributes, In Short, form</p>
</div>

Example: 

<div class="postcard postcard-50">
<p class="h2 pink-2">The Atomizer</p>
<p><span class="muted">Mythical Scientific Marvel</span></p>
<p>Destroy the essence of your foes with a single hit.</p>

<ul>
<li><b>While Equiped</b>: Reduce your max health to 1.</li>
<li><b>On Use</b>: Reduce your health to 1, even when putting the weapon away. (but, you return to your old max health when putting it away, so you can heal back)</li>
<li><b>Honor</b>: You are considered honorable while you only use it to take the lives of those who hurt you. Killing an enemy that has not attacked you (directly or indirectly (your party, village, nation, etc)) will break your honor. 
</li>
<li><b>On Break Honor</b>: Permanently destroy the atomizer, and give your character and party grief, and give yourself trauma (killed enemy type and faction) attributes. Give the faction that you used it on the Vengeance Attribute. (Or die, and make a new character. If you play that way)
</li>
</ul>

<p class="muted" style="margin-bottom: 0px;">Honor Bound, Mythical</p>
</div>

And a more practical example: 

<div class="postcard postcard-50">
<p class="h2 green-2">English Longbow</p>
<p><span class="muted">Uncommon Bow</span></p>
<p>With great range and power, comes great strength requirements.</p>

<ul>
    <li><b>On Use</b>: Fire an arrow</li>
    <ul>
        <li>Range: 60m</li>
        <li>Damage: 3d6</li>
        <li>Stat Check: strengh 8+</li>
    </ul>
</ul>

<p class="muted" style="margin-bottom: 0px;">Two-handed, Bow, Longbow, Uncommon</p>
</div>

And of a consumeable item: 

<div class="postcard postcard-50">
<p class="h2">Fint Arrow</p>
<p><span class="muted">Common Ammunition (Supply: 80)</span></p>
<p>Can be used with most bows and are easily craftable.</p>

<p class="muted" style="margin-bottom: 0px;">Consumeable, Arrow, Not Enchantable</p>
</div>

For ranged weapons, ammo can add or edit your main weapons stats. For example: using a feathered arrow can increese range, and using a heavy arrow can increese damage but decreese range. To do this, take the weapons base stats and modify them with the ammo. For example: 

- Bow: 
    - Damage: 3d6 
- Tin Feathered Arrow
    - Damage: 1d6

So to calculate your damage, roll 4d6

## Baisc Attributes

These attributes do not need to be set when they are just the defult behavour. 

- **Description**: Flavour, mostly. 
- **On Equip**: Determines what stat changes occur when the item is equipped. 
- **On Holster**: Determines what stat changes occur when the item is uneqipped. (It does not need to be put into a holster) 
- **When Eqipped**, **When On {slot}**: (e.g., "When On Main Hand", "When On Head", "When On Body") Determines what happens when the item is actively equipped.
- **On Use**: Determines what happens when used. 
- **On Hit**: 
- **On Action**: 
- **On Bonus Action**: 
- **On Crit**: What happens when you roll a 20?
    - Defult: Deal a critical hit (2x damage)
- **On Fumble**: What happens when you roll a 1?
    - Defult: Deal 0 damage
- **Consumeable**: This item will be consumed on use. If you want it to return an item, add that as an on-use along with the status effect. for example: drinking a potion returns its bottle as an inventory item. 
- **On Break** 
- **On Desroy** 

## Debuffs

- **Burning!**: Quick! Put yourself out! You're on fire!
- **Grappled**: You don't have free reign of movement, someone is grabbing you!
- **Nausea**: Eat or drink at your own risk! Roll 1d6 each time you eat or roll an atheltics check to determine if you fumble. Fumbles from other sources also count.
    - On Fumble: Puke food and deal 1d4 poison damage. Remove the effects of all the food and drink you have had in the last hour. (Do not remove instant effects, only things with lasting effects).

## Curses
- **Cursed: {Curse}**: a

(Not really a curse)
- **Marked For Death**: Make minions, pets, and the like target that enemy. Applying marked for death to someone else will remove all other marked for death effects on thier side

## Types: 

- **Gas**: Made of gas!
- **Ghost**: Boo!
- **Essence**: ~~Religious spirits that show up from time to time.~~
- **Mirrage**: Your seeing things! Can only inflict emotional side effects. 
- **Hallucination**: Your seeing things! Can only inflict emotional side effects. 
- **Hologram**: You seem unable to attack them! 
- **Stone**: Status effects won't work here... (I mean,  you can try, but stones aren't known for taking poison damage :P). 
- **Metal**: Many status effect's won't work here... maybe try splashing it?
- **Plant**: Vulnerable to fire, weak to plants and water. 
- **

## Climate

- **Hyperthermia**: Take (1d4 / 2) damage a turn. If our of combat: Take (1d4 / 2) damage each ingame minute. Round down. 
- **Overheating**: Cool off quickly! Increesed need for water. Apply *thirst*.
- **Hot**: You are uncomfortably hot!
- **Warm**: You are comfortably warm. 
- **Neutral**: Your character is at a comfortable temputure.
- **Cool**: You are comfortatably cool. 
- **Cold**: You are uncomfortably cold!
- **Freezing**: You are uncomfortably cold!
- **Hpothermia**: Take (1d4 / 2) damage a turn. If our of combat: Take (1d4 / 2) damage each ingame minute. Round down. 

And then these are not really climate but...

- **Burned 1 (where)**: First degree burns
- **Burned 2 (where)**: Seccond degree burns
- **Burned 3 (where)**: Third degree burns
- **Burned 4 (where)**: Fourth degree burns. (i.e., you just got turned into charcoal).

<!-- - Burn-out
On Use: -2 to all stats ? idk for this one 

- Useless
On Use: Gain inability to function on charisma, intelligence, or constitution saving throws. -->

## Transfer Attributes
These attributes dictate how an item can transfer from one person to another. These probably are not what you are looking for. Not tradeable and not marketable are generally used for quest items, but its generally reccommended you avoid them. They are more a prefab than anything else to prevent players from messing up critical progression.

- **Not Tradeable**: Prohibit this item from being traded to and from NPCs. 
- **Not Marketable**: Prohibit this item from being marketed (sold for gold), to any NPC or shop. 
- **Not Lootable**: Prohibit this item from being pick-pocketed or looted from a corpose. It is reccommended you apply this to all critical items, as it can be frustrating to have it get lost. (Good DMs shouldn't make them get lost *anyway* (unless its a quest!), but it can serve as a nice reminder to that).
- **Not Droppable**: Cannot be dropped or left behind. 
- **Soulbound**: Not Tradeable, Not Marketable, Not Lootable, Not Dropable. This item will be with you, forever, weather you like it or not. You may be able to find a shaman who can break it, but you risk cursing it in the process!
- **Cannot Be Teleported**: This item cannot go through teleporters, or be transported while having teleportation spells. 
- **
- **Illegal**: Less NPCs will want to buy it, it is harder to aquire. Don't let the city gaurds find out!

## Misc Attributes

- **Honor Bound**: this item is given to you embues you with pride and honor, you may not know why, but violate its code and you may soon find out.
    - **Honor**: This defines how honor works with that item, it could be something like not hurting a teammate, not putting it away without killing an enemy, taking a life, anything that fits in your world!
    - **On Break Honor**: This defines what happens when the honor code is broken. Is it a bannishment from thier village? Grief? Remorse? Get creative!