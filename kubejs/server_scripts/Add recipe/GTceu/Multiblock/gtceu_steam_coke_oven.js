ServerEvents.recipes(event => {
 
    //Coke   
    event.recipes.gtceu.steam_coke_oven('coke_small')
    
        .itemInputs(
            "minecraft:coal"
        )

        .inputFluids(
            Fluid.of("gtceu:steam", 4000)
        )

        .outputFluids(
            Fluid.of("gtceu:creosote", 500)
        )

        .itemOutputs(
            "gtceu:coke_gem"
        )

        .duration(450)

        event.recipes.gtceu.steam_coke_oven('coke_block')
    
        .itemInputs(
            "minecraft:coal_block"
        )

        .inputFluids(
            Fluid.of("gtceu:steam", 36000)
        )

        .outputFluids(
            Fluid.of("gtceu:creosote", 4500)
        )

        .itemOutputs(
            "gtceu:coke_block"
        )

        .duration(4050)

 
    //Charcoal
    event.recipes.gtceu.steam_coke_oven('charcoal')
    
        .itemInputs(
            "#minecraft:logs",
    )

    .inputFluids(
        Fluid.of("gtceu:steam", 2500)
    )

        .outputFluids(
            Fluid.of("gtceu:creosote", 500)
    )

        .itemOutputs(
            "minecraft:charcoal"
    )

        .duration(450)

  
})

