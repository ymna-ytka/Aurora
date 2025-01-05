StartupEvents.registry("block", event => {
    
    event.create('fire_casing')
        .displayName('Вогнетримкий корпус')
        .hardness(4)
        .resistance(3)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/firebath_casing')            
})