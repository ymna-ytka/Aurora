ServerEvents.recipes(event => {
 
    //Coke oven brick   
    event.recipes.gtceu.fire_bath('coke_oven_brick')
    
        .itemInputs(
            '1x gtceu:compressed_coke_clay'
        )

        .inputFluids(
            Fluid.of('minecraft:lava', 150)
        )

        .itemOutputs(
            "1x gtceu:coke_oven_brick"
        )

        .duration(100)
    
    //Bad bronze alternative 
    event.recipes.gtceu.fire_bath('bad_bronze_alternative')
    
        .itemInputs(
            "3x gtceu:copper_dust",
            "gtceu:tin_dust"
    )

        .inputFluids(
            Fluid.of('minecraft:lava', 50)
    )

        .itemOutputs(
            "4x gtceu:bad_bronze_ingot"
    )

        .duration(80)    

  
})

