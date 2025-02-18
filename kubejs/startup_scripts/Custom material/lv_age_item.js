GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('carbide_silicon')
        .ingot()
        .components('5x silicon', '3x carbon',)       
        .color(0xc2C2C2C)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FOIL,
        )
        .blastTemp(1800, 'low')
    
    event.create('sodium_carbonate')
        .liquid()
        .element(GTElements.get("sodium_carbonate"))
        .color(0xcabafb2)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('ecoferum')
        .ingot()
        .components('6x iron', '2x nickel', '1x rubber', '1x copper')    
        .color(0x3CA474)
        .secondaryColor(0xa9b1b8)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FRAME
        )
    
    event.create('cold_quartz')
        .gem()
        .color(0xe6f3ff)
        .iconSet(GTMaterialIconSet.QUARTZ)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_ROD
        )

    event.create('vitalized_iron')
        .ingot()
        .color(0x75f096)
        .secondaryColor(0xc5e8cf)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
        )
        
    event.create('infused_iron')
        .ingot()
        .color(0x0fd146)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.FORCE_GENERATE_BLOCK,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR
        )

    event.create('sky_iron')
        .ingot()
        .color(0x7ab8fa)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.FORCE_GENERATE_BLOCK,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR
        )
        
    event.create('tained_gold')
        .ingot()
        .color(0xe87410)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.FORCE_GENERATE_BLOCK,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR
        )
 
    event.create('depth_iron')
        .ingot()
        .color(0x5f3c85)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.FORCE_GENERATE_BLOCK,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR
        )

    event.create('twilight_gold')
        .ingot()
        .ore()
        .color(0x9c7106)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
        )
        .blastTemp(1400, 'low', 100, 400)
    
        
})