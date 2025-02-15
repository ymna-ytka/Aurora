GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_alloy_smelter', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 8))
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .recipeTypes(['alloy_smelter'])
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAA', 'CCC', '***', '***')
            .aisle('AAA', 'ACA', 'A*A', 'A*A')
            .aisle('AAA', 'CKC', '***', '***')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get()))
            .where('*', Predicates.any())
            .where('C', Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM))
            )
    .build())
    .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
        "gtceu:block/multiblock/gcym/blast_alloy_smelter",
    false
    )
})