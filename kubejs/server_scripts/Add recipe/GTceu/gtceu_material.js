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

})