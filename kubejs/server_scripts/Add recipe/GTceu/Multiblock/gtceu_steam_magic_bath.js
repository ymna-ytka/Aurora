ServerEvents.recipes(event => {
 
    //Bronze  
    event.recipes.gtceu.steam_magic_bath('bronze_stable')
    
        .inputFluids(
            Fluid.of("gtceu:steel", 720),
            Fluid.of("gtceu:brass", 432),
            Fluid.of("gtceu:manganese", 144),
            Fluid.of("gtceu:steam", 256000)
        )    

        .itemInputs(
            "gtceu:silicon_dust",
            "gtceu:basic_electronic_circuit"
        )   

        .itemOutputs(
            'kubejs:twilight_gem'
        )

        .duration(1000)    
  
})