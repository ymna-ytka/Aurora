GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('tumbaga')
        .ingot()
        .components('3x copper', '7x gold',)       
        .color(0xfabd52)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_ROD
    )
    
    event.create('ferabrass')
        .ingot()
        .components('5x steel', '1x iron', '3x brass')       
        .color(0xc4a87b)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FRAME
        )

    event.create('constantan')
        .ingot()
        .components('2x copper', '1x nickel',)       
        .color(0xcc9966)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_LONG_ROD
    )
    
})