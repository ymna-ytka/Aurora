ServerEvents.recipes(event=>{

    event.recipes.gtceu.cutter('diamond_block_to_plate_lubricant')

    .itemInputs(
        "minecraft:diamond_block"
    )

    .inputFluids(
        Fluid.of("gtceu:lubricant", 2)
    )
    
    .itemOutputs(
        "9x gtceu:diamond_plate"
    )

    .duration(6000)
    .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.cutter('diamond_block_to_plate_distilled_water')

    .itemInputs(
        "minecraft:diamond_block"
    )

    .inputFluids(
        Fluid.of("gtceu:distilled_water", 6)
    )
    
    .itemOutputs(
        "9x gtceu:diamond_plate"
    )

    .duration(7500)
    .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.cutter('diamond_block_to_plate_water')

    .itemInputs(
        "minecraft:diamond_block"
    )

    .inputFluids(
        Fluid.of("minecraft:water", 9)
    )
    
    .itemOutputs(
        "9x gtceu:diamond_plate"
    )

    .duration(8000)
    .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.steam_coke_oven('coke_small')
    
        .itemInputs(
            "minecraft:coal"
        )

        .inputFluids(
            Fluid.of("gtceu:steam", 4000)
        )

        .outputFluids(
            Fluid.of("gtceu:creosote", 500)
        )

        .itemOutputs(
            "gtceu:coke_gem"
        )

        .duration(450)

    event.recipes.gtac.steam_coke_oven('coke_block')
    
        .itemInputs(
            "minecraft:coal_block"
        )

        .inputFluids(
            Fluid.of("gtceu:steam", 36000)
        )

        .outputFluids(
            Fluid.of("gtceu:creosote", 4500)
        )

        .itemOutputs(
            "gtceu:coke_block"
        )

        .duration(4050)
    
})