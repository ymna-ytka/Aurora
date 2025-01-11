ServerEvents.recipes(event=>{

    event.shaped("gtceu:fire_bath",
        
        [
            "PRP",
            "WCH",
            "SGS" 
        ],
        
        {
            P:"#minecraft:planks",
            R:"gtceu:bad_bronze_ring",
            W:"#forge:tools/wrench",
            C:"kubejs:fire_casing",
            H:"#forge:tools/hammers",
            S:"gtceu:bad_bronze_screw",
            G:"gtceu:bad_bronze_gear"  
        }
     
    )

    event.shaped("gtceu:fire_smalter",
        
        [
            "PRP",
            "WCH",
            "SGS" 
        ],
        
        {
            P:"gtceu:coke_oven_bricks",
            R:"gtceu:bad_bronze_ring",
            W:"#forge:tools/wrench",
            C:"kubejs:fire_casing",
            H:"#forge:tools/hammers",
            S:"gtceu:bad_bronze_screw",
            G:"gtceu:bad_bronze_gear"  
        }
     
    )

    event.shaped("gtceu:fire_saw",
        
        [
            "PRP",
            "WCH",
            "SGS" 
        ],
        
        {
            P:"gtceu:bad_bronze_block",
            R:"gtceu:bad_bronze_ring",
            W:"#forge:tools/wrench",
            C:"kubejs:fire_casing",
            H:"#forge:tools/hammers",
            S:"gtceu:bad_bronze_screw",
            G:"gtceu:bad_bronze_gear"  
        }
     
    )

    event.shaped("gtceu:steam_coke_oven",
        
        [
            "CSC",
            "SWS",
            "CIC" 
        ],
        
        {
            W:"#forge:tools/wrench",
            C:"gtceu:coke_oven_bricks",
            S:"gtceu:steel_plate",
            I:"gtceu:basic_electronic_circuit"  
        }
     
    )

    event.shaped("gtceu:steam_blast_furnace",
        
        [
            "HRS",
            "PFC",
            "WRS" 
        ],
        
        {
            P:"gtceu:steel_plate",
            R:"gtceu:steel_rod",
            W:"#forge:tools/wrench",
            C:"gtceu:basic_electronic_circuit",
            H:"#forge:tools/hammers",
            S:"gtceu:steel_screw",
            F:"gtceu:firebricks"  
        }
     
    )

    event.shaped("gtceu:steam_magic_bath",
        
        [
            "RGR",
            "HFW",
            "RCR" 
        ],
        
        {
            C:"gtceu:basic_electronic_circuit",
            W:"#forge:tools/wrench",
            G:"gtceu:steel_gear",
            H:"#forge:tools/hammers",
            R:"gtceu:ferabrass_frame",
            F:"kubejs:ferabrass_casing"  
        }
     
    )



})