ServerEvents.recipes( event=> {

    event.recipes.gtceu.fertilizer_buck('gtceu:fertilizer_buck/basic_liquid_fertilizer')
       
        .itemInputs(
            "3x gtceu:small_ammonium_chloride_dust",
            "gtceu:potassium_sulfate_dust"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 9400),
            Fluid.of("gtceu:phosphoric_acid", 100)     
        )

        .outputFluids(
            Fluid.of('gtceu:basic_liquid_fertilizer', 9300)
        )
        .duration(9000)
        .EUt(GTValues.VH[GTValues.MV])
    
    event.recipes.gtceu.mixer('gtceu:mixer/nether_aura_dust')

        .itemInputs(
            "4x gtceu:netherrack_dust"
        )

        .inputFluids(
            Fluid.of("gtceu:overworld_aura", 288)
        )

        .itemOutputs(
            "2x gtceu:nether_aura_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.electrolyzer('gtceu:electrolyzer/polluted_water')

        .inputFluids(
            Fluid.of("gtceu:polluted_water", 400)
        )

        .outputFluids(
            Fluid.of("gtceu:carbon_dioxide", 50)
        )

        .duration(120)
        .EUt(GTValues.VH[GTValues.MV])
        
})