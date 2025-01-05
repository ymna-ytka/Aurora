GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('carbide_silicon')
        .ingot()
        .color(0xc2C2C2C)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FOIL,
        )
        .blastTemp(1800, 'highest')
    
        

})