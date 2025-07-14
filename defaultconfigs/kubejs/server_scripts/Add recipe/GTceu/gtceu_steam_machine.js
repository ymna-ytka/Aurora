ServerEvents.recipes( event =>{

    event.shaped("gtceu:bronze_brick_casing", 
        [
            "ABA",
            "BCB",
            "DDD"
        ], 

        {
            A: "gtceu:bronze_screw",
            B: "gtceu:bronze_plate",
            C: '#forge:tools/hammers',
            D: "gtceu:firebricks"
        }
    )

    event.shaped("gtceu:steel_brick_casing", 
        [
            "ABA",
            "BCB",
            "DDD"
        ], 

        {
            A: "gtceu:wrought_iron_screw",
            B: "gtceu:steel_plate",
            C: '#forge:tools/hammers',
            D: "gtceu:firebricks"
        }
    )    

    event.shaped("gtceu:lp_steam_solid_boiler",

        [
            "PCP",
            "CFC",
            "SHA"
        ],

        {
            P:"gtceu:bronze_small_fluid_pipe",
            C:"gtceu:bronze_normal_fluid_pipe",
            F:"minecraft:furnace",
            H:"gtceu:bronze_brick_casing",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/hammers"
        }

    )

    event.shaped("gtceu:lp_steam_alloy_smelter",

        [
            "PCP",
            "FBF",
            "PMP"
        ],

        {
            P:"gtceu:bronze_small_fluid_pipe",
            C:"gtceu:bronze_small_fluid_pipe",
            F:"minecraft:furnace",
            B:"gtceu:bronze_brick_casing",
            M:"gtac:steam_motor"
        }

    )

    event.shaped("gtceu:lp_steam_macerator",

        [
            "DPD",
            "BRS",
            "IPI"
        ],

        {
            D:"minecraft:diamond",
            P:"gtceu:bronze_small_fluid_pipe",
            B:"gtac:steam_piston",
            S:"gtac:steam_motor",
            R:"gtceu:bronze_brick_casing",
            I:"minecraft:piston"            
        }

    )

    event.shaped("gtceu:lp_steam_furnace",

        [
            "PCP",
            "CBC",
            "PFP"
        ],

        {
            P:"gtceu:bronze_small_fluid_pipe",
            C:"gtceu:bronze_small_fluid_pipe",
            B:"gtceu:bronze_brick_casing",
            F:"minecraft:furnace"
        }

    )

    event.shaped("gtceu:lp_steam_forge_hammer",

        [
            "PFP",
            "CBC",
            "PFP"
        ],

        {
            P:"gtceu:bronze_small_fluid_pipe",
            C:"minecraft:piston",
            B:"gtceu:bronze_brick_casing",
            F:"minecraft:anvil"
        }

    )

    event.shaped("gtceu:lp_steam_mixer",

        [
            "PRM",
            "GCG",
            "WBW"
        ],

        {
            R:"gtceu:copper_rotor",
            G:"minecraft:glass",
            B:"gtceu:bronze_brick_casing",
            C:"gtceu:bronze_small_fluid_pipe",
            W:"gtceu:bronze_normal_fluid_pipe",
            P:"gtac:steam_pump",
            M:"gtac:steam_motor"
        }

    )

    event.shaped("gtceu:hp_steam_solar_boiler",

        [
            "PRP",
            "GGG",
            "WCW"
        ],

        {
            R:"gtceu:ulv_machine_hull",
            G:"gtceu:double_silver_plate",
            C:"gtceu:steel_brick_casing",
            W:"gtceu:steel_small_fluid_pipe",
            P:"kubejs:solar_element"
        }

    )

    event.shaped("gtceu:hp_steam_liquid_boiler",

        [
            "WRW",
            "WGW",
            "WCW"
        ],

        {
            R:"gtceu:ulv_machine_hull",
            G:"minecraft:glass",
            C:"gtceu:steel_brick_casing",
            W:"gtceu:steel_plate"
        }

    )

    event.shaped("gtceu:hp_steam_alloy_smelter",

        [
            "WRW",
            "WCW",
            "WGW"
        ],

        {
            R:"gtceu:ulv_machine_hull",
            G:"gtceu:tin_alloy_small_fluid_pipe",
            C:"gtceu:lp_steam_alloy_smelter",
            W:"gtceu:steel_plate"
        }

    )

    event.shaped("gtceu:steam_fluid_input_hatch",

        [
            " B ",
            "WHA",
            " F "
        ],

        {
            B:"minecraft:bucket",
            W:"#forge:tools/wrench",
            H:"gtceu:bronze_machine_casing",
            A:"#forge:tools/hammers",
            F:"#forge:tools/files"
        }

    )

    event.shaped("gtceu:steam_fluid_output_hatch",

        [
            " F ",
            "WHA",
            " B "
        ],

        {
            B:"minecraft:bucket",
            W:"#forge:tools/wrench",
            H:"gtceu:bronze_machine_casing",
            A:"#forge:tools/hammers",
            F:"#forge:tools/files"
        }

    )

    event.shaped("gtceu:hp_steam_solid_boiler",

        [
            "PCP",
            "CFC",
            "BHB"
        ],

        {
            P:"gtceu:steel_small_fluid_pipe",
            C:"gtceu:steel_normal_fluid_pipe",
            F:"gtceu:steel_brick_casing",
            B:"gtceu:firebricks",
            H:"#forge:tools/hammers"
        }

    )    

})