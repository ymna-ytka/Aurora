GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('basic_liquid_fertilizer')
        .liquid()
        .element(GTElements.get("basic_liquid_fertilizer"))
        .color(0x00ff80)
        .iconSet(GTMaterialIconSet.DULL)


})    