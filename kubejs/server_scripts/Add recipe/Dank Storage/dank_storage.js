ServerEvents.recipes( event=> {

    event.recipes.gtceu.assembler('dock_assemb')
       
        .itemInputs(
            "8x gtceu:black_steel_plate"
        )

        .inputFluids(
            Fluid.of("gtac:black_essence", 144)
        )

        .itemOutputs(
            "dankstorage:dock"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(8)

    event.recipes.gtceu.steam_magic_bath('dank_1')
       
        .itemInputs(
            "8x gtceu:steel_block",
        )

        .inputFluids(
             Fluid.of("gtac:black_essence", 1440)
        )

        .itemOutputs(
            "dankstorage:dank_1"
        )

        .EUt(7)
        .duration(1000)

    event.recipes.gtceu.steam_magic_bath('dank_2')
       
        .itemInputs(
            "8x gtceu:red_alloy_block",
            "dankstorage:dank_1"
        )

        .inputFluids(
             Fluid.of("gtceu:redstone", 1440)
        )        

        .itemOutputs(
            "dankstorage:dank_2"
        )
        .duration(1000)

    event.recipes.gtceu.steam_magic_bath('1_to_2_dank')
       
        .itemInputs(
            "8x gtceu:red_alloy_block",
            "gtceu:steel_plate"
        )

        .inputFluids(
             Fluid.of("gtceu:redstone", 1440)
        )

        .itemOutputs(
            'dankstorage:1_to_2'
        )
        .EUt(7)
        .duration(1000)
        

})