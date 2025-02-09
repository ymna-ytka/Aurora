StartupEvents.registry("block", event => {
    
    event.create('induction_casing')
        .displayName('Індукційний корпус')
        .hardness(4)
        .resistance(3)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/induction_casing')            
})