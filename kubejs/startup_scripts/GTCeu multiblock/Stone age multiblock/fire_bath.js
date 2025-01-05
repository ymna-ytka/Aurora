GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fire_bath', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['fire_bath'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CJJ', 'CJJ', 'CCC')
            .aisle('CCC', 'CAC', 'CCC')    
            .aisle('CCC', 'CCC', 'CCC')
            .aisle('###', '#C#', '###')
            .aisle('###', '#C#', '###')
            .aisle('###', '#C#', '###')
            .aisle('#C#', 'CCC', '#C#')
            .aisle('#C#', 'CKC', '#C#')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('kubejs:fire_casing'))
            .where('J', Predicates.autoAbilities(definition.getRecipeTypes()))
            .where('#', Predicates.any())
            .where('A', Predicates.air())        
        .build())
        .workableCasingRenderer(
            "kubejs:block/casings/firebath_casing",
            "gtceu:block/multiblock/primitive_blast_furnace",
            false
        )
})