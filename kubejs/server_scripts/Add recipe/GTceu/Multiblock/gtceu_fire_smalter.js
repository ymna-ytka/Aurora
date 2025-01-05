ServerEvents.recipes(event => {
 
    //Bronze  
    event.recipes.gtceu.fire_smalter('bronze_stable')
    
        .itemInputs(
            "3x gtceu:copper_dust",
            "gtceu:tin_dust"
    )

        .itemOutputs(
            "4x gtceu:bronze_ingot"
    )

        .duration(240)    
  
})