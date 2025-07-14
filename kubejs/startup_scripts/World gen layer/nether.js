GTCEuStartupEvents.registry('gtceu:world_gen_layer', e => {
    e.create('nether')
        .targets('minecraft:netherrack')
        .dimensions('minecraft:the_nether')
})