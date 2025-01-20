ServerEvents.recipes(event=>{

    event.recipes.gtceu.mixer('silicon_carbide_dust_mixer')

        .itemInputs(
            "5x gtceu:silicon_dust",
            "3x gtceu:carbon_dust"
        )

        .itemOutputs(
            "8x gtceu:carbide_silicon_dust"
        )

        .circuit(8)
        .duration(160)
        .EUt(32)

    event.recipes.gtceu.chemical_bath('silicon_carbide_ingot_chem_bath')

        .itemInputs(
            "gtceu:hot_carbide_silicon_ingot"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 100)
        )

        .itemOutputs(
            "gtceu:carbide_silicon_ingot"
        )

        .duration(400)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.chemical_bath('silicon_carbide_ingot_chem_bath_water')

        .itemInputs(
            "gtceu:hot_carbide_silicon_ingot"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 100)
        )

        .itemOutputs(
            "gtceu:carbide_silicon_ingot"
        )

        .duration(250)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.mixer('ecoferum_dust_mixer')
          
        .itemInputs(
            "6x gtceu:iron_dust",
            "2x gtceu:nickel_dust",
            "gtceu:copper_dust",
            "gtceu:rubber_dust"
        )

        .itemOutputs(
            "10x gtceu:ecoferum_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(10)

})