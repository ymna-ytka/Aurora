GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("tar_smokehouse", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(["tar_smokehouse"])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAAAA","AAAAAAA","AAAAAAA","AAAAAAA","AAAAAAA")
            .aisle("ABBBBBA","A  C  A","A     A","A  C  A","AAAAAAA")
            .aisle("ABBBBBA","A  C  A","A     A","A  C  A","AAAAAAA")
            .aisle("ABBBBBA","ACCCCCA","A  C  A","ACCCCCA","AAAAAAA")
            .aisle("ABBBBBA","A  C  A","A     A","A  C  A","AAAAAAA")
            .aisle("ABBBBBA","A  C  A","A     A","A  C  A","AAAAAAA")
            .aisle("AAAAAAA","AAAAAAA","AAAKAAA","AAAAAAA","AAAAAAA")
            .where("K", Predicates.controller(Predicates.blocks(definition.get())))
            .where(" ", Predicates.any())
            .where("C", Predicates.blocks("gtceu:clay_large_fluid_pipe"))
            .where("B", Predicates.blocks("minecraft:stone_bricks"))
            .where("A", Predicates.blocks("minecraft:bricks")
                .or(Predicates.abilities(PartAbility.STEAM))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
            )
    .build())
    .workableCasingRenderer(
        "minecraft:block/bricks",
        "gtceu:block/multiblock/coke_oven",
    false
    )
})