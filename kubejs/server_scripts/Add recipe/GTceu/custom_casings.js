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
    
    //Ecoferum casing
    event.shaped("kubejs:ecoferum_casing",
        
        [
            "PHP",
            "PFP",
            "PWP" 
        ],
        
        {
            P:"gtceu:ecoferum_plate",
            W:"#forge:tools/wrench",
            H:"#forge:tools/hammers",
            F:"gtceu:ecoferum_frame"  
        }
     
    )


    event.recipes.gtceu.assembler('ecoferum_casing')

        .itemInputs(
            'gtceu:ecoferum_frame',
            '6x gtceu:ecoferum_plate',
        )

        .itemOutputs(
            'kubejs:ecoferum_casing'
        )
        .duration(50)
        .EUt(GTValues.VH[GTValues.LV])
        .circuit(6)   
    //
     
    //Induction casing
    event.recipes.gtceu.assembler('induction_casing')

        .itemInputs(
            "gtceu:cold_quartz_frame",
            "2x gtceu:lazurite_plate",
            "2x gtceu:silver_foil"
        )

        .itemOutputs(
            'kubejs:induction_casing'
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(2)
     
})