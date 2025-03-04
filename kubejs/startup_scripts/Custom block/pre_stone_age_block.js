StartupEvents.registry('block', event => {

    event.create('ancient_stone_bricks')
        .displayName('Давня кам\'яна цегла')
        .hardness(1.5)
        .resistance(6)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .textureAll('kubejs:block/pre_stone_age_block/ancient_stone_bricks')            
    
    
})

    
