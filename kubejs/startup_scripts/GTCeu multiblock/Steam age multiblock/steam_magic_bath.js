GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_magic_bath', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['steam_magic_bath'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCFCC', 'CCPCC', 'CCCCC')
            .aisle('CBBBC', 'CRRRC', 'CCCCC')
            .aisle('FBBBF', 'PRRRP', 'CCCCC')
            .aisle('CBBBC', 'CRRRC', 'CCCCC')
            .aisle('CCFCC', 'CCPCC', 'CCKCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where('B', Predicates.blocks("gtceu:ferabrass_block"))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_STEEL.get()))
            .where('R', Predicates.blocks("gtceu:ferabrass_frame"))
            .where('C', Predicates.blocks("kubejs:ferabrass_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
            )
    .build())
    .workableCasingRenderer(
        "kubejs:block/casings/ferabrass_casing",
        "gtceu:block/multiblock/gcym/large_chemical_bath",
    false
    )
})