ServerEvents.recipes( event=> {

    event.recipes.gtceu.assembler("annealed_coil")

        .itemInputs(
            "8x gtceu:annealed_copper_double_wire",
            "8x gtceu:silver_foil",
        )

        .inputFluids(
            Fluid.of("gtceu:gold", 144)
        )

        .itemOutputs(
            "kubejs:machine_coil_annealed"
        )
        .duration(200)
        .EUt(GTValues.VH[GTValues.LV])

})