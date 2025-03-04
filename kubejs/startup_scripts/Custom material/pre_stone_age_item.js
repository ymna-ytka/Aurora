GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('sponge_metal')
        .ingot()
        .color(0xa88274)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_SMALL_GEAR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW, 
            GTMaterialFlags.GENERATE_RING,
        )

    event.create('sponge_copper')
        .ingot()
        .color(0xdea08a)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('sponge_iron')
        .ingot()
        .color(0xb5b5b5)
        .iconSet(GTMaterialIconSet.DULL)
        
})