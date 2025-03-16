ServerEvents.recipes(event => {
 
    // 
    event.recipes.gtceu.steam_magic_bath('twilight_gem')
    
        .inputFluids(
            Fluid.of("gtceu:steam", 64000)
        )    

        .itemInputs(
            "gtceu:wrought_iron_dust",
            "#gtceu:circuits/lv"
        )   

        .itemOutputs(
            'kubejs:twilight_gem'
        )

        .duration(1000)
    //
    
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