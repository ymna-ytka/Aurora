ServerEvents.recipes( event=> {

    event.recipes.gtceu.mixer('mag_map_focus')

        .itemInputs(
            "twilightforest:raven_feather",
            "8x twilightforest:torchberries"
        )

        .inputFluids(
            Fluid.of("gtceu:glowstone", 1152)
        )

        .itemOutputs(
            "twilightforest:magic_map_focus"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('magic_map')

        .itemInputs(
            "twilightforest:magic_map_focus",
            "8x minecraft:paper",
            "4x twilightforest:transformation_powder"
        )

        .inputFluids(
            Fluid.of("gtceu:glue", 432)
        )

        .itemOutputs(
            "twilightforest:magic_map"
        )
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(4)

    event.recipes.gtceu.mixer('transmutate_dust')
    
        .itemInputs(
            "twilightforest:naga_scale",
            "twilightforest:torchberries",
            "twilightforest:ironwood_ingot"
        )

        .itemOutputs(
            "64x twilightforest:transformation_powder"
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(4)


})