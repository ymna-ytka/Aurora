ServerEvents.recipes(event=>{


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
    
    event.shaped("gtac:bronze_vat",

        [
            "BBB",
            "BCB",
            "UUU"
        ],

        {
            B:"gtceu:bronze_plate",
            C:"gtceu:firebricks",
            U:"minecraft:bucket"
        }

    )

    event.shaped("gtac:river_digger", 
    
        [
            "ABA",
            "CDC",
            "EBE"
        ], 

        {
            A: "minecraft:iron_shovel",
            B: "gtac:steam_motor",
            C: "gtac:steam_piston",
            D: "gtceu:industrial_steam_casing",
            E: "minecraft:iron_pickaxe"
        }
    )    

})