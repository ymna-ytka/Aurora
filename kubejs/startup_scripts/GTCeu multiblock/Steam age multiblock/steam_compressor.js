GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_compressor', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 8))
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .recipeTypes(['compressor'])
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CCCCC', 'CCCCC')
            .aisle('CCCCC', 'CAGAC', 'CCCCC')
            .aisle('CCCCC', 'CCKCC', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.CASING_BRONZE_GEARBOX.get()))
            .where('A', Predicates.blocks("minecraft:anvil"))
            .where('C', Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM))
            )
    .build())
    .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
        "gtceu:block/multiblock/gcym/large_material_press",
    false
    )
})