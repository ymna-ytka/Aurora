GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('liquid_twilight_gas')

        .liquid()
        .color(0xb69e74)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('cold_water')
        .liquid()
        .color(0x52CEFB)
        .element(GTElements.get('cold_water'))
        .iconSet(GTMaterialIconSet.DULL)

    event.create('sodium_carbonate')
        .liquid()
        .element(GTElements.get("sodium_carbonate"))
        .color(0xcabafb2)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('magical_essence')
        .liquid()
        .element(GTElements.get("magical_essence"))
        .color(0xcabafb2)
        .iconSet(GTMaterialIconSet.DULL)
        
})    