GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('fire_smalter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['fire_smalter'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CC','BB','CC')
            .aisle('KC','BB','CC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:coke_oven_bricks'))
            .where('C', Predicates.blocks('kubejs:fire_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                
        .build())
        .workableCasingRenderer(
            "kubejs:block/casings/firebath_casing",
            "gtceu:block/multiblock/primitive_blast_furnace",
            false
        )
    
})