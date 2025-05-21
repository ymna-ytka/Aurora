ServerEvents.recipes( event => {

    event.recipes.gtceu.assembler('core_destruction')
        .itemInputs(
            "4x minecraft:tnt",
            "4x gtceu:diamond_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:glass", 144)
        )

        .itemOutputs(
            "constructionwand:core_destruction"
        )
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])
        .circuit(1)

})