ServerEvents.recipes(event=>{

    event.shaped("gtac:steam_coke_oven",
        
        [
            "CSC",
            "SWS",
            "CIC" 
        ],
        
        {
            W:"#forge:tools/wrench",
            C:"gtceu:coke_oven_bricks",
            S:"gtceu:steel_plate",
            I:"#gtceu:circuits/lv"  
        }
     
    )

    event.shaped("gtac:steam_blast_furnace",
        
        [
            "HRS",
            "PFC",
            "WRS" 
        ],
        
        {
            P:"gtceu:steel_plate",
            R:"gtceu:steel_rod",
            W:"#forge:tools/wrench",
            C:"#gtceu:circuits/lv",
            H:"#forge:tools/hammers",
            S:"gtceu:steel_screw",
            F:"gtceu:firebricks"  
        }
     
    )

    event.shaped("gtac:steam_magic_bath",
        
        [
            "RGR",
            "HFW",
            "RCR" 
        ],
        
        {
            C:"#gtceu:circuits/lv",
            W:"#forge:tools/wrench",
            G:"gtceu:steel_gear",
            H:"#forge:tools/hammers",
            R:"gtac:ferabrass_frame",
            F:"kubejs:ferabrass_casing"  
        }
     
    )

    event.shaped("gtac:natural_cleaner",

        [
            "DDD",
            "BCB",
            "ABA"
        ],

        {
            D:"gtceu:lv_distillery",
            B:"#gtceu:circuits/lv",
            C:"kubejs:ecoferum_casing", 
            A:"gtceu:cobalt_single_cable"
        }

    )

    event.shaped('gtac:induction_furnace',

        [
            "BCB",
            "OAO",
            "CSC"
        ],

        {
            B:"#gtceu:circuits/lv",
            C:"gtceu:tin_single_cable",
            O:"kubejs:machine_coil_annealed",
            A:"gtceu:lv_alloy_smelter",
            S:"kubejs:induction_casing"
        }

    )

    event.shaped('gtac:steam_compressor',

        [
            "CCC",
            "AMA",
            "GCG"
        ],

        {
            C:"gtceu:steam_machine_casing",
            A:"minecraft:anvil",
            M:"gtceu:lp_steam_compressor",
            G:"gtac:tumbaga_gear"
        }

    )
        
    event.shaped('gtac:steam_alloy_smelter',

        [
            "CCC",
            "AMA",
            "GCG"
        ],

        {
            C:"gtceu:steam_machine_casing",
            A:"gtceu:bronze_firebox_casing",
            M:"gtceu:lp_steam_alloy_smelter",
            G:"gtac:tumbaga_gear"
        }

    )
        
    event.shaped('gtac:fertilizer_buck',

        [
            "MPM",
            "PHP",
            "IRI"
        ],

        {
            P:"gtceu:polybenzimidazole_large_fluid_pipe",
            R:"gtceu:stainless_steel_rotor",
            M:"gtceu:mv_electric_motor",
            H:"gtceu:inert_machine_casing",
            I:"#gtceu:circuits/mv"
        }

    )

    event.shaped('gtceu:tar_smokehouse',

        [
            "LLL",
            "PHP",
            "RPR"
        ],

        {
            P:"gtceu:clay_normal_fluid_pipe",
            R:"gtceu:bronze_firebox_casing",
            H:"minecraft:bricks",
            L:"gtceu:clay_plate"
        }

    )
    
})