ServerEvents.recipes(event=>{

    //Fire casing
    event.shaped("kubejs:fire_casing",
        
        [
            "PPP",
            "PWP",
            "PPP" 
        ],
        
        {
            P:"gtac:sponge_metal_plate",
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
            P:"gtac:ferabrass_plate",
            W:"#forge:tools/wrench",
            H:"#forge:tools/hammers",
            F:"gtac:ferabrass_frame"  
        }
     
    )

    event.recipes.gtceu.assembler('ferabrass_casing')
    
        .itemInputs(
            "6x gtac:ferabrass_plate",
            "gtac:ferabrass_frame"
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
            P:"gtac:ecoferum_plate",
            W:"#forge:tools/wrench",
            H:"#forge:tools/hammers",
            F:"gtac:ecoferum_frame"  
        }
     
    )


    event.recipes.gtceu.assembler('ecoferum_casing')

        .itemInputs(
            'gtac:ecoferum_frame',
            '6x gtac:ecoferum_plate',
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
            "gtac:cold_quartz_frame",
            "2x gtceu:lazurite_plate",
            "2x gtceu:silver_foil"
        )

        .itemOutputs(
            'kubejs:induction_casing'
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(2)
    //
    
    //Coke bricks

    event.shaped("2x gtceu:coke_oven_bricks",

        [
            "BBB",
            "BWB",
            "BBB"
        ],

        {
            B:"gtceu:coke_oven_brick",
            W:"minecraft:water_bucket"
        }

    )
     
})