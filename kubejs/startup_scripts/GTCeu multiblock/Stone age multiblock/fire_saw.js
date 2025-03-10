GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('fire_saw', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['fire_saw'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC','CBC','CBC', 'TBT')
            .aisle('CCC','BLB','BLB', 'TBT')
            .aisle('CCC','BLB','BLB', 'TBT')
            .aisle('CKC','CBC','CBC', 'TBT')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('minecraft:glass'))
            .where('L', Predicates.blocks("gtceu:sponge_metal_block"))
            .where('T', Predicates.blocks("gtceu:treated_wood_frame"))
            .where('C', Predicates.blocks('kubejs:fire_casing')
            .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
            .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
            .or(Predicates.abilities(PartAbility.STEAM)))
            
        .build())
        .workableCasingRenderer(
            "kubejs:block/casings/firebath_casing",
            "gtceu:block/machines/cutter",
            false
        )
    
})