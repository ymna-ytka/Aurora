StartupEvents.registry('fluid', event => {

    event.create('salter_water')
        .thickTexture(0x9de0e9)
        .bucketColor(0x9de0e9)
        .displayName('Підсолена вода')
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')

})