![](favicon.png)
# Minecraft Tools
A collection of Javascript programs to use with Minecraft.

These tools generate code to input into Minecraft's
[Command Blocks](https://minecraft.gamepedia.com/Command_Block). These
blocks let admins and map creators run arbitrary commands when they
receive a redstone signal (Minecraft's electricity equivalent).
The commands can also be run by admins through the game's chat/command log.

## Tools

### Armor Color Code Generator
Minecraft has [leather armor](https://minecraft.gamepedia.com/Dye#Dyeing_armor)
that can be dyed in various colors. Admins can create armor pieces with
arbitrary colors by setting JSON datatags on the armor.

The tool allows you to select a color using the native color picker,
enter a hex code, or RGB values. The corresponding color code is then
calculated and example usage is displayed, such as the command below.
```
/give @p leather_chestplate 1 0 {display:{color:10980749}}
```

### HideFlags Calculator
Various Minecraft items have special descriptions displayed in a tooltip,
such as enchantments. While helpful for normal play, map makers may want
to hide this information from the player. 

A bitflag is used to indicate which attributes an admin wants to hide 
on an item. The tool displays various checkboxes to the user, and will
display the bitflag nessecary to hide the checked values on an in-game
item. An example command is displayed, such as the one below.
```
/give @p iron_pickaxe 1 0 {HideFlags:31}
```

## Licensing
This project is avaliable under the MIT License.
