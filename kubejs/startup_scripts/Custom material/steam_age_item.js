GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('tumbaga')
        .ingot()
        .color(0xfabd52)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_ROD
    )
    
    event.create('ferabrass')
        .ingot()
        .color(0xc4a87b)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FRAME
        )

    event.create('constantan')
        .ingot()
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