GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('induction_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['induction_furnace'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCC', 'CGGC', 'CGGC', 'CCCC')
            .aisle('CCCC', 'GOOG', 'GOOG', 'CCCC')
            .aisle('CCCC', 'GOOG', 'GOOG', 'CCCC')
            .aisle('CCCC', 'CKGC', 'CGGC', 'CCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks("gtceu:tempered_glass"))
            .where('O', Predicates.blocks("kubejs:machine_coil_annealed"))
            .where('C', Predicates.blocks("kubejs:induction_casing")
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MUFFLER))
            .or(Predicates.abilities(PartAbility.MAINTENANCE))

            )
    .build())
    .workableCasingRenderer(
        "kubejs:block/casings/induction_casing",
        "gtceu:block/multiblock/blast_furnace",
    false
    )
})