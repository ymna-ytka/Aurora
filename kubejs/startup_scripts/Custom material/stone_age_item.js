GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('bad_bronze')
        .ingot()
        .color(0xdb7025).iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_SMALL_GEAR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW, 
            GTMaterialFlags.GENERATE_RING,
            )
})