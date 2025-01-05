GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_coke_oven', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_COKE_BRICKS)
        .recipeTypes(['steam_coke_oven'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCC', 'CCCC', 'CCCC', 'CCCC')
            .aisle('CBBC', 'CPPC', 'CPPC', 'CCCC')
            .aisle('CBBC', 'CPPC', 'CPPC', 'CCCC')
            .aisle('CCCC', 'CKCC', 'CCCC', 'CCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
            .where('B', Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_COKE_BRICKS.get())
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
    .build())
    .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_coke_bricks",
        "gtceu:block/multiblock/coke_oven",
    false
    )
})