StartupEvents.registry('block', event => {

    event.create('reactive_cleaner')
        .displayName('Реактивний очищувач')
        .hardness(4)
        .resistance(3)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/lv_age_block/reactive_cleaner')            
    
    event.create('filtering_camera')
        .displayName('Фільтрувальна камера')
        .hardness(4)
        .resistance(3)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/lv_age_block/filtering_camera')            
    
})

    
