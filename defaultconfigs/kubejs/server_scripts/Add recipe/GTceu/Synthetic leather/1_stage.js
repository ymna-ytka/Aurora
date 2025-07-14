ServerEvents.recipes( event=>{

    event.recipes.gtceu.chemical_reactor("chemical/sodium_carbonate")

        .itemInputs(
            "gtceu:soda_ash_dust"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 2000)
        )

        .outputFluids(
            Fluid.of("gtceu:sodium_carbonate", 2000)
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

})