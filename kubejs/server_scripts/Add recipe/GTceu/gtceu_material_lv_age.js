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

})