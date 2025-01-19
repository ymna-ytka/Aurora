StartupEvents.registry("block", event => {
    
    event.create('ecoferum_casing')
        .displayName('Корпус з екоферума')
        .hardness(4)
        .resistance(3)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/ecoferum_casing')            
})