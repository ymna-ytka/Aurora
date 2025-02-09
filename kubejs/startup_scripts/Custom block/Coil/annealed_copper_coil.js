StartupEvents.registry("block", event => {
    
    event.create('machine_coil_annealed')
        .displayName('Котушка з анодованої міді')
        .hardness(4)
        .resistance(3)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/coil/machine_coil_annealed')            
})