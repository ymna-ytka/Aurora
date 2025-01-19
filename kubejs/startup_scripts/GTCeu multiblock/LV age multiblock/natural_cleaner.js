GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('natural_cleaner', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
        .recipeTypes(['natural_cleaner'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'OFO', 'CCC')
            .aisle('CCC', 'FRF', 'CCC')
            .aisle('CKC', 'OFO', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('O', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
            .where('F', Predicates.blocks("kubejs:filtering_camera"))
            .where('R', Predicates.blocks("kubejs:reactive_cleaner"))
            .where('C', Predicates.blocks("kubejs:ecoferum_casing")
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MUFFLER))
            .or(Predicates.abilities(PartAbility.MAINTENANCE))

            )
    .build())
    .workableCasingRenderer(
        "kubejs:block/casings/ecoferum_casing",
        "gtceu:block/multiblock/electric_blast_furnace",
    false
    )
})