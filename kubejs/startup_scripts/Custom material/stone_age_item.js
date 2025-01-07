GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('bad_bronze')
        .ingot()
        .components('3x copper', '1x tin',)       
        .color(0xdb7025)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_SMALL_GEAR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW, 
            GTMaterialFlags.GENERATE_RING,
        )
})