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
    .EUt(120)

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