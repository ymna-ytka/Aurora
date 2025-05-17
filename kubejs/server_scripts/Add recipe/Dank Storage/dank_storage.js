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

    event.recipes.gtceu.steam_magic_bath('dank_1')
       
        .itemInputs(
            "8x gtceu:steel_block",
            "minecraft:coal_block"
        )

        .inputFluids(
             Fluid.of("gtceu:steam", 64000)
        )

        .itemOutputs(
            "dankstorage:dank_1"
        )
        .duration(1000)

    event.recipes.gtceu.steam_magic_bath('dank_2')
       
        .itemInputs(
            "8x gtceu:red_alloy_block",
            "dankstorage:dank_1"
        )

        .inputFluids(
             Fluid.of("gtceu:steam", 64000)
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
             Fluid.of("gtceu:steam", 64000)
        )

        .itemOutputs(
            'dankstorage:1_to_2'
        )
        .duration(1000)
        

})