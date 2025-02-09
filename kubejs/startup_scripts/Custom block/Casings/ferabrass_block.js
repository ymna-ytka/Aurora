StartupEvents.registry("block", event => {
    
    event.create('ferabrass_casing')
        .displayName('Корпус з латунної сталі')
        .hardness(4)
        .resistance(3)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/ferabrass_casing')            
})