GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
        .recipeTypes(['steam_blast_furnace'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'SFS', 'OPO', 'OFO')
            .aisle('CCC', 'SFS', 'OPO', 'OFO')
            .aisle('CCC', 'CKC', 'CCC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_STEEL.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_PRIMITIVE_BRICKS.get())
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM))
            )
            .where('S', Predicates.blocks(GTBlocks.STEEL_HULL.get()))
            .where('O', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
    .build())
    .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_primitive_bricks",
        "gtceu:block/multiblock/primitive_blast_furnace",
    false
    )
})