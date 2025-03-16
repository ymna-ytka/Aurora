ServerEvents.recipes(event=>{

    event.shaped("gtceu:fire_bath",
        
        [
            "PRP",
            "WCH",
            "SGS" 
        ],
        
        {
            P:"#minecraft:planks",
            R:"gtceu:sponge_metal_ring",
            W:"#forge:tools/wrench",
            C:"kubejs:fire_casing",
            H:"#forge:tools/hammers",
            S:"gtceu:sponge_metal_screw",
            G:"gtceu:sponge_metal_gear"  
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
            R:"gtceu:sponge_metal_ring",
            W:"#forge:tools/wrench",
            C:"kubejs:fire_casing",
            H:"#forge:tools/hammers",
            S:"gtceu:sponge_metal_screw",
            G:"gtceu:sponge_metal_gear"  
        }
     
    )

    event.shaped("gtceu:fire_saw",
        
        [
            "PRP",
            "WCH",
            "SGS" 
        ],
        
        {
            P:"gtceu:sponge_metal_block",
            R:"gtceu:sponge_metal_ring",
            W:"#forge:tools/wrench",
            C:"kubejs:fire_casing",
            H:"#forge:tools/hammers",
            S:"gtceu:sponge_metal_screw",
            G:"gtceu:sponge_metal_gear"  
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
            I:"#gtceu:circuits/lv"  
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
            C:"#gtceu:circuits/lv",
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
            C:"#gtceu:circuits/lv",
            W:"#forge:tools/wrench",
            G:"gtceu:steel_gear",
            H:"#forge:tools/hammers",
            R:"gtceu:ferabrass_frame",
            F:"kubejs:ferabrass_casing"  
        }
     
    )

    event.shaped("gtceu:natural_cleaner",

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

    event.shaped('gtceu:induction_furnace',

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

    event.shaped('gtceu:steam_compressor',

        [
            "CCC",
            "AMA",
            "GCG"
        ],

        {
            C:"gtceu:steam_machine_casing",
            A:"minecraft:anvil",
            M:"gtceu:lp_steam_compressor",
            G:"gtceu:tumbaga_gear"
        }

    )

    event.shaped('gtceu:steam_centrifuge',

        [
            "CCC",
            "AMA",
            "GCG"
        ],

        {
            C:"gtceu:steam_machine_casing",
            A:"gtceu:bronze_gearbox",
            M:"gtceu:lp_steam_mixer",
            G:"gtceu:tumbaga_gear"
        }

    )
        
    event.shaped('gtceu:steam_alloy_smelter',

        [
            "CCC",
            "AMA",
            "GCG"
        ],

        {
            C:"gtceu:steam_machine_casing",
            A:"gtceu:bronze_firebox_casing",
            M:"gtceu:lp_steam_alloy_smelter",
            G:"gtceu:tumbaga_gear"
        }

    )

    event.shaped('gregtech:infuser',

        [
            "OPO",
            "SMS",
            "PTP"
        ],

        {
            O:"minecraft:stone",
            P:"naturesaura:wood_stand",
            S:"twilightforest:naga_scale",
            M:"gtceu:lv_assembler",
            P:"gtceu:stone_plate",
            T:"kubejs:trophy_tablet"
        }

    )
       
    event.shaped('gregtech:primitive_alloy_furnace',

        [
            "CCC",
            "IOI",
            "CCC"
        ],

        {
            C:"minecraft:cobblestone",
            I:"gtceu:sponge_iron_ingot",
            O:"gtceu:sponge_copper_ingot"
        }

    )
        

})