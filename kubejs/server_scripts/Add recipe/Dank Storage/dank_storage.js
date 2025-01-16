ServerEvents.recipes( event=> {

    event.recipes.gtceu.assembler('dock_assemb')
       
        .itemInputs(
            "8x gtceu:black_steel_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:tin_alloy", 144)
        )

        .itemOutputs(
            "dankstorage:dock"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(8)


})