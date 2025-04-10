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
        .color(0x6f7f0d)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('fiery_magic_water')
        .liquid()
        .element(GTElements.get("fiery_magic_water"))
        .color(0x6c1414)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('overworld_aura')
        .liquid()
        .color(0xB6F746)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('nether_aura')
        .dust()
        .liquid()
        .color(0x7e1a0b)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('polluted_water')
        .liquid()
        .color(0x4d4f4a)
        .iconSet(GTMaterialIconSet.DULL)        
        
})    