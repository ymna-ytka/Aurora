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
    event.recipes.gtceu.fire_bath('sponge_metal_alternative')
    
        .itemInputs(
            "gtceu:copper_dust",
            "gtceu:tin_dust"
    )

        .inputFluids(
            Fluid.of('minecraft:lava', 50)
    )

        .itemOutputs(
            "2x gtceu:sponge_metal_ingot"
    )

        .duration(80)    

  
})

