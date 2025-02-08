ServerEvents.recipes( event=> {

    event.recipes.gtceu.bronze_mixer('salter_water_mixer_bronze')
      
        .itemInputs(
            "gtceu:salt_dust"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 100)
        )

        .outputFluids(
            Fluid.of("kubejs:salter_water", 100)
        )

        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.mixer('salter_water_mixer_bronze')
      
        .itemInputs(
            "gtceu:salt_dust"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 100)
        )

        .outputFluids(
            Fluid.of("kubejs:salter_water", 100)
        )

        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

})