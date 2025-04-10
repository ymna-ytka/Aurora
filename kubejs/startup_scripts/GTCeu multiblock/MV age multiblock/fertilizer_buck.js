GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fertilizer_buck', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['fertilizer_buck'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAAA","AABBAA","AABBAA","AABBAA","      ")
            .aisle("AAAAAA","B    B","B    B","BAAAAB"," BB   ")
            .aisle("AAAAAA","A CC A","A CC A","AAAAAA"," BB   ")
            .aisle("AAAAAA","B    K","B    B","BAAAAB","      ")
            .aisle("AAAAAA","A CC A","A CC A","AAAAAA","      ")
            .aisle("AAAAAA","B    B","B    B","BAAAAB","      ")
            .aisle("AAAAAA","AABBAA","AABBAA","AABBAA","      ")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.HERMETIC_CASING_LV.get()))
            .where('B', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
            .where('A', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MUFFLER))
            .or(Predicates.abilities(PartAbility.MAINTENANCE))

            )
    .build())    
    .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_inert_ptfe",
        "gtceu:block/multiblock/large_chemical_reactor",
    false
    )
})