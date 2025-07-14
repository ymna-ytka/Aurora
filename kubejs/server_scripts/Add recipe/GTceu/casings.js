ServerEvents.recipes(event=>{

    event.shaped("gtceu:industrial_steam_casing", 
        [
            "ABA",
            "BCB",
            "ABA"
        ], 

        {
            A: "gtceu:bronze_screw",
            B: "gtceu:bronze_plate",
            C: "gtceu:bronze_frame"
        }
    )
    
    event.recipes.gtceu.circuit_assembler("assemb_industrial_casing")
        .itemInputs("4x gtceu:bronze_plate")
        .itemInputs("gtceu:bronze_frame")
        .itemOutputs("2x gtceu:industrial_steam_casing")
        .circuit(2)
        .EUt(16)
        .duration(200)

    //Ferabrass casing
    event.shaped("gtac:ferabrass_casing",
        
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
            "gtac:ferabrass_casing"
        )

    .duration(140)    
    //
     
    //Induction casing
    event.recipes.gtceu.assembler('induction_casing')

        .itemInputs(
            "gtac:cold_quartz_frame",
            "2x gtceu:lazurite_plate",
            "2x gtceu:silver_foil"
        )

        .itemOutputs(
            'gtac:induction_casing'
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(2)
    //
    
     
})