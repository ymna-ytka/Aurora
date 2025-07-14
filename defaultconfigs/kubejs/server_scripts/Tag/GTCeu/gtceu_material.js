ServerEvents.tags('block',event=>{

    //Netherite
    event.remove('minecraft:needs_stone_tool', "gtceu:netherite_block")
    event.add('minecraft:needs_diamond_tool', "gtceu:netherite_block")
    event.add('minecraft:wither_immune', "gtceu:netherite_block")
    event.add('minecraft:beacon_base_blocks', "gtceu:netherite_block")
    event.add('chipped:netherite_block', "gtceu:netherite_block")
    //
})

ServerEvents.tags('item',event=>{

    //Netherite
    event.add('chipped:netherite_block', "gtceu:netherite_block")
    //

})