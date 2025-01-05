ServerEvents.recipes(event=>{

    //Fire casing
    event.shaped("kubejs:fire_casing",
        
        [
            "PPP",
            "PWP",
            "PPP" 
        ],
        
        {
            P:"gtceu:bad_bronze_plate",
            W:"#forge:tools/wrench"  
        }
     
    )
    //

    //Firebricks block
    event.recipes.gtceu.compressor('firebricks_block')
    
        .itemInputs(
            "4x gtceu:firebrick"
        )

        .itemOutputs(
            "gtceu:firebricks"
        )

    .duration(140)    
    //

    //Ferabrass casing
    event.shaped("kubejs:ferabrass_casing",
        
        [
            "PHP",
            "PFP",
            "PWP" 
        ],
        
        {
            P:"gtceu:ferabrass_plate",
            W:"#forge:tools/wrench",
            H:"#forge:tools/hammers",
            F:"gtceu:ferabrass_frame"  
        }
     
    )

    event.recipes.gtceu.assembler('ferabrass_casing')
    
        .itemInputs(
            "6x gtceu:ferabrass_plate",
            "gtceu:ferabrass_frame"
        )

        .itemOutputs(
            "kubejs:ferabrass_casing"
        )

    .duration(140)    
    //

     
})